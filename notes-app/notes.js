const fs = require('fs');
const chalk = require('chalk');
const getNotes = function () {
    return 'Your notes...ssda'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        return notes
    }
    return notes
}
const removeNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return !(note.title === title)
    })
    if (duplicateNotes.length === notes.length) {
        console.log(chalk.red.inverse("note deos not exist"));
        return notes
    }
    console.log(chalk.green.inverse("note deleted succefully"));
    saveNotes(duplicateNotes)
    return duplicateNotes
}




const saveNotes = function (notes) {
    const dataBuffer = fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString);
    } catch (e) {
        console.log(e);
        return []
    }

}

module.exports = { getNotes: getNotes, addNote: addNote, removeNote: removeNote }