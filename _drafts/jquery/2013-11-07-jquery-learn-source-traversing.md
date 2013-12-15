---
layout: post
title: "jQuery源码学习(9)——traversing模块"
description: "jQuery源码学习，学构建结构，学习源码"
author :
  name : excalibur
  url : mailto:lzy7750015@qq.com
category: "JavaScript"
tags: ["jQuery","JavaScript"]
---
{% include JB/setup %}

traversing模块主要是对DOM文档的操作，traversing模块模块中有很多方便迭代、查找和过滤等等操作。
traversing模块采用DOM常规操作来实现这些方法。为了更好的学习这个模块的源码你得有相关的DOM基础知识。
如果你不清楚，推荐观看本来博客{% post_url 2013-11-08-javascript-dom %}

