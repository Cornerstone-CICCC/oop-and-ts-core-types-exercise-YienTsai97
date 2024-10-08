// Exercise: Write a function `fail` that takes a string message and throws an error with that message.
// The function should have a `never` return type because it never successfully returns.

function fail(errMessage: string): never {
    throw new Error(`Uncaught Error: ${errMessage}`)
}

console.log(fail("Something went wrong"));
// Expected output: Uncaught Error: Something went wrong