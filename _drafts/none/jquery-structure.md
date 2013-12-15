---
layout: post
title: "jquery 源码学习(1)"
description: "jquery 源码学习"
category: "jquery"
tags: ["jquery","javascript"]
---
### 说明
javascript 一般使用都是开源的库，从来没有想过自己原生支持。一是原生兼容太难做，而是自己写不了
那么好的代码。为了深入学习javascript，学习常用库的源码。
<!--more-->
### 基于源码构建jquery
根据官方源码[https://github.com/jquery/jquery](https://github.com/jquery/jquery)构建jquery，
jquery是基于grunt工具管理，曾经学习过grunt的上手非常容易。  

项目结构如下：
{% highlight coffeescript %}
 jquery/
      ├── build/    构建后文件目录
      ├── speed/    测试资源文件
      ├── src/      源码目录
      └── test/     测试目录
{% endhighlight %}

运行`npm install && bower install`，下载 grunt tasks依赖和 bower 资源。
jquery基于requirejs分开模块开发，非常的方便。



