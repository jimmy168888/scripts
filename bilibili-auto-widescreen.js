// ==UserScript==
// @name         bilibili - 自动宽屏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', () => {
        let hanlder = setInterval(() => {
            const ctrlWideBtn = document.getElementsByClassName('bpx-player-ctrl-web')[0];
            if([...ctrlWideBtn.classList].indexOf('bpx-state-entered') === -1){
                ctrlWideBtn.click();
                clearInterval(hanlder);
            }
        });
    });
})();
