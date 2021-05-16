const yargs = require("yargs");
const {addNote, removeNotes, listNotes, readNote} = require("./notes");

// cutomize args version
yargs.version("1.1.0")

yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title: {
            describe:"Title of the note",
            demandOption: true,
            type:'string'
        },
        body: {
            describe:"Body of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "title of note to remove",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        removeNotes(argv.title)
    }
});

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Title of the note to read",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        readNote(argv.title)
    }
});

yargs.command({
    command: "list",
    describe: "List all the notes",
    handler() {
        listNotes();
    }
})

yargs.parse();
// console.log(yargs.argv);