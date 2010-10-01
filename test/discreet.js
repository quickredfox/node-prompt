var Prompt = require('prompt');

exports.discreet = function () {
    Prompt()
        .discreet('Type something.', 'pass')
        .tap(function (vars) {
            console.log('Fyi, what you said was: ' + vars.pass);
      }).end();
}
