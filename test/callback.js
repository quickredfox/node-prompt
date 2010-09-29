var Prompt = require('./prompt');

exports.cb = Prompt('Do you feel lucky?', function(x) {
    console.log('You said: '+ans);
    Prompt("I'm not sure I believe you! What do you have to say to that?", function(y) {
        console.log('You said: '+ans);
        console.log('Oh. Okay.');
    });
});
