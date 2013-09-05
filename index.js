// Generated by CoffeeScript 1.6.3
(function() {
  var fs, md5;

  md5 = require("MD5");

  fs = require("fs");

  module.exports.generate = function(form, file) {
    var data, field, header, opt, val, _i, _len;
    header = (String.fromCharCode(226)) + (String.fromCharCode(227)) + (String.fromCharCode(207)) + (String.fromCharCode(211));
    data = "%FDF-1.2\n%" + header + "\n1 0 obj \n<<\n/Version/1.3/FDF \n<<\n/Encoding/utf_8/Fields [";
    for (field in form) {
      val = form[field];
      if (typeof val === "array") {
        data += "<<\n/V(" + val + ")\n/T[";
        for (_i = 0, _len = val.length; _i < _len; _i++) {
          opt = val[_i];
          data += "(" + opt + ")";
        }
        data += "]>>";
      } else {
        data += "<<\n/V(" + val + ")\n/T(" + field + ")\n>>";
      }
    }
    data += "] \n>>\n>>\nendobj \ntrailer\n\n<<\n/Root 1 0 R\n>>\n%%EOF";
    return data;
  };

}).call(this);
