prompt('What is your name?', function (x) {
    prompt('What is your quest?', function (y) {
        prompt('What is your favorite color?', function (z) {
            console.log("Okay, you may pass.");
        });
    });
});

function prompt(question, cb) {
    var p = process.openStdin();
    console.log(question);
    p.on('data', function(line) {
        p.removeAllListeners('data');
        cb(line.toString('utf8'));
        if (p.listeners('data').length === 0) {
            p.destroy();
        }
    });
}
