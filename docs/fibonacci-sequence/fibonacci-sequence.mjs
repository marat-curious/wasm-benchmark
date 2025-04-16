"use strict";
function fibonacciSequense(n) {
    let previous = 0;
    let current = 1;
    let sequence = '0';
    for (let i = 1; i <= n; i++) {
        sequence += ` ${current}`;
        const nx = previous + current;
        previous = current;
        current = nx;
    }
    return sequence;
}
;
function buildFibonacciSequence(event) {
    console.log(fibonacciSequense(10));
    const mark = performance.mark("build-finish");
    const measure = performance.measure("build", {
        start: event.timeStamp,
        end: mark.startTime
    });
    console.log("measure:", measure.duration);
}
;
function start(document) {
    var _a;
    (_a = document.getElementById("start-js")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", buildFibonacciSequence);
}
;
start(document);
export {};
