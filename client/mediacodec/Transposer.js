class Transposer {
  static sharpKeys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  static sharpKeySignatures = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
  static flatKeys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  static flatKeySignatures = ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'];

  // For UI, mostly.
  static allKeys = unique(Transposer.sharpKeySignatures.concat(Transposer.flatKeySignatures).sort());

  constructor(songKey, transposeKey) {
    this.songKey = songKey;
    this.transposeKey = transposeKey;
    this.noteShiftVal = null;

    if (Transposer.sharpKeySignatures.indexOf(songKey) !== -1) {
      this.originalIntonation = 'sharps';
    } else if (Transposer.flatKeySignatures.indexOf(songKey) !== -1) {
      this.originalIntonation = 'flats';
    }

    if (Transposer.sharpKeySignatures.indexOf(transposeKey) !== -1) {
      this.transposeIntonation = 'sharps';
    } else if (Transposer.flatKeySignatures.indexOf(transposeKey) !== -1) {
      this.transposeIntonation = 'flats';
    }
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

    let isNoteFound, noteIndex;

    const originalKeys = this.originalIntonation === 'flats' ? Transposer.flatKeys : Transposer.sharpKeys;
    const transposeKeys = this.transposeIntonation === 'flats' ? Transposer.flatKeys : Transposer.sharpKeys;
    
    noteIndex = originalKeys.indexOf(note);
    if (noteIndex >= 0) {
      isNoteFound = true;
    } else if (note === 'Cb') {
      isNoteFound = true;
      noteIndex = 11;
    }

    if (isNoteFound === true) {
      const newNoteIndex = Transposer.shiftNote(noteIndex, this.getNoteShiftVal());
      return transposeKeys[newNoteIndex];
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

function unique(arr) {
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}

export { Transposer };
