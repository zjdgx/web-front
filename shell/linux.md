# Linux

## (2017/03/02)批量移动mp3文件

```
find /path/to/Music -type f -name "*.mp3" |while read line;
do
  mv "$line" "/target/path"
done
```

## (2017/02/28)[linux时间同步](http://www.jb51.net/LINUXjishu/73979.html)

```
ntpdate time.nist.gov;
rm -rf /etc/localtime;
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```