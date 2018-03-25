/**
 * Song domain object. Can render itself as HTML.
 */

import { Transposer } from './Transposer.js';

class Song {
  constructor(id, title, songKey, songJson) {
    this.id = id;
    this.title = title;
    this.songKey = songKey;
    this.songJson = songJson;
  }

  toHtml(transposeKey, textSize) {
    // TODO: This doesn't smell right, probably need to go with dependency injection at some point
    const transposer = this.createTransposer(transposeKey);

    let songHtml = `<div id='songInsert' class='SongNotes'>`;

    songHtml += this.songJson.parts.reduce((previousHtml, songPart) => {
      const partHtml = songPart.partData.reduce((previousPartHtml, songDatum) => {
        let partLineHtml;
        if (songDatum.lyric !== null) {
          partLineHtml = `
            <p class="lyricLine text-size-${textSize}">${replaceAll(' ', '&nbsp;', songDatum.lyric)}</p>
          `;
        } else {
          let line = this.generateNoteLine(songDatum.note, transposer);  // TODO: songDatum.note should be notes someday
          partLineHtml = `<p class='SongNoteLine text-size-${textSize}'>${line}</p>`;
        }
        return previousPartHtml + partLineHtml;
      }, '');

      return previousHtml + `
        <div id="${songPart.partName}" class="songPart">
          <div class="SongPartTitle">${songPart.partName}</div>
          ${partHtml}
        </div>
      `;
    }, "");

    // Put everything together and close down.
    songHtml += "</div>";

    return songHtml;
  }

  toVocalistHtml(textSize) {
    let songHtml = `<div id='songInsert' class='SongNotes'>`;

    songHtml += this.songJson.parts.reduce((previousHtml, songPart) => {
      const partHtml = songPart.partData.reduce((previousPartHtml, songDatum) => {
        let partLineHtml = '';
        if (songDatum.lyric !== null) {
          partLineHtml = `
            <p class="SongPartTitle text-size-${textSize}">${replaceAll(' ', '&nbsp;', songDatum.lyric)}</p>
          `;
        }
        return previousPartHtml + partLineHtml;
      }, '');

      return previousHtml + `
        <div id="${songPart.partName}" class="songPart">
          <div class="SongPartTitle text-size-${textSize - 4}">${songPart.partName}</div>
          ${partHtml}
        </div>
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
      let transposedNote;
      if (this.noteIsHeld(note.note)) {
        // %20 is a hack to get around the replaceAll that is coming below
        transposedNote = `<span%20class='held'><span%20class='note'>${transposer.transposeNote(note.note.slice(0, note.note.length - 1))}</span></span>`;
      } else if (this.noteIsChoked(note.note)) {
        transposedNote = `<span%20class='choked'><span%20class='note'>${transposer.transposeNote(note.note.slice(1, note.note.length))}</span></span>`;
      } else {
        transposedNote = transposer.transposeNote(note.note);
      }
      line = replaceAt(line, position, transposedNote);
    });
    line = trimRight(line);  // Trim whitespace from the end of the line
    line = replaceAll(' ', '&nbsp;', line);
    line = decodeURIComponent(line);

    return line;
  }

  noteIsChoked(note) {
    return note.indexOf('^') === 0;
  }

  noteIsHeld(note) {
    return note.indexOf('^') === note.length - 1;
  }

  createTransposer(transposeKey) {
    if (transposeKey === undefined) {
      transposeKey = this.songKey;
    }
    return new Transposer(this.songKey, transposeKey);
  }
}

// Some helpful functions.
function trimRight(str) {
  return str.replace(/\s*$/, "");
}

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function replaceAt(str, index, character) {
  return str.substr(0, index) + character + str.substr(index + character.length);
}

export { Song, trimRight, replaceAll, replaceAt };
