/**
 * ES2015 version of MediaCodec2.js
 */

class Song {
  constructor(id, title, songKey, songJson) {
    this.id = id;
    this.title = title;
    this.songKey = songKey;
    this.songJson = songJson;
  }

  toHtml(transposeKey) { // TODO: Transposing keys with sharps or flats doesn't work?
    // TODO: This doesn't smell right, probably need to go with dependency injection at some point
    const transposer = this.createTransposer(transposeKey);

    let songHtml = `<div id='songInsert' class='SongNotes'>`;

    songHtml += this.songJson.parts.reduce((previousHtml, songPart) => {
      const partHtml = songPart.partData.reduce((previousPartHtml, songDatum) => {
        let partLineHtml;
        if (songDatum.lyric !== null) {
          partLineHtml = `
            <span class="lyricLine">${replaceAll(' ', '&nbsp;', songDatum.lyric)}</span>
          `;
        } else {
          let line = this.generateNoteLine(songDatum.note, transposer);  // TODO: songDatum.note should be notes someday
          partLineHtml = `<span class='noteLine'>${line}</span>`;
        }
        return previousPartHtml + '<br />' + partLineHtml;
      }, '');

      return previousHtml + `
        <div id="${songPart.partName}" class="songPart">
          <div class="songPartName">${songPart.partName}</div>
          ${partHtml}
        </div>
        <br />
      `;
    }, "");

    // Put everything together and close down.
    songHtml += "</div>";

    return songHtml;
  }

  generateNoteLine(notes, transposer) {
    let line = Array(150).join(" ");
    notes.forEach((note) => {
      const position = parseInt(note.position);
      line = replaceAt(line, position, transposer.transposeNote(note.note));
    });
    line = trimRight(line);  // Trim whitespace from the end of the line
    line = replaceAll(' ', '&nbsp;', line);

    return line;
  }

  createTransposer(transposeKey) {
    if (transposeKey === undefined) {
      transposeKey = this.songKey;
    }
    return new Transposer(this.songKey, transposeKey);
  }
}

class Transposer {
  static sharpKeys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  static flatKeys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  constructor(sourceKey, transposeKey) {
    this.sourceKey = sourceKey;
    this.transposeKey = transposeKey;
    this.noteShiftVal = null;
  }

  needsTransposition() {
    return this.sourceKey !== this.transposeKey;
  }

  transposeNote(note) {
    if (!this.needsTransposition()) {
      // No-op as it doesn't need to be transposed, it's in the proper key already.
      return note;
    }

    if (note.indexOf('/') >= 0) {
      // Complex note case like Csus4/F
      return note.split('/').map(this.transposeNote.bind(this)).join('/');
    }

    let intonation, isNoteFound, noteIndex;

    noteIndex = Transposer.flatKeys.indexOf(note);
    if (noteIndex >= 0) {
      intonation = 'flats';
      isNoteFound = true;
    } else {
      noteIndex = Transposer.sharpKeys.indexOf(note);
      if (noteIndex >= 0) {
        intonation = 'sharps';
        isNoteFound = true;
      }
    }

    if (isNoteFound === true) {
      const newNoteIndex = Transposer.shiftNote(noteIndex, this.getNoteShiftVal());
      if (intonation === 'flats') {
        return Transposer.flatKeys[newNoteIndex];
      } else if (intonation === 'sharps') {
        return Transposer.sharpKeys[newNoteIndex];
      }
    }

    if ('ABCDEFG'.indexOf(note.substring(0, 1)) >= 0) {
      if ('#b'.indexOf(note.substring(1, 2)) >= 0) {
        return this.transposeNote(note.substring(0, 2)) + note.substring(2);
      } else {
        return this.transposeNote(note.substring(0, 1)) + note.substring(1);
      }
    }
  }

  getNoteShiftVal() {
    if (this.noteShiftVal) {
      return this.noteShiftVal;
    }
    if (!this.needsTransposition()) {
      return 0;
    }

    const upperSongKey = this.sourceKey.toUpperCase();
    const upperTransposeKey = this.transposeKey.toUpperCase();

    let num1 = Transposer.flatKeys.indexOf(upperSongKey);
    num1 = Transposer.sharpKeys.indexOf(upperSongKey);
    let num2 = Transposer.flatKeys.indexOf(upperTransposeKey);
    num2 = Transposer.sharpKeys.indexOf(upperTransposeKey);

    this.noteShiftVal = (num2 - num1);
    return this.noteShiftVal;
  }

  static shiftNote(noteIndex, shiftBy) {
    if ((noteIndex + shiftBy) < 0) {
      return (noteIndex + shiftBy) + 12;
    } else if ((noteIndex + shiftBy) < 12) {
      return (noteIndex + shiftBy);
    } else {
      return (noteIndex + shiftBy) - 12;
    }
  }
}

function trimRight(str) {
  return str.replace(/\s*$/, "");
}

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function replaceAt(str, index, character) {
  return str.substr(0, index) + character + str.substr(index + character.length);
}

export { Song, Transposer };
