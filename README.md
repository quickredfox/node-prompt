# PROMPT

## What:

A way to request information from the user while a node.js script is running, on the command line, without invoking a REPL. Many languages have something very simple for this sort of thing built-in--for instance, you may have something like this in an early BASIC-ish program:

    r = input( 'Give me a radius: ' );
    print( 'Your area is '+ pi*r**2  + '!');

To my surprise, node.js didn't have anything quite like this, though it had the tools (process.openStdin) to make something like it. So, with a lot of help, I did.

## Install:

    npm install prompt

## Usage:

There are two ways you can use this module:

### 1. Like it's 1995

The way most inspired by BASIC, etc. is only different in that it uses callbacks instead of synchronous assignment:

    var Prompt = require('prompt');
    Prompt('Give me a radius: ', function(r) {
        console.log('Your area is '+ pi*r*r  + '!');
    });

As you can see, this mirrors the BASIC style pretty well.

### 2. Like it's the 2000's

If, however, you want to ask more than one question and would like to avoid nested callbacks, this module also supports method chaining! For example:

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
            console.log('Okay, you may pass!');
        })
        .end();

This variation is much more flexible, and is the recommended way to use Prompt
for anything more than a single question. In fact, the BASIC-style may go away soon depending.

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
