// The receivesAFunction function should:
// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function

function receivesAFunction(callback) {
    callback();
}

// The returnsANamedFunction function should:
// take no arguments
// return a named function
function returnsANamedFunction() {
    return function namedFun() {
        console.log("before all");
    };
}

// The returnsAnAnonymousFunction function should:
// take no arguments
// return an anonymous function

function returnsAnAnonymousFunction() {
    return () => console.log('anonymous function');
}