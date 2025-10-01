function asyncAdd(x, y, cb) {
    setTimeout(function() {
        cb(x + y);
    }, 10);;
}

asyncAdd(3 ,4, function(result) {
    console.log(result)
})

