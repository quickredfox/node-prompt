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

function Prompt(question, cb) {
    if (!(this instanceof Prompt)) return new Prompt(question, cb);
    var self = this;
    var vars = {};
    var queue = [];

    self.ask = function (question, into) {
        queue.push({ task : 'ask', q: question, into: into });
        return self;
    }

    self.tap = function (f) {
        queue.push({ task : 'tap', f : f });
        return self;
    }

    self.end = function () {
        processQueue();
    }

    function processQueue () { 
        task = queue.shift();
        if (task === undefined) return;
        if (task.task == 'ask') {
            prompt(task.q, function (resp) {
                 vars[task.into] = resp;
                 processQueue();
            });
        }
        else if (task.task == 'tap') {
            task.f(vars);
            processQueue();
        }
    }

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
}