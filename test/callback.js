var Prompt = require('prompt');

exports.callback = function() {
    Prompt('Do you feel lucky?', function(x) {
        console.log('You said: '+x);
        Prompt("I'm not sure I believe you! What do you have to say to that?", function(y) {
            console.log('You said: '+y);
            console.log('Oh. Okay.');
        });
    });
}
