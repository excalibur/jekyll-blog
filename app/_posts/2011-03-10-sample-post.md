---
layout: post
title: 简单模板
description: "一个简单的模板主题布局包括：标题，段落，引用文字，表格，代码块，等等。"
modified: 2013-11-20
category: template
tags: [写作模板]
comments: true 
image:
  feature: excalibur-image-08.jpg
  credit: Google Puls
  creditlink: http://mademistakes.com 
---

这个是一个非常简单的写作主题模板。主要是为了展示段落之间的布局关系。如果你想知道是怎么排版的，请看源文件。

# 标题 1

## 标题 2

### 标题 3

#### 标题 4

##### 标题 5

###### 标题 6
<!--more-->
### 内容主体



本书是JavaScript 超级畅销书的最新版。ECMAScript 5 和HTML5 在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript 增添了很多适应未来发展的新特性。

![javascript 高级程序设计]({{ site.url }}/images/blog/javascript.jpg)
{: .pull-left}

本书这一版除增加5 章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript 语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax 与Comet 服务器端通信，HTML5 表单、媒体、Canvas（包括WebGL）及Web Workers、地理定位、跨文档传递消息、客户端存储（包括IndexedDB）等新API，还介绍了离线应用和与维护、性能、部署相关的最佳开发实践。本书附录展望了未来的API 和ECMAScript Harmony 规范。

JavaScript是基于Java的一种非常松散的面向对象语言，也是Web开发中极受欢迎的一门语言。JavaScript，尽管它的语法和编程风格与Java都很相似，但它却不是Java的“轻量级”版本。JavaScript是一种全新的动态语言，它植根于全球数亿网民都在使用的Web浏览器之中，致力于增强网站和Web应用程序的交互性。
在《JavaScript高级程序设计(第3版)》中，将对JavaScript追根溯源，从它在最早的Netscape浏览器中诞生谈起，一直谈到今天的它对DOM和AjaX的强大支持。读者将通过《JavaScript高级程序设计(第3版)》掌握如何运用和扩展这门语言，从而更好地满足自己的需求，以及如何实现客户端与服务器的无缝通信，而又不必求助于Java或隐藏的网页框架（frame元素）。一言以蔽之，《JavaScript高级程序设计(第3版)》将教会你在面对各种常见的Web开发问题时，如何拿出自己的JavaScript解决方案。

HTML 、JavaScript和<abbr title="层叠样式表">CSS</abbr>都是我们的工具。如何组织使用好它们，才是我们所追求的。 

### 引用文字

> 如果你像我一样，想学习或者熟练掌握今天最热门的Web开发技术，《JavaScript高级程序设计》是一个绝佳的起点，适合在所有Ajax图书之前阅读。

## 列表

### 有序列表

1. 列表1
   1. 子列表1
   2. 子列表2
   3. 子列表3
2. 列表2

### 无序列表

* 列表1
* 列表2
* 列表3

## 表格

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3
{: rules="groups"}

## 代码高亮

通过Pygments来做语法高亮

{% highlight css %}
#container {
  float: left;
  margin: 0 -240px 0 0;
  width: 100%;
}
{% endhighlight %}

没用使用Pygments高亮的例子：

    <div id="awesome">
        <p>This is great isn't it?</p>
    </div>

## 按钮效果

按钮效果可以完全基本bootstrap的写法产生。
<a href="#" class="btn btn-primary">这是一个按钮</a>
