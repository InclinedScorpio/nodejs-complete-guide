const fs = require("fs");
const chalk = require("chalk");

const saveNote = (notes) => {
  const stringifiedNotes = JSON.stringify(notes);
  fs.writeFileSync("notes.json", stringifiedNotes);
};

const addNote = (title, body) => {
  const arrNotes = getNotes();
  // const titleAlreadyPresent = arrNotes.filter((note) => note.title === title);
  const titleAlreadyPresent = arrNotes.find((note) => note.title === title);
  console.log("Title already---> ", titleAlreadyPresent);

  if (!titleAlreadyPresent) {
    arrNotes.push({ title, body });
    saveNote(arrNotes);
    console.log(chalk.green.bold.inverse("Saved"));
  } else {
    console.log(chalk.red.bold.inverse("Not saved. Title already present!"));
  }
};

const readNote = (title) => {
  const allNotes = getNotes();
  const noteExtracted = allNotes.find(note=> note.title===title);
  if(noteExtracted) {
    printNote(noteExtracted);
    console.log(chalk.whiteBright("\n==============\n"));

  }else {
    console.log(chalk.red.bold.inverse("Ah, can't find note with given title"));
  }
}

const getNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notes = notesBuffer.toString();
    return JSON.parse(notes);
  } catch (err) {
    return [];
  }
};

const printNote = (note) => {
  console.log(chalk.whiteBright("\n==============\n"));
  console.log(chalk.blue.bold(note.title));
  console.log(chalk.whiteBright(note.body));
}

const listNotes = () => {
  const allNotes = getNotes();
  console.log(chalk.cyan.bold(" Your notes 👇 "));
  allNotes.forEach((note) => {
    printNote(note);
  });
  console.log(chalk.whiteBright("\n==============\n"));
};

const removeNotes = (title) => {
  const notes = getNotes();
  const newNotesList = notes.filter((note) => note.title !== title);
  if (notes.length === newNotesList.length) {
    console.log(chalk.red.bold.inverse("Ah, can't find note with given title"));
  } else {
    saveNote(newNotesList);
    console.log(chalk.green.bold.inverse("Note removed successfully"));
  }
};

module.exports = {
  addNote,
  getNotes,
  readNote,
  listNotes,
  removeNotes,
};
