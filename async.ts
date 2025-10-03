export function asyncAdd(x: number, y: number, cb: (result: number) => void) {
    setTimeout(function() {
        cb(x + y);
    }, parseInt(Math.random()*100));
}

export function asyncInc(x: number, cb: (result: number) => void) {
    asyncAdd(x, 1, cb);
}

export function asyncProduct(x: number, y: number, cb: (result: number) => void) {
    setTimeout(function() {
        cb(x * y);
    }, 10);
}

export function asyncDouble(x: number, cb: (result: number) => void) {
    asyncProduct(x, 2, cb);
}

export function asyncCompose<X, Y, Z>(f: (y: Y, cb: (z: Z) => void) => void, g: (x: X, cb: (y: Y) => void) => void) {
    return function(x: X, cb: (z: Z) => void) {
        g(x, function(y: Y) {
            f(y, cb);
        })
    }    
}



asyncAdd(3, 4, function(result) {
    asyncProduct(result, 8, function(result) {
        asyncAdd(result, 7, function(result) {
            asyncProduct(result, 10, console.log)
        })
    })
})


asyncCompose(asyncInc, asyncCompose(asyncDouble, asyncInc))(4, console.log)


// implementar el multe compose
//asyncCompose(asyncInc, asyncDouble, asyncInc)(4, console.log)

function asyncMap<X, Y>(f: (x: X, cb: (y: Y) => void) => void, cb: (ys: Y[]) => void,  xs: X[]) {
    let ys: Y[] = [];
    let count = 0;
    for (let i in xs) {
        f(xs[i], function(y: Y) {
            ys[i] = y;
            count++;;
            if (count === xs.length) {
                cb(ys);
            }
        })
    }    
}

asyncMap(asyncInc, console.log, [1,5,8, 2, -1, 10, 11])

//ejercicio: implementar asyncFilter y asyncReduce