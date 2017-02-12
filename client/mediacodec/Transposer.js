class Transposer {
  static sharpKeys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  static flatKeys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  constructor(songKey, transposeKey) {
    this.songKey = songKey;
    this.transposeKey = transposeKey;
    this.noteShiftVal = null;
  }

  needsTransposition() {
    return this.songKey !== this.transposeKey;
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

    this.noteShiftVal = (Transposer.getNoteIndex(this.transposeKey) - Transposer.getNoteIndex(this.songKey));
    return this.noteShiftVal;
  }

  static getNoteIndex(strNote) {
    const sharpIndex = Transposer.sharpKeys.indexOf(strNote);
    const flatIndex = Transposer.flatKeys.indexOf(strNote);

    return sharpIndex === -1 ? flatIndex : sharpIndex;
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

export { Transposer };
