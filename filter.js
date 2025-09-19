
function isLongerThan2(x) {
    return x.length > 2;
}

function isEven(x) {
    return x % 2 == 0;
}

function isLessThan4(x) {
    return x < 4;
}

function filter(f, xs) {
    let ys = [];
    for (let i = 0; i < xs.length; i++) {
        if (f(xs[i])) {
            ys.push(xs[i]);
        }
    }
    return ys;
}

console.log(filter(isLongerThan2, ["ana", "juan", "pepe", "li"])); // ["ana","juan","pepe"]
console.log(filter(isEven, [1, 2, 3, 4, 5, 1])); // [2,4]
console.log(filter(isLessThan4, [1, 2, 3, 4, 5, 1])); // [1,2,3,1]

console.log(["ana", "juan", "pepe", "li"].filter(isLongerThan2)); // ["ana","juan","pepe"]

