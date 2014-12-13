'use strict';

// omnibox event listners
chrome.omnibox.setDefaultSuggestion({
  description: ' %s'
});

// chrome event listners
chrome.runtime.onInstalled.addListener(function (details) {
  var app = Markus();

  chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
    if (text.length > 4) {
      var url = 'http://google.com';
      var title = 'Google Search';
      var ole = app.debounce(function() {
        chrome.bookmarks.search(text, function(k) {
          var suggestions = [];
          for (var i = 0; i < k.length; i++) {
            suggestions.push({
              content: k[i].url,
              description: k[i].title + ' - ' + k[i].url
            });
          }
          suggest(suggestions);
        });
      }, 300);
      ole();
    }
  });

  chrome.omnibox.onInputEntered.addListener(function(url) {
    chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.update(tab.id, {url: url});
    });
  });

  chrome.omnibox.onInputCancelled.addListener(function() {});
});
