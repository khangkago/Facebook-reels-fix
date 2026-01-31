// ==UserScript==
// @name         Fix Facebook Reels Auto-Pause
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fix Auto-Pause
// @author       khangkago
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: false });
    Object.defineProperty(document, 'hidden', { value: false, writable: false });
    window.addEventListener('visibilitychange', (e) => e.stopImmediatePropagation(), true);
    window.addEventListener('blur', (e) => e.stopImmediatePropagation(), true);
})();
