# kneditor
轻量的JavaScript可视化编辑器，基于wysiwyg.js，根据wysiwyg.js的文档进行了封装，支持上传文件。  
![kneditor](https://gitee.com/uploads/images/2017/1026/172603_07b75829_111345.png "kneditor")
### 依赖
- jQuery.js
- font-awesome

### 使用方法
1. 引入css文件：
```
<link rel="stylesheet" href="./css/kneditor.min.css">
```

2. 引入jQuery.js和相关js文件：
```
<script type="text/javascript" src="./js/jquery.min.js"></script>
<script type="text/javascript" src="./js/kneditor.min.js"></script>
```
3. 页面textarea元素注册为编辑器：
```
$('#editor').kneditor();
```

### 实例
```
$(function() {
	$('#editor').kneditor({
		buttons: [
			'fontsize', 
			'header', 
			'bold',
			'italic',
			'underline',
			'forecolor',
			'highlight',
			'alignleft',
			'aligncenter',
			'alignright',
			'indent',
			'outdent',
			'orderlist',
			'unorderlist',
			'removeformat',
			'insertimage',
			'insertlink'
		],
		upload: {
			url: '/upload',
			name: 'file'
		}
	});
});
```

### 感谢
wysiwyg.js的项目地址：[https://github.com/wysiwygjs/wysiwyg.js](https://github.com/wysiwygjs/wysiwyg.js)  
font-awesome的项目地址：[https://github.com/FortAwesome/Font-Awesome](https://github.com/FortAwesome/Font-Awesome)