var Prompt = require('./prompt');

exports.chaining = Prompt()
    .ask('What is your name?', 'name')
    .tap(function (vars) {
        console.log('You said: ' + vars.name);
    })
    .ask('What is your quest?', 'quest')
    .tap(function (vars) {
        console.log('You said: ' + vars.quest);
    })
    .ask('What is your favorite color?', 'color')
    .tap(function (vars) {
        console.log('You said: ' + vars.color);
        console.log('Okay, you may pass!');
    })
    .end();
