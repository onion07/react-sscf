 (function(window) {
   window.Dialog = {
     init: function() {
       var _ts = this;
       console.log('初始化..');
     },
     domHandle: function(html, o) {
       var _ts = this;
       //关闭弹窗
       var closeDialog = function($ts) {
         $('body').removeClass('dialog-open');
         $('.backdrop').remove();
         $ts.parents('.dialog').remove();
         $ts.parents('.dialog')[0].onclick = null;
       };

       //插入DOM
       $('body').addClass('dialog-open').append(html);

       //点击关闭
       $('body').on('click', '.close', function() {
         closeDialog($(this));

       });

       // 点击ok按钮回调
       $('body').on('click', '.ok', function() {

         closeDialog($(this));
         if (typeof o.buttons.callback === 'function') {
           o.buttons.callback.call(o);
         }

       });

     },
     pupHtml: function(o) {
       if ($('.dialog').length) {
         $('.dialog').removeClass('hiden');
         $('.backdrop').removeClass('hiden');
         return ;
       }
       var _ts = this;
       var message = o.message || '请添加message';
       var content = o.content.replace(/<scritpt>/igm, '$ltscript$gt') || '<p>' + message + '</p>';

       var type = o.buttons.type || 'alert';
       var btnText = o.buttons.btnText || '确定';
       var footer = '';

       if (type === 'alert' || type === 'fll-alert') {
         footer = '<button class="defult ok close">' + btnText + '</button>';
       } else if (type === 'confirm') {
         footer = '<button class="cancel close">取消</button>\
             <button class="ok">' + btnText + '</button>';
       }

       // if (o.callback) {
       //  console.info('has callback...')
       // }


       var _html = '<div class="backdrop"></div>\
            <div class="dialog ' + type + '"><div class="dialog-box"><div class="dialog-content">\
              <div class="dialog-header">\
                <div class="dialog-header-inner">\
                  <p>标题</p>\
                </div>\
              </div>\
              <div class="dialog-body">\
                <div class="dialog-body-inner">\
                  <div class="the-content">' + content + '</div>\
                </div>\
              </div>\
              <div class="dialog-footer">\
                <div class="dialog-footer-inner">' + footer + '</div>\
              </div>\
            </div></div></div>';

       _ts.domHandle(_html, o);
     },
     pup: function(o) {
       if ($('.dialog').length) {
         $('.dialog').removeClass('hiden');
         $('.backdrop').removeClass('hiden');
         return;
       }
       var _ts = this;
       var message = o.message.replace(/<scritpt>/igm, '$ltscript$gt') || '请添加message';
       var type = o.buttons.type || 'alert';
       var btnText = o.buttons.btnText || '确定';
       var footer = '';

       if (type === 'alert' || type === 'fll-alert') {
         footer = '<button class="defult close">' + btnText + '</button>';
       } else if (type === 'confirm') {
         footer = '<button class="cancel close">取消</button>\
             <button class="ok">' + btnText + '</button>';
       }

       // 回调
       // console.info(typeof o.buttons.callback)
       // if (typeof o.buttons.callback !== 'undefined') {
       //  o.buttons.callback.call(o);
       // }

       var _html = '<div class="backdrop"></div>\
            <div class="dialog ' + type + '"><div class="dialog-box"><div class="dialog-content">\
              <div class="dialog-header">\
                <div class="dialog-header-inner">\
                  <p>标题</p>\
                </div>\
              </div>\
              <div class="dialog-body">\
                <div class="dialog-body-inner">\
                  <div class="the-content"><p>' + message + '</p></div>\
                </div>\
              </div>\
              <div class="dialog-footer">\
                <div class="dialog-footer-inner">' + footer + '</div>\
              </div>\
            </div></div></div>';

       _ts.domHandle(_html, o);

     }
   };

   return Dialog;
 })(window);