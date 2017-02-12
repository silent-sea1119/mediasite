import { replaceAt, replaceAll, trimRight } from './Song.js'

// Generates a note line without transcribing. Helpful for display.
function decodeNoteLine(notes) {
  let line = Array(150).join(" ");
  notes.forEach((note) => {
    const position = parseInt(note.position);
    line = replaceAt(line, position, note.note);
  });
  line = trimRight(line);  // Trim whitespace from the end of the line
  line = replaceAll('&nbsp;', ' ', line);

  return line;
}

function isNoteLine(line) {
  const legalChars = 'ABCDEFGabcdefgimjM2345679#SUsu/^|(): no';
  for(let i = 0; i < line.length; i++) {
    if (legalChars.indexOf(line[i]) === -1) {
      return false;
    }
  }
  return true;
}

function songParagraphToJson(partData) {
  if (!partData) {
    return [];
  }

  return partData.split('\n').reduce((prev, curr) => {
    let lyric = null;
    let note = null;

    if (isNoteLine(curr)) {
      note = songTextToJson(curr);
    } else {
      lyric = curr;
    }
    prev.push({ lyric, note });
    return prev;
  }, [])
}

function songTextToJson(songText) {
  const notes = [];
  if (!songText) return notes;

  let currentNote = '';
  let foundIndex = 0;

  for(let i = 0; i <= songText.length; i++) {
    let currentChar = songText[i];

    if (currentChar && currentChar !== ' ') {

      if (currentNote === '') {
        foundIndex = i;
      }
      currentNote += currentChar;
    } else {
      if (currentNote !== '') {
        notes.push({ note: currentNote, position: foundIndex });
        currentNote = '';
      }
    }

  }
  return notes;
}

export { decodeNoteLine, songTextToJson, isNoteLine, songParagraphToJson };
