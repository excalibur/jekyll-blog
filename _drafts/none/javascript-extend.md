---
layout: post
title: "JavaScript——对象继承"
description: "学习JavaScript多种对象继承方式"
category: "JavaScript"
tags: ["JavaScript"]
---
{% include JB/setup %}

JavaScript使用中我们最经常讨论有关面向对象编程的继承。
许多OO语言支持两种类型的继承：接口继承和实现继承。接口继承在ECMAScript是不可能的。
实现继承继承是ECMAScript支持的唯一类型，这主要是通过使用原型链实现。
<!--more-->

### 原型链
