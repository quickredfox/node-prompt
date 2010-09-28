prompt('What is your name?', function (x) {
    console.log('You said: '+x);
    prompt('What is your quest?', function (y) {
        console.log('You said: '+y);
        prompt('What is your favorite color?', function (z) {
            console.log('You said: '+z);
            console.log("Okay, you may pass.");
        });
    });
});

function prompt(question, cb) {
    var p = process.openStdin();
    console.log(question);
    p.on('data', function(line) {
        p.removeAllListeners('data');
        cb(line);
        if (p.listeners('data').length === 0) {
            p.destroy();
        }
    });
}
