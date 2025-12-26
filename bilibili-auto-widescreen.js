// ==UserScript==
// @name         bilibili - 自动宽屏优化版
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  自动点击宽屏按钮
// @author       You
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const WIDE_BTN_SELECTORS = [
        '.bpx-player-ctrl-wide', // 新版宽屏按钮
        '.bpx-player-ctrl-web',  // 旧版网页全屏按钮
    ];

    let tries = 0;
    const maxTry = 50;

    const timer = setInterval(() => {
        tries++;
        const btn = document.querySelector(WIDE_BTN_SELECTORS.join(','));
        if (!btn) {
            if (tries >= maxTry) clearInterval(timer);
            return;
        }
        if (!btn.classList.contains('bpx-state-entered')) {
            btn.click();
        }
        clearInterval(timer);
    }, 200);
})();
