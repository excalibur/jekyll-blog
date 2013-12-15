---
layout: post
title: "spring security oauth2"
description: "spring security oauth2 学习使用"
category: "spring"
tags: ["spring security","oauth2"]
---
{% include JB/setup %}

### 背景
为了熟悉oauth2的认证流程，学会使用oauth2认证。所以学习了该框架。
<!--more-->
### 基于源码练习
从github上clone出最新的spring security oauth2:

	git clone https://github.com/spring-projects/spring-security-oauth.git

### 运行例子
运行maven命令：
	
	mvn install -P bootstrap

运行例子：

	cd samples/oauth2/tonr
	mvn tomcat:run

然后访问
<a href="http://localhost:8080/tonr2/index.jsp" target="_blank">http://localhost:8080/tonr2/index.jsp</a>

页面上有4个导航按钮分别是facebook friends、sparklr pics、login、home

 - facebook friends：当点击的时候会获取你facebook的权限，返回给你一个facebook的登录页面让你登录。
 - sparklr pics：spring security oauth2中的一个例子，这个例子依赖的。同理点击会返回给你一个sparklr的登录页面让你登录。
 - login：本站的登录页面。
 - home: 主页，也就是本页面。

#### 测试一下sparklr登录
因为facebook 我没有账号所以就只测试一下本地的sparklr，流程也基本是一样的。
1.点击sparklr pics获得登录页面，然后直接点Login登录。
2.得到了授权页面，默认是否认`Deny`授权的，改为批准`Approve`，然后提交。
3.这样你就会获得sparklr pics的权限操作了。
基本的流程我们走完了，有点感觉。但是发现很多地方都不是很满意。尝试修改一下。

#### 修改
为了练习服务端授权，我们删除facebook认证方式，全面分析修改sparklr认证。
删除关于facebook认证的相关东西。

 - 配置文件中：`oauth:resource id="facebook"`、`facebookController`。
 - jsp文件：`facebook.jsp`。
 - java文件：`FacebookController`。
 - 删除facebook链接：`sparklr.jsp`、`index.jsp`、`oauth_error.jsp`、`login.jsp`。

好了现在tonr完全相当于对sparklr的测试了。

### OAuth 2.0 Provider（OAuth 2.0 提供端）
提供端通常要给予第三方注册令牌，然后给予用户确认界面。

#### 管理客户端
客户端数据库管理切入点是`ClientDetailsService`,我们必须自定义`ClientDetailsService`的实现，根据`ClientDetails`
来载入客户端id。

例子中采用了oauth:client-details-service来定义了8个客户端，分别有自己的权限等定义。在实际运用中，这部分应该交予数据库
储存，所以这部分应该自定义扩展。

#### Tokens 管理
`AuthorizationServerTokenServices`接口可以管理Tokens，默认有个实现`DefaultTokenServices`。
Tokens的存储有2中方式：`数据库`或者`内存`。哪种合适得根据自己的需求而定。默认由`JdbcTokenStore`和`InMemoryTokenStore`提供。

#### 实现 OAuth 2 Provider
要实现OAuth 2.0 Provider的功能主要是关注2个切入点与1个过滤器:

 - AuthorizationEndpoint : 授权切入点，主要是用于请求的授权。
 - TokenEndpoint ：令牌切入点，主要是用于请求中的访问令牌。
 - OAuth2AuthenticationProcessingFilter：验证请求认证的访问令牌。

#### 分析
oauth2有一套认证的流程，其授权验证流程示意图如下（图片来源：OAuth2.0协议草案V21的4.1节 ）  
![OAuth2.0协议草案图片](/images/OAuth_guide_V2_1.png)

对于应用而言，需要进行两步：
1. 获取Authorization Code。
2. 通过Authorization Code获取Access Token。

那么sparklr如何进行操作的呢？
在sparklr中的`spring-servlet.xml`定义了4个http标签。如果你熟悉spring security的话，
会马上知道其中一个是用于sparklr的权限，实现登录等等。

那其他三个是做什么的呢?其中有一个http标签拦截规则为`/me/**`，
它定义了一个切入点`oauthAuthenticationEntryPoint`。在我们使用spring security的时候，为了需要权限的时候，下一步将要进行什么操作，全靠切入点来完成。通常可以有返回登录页面，
直接返回403等等。

那我们分析一下`oauthAuthenticationEntryPoint`的实现。
`org.springframework.security.oauth2.provider.error.OAuth2AuthenticationEntryPoint`:
{% highlight java %}
HttpHeaders headers = response.getHeaders();
String existing = null;
if (headers.containsKey("WWW-Authenticate")) {
	existing = extractTypePrefix(headers.getFirst("WWW-Authenticate"));
}
StringBuilder builder = new StringBuilder();
builder.append(typeName+" ");
builder.append("realm=\"" + realmName + "\"");
if (existing!=null) {
	builder.append(", "+existing);
}
HttpHeaders update = new HttpHeaders();
update.putAll(response.getHeaders());
update.set("WWW-Authenticate", builder.toString());
return new ResponseEntity<OAuth2Exception>(response.getBody(), update, response.getStatusCode());
{% endhighlight %}
我们发现它判断`response`中是否有`WWW-Authenticate`头信息，有则获取，然后构造一个字符串把`WWW-Authenticate`头信息添加在后面。
字符串形如`Bearer realm="oauth"`，例子的字符串为`Bearer realm="sparklr2"`。最后返回了一个`ResponseEntity<OAuth2Exception>`的异常。

这一http还定义了一个权限决策器`accessDecisionManager`,`accessDecisionManager`中新增了一个`ScopeVoter`。它用于判断以`SCOPE_`开头的权限。

这一http的关键
#### QQ继承登录
QQ也支持oauth2登录，而且非常的方便，我们尝试一下增加QQ的登录试一下。
QQ oauth2登录流程：

	1. 获取access_token；
	2. 根据access_token获得对应用户身份的openid；
	3. 根据access_token与openid调用OpenAPI，来请求访问或修改用户授权的资源（例如用户资料，日志，相册，说说等信息）。 

为方便网站快速接入，QQ登录提供了JS SDK，粘贴代码到网页，即可实现QQ登录功能。
为方便移动应用快速接入，QQ登录提供了Android SDK和IOS SDK，应用只需要修改少量代码，即可快速实现QQ登录功能。 
我们这里就不考虑提供的SDK了，练习一下Authorization Code模式的登录。	

##### 1.增加页面QQ登录导航
