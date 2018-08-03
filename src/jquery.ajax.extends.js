/*! jquery.ajax.extends.js @ 2018, yamoo9.net */
;(function(global, $) {
  'use strict';

  if (!$) { throw new Error('jQuery 라이브러리를 호출해야 사용 가능합니다.'); }

  if ( !$.put ) {
    $.put = function(api_with_id, put_data, success, fail) {
      $.ajax({
        method: 'PUT',
        url: api_with_id,
        data: put_data,
      })
      .then(
        $.type(success) === 'function' ? success : function(){},
        $.type(fail) === 'function' ? fail : function(){}
      );
    };
  }

  if ( !$.patch ) {
    $.patch = function(api_with_id, patch_data, success, fail) {
      $.ajax({
        method: 'PATCH',
        url: api_with_id,
        data: patch_data,
      })
      .then(
        $.type(success) === 'function' ? success : function(){},
        $.type(fail) === 'function' ? fail : function(){}
      );
    };
  }

  if ( !$.delete ) {
    $.delete = function(api_with_id, success, fail) {
      $.ajax({
        method: 'DELETE',
        url: api_with_id,
      })
      .then(
        $.type(success) === 'function' ? success : function(){},
        $.type(fail) === 'function' ? fail : function(){}
      );
    };
  }

  if ( !$.jsonp ) {
    $.jsonp = function(api_address, success, fail) {
      $.ajax({
        url: api_address,
        dataType: 'jsonp',
      })
      .then(
        $.type(success) === 'function' ? success : function(){},
        $.type(fail) === 'function' ? fail : function(){}
      );
    };
  }

})(window, window.jQuery);