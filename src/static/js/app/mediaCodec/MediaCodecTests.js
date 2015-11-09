//*************************************************************************************************************//
//    Media Site encoder/decoder for song data == JavaScript Port                                              //
//*************************************************************************************************************//

//*****************************************************************************************************************//
// QUNIT TESTS //
//*****************************************************************************************************************//
var testDataXML = "<SONG SongID='12345' TotalParts='6' Title='Cry Out To Jesus'><PART Name='Verse 1'><NOTELINE><NOTE XPOS='1'>F</NOTE></NOTELINE><LYRICLINE>To everyone who's lost someone they love</LYRICLINE><NOTELINE><NOTE XPOS='1'>F/A</NOTE></NOTELINE><LYRICLINE>Long before it was their time</LYRICLINE><NOTELINE><NOTE XPOS='5'>Dm</NOTE></NOTELINE><LYRICLINE>You feel like the days you had were not enough</LYRICLINE><NOTELINE><NOTE XPOS='10'>C</NOTE></NOTELINE><LYRICLINE>when you said goodbye</LYRICLINE><NOTELINE><NOTE XPOS='1'>F</NOTE></NOTELINE><LYRICLINE>And to all of the people with burdens and pains</LYRICLINE><NOTELINE><NOTE XPOS='1'>F/A</NOTE></NOTELINE><LYRICLINE>Keeping you back from your life</LYRICLINE><NOTELINE><NOTE XPOS='5'>Dm</NOTE></NOTELINE><LYRICLINE>You believe that there's nothing and there is no one</LYRICLINE><NOTELINE><NOTE XPOS='9'>C</NOTE></NOTELINE><LYRICLINE>Who can make it right</LYRICLINE></PART><PART Name='Chorus'><NOTELINE><NOTE XPOS='10'>A</NOTE></NOTELINE><LYRICLINE>There is hope for the helpless</LYRICLINE><NOTELINE><NOTE XPOS='1'>F</NOTE></NOTELINE><LYRICLINE>Rest for the weary</LYRICLINE><NOTELINE><NOTE XPOS='1'>Dm</NOTE><NOTE XPOS='21'>C</NOTE></NOTELINE><LYRICLINE>Love for the broken heart</LYRICLINE><NOTELINE><NOTE XPOS='10'>A</NOTE></NOTELINE><LYRICLINE>There is grace and forgiveness</LYRICLINE><NOTELINE><NOTE XPOS='1'>F</NOTE></NOTELINE><LYRICLINE>Mercy and healing</LYRICLINE><NOTELINE><NOTE XPOS='7'>Dm</NOTE><NOTE XPOS='29'>C</NOTE></NOTELINE><LYRICLINE>He'll meet you wherever you are</LYRICLINE><NOTELINE><NOTE XPOS='12'>A</NOTE><NOTE XPOS='30'>F</NOTE><NOTE XPOS='38'>Dm</NOTE><NOTE XPOS='41'>/</NOTE><NOTE XPOS='43'>/</NOTE><NOTE XPOS='45'>C</NOTE><NOTE XPOS='47'>/</NOTE><NOTE XPOS='49'>/</NOTE><NOTE XPOS='51'>F</NOTE></NOTELINE><LYRICLINE>Cry out to Jesus, Cry out to Jesus</LYRICLINE></PART><PART Name='Verse 2'><NOTELINE><NOTE XPOS='9'>F</NOTE></NOTELINE><LYRICLINE>For the marriage that's struggling just to hang on</LYRICLINE><NOTELINE><NOTE XPOS='6'>A</NOTE></NOTELINE><LYRICLINE>They lost all of their faith in love</LYRICLINE><NOTELINE><NOTE XPOS='9'>Dm</NOTE></NOTELINE><LYRICLINE>They've done all they can to make it right again</LYRICLINE><NOTELINE><NOTE XPOS='16'>C</NOTE></NOTELINE><LYRICLINE>Still it's not enough</LYRICLINE><NOTELINE><NOTE XPOS='9'>F</NOTE></NOTELINE><LYRICLINE>For the ones who can't break the addictions and chains</LYRICLINE><NOTELINE><NOTE XPOS='5'>F/A</NOTE></NOTELINE><LYRICLINE>You try to give up but you come back again</LYRICLINE><NOTELINE><NOTE XPOS='6'>Dm</NOTE></NOTELINE><LYRICLINE>Just remember that you're not alone in your shame</LYRICLINE><NOTELINE><NOTE XPOS='10'>C</NOTE><NOTE XPOS='14'>Csus4</NOTE><NOTE XPOS='20'>C</NOTE></NOTELINE><LYRICLINE>And your suffering</LYRICLINE></PART><PART Name='Bridge'><NOTELINE><NOTE XPOS='1'>Dm</NOTE></NOTELINE><LYRICLINE>When your lonely</LYRICLINE><NOTELINE><NOTE XPOS='1'>C</NOTE><NOTE XPOS='23'>F</NOTE><NOTE XPOS='49'>A</NOTE></NOTELINE><LYRICLINE>And it feels like the whole world is falling on you</LYRICLINE><NOTELINE><NOTE XPOS='1'>Dm</NOTE><NOTE XPOS='21'>C</NOTE><NOTE XPOS='41'>A</NOTE></NOTELINE><LYRICLINE>You just reach out, you just cry out to Jesus</LYRICLINE><NOTELINE><NOTE XPOS='8'>A</NOTE></NOTELINE><LYRICLINE>Cry to Jesus</LYRICLINE></PART><PART Name='Verse 3'><NOTELINE><NOTE XPOS='1'>F</NOTE></NOTELINE><LYRICLINE>To the widow who struggles with being alone</LYRICLINE><NOTELINE><NOTE XPOS='1'>A</NOTE></NOTELINE><LYRICLINE>Wiping the tears from her eyes</LYRICLINE><NOTELINE><NOTE XPOS='9'>Dm</NOTE></NOTELINE><LYRICLINE>For the children around the world without a home</LYRICLINE><NOTELINE><NOTE XPOS='7'>C</NOTE></NOTELINE><LYRICLINE>Say a prayer tonight</LYRICLINE></PART><PART Name='Chorus2'><NOTELINE><NOTE XPOS='10'>A</NOTE></NOTELINE><LYRICLINE>There is hope for the helpless</LYRICLINE><NOTELINE><NOTE XPOS='1'>F</NOTE></NOTELINE><LYRICLINE>Rest for the weary</LYRICLINE><NOTELINE><NOTE XPOS='1'>Dm</NOTE><NOTE XPOS='21'>C</NOTE></NOTELINE><LYRICLINE>Love for the broken heart</LYRICLINE><NOTELINE><NOTE XPOS='10'>A</NOTE></NOTELINE><LYRICLINE>There is grace and forgiveness</LYRICLINE><NOTELINE><NOTE XPOS='1'>F</NOTE></NOTELINE><LYRICLINE>Mercy and healing</LYRICLINE><NOTELINE><NOTE XPOS='7'>Dm</NOTE><NOTE XPOS='29'>C</NOTE></NOTELINE><LYRICLINE>He'll meet you wherever you are</LYRICLINE><NOTELINE><NOTE XPOS='10'>A</NOTE></NOTELINE><LYRICLINE>There is hope for the helpless</LYRICLINE><NOTELINE><NOTE XPOS='1'>F</NOTE></NOTELINE><LYRICLINE>Rest for the weary</LYRICLINE><NOTELINE><NOTE XPOS='1'>Dm</NOTE><NOTE XPOS='21'>C</NOTE></NOTELINE><LYRICLINE>Love for the broken heart</LYRICLINE><NOTELINE><NOTE XPOS='10'>A</NOTE></NOTELINE><LYRICLINE>There is grace and forgiveness</LYRICLINE><NOTELINE><NOTE XPOS='1'>F</NOTE></NOTELINE><LYRICLINE>Mercy and healing</LYRICLINE><NOTELINE><NOTE XPOS='7'>Dm</NOTE><NOTE XPOS='29'>C</NOTE></NOTELINE><LYRICLINE>He'll meet you wherever you are</LYRICLINE><NOTELINE><NOTE XPOS='12'>A</NOTE></NOTELINE><LYRICLINE>Cry out to Jesus,</LYRICLINE><NOTELINE><NOTE XPOS='12'>F</NOTE><NOTE XPOS='18'>A</NOTE><NOTE XPOS='24'>F</NOTE><NOTE XPOS='30'>A</NOTE></NOTELINE><LYRICLINE>Cry out to Jesus</LYRICLINE><NOTELINE><NOTE XPOS='12'>Dm</NOTE><NOTE XPOS='19'>C</NOTE><NOTE XPOS='23'>A</NOTE></NOTELINE><LYRICLINE>Cry out to Jesus</LYRICLINE><NOTELINE><NOTE XPOS='12'>Dm</NOTE><NOTE XPOS='19'>C</NOTE><NOTE XPOS='23'>A</NOTE></NOTELINE><LYRICLINE>Cry out to Jesus</LYRICLINE><NOTELINE><NOTE XPOS='12'>Dm</NOTE><NOTE XPOS='19'>C</NOTE><NOTE XPOS='23'>A</NOTE></NOTELINE><LYRICLINE>                         (hold)</LYRICLINE></PART></SONG>";
var testDataLegacy = "<6,Verse 1,Chorus,Verse 2,Bridge,Verse 3,Chorus2><Verse 1><C,1><NL>To everyone who's lost someone they love<NL><C/F,1><NL>Long before it was their time<NL><Am,5><NL>You feel like the days you had were not enough<NL><G,10><NL>when you said goodbye<NL><C,1><NL>And to all of the people with burdens and pains<NL><C/F,1><NL>Keeping you back from your life<NL><Am,5><NL>You believe that there's nothing and there is no one<NL><G,9><NL>Who can make it right</Verse 1><Chorus><F,10><NL>There is hope for the helpless<NL><C,1><NL>Rest for the weary<NL><Am,1><G,21><NL>Love for the broken heart<NL><F,10><NL>There is grace and forgiveness<NL><C,1><NL>Mercy and healing<NL><Am,7><G,29><NL>He'll meet you wherever you are<NL><F,12><C,30><Am,38></,41></,43><G,45></,47></,49><C,51><NL>Cry out to Jesus, Cry out to Jesus</Chorus><Verse 2><C,9><NL>For the marriage that's struggling just to hang on<NL><F,6><NL>They lost all of their faith in love<NL><Am,9><NL>They've done all they can to make it right again<NL><G,16><NL>Still it's not enough<NL><C,9><NL>For the ones who can't break the addictions and chains<NL><C/F,5><NL>You try to give up but you come back again<NL><Am,6><NL>Just remember that you're not alone in your shame<NL><G,10><Gsus4,14><G,20><NL>And your suffering</Verse 2><Bridge><Am,1><NL>When your lonely<NL><G,1><C,23><F,49><NL>And it feels like the whole world is falling on you<NL><Am,1><G,21><F,41><NL>You just reach out, you just cry out to Jesus<NL><F,8><NL>Cry to Jesus</Bridge><Verse 3><C,1><NL>To the widow who struggles with being alone<NL><F,1><NL>Wiping the tears from her eyes<NL><Am,9><NL>For the children around the world without a home<NL><G,7><NL>Say a prayer tonight</Verse 3><Chorus2><F,10><NL>There is hope for the helpless<NL><C,1><NL>Rest for the weary<NL><Am,1><G,21><NL>Love for the broken heart<NL><F,10><NL>There is grace and forgiveness<NL><C,1><NL>Mercy and healing<NL><Am,7><G,29><NL>He'll meet you wherever you are<NL><F,10><NL>There is hope for the helpless<NL><C,1><NL>Rest for the weary<NL><Am,1><G,21><NL>Love for the broken heart<NL><F,10><NL>There is grace and forgiveness<NL><C,1><NL>Mercy and healing<NL><Am,7><G,29><NL>He'll meet you wherever you are<NL><F,12><NL>Cry out to Jesus,<NL><C,12><F,18><C,24><F,30><NL>Cry out to Jesus<NL><Am,12><G,19><F,23><NL>Cry out to Jesus<NL><Am,12><G,19><F,23><NL>Cry out to Jesus<NL><Am,12><G,19><F,23><NL>                         (hold)</Chorus2>";
var gLegalChars =  'ABCDEFGabcdefgimjM2345679#SUsu/^|(): no';
var testDataPlainText = "C\r\nThis is a test of the decoder\r\nF    D    E\r\nWhat a test indeed";
var testDataJson = {  "id": 3708,  "parts": [    {      "partData": [        {          "note": [            {              "position": 1,              "note": "G5"            },            {              "position": 6,              "note": "D4/F#"            },            {              "position": 18,              "note": "Em7"            },            {              "position": 22,              "note": "D4/F#"            }          ],          "lyric": null        },        {          "note": [],          "lyric": "Praise to You, God"        },        {          "note": [            {              "position": 1,              "note": "G5"            },            {              "position": 6,              "note": "D4/F#"            },            {              "position": 19,              "note": "Em7"            },            {              "position": 23,              "note": "D4/F#"            }          ],          "lyric": null        },        {          "note": [],          "lyric": "Father of our Lord"        },        {          "note": [            {              "position": 7,              "note": "C"            },            {              "position": 11,              "note": "G/B"            },            {              "position": 19,              "note": "Am7"            },            {              "position": 24,              "note": "Am7/G"            },            {              "position": 30,              "note": "D"            }          ],          "lyric": null        },        {          "note": [],          "lyric": "For great is Your mercy    on us"        }      ],      "partName": "Verse 1"    },    {      "partData": [        {          "note": [            {              "position": 1,              "note": "G5"            },            {              "position": 6,              "note": "D4/F#"            },            {              "position": 18,              "note": "Em7"            },            {              "position": 22,              "note": "D4/F#"            }          ],          "lyric": null        },        {          "note": [],          "lyric": "Praise to You, God"        },        {          "note": [            {              "position": 1,              "note": "G5"            },            {              "position": 12,              "note": "D4/F#"            },            {              "position": 26,              "note": "Em7"            },            {              "position": 30,              "note": "D4/F#"            }          ],          "lyric": null        },        {          "note": [],          "lyric": "You've given us new birth"        },        {          "note": [            {              "position": 3,              "note": "C"            },            {              "position": 8,              "note": "G/B"            },            {              "position": 18,              "note": "Am7"            },            {              "position": 22,              "note": "Am7/G"            },            {              "position": 38,              "note": "D"            }          ],          "lyric": null        },        {          "note": [],          "lyric": "Into a living hope       through Your Son"        }      ],      "partName": "Verse 2"    },    {      "partData": [        {          "note": [            {              "position": 1,              "note": "C"            },            {              "position": 4,              "note": "D"            },            {              "position": 8,              "note": "Em"            },            {              "position": 11,              "note": "D"            },            {              "position": 13,              "note": "C"            },            {              "position": 19,              "note": "D"            },            {              "position": 32,              "note": "Em"            },            {              "position": 35,              "note": "D"            }          ],          "lyric": null        },        {          "note": [],          "lyric": "In You      we greatly rejoice"        },        {          "note": [            {              "position": 1,              "note": "C"            },            {              "position": 4,              "note": "D"            },            {              "position": 8,              "note": "Em"            },            {              "position": 11,              "note": "D"            },            {              "position": 21,              "note": "C"            },            {              "position": 30,              "note": "D"            },            {              "position": 40,              "note": "G5"            },            {              "position": 43,              "note": "D4/F#"            },            {              "position": 49,              "note": "Em7"            },            {              "position": 53,              "note": "D4/F#"            }          ],          "lyric": null        },        {          "note": [],          "lyric": "In You    we have joy in a living hope"        }      ],      "partName": "Chorus"    }  ],  "title": "A Living Hope",  "key": "G",  "partCount": 3};

QUnit.test('encode json data to html', function (assert) {
    var config = {
        legalChars: gLegalChars,
        key: 'G'
    };
    var testSong = new Song(config, 3708, 'G');
    var songHtml = testSong.Encode(testDataJson, ENCODETYPE.HTML);
    assert.ok(songHtml.indexOf('<div') === 0, 'Passed!');
});

QUnit.test("decode Legacy Song Data", function (assert) {
    var config = {
        legalChars: gLegalChars,  
        key: 'C'
    };
    var testSong = new Song(config, 12345, 'Cry Out To Jesus');
    var encodedResults = testSong.Decode(testDataLegacy, ENCODETYPE.Legacy);
    //console.log(encodedResults);
    assert.ok(encodedResults.parts.length == 6, "Passed!");
});

QUnit.test("decode Legacy Song Data & encode HTML", function (assert) {
    var config = {
        legalChars: gLegalChars   
    };
    var testSong = new Song(config, 12345, 'Cry Out To Jesus', 'C');
    var encodedResults = testSong.Decode(testDataLegacy, ENCODETYPE.Legacy);
    //console.log(encodedResults);

    var htmlResults = testSong.Encode(encodedResults, ENCODETYPE.HTML, 'D');
    //console.log(htmlResults);
    assert.ok(encodedResults.parts.length == 6, "Passed!");
});

QUnit.test("decode Legacy Song Data & encode text", function (assert) {
   var config = {
       legalChars: gLegalChars
    };
    var testSong = new Song(config, 12345, 'Cry Out To Jesus', 'C');
    var encodedResults = testSong.Decode(testDataLegacy, ENCODETYPE.Legacy);
    //console.log(encodedResults);

    var textResults = testSong.Encode(encodedResults, ENCODETYPE.PlainText, 'C');
    // console.log(textResults);
    assert.ok(encodedResults.parts.length == 6, "Passed!");
});

QUnit.test("decode Legacy Song Data & re-encode & compare", function (assert) {
    var config = {
        legalChars: gLegalChars
    };
    var testSong = new Song(config, 12345, 'Cry Out To Jesus', 'C');
    var encodedResults = testSong.Decode(testDataLegacy, ENCODETYPE.Legacy);
    //console.log(encodedResults);

    var testResults = testSong.Encode(encodedResults, ENCODETYPE.Legacy, 'C');
    //console.log(testResults);
    //console.log('');
    //console.log(testDataLegacy);
    assert.ok(testDataLegacy == testResults, "Passed!");
});

QUnit.test("decode XML Song Data", function (assert) {
    var config = {
        legalChars: gLegalChars      
    };
    var testSong = new Song(config, 12345, 'Cry Out To Jesus', 'C');
    var encodedResults = testSong.Decode(testDataXML, ENCODETYPE.XML);
    //console.log(encodedResults);
    assert.ok(encodedResults.parts.length == 6, "Passed!");
});

QUnit.test("decode XML Song Data & re-encode & compare", function (assert) {
    var config = {
        legalChars: gLegalChars
    };
    var testSong = new Song(config, 12345, 'Cry Out To Jesus', 'C');
    var encodedResults = testSong.Decode(testDataXML, ENCODETYPE.XML);
    //console.log(testDataXML);
    //console.log('');
    //console.log(encodedResults);
    var testResults = testSong.Encode(encodedResults, ENCODETYPE.XML, 'C');
    //console.log(testResults);
        
    assert.ok(testDataXML == testResults, "Passed!");
});

QUnit.test("decode Plain Text Song Data & re-encode & compare", function (assert) {
    var config = {
        legalChars: gLegalChars
    };
    var testSong = new Song(config, 12345, 'Cry Out To Jesus', 'C');
    //input for this stream is a mashup of all the part names in one array, and a corresponding array of part data (*directly from the form)
    var encodedResults = testSong.Decode({partName: ['sample'], partData: [testDataPlainText]}, ENCODETYPE.PlainText);
    console.log(testDataPlainText);
    console.log('');
    console.log(encodedResults);
    var testResults = testSong.Encode(encodedResults, ENCODETYPE.PlainText, 'C');
    console.log(testResults);
        
    assert.ok(testDataPlainText == testResults.partText[0], "Passed!");
});



  
QUnit.test("transposer Test #1", function (assert) {
    var testTranspose = new transposer('C', 'C');
    var result = testTranspose.transposeNote('D');
    assert.ok(result == "D", "Passed!");
});

QUnit.test("transposer Test #2", function (assert) {
    var testTranspose = new transposer('C', 'G');
    var result = testTranspose.transposeNote('Dsus7/F#maj');
    assert.ok(result == "Asus7/C#maj", "Passed!");
});

QUnit.test("transposer Test #3", function (assert) {
    var testTranspose = new transposer('E', 'F');
    var result = testTranspose.transposeNote('Dsus7/Gbmaj');
    assert.ok(result == "D#sus7/Gmaj", "Passed!");
});
