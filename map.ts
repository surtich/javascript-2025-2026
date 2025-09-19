export function map<X,Y>(f: (x: X) => Y, xs: X[]): Y[] {
    let ys: Y[] = [];
    for (let i = 0; i < xs.length; i++) {
        ys[i] = f(xs[i]);
    }
    return ys;
}
