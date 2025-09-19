export function filter<X>(f: (x: X) => boolean, xs: X[]): X[] {
    let ys: X[] = [];
    for (let i = 0; i < xs.length; i++) {
        if (f(xs[i])) {
            ys.push(xs[i]);
        }
    }
    return ys;
}