import { asyncAdd, asyncDouble, asyncInc, asyncProduct } from "./async.ts";

function promiseAdd(x: number, y: number) {
    return new Promise<number>(function (resolve, reject) {
        return asyncAdd(x, y, function(result) {
            resolve(result);
        });
    });
};

function promiseInc(x: number) {
    return new Promise<number>(function (resolve, reject) {
        return asyncInc(x, function(result) {
            resolve(result);
        });
    });
};


function promiseProduct(x: number, y: number) {
    return new Promise<number>(function (resolve, reject) {
        return asyncProduct(x, y, function(result) {
            resolve(result);
        });
    });
};


promiseAdd(3, 4).then(function(result) {
    return promiseProduct(result, 8);
}).then(function(result) {
    return promiseAdd(result, 7);
}).then(function(result) {
    return promiseProduct(result, 10);
}).then(function(result) {
    console.log(result);
}).catch(function(err) {
    console.error(err);
});

console.log("Before promise chain");

async function calc() {
    let result = await promiseAdd(3, 4);
    result = await promiseProduct(result, 8);
    return result;
}

calc().then(console.log)

console.log(await calc());

const xs = [1, 3, 5, 7];

let sum = 0;
for (let x of xs) {
    try {
        sum = await promiseAdd(sum, x)
    } catch(e) {
        console.log(e)
    }
}

console.log(sum)

console.log(">>>>>", await Promise.all(xs.map(promiseInc)));

const ys = [];
for (let x of xs) {
    const y = await promiseInc(x);
    ys.push(y);
}
console.log(ys);


console.log("race >>>>>", await Promise.race(xs.map(promiseInc)));

const n = Promise.resolve("pepe");


console.log("End of script")