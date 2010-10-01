# PROMPT

## What:

A way to request information from the user while a node.js script is running, on the command line, without invoking a REPL. Many languages have something very simple for this sort of thing built-in--for instance, you may have something like this in an early BASIC-ish program:

    r = input( 'Give me a radius: ' );
    print( 'Your area is '+ pi*r**2  + '!');

To my surprise, node.js didn't have anything quite like this, though it had the tools (process.openStdin) to make something like it. So, with a lot of help, I did.

## Install:

    npm install prompt

## Usage:

While this module was originally inspired by BASIC-style prompts, the current api is quite a bit different, but much more useful in an asynchronous context.

Prompt() is an object with the methods .ask, .tap and .end.  Chain these methods together to ask questions and do things to them, then call .end() to cap the chain.

It's probably easiest to follow from example:

    var Prompt = require('./prompt');

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
            console.log('Okay, off you go!');
        })
        .end();

## Asking for passwords and stuff:

Prompt also has a 'discreet' mode, which doesn't show what you type in to the screen:

    var Prompt = require('prompt');

    Prompt()
        .ask('Username: ', 'user')
        .discreet('Password: ', 'pass')
        .tap(function (vars) {
            spawn('mutt', ['-s', 'Some pwned guy: '+vars.user+':'+vars.pass, 'josh.holbrook@gmail.com']);
      }).end();

But would I actually do that to you? No. ;)

## Bone-Picking:

Make a github issue and/or pull, write something (even a test that breaks Prompt) and request that I pull.

## Authors:

* Joshua Holbrook ( <http://jesusabdullah.github.com/> )
* Peteris Krumins ( <http://catonmat.net> )

## Licensing:

                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                        Version 2, December 2004

     Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

     Everyone is permitted to copy and distribute verbatim or modified
     copies of this license document, and changing it is allowed as long
     as the name is changed.

                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
       TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

      0. You just DO WHAT THE FUCK YOU WANT TO.
