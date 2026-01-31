// ==UserScript==
// @name         Fix Facebook Reels Auto-Pause
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Fix Auto-Pause
// @author       khangkago
// @match        https://www.facebook.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    Object.defineProperties(document, {
        'visibilityState': {
            get: function() { return 'visible'; }
        },
        'hidden': {
            get: function() { return false; }
        }
    });
    if (!Document.prototype._originalHasFocus) {
        Document.prototype._originalHasFocus = Document.prototype.hasFocus;
        Document.prototype.hasFocus = function() { return true; };
    }
    const blockEvents = ['visibilitychange', 'webkitvisibilitychange', 'blur', 'focusout', 'pagehide'];

    blockEvents.forEach(eventName => {
        window.addEventListener(eventName, (e) => {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }, true);
    });
})();
