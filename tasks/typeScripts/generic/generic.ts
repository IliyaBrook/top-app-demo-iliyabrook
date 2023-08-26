// инструмент для переиспользования кода
// generic позволяют использовать функции или другие обхекты для разных типов данных


function logTime<T>(num: T): T {
    console.log(new Date());
    return num;
}

// use generic
logTime<string>('asd')

function logTime2<T>(num: T): T {
    if (typeof num === 'string') {
        num.toLocaleUpperCase();
    }
    return num;
}

// in interfaces

interface MyInterface {
    transform: <T, F> (a: T, b: F) => F;
}

// MyInterface example func

interface TimeStamp {
    stamp: number;
}

function logTimesStamp<T extends TimeStamp>(num: T): T {
    console.log(num.stamp)
    return num
}
