const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'add a new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
       const notesData =  note.addNote(argv.title , argv.body);
        console.log(notesData);
    }
})


yargs.command({
    command: 'remove',
    describe: 'remove a new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        const notesData =  note.removeNote(argv.title , argv.body);
        console.log(notesData);
    }
})


yargs.command({
    command: 'list',
    describe: 'list all Notes',
    handler: function () {
        console.log('list function excuted ');
    }
})


yargs.command({
    command: 'read',
    describe: 'read a Note',
    builder: {
        id: {
            describe: 'id',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        if(argv.id >3){
            console.log("elso8nan");
        }else{
            console.log("Elkebeeer");
        }
        console.log('read function excuted ', argv.id);
    }
})


yargs.parse();

