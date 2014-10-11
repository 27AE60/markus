'use strict';

var Markus = {
  _bookmarks: []
  init: function() {
    var that = this;
    chrome.bookmarks.getTree(function(data) {
      var arr = [];
      that.traverseTree(data[0], arr);
    });
  },
  traverseTree: function(data, barr) {
    if (typeof data === 'object') {
      console.log(data);
    } else if (typeof data === 'array') {
      console.log('-------', data);
    }
  },
  sendData: function() {
  },
  search: function(term) {
  }
};
