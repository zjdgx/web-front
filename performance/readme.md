# 性能相关

[雅虎前端性能35条黄金定律](http://www.cnblogs.com/lei2007/archive/2013/08/16/3262897.html)


| 页面内容 | 服务器 | cookie | 图片 | CSS | 移动客户端 | JavaScript |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| 减少http请求数 | 使用CDN | 减少cookie大小| 优化图像 |将样式表置顶 | 保持单个内容小于25KB | 将脚本置底 |
| 减少DNS查询数 | 添加Expires或Cache-Control报文头 | 页面内容使用无cookie域名 | 优化CSS Sprite | 避免CSS表达式 | 打包组建复合文档 | 使用外部JavaScript和CSS |
| 避免页面跳转 | Gzip压缩传输文件 | | 不要在HTML中缩放图片 | 用<link>代替@import | | 精简JavaScript和CSS |
| 缓存Ajax | 配置Etags | | 使用小且可缓存的favicon.ico | 避免使用filters | | 去除重复脚本 |
| 延迟加载 | 尽早flush输出 | | | | | 减少DOM访问 |
| 提前加载 | 使用GET ajax请求 | | | | | 使用智能事件代理 |
| 减少DOM元素数量 | 避免空的图片src | | | | | |
| 根据域名划分内容 | | | | | | |
| 减少iframe数量 | | | | | | |
| 避免404 | | | | | | |

## 页面相关

- [reflow和repaint](http://www.cnblogs.com/jiajiaobj/archive/2012/06/11/2545291.html)

## 工具

- [ShowSlow+Yslow环境搭建](http://www.cnblogs.com/fnng/archive/2011/09/24/2186708.html)