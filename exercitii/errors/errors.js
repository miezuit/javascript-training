
try {
    let n = 1;
    n.toUpperCase();
    // console.logg('This should not happen!');
    throw Error('I throw this error');
} catch (error) {
    console.log('Type: ' + error.name);
    console.log('Error message: ' + error.message);
}

console.log('Do we see this message?');
