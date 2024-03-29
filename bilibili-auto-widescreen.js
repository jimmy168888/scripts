// ==UserScript==
// @name         bilibili - 自动宽屏
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function ctrlWideLoop() {
        const ctrlWideBtn = document.getElementsByClassName('bpx-player-ctrl-wide')[0];
        //const ctrlWideBtn = document.getElementsByClassName('bpx-player-ctrl-web')[0];
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
