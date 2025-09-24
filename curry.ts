export function curry<X, Y, Z>(f:(x: X, y: Y) => Z): (x: X) => (y: Y) => Z {
    return function(x: X) {
        return function(y: Y) {
            return f(x, y);
        }
    }
}


// implementar curry con número arbitrario de parámetros