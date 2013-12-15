---
layout: post
title: 带图片的文章
description: "带图片的文章例子。"
category: template
tags: [写作模板]
comments: true  
---

这是一些带图片文章的例子，它可以让你知道可以产生什么效果。如果你想响应式的显示2张或者3张图片用`figure`标签中的`class`来指定。默认不指定数组。

## 适用bootstrap写法呈现图片 (图片或者视频的时候使用)
<!--more-->
### 1张情况  自适应

<img src="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg" class="img-responsive" alt="Responsive image">

{% highlight html %}
<img src="..." class="img-responsive" alt="Responsive image">
{% endhighlight %}

### 2张情况

适用bootstrap的网格

{% highlight html %}
<div class="row">
        <div class="col-sm-6">
          <a href="#" class="thumbnail">
            <img src="...">
          </a>
        </div>
        <div class="col-sm-6">
          <a href="#" class="thumbnail">
            <img src="...">
          </a>
        </div>
</div>
{% endhighlight %}

效果如下

<div class="row">
        <div class="col-sm-6">
          <a href="#" class="thumbnail">
            <img data-src="holder.js/100%x180" alt="100%x180" style="height: 180px; width: 100%; display: block;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAChCAYAAADUdR16AAAEBklEQVR4Xu3YQU4iABQD0HHlxTy2Z3LvaiaaaAgREJ02hL5ZOmD57QsQH15eXv7+8U8DwQYeIAu261e/NwAZCPEGIItXLAAyBuINQBavWABkDMQbgCxesQDIGIg3AFm8YgGQMRBvALJ4xQIgYyDeAGTxigVAxkC8AcjiFQuAjIF4A5DFKxYAGQPxBiCLVywAMgbiDUAWr1gAZAzEG4AsXrEAyBiINwBZvGIBkDEQbwCyeMUCIGMg3gBk8YoFQMZAvAHI4hULgIyBeAOQxSsWABkD8QYgi1csADIG4g1AFq9YAGQMxBuALF6xAMgYiDcAWbxiAZAxEG8AsnjFAiBjIN4AZPGKBUDGQLwByOIVC4CMgXgDkMUrFgAZA/EGIItXLAAyBuINQBavWABkDMQbgCxesQDIGIg3AFm8YgGQMRBvALJ4xQIgYyDeAGTxigVAxkC8AcjiFQuAjIF4A5DFKxYAGQPxBiCLVywAMgbiDUAWr1gAZAzEG4AsXrEAyBiINwBZvGIBkDEQbwCyeMUCIGMg3sDdInt+fn4v7+np6bPEj58dt/rVYw5/9p0Vvsp7e95x5rnXc23md17XLTzmLpEdDnsK0CWE1wz+nbxDcG+/+zj/FNJbQPLb13CXyI4H/aqkS+881yA7lXcOEmS/pXsDzz/3znDt/308/vHx8c/r6+vndd/5mD31cQnZDSD57Uu4FtJH3rl3uENkx+905z5+Px57+BjIfrvwDTz/fyO79BEM2enRJ7+T/QTg23O8k/3s3eMukZ37s8G5d6RL359OfSf76Z8pLr3On016e8+6S2S3V/P2K4Jse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1/wCW2jE4XhEE1QAAAABJRU5ErkJggg==">
          </a>
        </div>
        <div class="col-sm-6">
          <a href="#" class="thumbnail">
            <img data-src="holder.js/100%x180" alt="100%x180" style="height: 180px; width: 100%; display: block;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAChCAYAAADUdR16AAAEBklEQVR4Xu3YQU4iABQD0HHlxTy2Z3LvaiaaaAgREJ02hL5ZOmD57QsQH15eXv7+8U8DwQYeIAu261e/NwAZCPEGIItXLAAyBuINQBavWABkDMQbgCxesQDIGIg3AFm8YgGQMRBvALJ4xQIgYyDeAGTxigVAxkC8AcjiFQuAjIF4A5DFKxYAGQPxBiCLVywAMgbiDUAWr1gAZAzEG4AsXrEAyBiINwBZvGIBkDEQbwCyeMUCIGMg3gBk8YoFQMZAvAHI4hULgIyBeAOQxSsWABkD8QYgi1csADIG4g1AFq9YAGQMxBuALF6xAMgYiDcAWbxiAZAxEG8AsnjFAiBjIN4AZPGKBUDGQLwByOIVC4CMgXgDkMUrFgAZA/EGIItXLAAyBuINQBavWABkDMQbgCxesQDIGIg3AFm8YgGQMRBvALJ4xQIgYyDeAGTxigVAxkC8AcjiFQuAjIF4A5DFKxYAGQPxBiCLVywAMgbiDUAWr1gAZAzEG4AsXrEAyBiINwBZvGIBkDEQbwCyeMUCIGMg3sDdInt+fn4v7+np6bPEj58dt/rVYw5/9p0Vvsp7e95x5rnXc23md17XLTzmLpEdDnsK0CWE1wz+nbxDcG+/+zj/FNJbQPLb13CXyI4H/aqkS+881yA7lXcOEmS/pXsDzz/3znDt/308/vHx8c/r6+vndd/5mD31cQnZDSD57Uu4FtJH3rl3uENkx+905z5+Px57+BjIfrvwDTz/fyO79BEM2enRJ7+T/QTg23O8k/3s3eMukZ37s8G5d6RL359OfSf76Z8pLr3On016e8+6S2S3V/P2K4Jse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1/wCW2jE4XhEE1QAAAABJRU5ErkJggg==">
          </a>
        </div>
</div>



### 3张情况


{% highlight html %}
<div class="row">
        <div class="col-sm-4">
          <a href="#" class="thumbnail">
            <img src="...">
          </a>
        </div>
        <div class="col-sm-4">
          <a href="#" class="thumbnail">
            <img src="...">
          </a>
        </div>
        <div class="col-sm-4">
          <a href="#" class="thumbnail">
            <img src="...">
          </a>
        </div>
</div>
{% endhighlight %}

效果如下

<div class="row">
        <div class="col-sm-4">
          <a href="#" class="thumbnail">
            <img data-src="holder.js/100%x180" alt="100%x180" style="height: 180px; width: 100%; display: block;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAChCAYAAADUdR16AAAEBklEQVR4Xu3YQU4iABQD0HHlxTy2Z3LvaiaaaAgREJ02hL5ZOmD57QsQH15eXv7+8U8DwQYeIAu261e/NwAZCPEGIItXLAAyBuINQBavWABkDMQbgCxesQDIGIg3AFm8YgGQMRBvALJ4xQIgYyDeAGTxigVAxkC8AcjiFQuAjIF4A5DFKxYAGQPxBiCLVywAMgbiDUAWr1gAZAzEG4AsXrEAyBiINwBZvGIBkDEQbwCyeMUCIGMg3gBk8YoFQMZAvAHI4hULgIyBeAOQxSsWABkD8QYgi1csADIG4g1AFq9YAGQMxBuALF6xAMgYiDcAWbxiAZAxEG8AsnjFAiBjIN4AZPGKBUDGQLwByOIVC4CMgXgDkMUrFgAZA/EGIItXLAAyBuINQBavWABkDMQbgCxesQDIGIg3AFm8YgGQMRBvALJ4xQIgYyDeAGTxigVAxkC8AcjiFQuAjIF4A5DFKxYAGQPxBiCLVywAMgbiDUAWr1gAZAzEG4AsXrEAyBiINwBZvGIBkDEQbwCyeMUCIGMg3sDdInt+fn4v7+np6bPEj58dt/rVYw5/9p0Vvsp7e95x5rnXc23md17XLTzmLpEdDnsK0CWE1wz+nbxDcG+/+zj/FNJbQPLb13CXyI4H/aqkS+881yA7lXcOEmS/pXsDzz/3znDt/308/vHx8c/r6+vndd/5mD31cQnZDSD57Uu4FtJH3rl3uENkx+905z5+Px57+BjIfrvwDTz/fyO79BEM2enRJ7+T/QTg23O8k/3s3eMukZ37s8G5d6RL359OfSf76Z8pLr3On016e8+6S2S3V/P2K4Jse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1/wCW2jE4XhEE1QAAAABJRU5ErkJggg==">
          </a>
        </div>
        <div class="col-sm-4">
          <a href="#" class="thumbnail">
            <img data-src="holder.js/100%x180" alt="100%x180" style="height: 180px; width: 100%; display: block;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAChCAYAAADUdR16AAAEBklEQVR4Xu3YQU4iABQD0HHlxTy2Z3LvaiaaaAgREJ02hL5ZOmD57QsQH15eXv7+8U8DwQYeIAu261e/NwAZCPEGIItXLAAyBuINQBavWABkDMQbgCxesQDIGIg3AFm8YgGQMRBvALJ4xQIgYyDeAGTxigVAxkC8AcjiFQuAjIF4A5DFKxYAGQPxBiCLVywAMgbiDUAWr1gAZAzEG4AsXrEAyBiINwBZvGIBkDEQbwCyeMUCIGMg3gBk8YoFQMZAvAHI4hULgIyBeAOQxSsWABkD8QYgi1csADIG4g1AFq9YAGQMxBuALF6xAMgYiDcAWbxiAZAxEG8AsnjFAiBjIN4AZPGKBUDGQLwByOIVC4CMgXgDkMUrFgAZA/EGIItXLAAyBuINQBavWABkDMQbgCxesQDIGIg3AFm8YgGQMRBvALJ4xQIgYyDeAGTxigVAxkC8AcjiFQuAjIF4A5DFKxYAGQPxBiCLVywAMgbiDUAWr1gAZAzEG4AsXrEAyBiINwBZvGIBkDEQbwCyeMUCIGMg3sDdInt+fn4v7+np6bPEj58dt/rVYw5/9p0Vvsp7e95x5rnXc23md17XLTzmLpEdDnsK0CWE1wz+nbxDcG+/+zj/FNJbQPLb13CXyI4H/aqkS+881yA7lXcOEmS/pXsDzz/3znDt/308/vHx8c/r6+vndd/5mD31cQnZDSD57Uu4FtJH3rl3uENkx+905z5+Px57+BjIfrvwDTz/fyO79BEM2enRJ7+T/QTg23O8k/3s3eMukZ37s8G5d6RL359OfSf76Z8pLr3On016e8+6S2S3V/P2K4Jse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1/wCW2jE4XhEE1QAAAABJRU5ErkJggg==">
          </a>
        </div>
        <div class="col-sm-4">
          <a href="#" class="thumbnail">
            <img data-src="holder.js/100%x180" alt="100%x180" style="height: 180px; width: 100%; display: block;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAChCAYAAADUdR16AAAEBklEQVR4Xu3YQU4iABQD0HHlxTy2Z3LvaiaaaAgREJ02hL5ZOmD57QsQH15eXv7+8U8DwQYeIAu261e/NwAZCPEGIItXLAAyBuINQBavWABkDMQbgCxesQDIGIg3AFm8YgGQMRBvALJ4xQIgYyDeAGTxigVAxkC8AcjiFQuAjIF4A5DFKxYAGQPxBiCLVywAMgbiDUAWr1gAZAzEG4AsXrEAyBiINwBZvGIBkDEQbwCyeMUCIGMg3gBk8YoFQMZAvAHI4hULgIyBeAOQxSsWABkD8QYgi1csADIG4g1AFq9YAGQMxBuALF6xAMgYiDcAWbxiAZAxEG8AsnjFAiBjIN4AZPGKBUDGQLwByOIVC4CMgXgDkMUrFgAZA/EGIItXLAAyBuINQBavWABkDMQbgCxesQDIGIg3AFm8YgGQMRBvALJ4xQIgYyDeAGTxigVAxkC8AcjiFQuAjIF4A5DFKxYAGQPxBiCLVywAMgbiDUAWr1gAZAzEG4AsXrEAyBiINwBZvGIBkDEQbwCyeMUCIGMg3sDdInt+fn4v7+np6bPEj58dt/rVYw5/9p0Vvsp7e95x5rnXc23md17XLTzmLpEdDnsK0CWE1wz+nbxDcG+/+zj/FNJbQPLb13CXyI4H/aqkS+881yA7lXcOEmS/pXsDzz/3znDt/308/vHx8c/r6+vndd/5mD31cQnZDSD57Uu4FtJH3rl3uENkx+905z5+Px57+BjIfrvwDTz/fyO79BEM2enRJ7+T/QTg23O8k/3s3eMukZ37s8G5d6RL359OfSf76Z8pLr3On016e8+6S2S3V/P2K4Jse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1kFVq3g6BbHv/yvWQVWreDoFse//K9ZBVat4OgWx7/8r1/wCW2jE4XhEE1QAAAABJRU5ErkJggg==">
          </a>
        </div>
</div>


