// ==UserScript==
// @name         Nest Reader Progress
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.neat-reader.cn/webapp
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neat-reader.cn
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var handler;
    var hash = window.location.hash;
    hash = hash.split("?")[0];
    console.log("#", hash);
    if (hash != "#/epubreader") {
        clearInterval(handler);
        return;
    }
    var pb = document.createElement("div");
    var pbb = document.createElement("div");
    var root = document.getElementById("root");

    pbb.appendChild(pb);
    root.insertBefore(pbb, root.firstChild)

    pbb.style = `
    display: block;
    position: relative;
    width: 100vw;
    height: 4px;
    background: gray;
`;

    pb.style = `
    display: block;
    position: fixed;
    top: 0;
    z-index:100;
    width: 10vw;
    height: 4px;
    background: #45A5ED;
    transition: width .5s linear 1s;
`;

    handler = setInterval(() => {
        var currentIdx = document.getElementsByClassName('page-left')[0].childNodes[0].value;
        var max = document.getElementsByClassName('page-right')[0].childNodes[1].innerHTML;
        console.log("#Test", currentIdx, max);
        pb.style.width = ((currentIdx / max) * 100).toFixed(0) + "vw";
    }, 1000);
    // Your code here...
})();
