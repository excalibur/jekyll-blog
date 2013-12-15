---
layout: post
title: "bootstrap v3 学习——1"
description: "bootstrap v3 学习"
category: "bootstrap"
tags: ["前端","bootstrap"]
---
{% include JB/setup %}
### 背景
bootstrap升级到了v3，为了熟悉其改变，深入其设计故而学习。
<!--more-->
### 使用git clone下bootstrap

	git clone https://github.com/twbs/bootstrap.git


### bootstrap 结构分析
bootstrap 3 开发环境不同于2，但是差不太多。首先列出几项比较重要的改变：

 - mobile first : 优先关注移动设备运用，可以更方便你开发支持移动设备的网站。
 - [jekyll](http://jekyllrb.com/) :用来管理bootstrap的文档。
 - [separate theme]() :主题分离，可以更方便定制自己的主题。
 - [glyphicons](http://getbootstrap.com/components/#glyphicons) : 字体式图片。
 - [grunt](http://gruntjs.com/): 基于grunt来管理bootstrap。
 - [bower](http://bower.io/) : 用bower管理前端依赖。

沿用2中相关的一些东西：

 - [less](http://www.lesscss.net/article/home.html) : 一种动态样式语言，属于CSS预处理语言的一。
 - [normalize](https://github.com/necolas/normalize.css/) ：让不同的浏览器在渲染网页元素的时候形式更统一。

### 相关技术解释

 - mobile first : mobile first这一词的推崇出自[Luke Wroblewski](http://www.lukew.com/),
在其一博文([Mobile First](http://www.lukew.com/presos/preso.asp?26))中深入分析了移动优先的理由。
mobile first的设计不止是户体验的设计，它更趋近于业务的设计。
 - jekyll : 是一个静态站点生成器，它会根据网页源码生成静态文件, 而且Github支持这样的文件。
 - grunt : 是一个基于nodejs的自动化构建工具，它现在有很多插件，可以很方便的管理前台开发。
 - bower ：是一个前端依赖管理，有点类似java中的maven，不过比其简单很多。
 - separate theme :  主题分离，主题分离指设计的时候，可以把基本样式与特殊样式分开，到时候自己可以根据样式文件自己定义样式(后面我们会讨论)。

 ### 编译其源码
 其源码的编译会依赖于grunt环境，而grunt又是nodejs之上，简单说一下环境的安装:
 1.安装nodejs。
 2.安装grunt，在nodejs安装好之后，且path配置好，可以直接使用`npm install -g grunt-cli`来安装。
 3.安装bower`npm install -g bower`。
 4.下载grunt的npm依赖`npm install`。
 5.下载jquery依赖`bower install`。
 6.





