/* @flow */
//*************************************************************************************************************//
//    Media Site encoder/decoder for song data == JavaScript Port                                              //
//*************************************************************************************************************//

//*****************************************************************************************************************//
// ENUMS & DECLARES //
//*****************************************************************************************************************//

var ENCODETYPE = {
  Legacy: 0,
  XML: 1,
  PlainText: 2,
  HTML: 3,
  PlainTextLyric: 4,
  Json: 5,
  NONE: 99
};

var LINETYPE = {
  Lyric: 0,
  Notes: 1
};

var OBJECTTYPE = {
  song: 0,
  songPart: 1,
  songNoteLine: 2,
  songNote: 4,
  songLyricLine: 3
};

var XMLTAGS = {
  song: 'SONG',
  part: 'PART',
  lyricLine: 'LYRICLINE',
  noteLine: 'NOTELINE',
  note: 'NOTE',
  xpos: 'XPOS'
};

var HTML_CLASS_NAMES = {
  song: 'songContainer',
  part: 'songPart',
  partName: 'songPartName',
  lyricLine: 'lyricLine',
  noteLine: 'noteLine'
};

var vbCrLf = '\r\n';


function Song(config, id, title, pSongKey) {
  this.config = config;
  this.id = id;
  this.title = title;
  this.key = pSongKey;

  //*****************************************************************************************************************//
  // Encode Functions //
  //*****************************************************************************************************************//

  this.Encode = function(pJsonData, pEncodeTo, pTransposeKey) {
    var transposeObj = new transposer(this.key, pTransposeKey);

    switch (pEncodeTo) {
      case ENCODETYPE.HTML:
        return encodeHTML(pJsonData, OBJECTTYPE.song, transposeObj);
      case ENCODETYPE.PlainText:
        return encodePlainText(pJsonData, OBJECTTYPE.song, true);
      case ENCODETYPE.PlainTextLyric:
        return encodePlainText(pJsonData, OBJECTTYPE.song, false);
      case ENCODETYPE.Legacy:
        return encodeLegacy(pJsonData, OBJECTTYPE.song);
      case ENCODETYPE.Json:
        return pJsonData;
      case ENCODETYPE.XML:
        return encodeXML(pJsonData, OBJECTTYPE.song, this);
    }
  };

  function encodeLegacy(pJsonData, pObjectType) {
    var retData = "";
    switch (pObjectType) {
      case OBJECTTYPE.song:
        var headerDataArr = [];
        var partDataArr = [];
        headerDataArr.push(pJsonData.parts.length);
        jQuery.each(pJsonData.parts, function() {
          headerDataArr.push(this.partName);
          partDataArr.push(encodeLegacy(this, OBJECTTYPE.songPart));
        });
        retData += "<" + headerDataArr.join() + ">";
        retData += partDataArr.join("");
        break;
      case OBJECTTYPE.songPart:
        var partLineArr = [];
        jQuery.each(pJsonData.partData, function() {
          if (typeof this.lyric !== "undefined") {
            partLineArr.push(encodeLegacy(this, OBJECTTYPE.songLyricLine));
          } else {
            partLineArr.push(encodeLegacy(this, OBJECTTYPE.songNoteLine));
          }
        });
        retData = "<" + pJsonData.partName + ">" + partLineArr.join('<NL>') + "</" + pJsonData.partName + ">";
        break;
      case OBJECTTYPE.songLyricLine:
        retData = pJsonData.lyric;
        break;
      case OBJECTTYPE.songNoteLine:
        var noteLineArr = [];
        jQuery.each(pJsonData.note, function() {
          var note = this.note;
          var position = parseInt(this.position);
          noteLineArr.push("<" + note + "," + position + ">");
        });
        retData += noteLineArr.join('');
        break;
    }
    return retData;
  }

  function encodeXML(pJsonData, pObjectType, root) {
    var retData = "";
    switch (pObjectType) {
      case OBJECTTYPE.song:
        retData += "<" + XMLTAGS.song + " SongID='" + root.id + "' TotalParts='" + pJsonData.parts.length + "' Title='" + root.title + "'>";
        jQuery.each(pJsonData.parts, function() {
          retData += "<" + XMLTAGS.part + " Name='" + this.partName + "'>";
          retData += encodeXML(this, OBJECTTYPE.songPart);
          retData += "</" + XMLTAGS.part + ">";
        });
        retData += "</" + XMLTAGS.song + ">";
        break;
      case OBJECTTYPE.songPart:
        jQuery.each(pJsonData.partData, function() {
          if (typeof this.lyric !== "undefined") {
            retData += encodeXML(this, OBJECTTYPE.songLyricLine);
          }
          if (typeof this.note !== "undefined") {
            retData += encodeXML(this, OBJECTTYPE.songNoteLine);
          }
        });
        break;
      case OBJECTTYPE.songLyricLine:
        retData = "<" + XMLTAGS.lyricLine + ">" + pJsonData.lyric + "</" + XMLTAGS.lyricLine + ">";
        break;
      case OBJECTTYPE.songNoteLine:
        retData = "<" + XMLTAGS.noteLine + ">";
        jQuery.each(pJsonData.note, function() {
          retData += "<" + XMLTAGS.note + " " + XMLTAGS.xpos + "='" + this.position + "'>" + this.note + "</" + XMLTAGS.note + ">";
        });
        retData += "</" + XMLTAGS.noteLine + ">";
        break;
    }
    return retData;
  }

  function encodePlainText(pJsonData, pObjectType, includeNotes) {
    var retData = "";
    switch (pObjectType) {
      case OBJECTTYPE.song:
        var partNames = [];
        var partText = [];
        jQuery.each(pJsonData.parts, function() {
          partNames.push(this.partName);
          partText.push(encodePlainText(this, OBJECTTYPE.songPart, includeNotes));
        });
        retData = {
          partNames: partNames,
          partText: partText
        };
        break;
      case OBJECTTYPE.songPart:
        var partLineArr = [];
        jQuery.each(pJsonData.partData, function() {
          if (typeof this.lyric !== "undefined") {
            partLineArr.push(encodePlainText(this, OBJECTTYPE.songLyricLine, includeNotes));
          } else {
            partLineArr.push(encodePlainText(this, OBJECTTYPE.songNoteLine, includeNotes));
          }
        });
        retData = partLineArr.join(vbCrLf);
        break;
      case OBJECTTYPE.songLyricLine:
        retData = pJsonData.lyric;
        break;
      case OBJECTTYPE.songNoteLine:
        if (includeNotes === true) {
          var line = Array(150).join(" ");
          jQuery.each(pJsonData.note, function() {
            var note = this.note;
            var position = parseInt(this.position);
            line = replaceAt(line, position, note);
          });
          line = line.replace(/\s*$/, "");
          retData += line;
          break;
        }
        break;

    }

    return retData;
  }

  function encodeHTML(pJsonData, pObjectType, pTransposeObj) {
    var retData = "";
    console.log(pJsonData, pObjectType, pTransposeObj);

    switch (pObjectType) {
      case OBJECTTYPE.song:
        retData += "<div id='songInsert' songId='" + pJsonData.id + "'>";
        jQuery.each(pJsonData.parts, function() {
          retData += encodeHTML(this, OBJECTTYPE.songPart, pTransposeObj);
        });
        retData += "</div>";
        break;
      case OBJECTTYPE.songPart:
        var partLineArr = [];
        retData += "<div id='" + pJsonData.partName + "' class='" + HTML_CLASS_NAMES.part + "'>";
        retData += "<div class='" + HTML_CLASS_NAMES.partName + "'>" + pJsonData.partName + "</div>";
        jQuery.each(pJsonData.partData, function() {
          if (typeof this.lyric !== "undefined") {
            partLineArr.push(encodeHTML(this, OBJECTTYPE.songLyricLine, pTransposeObj));
          }
          if (typeof this.note !== "undefined") {
            partLineArr.push(encodeHTML(this, OBJECTTYPE.songNoteLine, pTransposeObj));
          }
        });
        retData += partLineArr.join('<br/>');
        retData += "</div>";
        break;
      case OBJECTTYPE.songLyricLine:
        retData += "<span class='" + HTML_CLASS_NAMES.lyricLine + "'>";
        retData += pJsonData.lyric;
        retData += "</span>";
        break;
      case OBJECTTYPE.songNoteLine:
        var line = Array(150).join(" ");
        jQuery.each(pJsonData.note, function() {
          var note = this.note;
          var position = parseInt(this.position);
          if (pTransposeObj.numTransposeVal === 0) {
            line = replaceAt(line, position, note);
          } else {
            line = replaceAt(line, position, encodeHTML(note, OBJECTTYPE.songNote, pTransposeObj));
          };
        });
        line = line.replace(/\s*$/, "");
        line = replaceAll(' ', '&nbsp;', line);
        retData += "<span class='" + HTML_CLASS_NAMES.noteLine + "'>";
        retData += line;
        retData += "</span>";
        break;
      case OBJECTTYPE.songNote:
        return pTransposeObj.transposeNote(pJsonData);
    }

    return retData;
  }

  //*****************************************************************************************************************//
  // Decode Functions //
  //*****************************************************************************************************************//

  this.Decode = function(pDataStream, pDecodeFrom) {
    switch (pDecodeFrom) {
      case ENCODETYPE.Legacy:
        return decodeLegacy(pDataStream, OBJECTTYPE.song, this);
      case ENCODETYPE.XML:
        return decodeXML(pDataStream, OBJECTTYPE.song, this);
      case ENCODETYPE.PlainText:
        return decodePlainText(pDataStream, OBJECTTYPE.song, this);
    }
  };

  function decodeXML(pData, pObjectType, root) {
    var retData = {};

    switch (pObjectType) {
      case OBJECTTYPE.song:
        retData = {
          id: root.id,
          title: root.title,
          key: root.config.key,
          partCount: 0,
          parts: []
        };
        var xmlDoc = $($.parseXML(pData));
        var xmlNode = xmlDoc.find(XMLTAGS.song);
        retData.id = parseInt(xmlNode.attr("SongID"));
        retData.title = xmlNode.attr("Title");
        retData.partCount = parseInt(xmlNode.attr("TotalParts"));

        xmlDoc.find(XMLTAGS.part).each(function() {
          retData.parts.push(decodeXML({
            partName: $(this).attr("Name"),
            partEncodedData: $(this)
          }, OBJECTTYPE.songPart, root));
        });

        break;
      case OBJECTTYPE.songPart:
        retData = {
          partName: pData.partName,
          partData: []
        };
        $(pData.partEncodedData).find(XMLTAGS.noteLine + ',' + XMLTAGS.lyricLine).each(function() {
          if (this.tagName == XMLTAGS.noteLine) {
            retData.partData.push(decodeXML($(this), OBJECTTYPE.songNoteLine, root));
          } else {
            retData.partData.push(decodeXML($(this), OBJECTTYPE.songLyricLine, root));
          }
        });
        break;
      case OBJECTTYPE.songLyricLine:
        retData = {
          lyric: ''
        };
        retData.lyric = pData.text();
        break;
      case OBJECTTYPE.songNoteLine:
        retData = {
          note: []
        };
        $(pData).find(XMLTAGS.note).each(function() {
          retData.note.push(decodeXML($(this), OBJECTTYPE.songNote, root));
        });
        break;
      case OBJECTTYPE.songNote:
        retData = {
          position: 0,
          note: ''
        };
        retData.position = parseInt(pData.attr(XMLTAGS.xpos));
        retData.note = pData.text();
        break;
    }

    return retData;

  }

  function decodeLegacy(pData, pObjectType, root) {
    var retData = {};

    switch (pObjectType) {
      case OBJECTTYPE.song:
        retData = {
          id: root.id,
          title: root.title,
          key: root.config.key,
          partCount: 0,
          parts: []
        };

        //'Extract Header
        var header = pData.substring(1, (pData.indexOf(">")));
        var temp = header.substring(0, (header.indexOf(",")));

        //'Get # of Parts
        retData.partCount = parseInt(temp);

        //'Get Part Name List
        temp = header.substring(header.indexOf(",") + 1);
        var partNamesList = temp.split(",");

        for (var i = 0; i < partNamesList.length; i++) {
          temp = partNamesList[i];
          var startTagPos = pData.indexOf('<' + temp + '>');
          var endTagPos = pData.indexOf('</' + temp + '>');
          var start = startTagPos + (temp.length + 2);
          retData.parts.push(decodeLegacy({
            partName: temp,
            partEncodedData: pData.substring(start, endTagPos)
          }, OBJECTTYPE.songPart));
        }
        break;
      case OBJECTTYPE.songPart:
        retData = {
          partName: pData.partName,
          partData: []
        };
        var lineArr = pData.partEncodedData.split('<NL>');
        for (i = 0; i < lineArr.length; i++) {
          if (lineArr[i].indexOf("<") > -1 && lineArr[i].indexOf(">") > -1) {
            retData.partData.push(decodeLegacy(lineArr[i], OBJECTTYPE.songNoteLine));
          } else {
            retData.partData.push(decodeLegacy(lineArr[i], OBJECTTYPE.songLyricLine));
          }
        }
        break;
      case OBJECTTYPE.songLyricLine:
        retData = {
          lyric: ''
        };
        retData.lyric = pData;
        break;
      case OBJECTTYPE.songNoteLine:
        retData = {
          note: []
        };
        var noteArr = pData.split(">");
        for (i = 0; i < noteArr.length; i++) {
          temp = noteArr[i].trim();
          temp = replaceAll("<", "", temp);
          noteItemArr = temp.split(",");
          if (temp !== '') {
            retData.note.push(decodeLegacy(noteItemArr, OBJECTTYPE.songNote));
          }
        }
        break;
      case OBJECTTYPE.songNote:
        retData = {
          position: 0,
          note: ''
        };
        retData.position = pData[1];
        retData.note = pData[0];
        break;
    }

    return retData;
  }

  function decodePlainText(pData, pObjectType, root) {
    var retData = {};

    switch (pObjectType) {
      case OBJECTTYPE.song:
        retData = {
          id: 0,
          title: 0,
          key: 'C',
          partCount: pData.partName.length,
          parts: []
        };

        for (var i = 0; i < pData.partData.length; i++) {
          retData.parts.push(decodePlainText({
            partName: pData.partName[i],
            partData: pData.partData[i]
          }, OBJECTTYPE.songPart, root));
        }
        break;
      case OBJECTTYPE.songPart:
        retData = {
          partName: pData.partName,
          partData: []
        };
        var lineArr = pData.partData.split(vbCrLf);
        for (i = 0; i < lineArr.length; i++) {
          var bLegal = true;

          for (var j = 0; j < lineArr[i].length; j++) {
            if (root.config.legalChars.indexOf(lineArr[i].substring(j, 1)) == -1) {
              bLegal = false;
              break;
            }
          }

          if (bLegal) {
            retData.partData.push(decodePlainText(lineArr[i], OBJECTTYPE.songNoteLine, root));
          } else {
            retData.partData.push(decodePlainText(lineArr[i], OBJECTTYPE.songLyricLine, root));
          }

        }
        break;
      case OBJECTTYPE.songLyricLine:
        retData = {
          lyric: ''
        };
        retData.lyric = pData;
        break;
      case OBJECTTYPE.songNoteLine:
        retData = {
          note: []
        };
        var pos1 = 0;
        var pos2 = 0;
        var temp = '';

        for (pos1 = 0; pos1 < pData.length; pos1++) {

          if (pData.substring(pos1, 1) == ' ') {
            //'Do nothing - Keep Truckin'

          } else {
            //'Now we have SOMETHING
            temp = pData.substring(pos1, 1);
            for (pos2 = pos1 + 1; pos2 < pData.length; pos2++) {
              if (pData.substring(pos2, 1) !== ' ') {
                temp += pData.substring(pos2, 1);
              } else {
                //We are done the note. Make an Entry
                retData.note.push({
                  note: temp,
                  position: pos1
                });
                pos1 = pos2;
                temp = '';
                break;
              }

            }

          }


          if (temp !== '') {
            retData.note.push({
              note: temp,
              position: pos1
            });
            pos1 = pos2;
          }

        }

        break;
    }

    return retData;
  }

  //*****************************************************************************************************************//
  // Library Functions //
  //*****************************************************************************************************************//

  function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  function replaceAt(myString, index, character) {
    return myString.substr(0, index) + character + myString.substr(index + character.length);
  }


}

//*****************************************************************************************************************//
// Transposer Class -- Will take a note and shift the key based on the two input params //
//*****************************************************************************************************************//

function transposer(pKey, pTransposeKey) {
  this.key = pKey;
  this.transposeKey = pTransposeKey;
  this.noteArray1 = {};
  this.noteArray2 = {};
  this.noteArray1[0] = 'C';
  this.noteArray2[0] = 'C';
  this.noteArray1[1] = 'C#';
  this.noteArray2[1] = 'Db';
  this.noteArray1[2] = 'D';
  this.noteArray2[2] = 'D';
  this.noteArray1[3] = 'D#';
  this.noteArray2[3] = 'Eb';
  this.noteArray1[4] = 'E';
  this.noteArray2[4] = 'E';
  this.noteArray1[5] = 'F';
  this.noteArray2[5] = 'F';
  this.noteArray1[6] = 'F#';
  this.noteArray2[6] = 'Gb';
  this.noteArray1[7] = 'G';
  this.noteArray2[7] = 'G';
  this.noteArray1[8] = 'G#';
  this.noteArray2[8] = 'Ab';
  this.noteArray1[9] = 'A';
  this.noteArray2[9] = 'A';
  this.noteArray1[10] = 'A#';
  this.noteArray2[10] = 'Bb';
  this.noteArray1[11] = 'B';
  this.noteArray2[11] = 'B';

  this.numTransposeVal = getNoteShiftVal(this.key, this.transposeKey, this.noteArray1, this.noteArray2);

  function getNoteShiftVal(pSongKey, pTransposeKey, noteArray1, noteArray2) {
    var i = 0;
    var num1 = 0;
    var num2 = 0;

    if (pSongKey === pTransposeKey) {
      return 0;
    }

    for (i = 0; i < 12; i++) {
      if (noteArray1[i].toUpperCase() == pSongKey.toUpperCase()) {
        num1 = i;
      }
      if (noteArray2[i].toUpperCase() == pSongKey.toUpperCase()) {
        num1 = i;
      }

      if (noteArray1[i].toUpperCase() == pTransposeKey.toUpperCase()) {
        num2 = i;
      }

      if (noteArray2[i].toUpperCase() == pTransposeKey.toUpperCase()) {
        num2 = i;
      }

    }

    return (num2 - num1);

  }


  this.transposeNote = function(pNote) {
    return getTransposedNote(pNote, this.numTransposeVal, this.noteArray1, this.noteArray2);
  };

  function getTransposedNote(pNote, pShiftKeyVal, noteArray1, noteArray2) {
    var track;
    var bNoteFound;
    var noteNumVal;

    if (pNote === '') {
      return;
    }

    for (var i = 0; i < 12; i++) {
      if (noteArray1[i].toUpperCase() == pNote.toUpperCase()) {
        track = 0;
        bNoteFound = true;
        noteNumVal = i;
        break;
      }
      if (noteArray2[i].toUpperCase() == pNote.toUpperCase()) {
        track = 1;
        bNoteFound = true;
        noteNumVal = i;
        break;
      }
    }

    //'Simple Note Case --- Transpose & we're done
    if (bNoteFound === true) {
      if (track === 0) {
        return noteArray1[wrapNoteVal(noteNumVal, pShiftKeyVal)];
      } else {
        return noteArray2[wrapNoteVal(noteNumVal, pShiftKeyVal)];
      }
    }



    //'Complex Note (i.e. CSus4/F)
    //'Parse the Note, separate out the elements, transpose elements, recombine
    if (pNote.indexOf("/") > -1) {
      var noteArr = pNote.split("/");
      var retAry = [];

      for (i = 0; i < noteArr.length; i++) {
        retAry.push(getTransposedNote(noteArr[i], pShiftKeyVal, noteArray1, noteArray2));
      }

      return retAry.join("/");
    }

    var notes = 'ABCDEFG';
    var flatSharp = "#b";

    //'Note with minor, aug, sus, 7
    if (notes.indexOf(pNote.substring(0, 1)) > -1) {
      //'The first character is a note.

      //'Check for "#" or "b"

      if (flatSharp.indexOf(pNote.substring(1, 2)) > -1) {
        return getTransposedNote(pNote.substring(0, 2), pShiftKeyVal, noteArray1, noteArray2) + pNote.substring(2);
      } else {
        return getTransposedNote(pNote.substring(0, 1), pShiftKeyVal, noteArray1, noteArray2) + pNote.substring(1);
      }
    }
    //'Flag as Error
    return '{!}';

  }

  function wrapNoteVal(pNoteVal, pShiftVal) {
    if ((pNoteVal + pShiftVal) < 12) {
      return (pNoteVal + pShiftVal);
    } else {
      return (pNoteVal + pShiftVal) - 12;
    }
  }

}
