import { Song } from './mediacodec';
import React from 'react';
import {render} from 'react-dom';

import MaterializeSelect from './components/materialize/Select';

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

const aLivingHope = new Song(3708, 'A Living Hope', 'G', testDataJson);
//
// const SongSheet = ({songer}) => {
//   return (
//     <div dangerouslySetInnerHTML={{__html: songer.toHtml('C')}}>
//     </div>
//   )
// };


class SongSheet extends React.Component {
  state = {
    songKey: 'Bb'
  }

  updateChosenSongKey(event) {
    const newKey = event.target.value;
    console.log(event.target.value);
    this.setState({ songKey: newKey });
  }

  render() {
    const { songer } = this.props;
    return (
      <div>
        <MaterializeSelect
          selectValue={this.state.songKey}
          options={[<option key='A' value='A'>A</option>, <option key='B' value='B'>B</option>, <option key='C' value='C'>C</option>]}
          label="Song Key"
          handleOnSelect={this.updateChosenSongKey.bind(this)}
        />
        <div dangerouslySetInnerHTML={{__html: songer.toHtml(this.state.songKey)}}></div>
      </div>
    )
  }
};


// document.getElementById('mediasite').innerHTML = aLivingHope.toHtml('D');
render(<SongSheet songer={aLivingHope} />, document.getElementById('mediasite'));
