/**
 * ES2015 version of MediaCodec2.js
 */

import { Transposer } from './Transposer.js';

class Song {
  constructor(id, title, songKey, songJson) {
    this.id = id;
    this.title = title;
    this.songKey = songKey;
    this.songJson = songJson;
  }

  toHtml(transposeKey) {
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
          partLineHtml = `<span class='SongNoteLine'>${line}</span>`;
        }
        return previousPartHtml + '<br />' + partLineHtml;
      }, '');

      return previousHtml + `
        <div id="${songPart.partName}" class="songPart">
          <div class="SongPartTitle">${songPart.partName}</div>
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
