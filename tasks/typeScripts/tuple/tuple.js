"use strict";
// картежи помагают нам хранит значения разных типов в массиве
const a = [0, 'a', 1];
const [cNew, dNew, fNew] = a;
// картежи используются в рамках не изминяемых значений
a.push(1); // ошибка
a.map((s) => {
    switch (typeof s) {
        case 'string':
            break;
    }
});
