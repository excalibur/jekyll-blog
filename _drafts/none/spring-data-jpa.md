---
layout: post
title: "Spring data jpa 深入学习"
description: "Spring data jpa 深入学习"
category: "Spring data"
tags: ["JAVA","服务器端","Spring"]
---
### 背景
其实spring data jpa很久之前就开始使用了，不过一直都是些基础的使用。为了自己现在写的这个项目
也为了更加熟悉深入spring data jpa的相关东西，所以学习了它。同时为了熟悉spring data jpa采用的技术，探寻它的实现方式，所以会基于源码学习。
如果你不深入学习源码，只是想熟悉spring data jpa的使用，那么你可以跳过'构建项目结构'。
<!--more-->
### 使用git clone下spring data jpa
我学习的时候最新的是master分支上的1.5.0.BUILD-SNAPSHOT版本。

### 构建项目结构
clone 下项目后，你会发现spring data jpa是基于maven来管理依赖的。我把其导入IDEA，发现spring data jpa 还依赖于一个项目spring-data-build，我再次clone 下spring-data-build这个项目 然后放在和 spring-data-jpa同一层的地方。IDEA提示少org.eclipse.persistence.jpa jar包
我进入中央仓库查询了一下发现org.eclipse.persistence.jpa 没有2.4.0 版本的 所以我更改了其版本为2.4.2。到此结构基本完成。

### 分析项目结构





