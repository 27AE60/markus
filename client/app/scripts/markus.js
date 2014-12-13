'use strict';

(function(w) {
  w.Markus = w.Markus || function() {
    var _bbox = {};

    _bbox.bookmark = {
      url:""
    };
    _bbox.bookmarks = [];
    _bbox.init = function() {
    };
    _bbox.traverseTree = function() {
    };
    _bbox.sendData = function() {
    };
    _bbox.search = function(term) {
    };

    _bbox.debounce = function(func, wait, immediate) {
      var timeout, args, context, timestamp, result;

      var later = function() {
        var last = Date.now() - timestamp;

        if (last < wait && last > 0) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          }
        }
      };

      return function() {
        context = this;
        args = arguments;
        timestamp = Date.now();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
          result = func.apply(context, args);
          context = args = null;
        }

        return result;
      };
    };

    return _bbox;
  };
})(window);
