// ==UserScript==
// @name         B站脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       wonli17
// @match        https://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var hanlder = setInterval(() => {
        var ctrlWideBtn = document.getElementsByClassName('bpx-player-ctrl-wide')[0];
        if([...ctrlWideBtn.classList].indexOf('bpx-state-entered') === -1){
            ctrlWideBtn.click();
            clearInterval(hanlder);
            window.scrollTo(0, 100)
        }
        console.log("#Debug");
    }, 2000);

    // Your code here...
})();
