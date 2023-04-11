// ==UserScript==
// @name         小红书 DIY
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.xiaohongshu.com/explore
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xiaohongshu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
window.onload = () => {
[...document.getElementsByClassName('feeds-page')[0].childNodes[0].childNodes].filter((d) => !['推荐','美食','职场','旅行','健身'].includes(d.innerHTML)).map((d) => d.remove());
}
    // Your code here...
})();
