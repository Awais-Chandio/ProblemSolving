
var compose = function (functions) {



    return function (x) {
        var Result = x
        for (var i = functions.length - 1; i >= 0; i--) {
            Result = functions[i](Result)

        }
        return Result;
    }
}


const fn = compose([x => x + 1, x => x * x, x => 2 * x]);

console.log(fn(4))