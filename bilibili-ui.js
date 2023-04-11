// ==UserScript==
// @name         bilibili - UI优化
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

    try{
        const remove = (p_node) => {
            if(p_node.tagName === 'LI'){
                p_node.remove();
                return;
            }
            remove(p_node.parentNode);
            console.log("#remove");
        }

        const removeBlacklist = () => {
            var blocklist = [
                'left-entry',
                'right-entry-item--upload',
                'right-entry-item',
                'right-entry--message',
                'follow-btn',
                'right-entry--vip'
            ];

            blocklist.forEach((d, i) => {
                const dom = document.getElementsByClassName(d);
                if(dom.length !== 0){
                    if(dom.length !== 1) {
                        dom.forEach((dd, ii) => {
                            dd.remove();
                        });
                    }else {
                        dom[0].remove();
                    }
                }
            });

            document.getElementsByClassName('right-entry-text').forEach((d,i) => {
                if(['动态', '收藏', '历史'].indexOf(d.innerHTML) === -1){
                    remove(d.parentNode);
                }
            });
        }

        window.onload = () => {
            removeBlacklist();

            let hanlder = setInterval(() => {
                const ctrlWideBtn = document.getElementsByClassName('bpx-player-ctrl-wide')[0];
                if(ctrlWideBtn === undefined){
                    clearInterval(hanlder);
                    return;
                }
                if([...ctrlWideBtn.classList].indexOf('bpx-state-entered') === -1){
                    ctrlWideBtn.click();
                    clearInterval(hanlder);
                }
            }, 1000);
        }

    }catch(e){
        console.error("#B", e);
    }
})();
