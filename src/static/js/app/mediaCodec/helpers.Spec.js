import expect from 'expect';
import { songTextToJson, isNoteLine } from './helpers.js';

describe('Song Helper Functions', function () {
  describe('songTextToJson', function () {
    it('should return [{A: 0, C: 10}] for a string of "A         C"', function () {
      const actual = songTextToJson('A         C');
      const expected = [
        { note: 'A', position: 0 },
        { note: 'C', position: 10 }
      ];
      expect(expected).toEqual(actual);
    });

    it('should return [{Fmaj7: 0, C: 6}] for a string of "Fmaj7 C"', function () {
      const actual = songTextToJson('Fmaj7 C');
      const expected = [
        { note: 'Fmaj7', position: 0 },
        { note: 'C', position: 6 }
      ];
      expect(expected).toEqual(actual);
    });

    it('should return [{Fmaj7: 0, C: 6}] for a string of "Fmaj7 C"', function () {
      const actual = songTextToJson('     Gm7        F         Bb  Eb2');
      const expected = [
        { note: 'Gm7', position: 5 },
        { note: 'F', position: 16 },
        { note: 'Bb', position: 26 },
        { note: 'Eb2', position: 30 },
      ];
      expect(expected).toEqual(actual);
    });
  });

  describe('isNoteLine', function () {
    it('should return true for a line that contains chord notes', function () {
      expect(isNoteLine("G   C   D")).toBe(true);
    });

    it('should return false for a line that contains playing instructions', function () {
      expect(isNoteLine('(x2)')).toBe(false);
    });

    it('should return false for a line that contains lyrics', function () {
      expect(isNoteLine('Oh Canada')).toBe(false);
    });
  });
});
