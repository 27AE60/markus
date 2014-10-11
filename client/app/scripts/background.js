'use strict';

var app;

// chrome event listners
chrome.runtime.onInstalled.addListener(function (details) {
  app = Markus.init();
});

chrome.bookmarks.onCreated.addListener(function (id, details) {
  console.log('\'Allo \'Allo! Event Page', details);
});

// omnibox event listners
chrome.omnibox.setDefaultSuggestion({
  description: ' %s'
});

chrome.omnibox.onInputStarted.addListener(function() {});

chrome.omnibox.onInputChanged.addListener(function() {});

chrome.omnibox.onInputEntered.addListener(function() {});

chrome.omnibox.onInputCancelled.addListener(function() {});
