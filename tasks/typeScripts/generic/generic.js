"use strict";
// инструмент для переиспользования кода
// generic позволяют использовать функции или другие обхекты для разных типов данных
function logTime(num) {
    console.log(new Date());
    return num;
}
// use generic
logTime('asd');
function logTime2(num) {
    if (typeof num === 'string') {
        num.toLocaleUpperCase();
    }
    return num;
}
// MyInterface example func
const someFunc = (param) => {
    return param;
};
const someFuncResult = someFunc({ transform: (num, str) => str });
console.log(someFuncResult.transform(1, 'asd'));
