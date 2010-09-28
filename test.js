var Prompt = require('./prompt');

%Note, trying to run two prompts asynchronously gets PRETTY FUNKY.
Prompt('I just have one question: Do you feel lucky?', function(ans) {
    console.log('You said: ' + ans);
    console.log('Okay, now rocking method chains:');
    Prompt()
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
});