<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:74:"/Users/kinta/workspace/php/72crm/application/admin/view/install/index.html";i:1563610408;s:74:"/Users/kinta/workspace/php/72crm/application/admin/view/public/header.html";i:1563614043;s:74:"/Users/kinta/workspace/php/72crm/application/admin/view/public/footer.html";i:1563609753;}*/ ?>
<!DOCTYPE html>
<html lang="zh-CN">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>CRM安装向导</title>
	<link rel="shortcut icon" href="/72crm/public/static/icon/favicon.ico">
	<link rel="stylesheet" href="/72crm/public/static/style/base.css">
	<link rel="stylesheet" href="/72crm/public/static/style/index.css">
	<script src="/72crm/public/static/js/jquery-3.3.1.min.js"></script>
</head>

<body>
	<div class="header-wrapper">
		<header class="header">
  <div class="header-content">
    <h1 class="logo">
      <a href=""><img class="pic" src="/72crm/public/static/img/logo.png" alt=""></a>
    </h1>
    <div class="title">
      英威利CRM9.0安装向导
    </div>
    <div class="concat-us">
      <img class="icon" src="/72crm/public/static/icon/phone.png" alt="">
      <span class="desc">官方电话：13160120289</span>
    </div>
  </div>
</header>
	</div>
	<div class="top">
		<div class="agreement-title">CRM系统使用协议</div>
	</div>

	<div class="container">
		<div class="agreement">
			<p style="text-align:center;font-size:18px;">CRM使用协议</p>

			<p>一、协议中提到的名词约定</p>
			1.1下述条款中所指CRM的标志包括如下方面：<br>
			CRM代码及文档中关于CRM的版权提示、文字、图片和链接。<br>
			CRM运行时界面上呈现出来的有关CRM的文字、图片和链接。<br>
			1.2不包括如下方面：<br>
			CRM提供的演示数据中关于CRM的文字、图片和链接。<br>
			<br>
			<p>二、免责声明</p>
			2.1用户出于自愿而使用本软件，必须了解使用本软件的风险，在尚未购买产品技术服务或商业授权之前，我们不承诺对免费用户提供任何形式的技术支持、使用担保，也不承担任何因使用本软件而产生问题的相关责任。<br>
			2.2电子文本形式的使用协议如同双方书面签署的协议一样，具有完全的和等同的法律效力。您一旦开始确认本协议并安装CRM，即被视为完全理解并接受本协议的各项条款，在享有以下条款授予的权力的同时，受到相关的约束和限制。<br>
			2.3协议许可范围以外的行为，将直接违反本授权协议并构成侵权，我们有权随时终止授权，责令停止损害，并保留追究相关责任的权利。<br>
			<br>
			<p>三、合同约束</p>
			如果您违反了该协议的任一条款，该用户协议将自动终止，您必须停止使用，卡卡罗特保留通过法律手段追究责任的权利。<br>
			<br>
		</div>
		<div class="agree-btn">我同意</div>
	</div>
	<div class="footer-wrapper">
		<footer class="footer">
  <div class="content">

  </div>
</footer>
	</div>
</body>
<script>
	$('.agree-btn').click(function () {
		window.location = 'step1.html'
	});
</script>

</html>