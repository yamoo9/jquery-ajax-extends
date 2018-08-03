(function(global){
  'use strict';

  !console.divider && (console.divider = function(keyword, style, line) {
    style = style || 'color: #127cc9';
    line = line || 70;
    var comment = '%c['+ keyword +'] ';
    var length = comment.length - 3;
    comment += '-'.repeat(line - length);
    console.log(comment, style);
  });

})(window);