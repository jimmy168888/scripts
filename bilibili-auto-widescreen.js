// ==UserScript==
// @name         自动宽屏
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动宽屏
// @author       Joe
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @run-at      document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function ctrlWideLoop() {
        const ctrlWideBtn = document.getElementsByClassName('bpx-player-ctrl-wide')[0];
        if(!ctrlWideBtn){
            await sleep(0);
            ctrlWideLoop();
        }else if([...ctrlWideBtn.classList].indexOf('bpx-state-entered') === -1) {
            ctrlWideBtn.click();
            return;
        }
    }

    ctrlWideLoop();
})();
