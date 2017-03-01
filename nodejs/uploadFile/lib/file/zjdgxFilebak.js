var fs = require('fs'),
	path = require('path'),
	_ = require('underscore'),
	config = require('../../config'),
	formidable = require('formidable'),
	mongo = require('../util/db_mongodb'),
	fileUtil = require('../util/fileUtil'),
	targetPath = config.server.fileUploadPath;

exports.uploadFile = function (req, res) {
	formidable.UPLOAD_DIR = 'uploadFiles/tmp';
	var form = new formidable.IncomingForm();

	//after parse: all the files to upload have been writed on disk.
	//  see files-->xxxFile--->path

	form.parse(req, function (err, fields, files) {
		if (err) {
			res.render('uploadResult.jade', {
				result: -1,
				msg: 'file upload failed...'
			});
		} else {
			var succeds = 0, fileNumber = _.size(files);

			_.each(files, function (value, key) {
				var name = value.name,
					is = fs.createReadStream(value.path),
					os = null;


				os = fs.createWriteStream(targetPath);

				is.pipe(os);
				is.on('end', function () {
					// delete the temp file.
					fs.unlinkSync(value.path);

					mongo.insert('uploadFiles', {
						uploadTime: new Date(),
						fileName: name,
						path: targetPath
					}, null, function (err) {
						if (err) {
							res.json({result: -1, msg: err});
						} else {
							succeds += 1;
						}
					});

					if (succeds == fileNumber) {
						mongo.find('uploadFiles', {}, {}, function (err, data) {
							if (err) {
								res.json({result: -1, msg: "�ϴ��ɹ�, ��ѯʧ��."});
							} else {
								res.json({result: 1, msg: "�ϴ��ɹ�...", files: data});
							}
						});
					}
				});
			});
		}
	});
};

exports.filelist = function (req, res) {
	mongo.find('uploadFiles', {}, {}, function (err, data) {
		if (err) {
			res.json({result: -1, msg: "��ѯʧ��."});
		} else {
			res.json({result: 1, files: data});
		}
	});
};

exports.zjdgxUploadFile = function(req, res) {
	// ����ļ�����ʱ·��
	var tmp_path = req.files.file.path;
	// ָ���ļ��ϴ����Ŀ¼ - ʾ��Ϊ"images"Ŀ¼��
	var target_path = 'uploadFiles/' + req.files.file.name;
	// �ƶ��ļ�
	fs.rename(tmp_path, target_path, function(err) {
		if (err) throw err;
		// ɾ����ʱ�ļ����ļ�,
		fs.unlink(tmp_path, function() {
			if (err) throw err;
			res.send('File uploaded to: ' + target_path + ' - ' + req.files.file.size + ' bytes');
		});
	});
}