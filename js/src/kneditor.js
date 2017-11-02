;(function($){
    $.fn.kneditor = function(option) {
    	var editor = $(this);
    	var buttons = {
			fontsize: {
			    title: '字体大小',
			    image: '\uf031',
			    popup: function( $popup, $button ) {
		            var list_fontsizes = [];
		            for( var i=8; i <= 11; ++i )
		                list_fontsizes.push(i+'px');
		            for( var i=12; i <= 28; i+=2 )
		                list_fontsizes.push(i+'px');
		            list_fontsizes.push('36px');
		            list_fontsizes.push('48px');
		            list_fontsizes.push('72px');
		            var $list = $('<div/>').addClass('wysiwyg-plugin-list')
                       .attr('unselectable','on');
		            $.each( list_fontsizes, function( index, size ) {
		                var $link = $('<a/>').attr('href','#')
                            .html( size )
                            .click(function(event) {
                                editor.wysiwyg('shell').fontSize(7).closePopup();
                                editor.wysiwyg('container')
                                    .find('font[size=7]')
                                    .removeAttr("size")
                                    .css("font-size", size);
                                event.stopPropagation();
                                event.preventDefault();
                                return false;
                            });
		                $list.append( $link );
		            });
		            $popup.append( $list );
		        }
			},
			header: {
			    title: '样式',
			    image: '\uf1dc',
			    popup: function( $popup, $button ) {
		            var list_headers = {
		                    '标题 1' : '<h1>',
		                    '标题 2' : '<h2>',
		                    '标题 3' : '<h3>',
		                    '标题 4' : '<h4>',
		                    '标题 5' : '<h5>',
		                    '标题 6' : '<h6>'
		                };
		            var $list = $('<div/>').addClass('wysiwyg-plugin-list')
                       .attr('unselectable','on');
		            $.each( list_headers, function( name, format ) {
		                var $link = $('<a/>').attr('href','#')
                            .css( 'font-family', format )
                            .html( name )
                            .click(function(event) {
                                editor.wysiwyg('shell').format(format).closePopup();
                                event.stopPropagation();
                                event.preventDefault();
                                return false;
                            });
		                $list.append( $link );
		            });
		            $popup.append( $list );
		        }
			},
			bold: {
			    title: '粗体 (Ctrl+B)',
			    image: '\uf032',
			    hotkey: 'b'
			},
			italic: {
			    title: '斜体 (Ctrl+I)',
			    image: '\uf033',
			    hotkey: 'i'
			},
			underline: {
			    title: '下划线 (Ctrl+U)',
			    image: '\uf0cd',
			    hotkey: 'u'
			},
			strikethrough: {
			    title: '删除线 (Ctrl+S)',
			    image: '\uf0cc',
			    hotkey: 's'
			},
			forecolor: {
			    title: '字体颜色',
			    image: '\uf1fc'
			},
			highlight: {
			    title: '背景颜色',
			    image: '\uf043'
			},
			alignleft: {
			    title: '居左',
			    image: '\uf036'
			},
			aligncenter: {
			    title: '居中',
			    image: '\uf037'
			},
			alignright: {
			    title: '居右',
			    image: '\uf038'
			},
			alignjustify: {
			    title: '适应',
			    image: '\uf039'
			},
			subscript: {
			    title: '上标',
			    image: '\uf12c'
			},
			superscript: {
			    title: '下标',
			    image: '\uf12b'
			},
			indent: {
			    title: '增加缩进',
			    image: '\uf03c'
			},
			outdent: {
			    title: '减少缩进',
			    image: '\uf03b'
			},
			orderedList: {
			    title: '有序列表',
			    image: '\uf0cb'
			},
			unorderedList: {
			    title: '无序列表',
			    image: '\uf0ca'
			},
			removeformat: {
			    title: '移除格式',
			    image: '\uf12d'
			},
			insertimage: {
			    title: '插入图片',
			    image: '\uf03e'
			},
			insertlink: {
			    title: '插入链接',
			    image: '\uf0c1'
			}
		};
		var btns = {};
		if (option && option.buttons && Array.isArray(option.buttons)) {
			for (var i = 0; i < option.buttons.length; i++) {
				btns[option.buttons[i]] = buttons[option.buttons[i]];
			}
		} else {
			btns = buttons;
		}
    	$(this).wysiwyg({
    		class: 'kneditor',
    		buttons: btns,
    		selectImage: '选择图片或者拖动图片到此处',
    		placeholderUrl: 'www.example.com',
    		forceImageUpload: true,
    		onImageUpload: function(callback) {
    			if (!option.upload || !option.upload.url) return console.error('upload.url未指定');
    			var iframe = 'legacy-uploader-' + Math.random().toString(36).substring(2);
    			$('<iframe>').attr('name',iframe).attr('style', 'display: none;')
					.load(function() {
						var url = $(this).contents().find('body').text();
						if (url) {
							callback(url);
							$(this).remove();
						}
					}).appendTo(document.body);
    			$(this).attr('name', option.upload.name ? option.upload.name : 'file')
					.parents('form')
					.attr('action', option.upload.url)
					.attr('method', 'POST')
					.attr('enctype', 'multipart/form-data')
					.attr('target', iframe)
					.submit();
    		}
    	});
    }  
})(jQuery);