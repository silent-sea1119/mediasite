import expect from 'expect';
import { Song, Transposer, songTextToJson } from './index.js';

const testDataJson = {
    "id": 3708,
    "parts": [
        {
            "partData": [
                {
                    "note": [
                        {
                            "position": 1,
                            "note": "G5"
                        }, {
                            "position": 6,
                            "note": "D4/F#"
                        }, {
                            "position": 18,
                            "note": "Em7"
                        }, {
                            "position": 22,
                            "note": "D4/F#"
                        }
                    ],
                    "lyric": null
                },
                {
                    "note": [],
                    "lyric": "Praise to You, God"
                },
                {
                    "note": [
                        {
                            "position": 1,
                            "note": "G5"
                        }, {
                            "position": 6,
                            "note": "D4/F#"
                        }, {
                            "position": 19,
                            "note": "Em7"
                        }, {
                            "position": 23,
                            "note": "D4/F#"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "Father of our Lord"
                }, {
                    "note": [
                        {
                            "position": 7,
                            "note": "C"
                        }, {
                            "position": 11,
                            "note": "G/B"
                        }, {
                            "position": 19,
                            "note": "Am7"
                        }, {
                            "position": 24,
                            "note": "Am7/G"
                        }, {
                            "position": 30,
                            "note": "D"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "For great is Your mercy    on us"
                }
            ],
            "partName": "Verse 1"
        }, {
            "partData": [
                {
                    "note": [
                        {
                            "position": 1,
                            "note": "G5"
                        }, {
                            "position": 6,
                            "note": "D4/F#"
                        }, {
                            "position": 18,
                            "note": "Em7"
                        }, {
                            "position": 22,
                            "note": "D4/F#"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "Praise to You, God"
                }, {
                    "note": [
                        {
                            "position": 1,
                            "note": "G5"
                        }, {
                            "position": 12,
                            "note": "D4/F#"
                        }, {
                            "position": 26,
                            "note": "Em7"
                        }, {
                            "position": 30,
                            "note": "D4/F#"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "You've given us new birth"
                }, {
                    "note": [
                        {
                            "position": 3,
                            "note": "C"
                        }, {
                            "position": 8,
                            "note": "G/B"
                        }, {
                            "position": 18,
                            "note": "Am7"
                        }, {
                            "position": 22,
                            "note": "Am7/G"
                        }, {
                            "position": 38,
                            "note": "D"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "Into a living hope       through Your Son"
                }
            ],
            "partName": "Verse 2"
        }, {
            "partData": [
                {
                    "note": [
                        {
                            "position": 1,
                            "note": "C"
                        }, {
                            "position": 4,
                            "note": "D"
                        }, {
                            "position": 8,
                            "note": "Em"
                        }, {
                            "position": 11,
                            "note": "D"
                        }, {
                            "position": 13,
                            "note": "C"
                        }, {
                            "position": 19,
                            "note": "D"
                        }, {
                            "position": 32,
                            "note": "Em"
                        }, {
                            "position": 35,
                            "note": "D"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "In You      we greatly rejoice"
                }, {
                    "note": [
                        {
                            "position": 1,
                            "note": "C"
                        }, {
                            "position": 4,
                            "note": "D"
                        }, {
                            "position": 8,
                            "note": "Em"
                        }, {
                            "position": 11,
                            "note": "D"
                        }, {
                            "position": 21,
                            "note": "C"
                        }, {
                            "position": 30,
                            "note": "D"
                        }, {
                            "position": 40,
                            "note": "G5"
                        }, {
                            "position": 43,
                            "note": "D4/F#"
                        }, {
                            "position": 49,
                            "note": "Em7"
                        }, {
                            "position": 53,
                            "note": "D4/F#"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "In You    we have joy in a living hope"
                }
            ],
            "partName": "Chorus"
        }
    ],
    "title": "A Living Hope",
    "key": "G",
    "partCount": 3
};

describe('media codec', function () {
  describe('Song', function () {
    beforeEach(function () {
      this.song = new Song(3708, 'A Living Hope', 'G', testDataJson);
    });

    describe('toHtml', function () {
      it('should take in a transposition key and return html', function () {
        const actual = this.song.toHtml('G');
        expect(actual.substring(0, 4)).toEqual('<div');
      });
    });

    describe('generateNoteLine', function () {
      it('should return \'G\' for an array passed in with 1, G', function () {
        const transposer = new Transposer('G', 'G');
        const actual = this.song.generateNoteLine([{note: 'G', position: 0}], transposer);
        const expected = "G";
        expect(actual).toEqual(expected);
      });

      it('should return a crazy string for an array passed in with lots of notes', function () {
        const transposer = this.song.createTransposer();
        const actual = this.song.generateNoteLine([
            {"position": 1,"note": "C"}, {"position": 4,"note": "D"}, {"position": 8,"note": "Em"}, {"position": 11,"note": "D"}, {"position": 21,"note": "C"}, {"position": 30,"note": "D"}, {"position": 40,"note": "G5"}, {"position": 43,"note": "D4/F#"}, {"position": 49,"note": "Em7"}, {"position": 53,"note": "D4/F#"}],
          transposer);
        expect(actual).toEqual('&nbsp;C&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;Em&nbsp;D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;G5&nbsp;D4/F#&nbsp;Em7&nbsp;D4/F#');
      });
    });

    describe('createTransposer', function () {
      it('should use the key passed in if it is not undefined', function () {
        const actual = this.song.createTransposer('A');
        expect(actual.transposeKey).toEqual('A');
      });

      it('should use the song\'s key if the transposeKey is not passed in', function () {
        const actual = this.song.createTransposer();
        expect(actual.transposeKey).toEqual(this.song.songKey);
      });
    });
  });

  describe('Transposer', function () {
    describe('needsTransposition', function () {
      it('should be false if songKey and transposeKey are equal', function () {
        const actual = new Transposer('G', 'G').needsTransposition();
        expect(actual).toEqual(false);
      });

      it('should be true if songKey and transposeKey are not equal', function () {
        const actual = new Transposer('G', 'A').needsTransposition();
        expect(actual).toEqual(true);
      });
    });

    describe('transposeNote', function () {
      beforeEach(function () {
        this.tposer = new Transposer('G', 'A');
      });

      it('should do nothing if a note does not need to be transposed', function () {
        const actual = new Transposer('G', 'G').transposeNote('A')
        expect(actual).toEqual('A');
      });
    });

    describe('getNoteShiftVal', function () {
      it('should return noteShiftVal if it has already been set', function () {
        const tposer = new Transposer('G', 'A');
        tposer.noteShiftVal = 1;
        const actual = tposer.getNoteShiftVal();
        expect(actual).toEqual(1);
      });

      it('should return 1 for the difference between G# and A', function () {
        const tposer = new Transposer('G#', 'A');
        const actual = tposer.getNoteShiftVal();
        expect(actual).toEqual(1);
      });

      it('should return 2 for the difference between G and A', function () {
        const tposer = new Transposer('G', 'A');
        const actual = tposer.getNoteShiftVal();
        expect(actual).toEqual(2);
      });
    });

    describe('shiftNote', function () {
      it('should shift a note\'s index by a positive amount if requested', function () {
        expect(Transposer.shiftNote(5, 2)).toEqual(7);
      });

      it('should wrap around if the notes value would go above 12', function () {
        expect(Transposer.shiftNote(11, 4)).toEqual(3);
      });
    });

    describe('transposeNote', function () {
      it('should transpose a G to an A if that is what is set', function () {
        const actual = new Transposer('G', 'A').transposeNote('G');
        expect(actual).toBe('A');
      });

      it('should transpose A/A to G/G if transposing A to G', function () {
        const actual = new Transposer('A', 'G').transposeNote('A/A');
        expect(actual).toBe('G/G');
      });

      it('should transpose Am to Gm if transposing A to G', function () {
        const actual = new Transposer('A', 'G').transposeNote('Am');
        expect(actual).toBe('Gm');
      });

      it('should transpose Dsus4 to Csus4', function () {
        const actual = new Transposer('D', 'C').transposeNote('Dsus4');
        expect(actual).toBe('Csus4');
      });

      it('should transpose Csus4/F to Dsus4/G', function () {
        const actual = new Transposer('C', 'D').transposeNote('Csus4/F');
        expect(actual).toBe('Dsus4/G');
      });

      it('should transpose Bb to C', function () {
        const actual = new Transposer('Bb', 'C').transposeNote('Bb');
        expect(actual).toBe('C');
      });

      it('should transpose Cb to Eb when transposing Gb to A', function () {
          const actual = new Transposer('Gb', 'A').transposeNote('Cb');
          expect(actual).toBe('D');
      });

      describe('transcribing Gb to C', function () {
          it('should transpose Ebm to Am', function () {
              const tranny = new Transposer('Gb', 'C');
              const actual = tranny.transposeNote('Ebm');
              expect(actual).toBe('Am');
          })
      })
    });

    describe('getNoteIndex', function () {
      it('should return 0 for C', function () {
        expect(Transposer.getNoteIndex('C')).toBe(0);
      });

      it('should return 2 for D', function () {
        expect(Transposer.getNoteIndex('D')).toBe(2);
      });

      it('should return 3 for D#', function () {
        expect(Transposer.getNoteIndex('D#')).toBe(3);
      });

      it('should return 1 for Db', function () {
        expect(Transposer.getNoteIndex('Db')).toBe(1);
      });

      it('should return 11 for B', function () {
        expect(Transposer.getNoteIndex('B')).toBe(11);
      })
    });
  });
});
