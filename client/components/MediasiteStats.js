import React from 'react';
import axios from 'axios';

const CircleLoader = () => {
  return (
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

function Stat(data) {
  this.name = data.name;
  this.number = data.number;
}

class MediasiteStat extends React.Component {
  state = {
    loading: true,
    stat: null
  };

  gatherStats() {
    axios.get(this.statEndpoint)
      .then(({ data }) => {
        this.setState({
          loading: false,
          stat: new Stat({
            name: this.statName,
            number: data.data
          })
        })
      });
  }

  componentDidMount() {
    this.gatherStats();
  }

  render() {
    let content;
    if (this.state.loading) {
      content = <div className="cart-content">
        <CircleLoader></CircleLoader>
      </div>;
    } else {
      const { stat } = this.state;
      content = <div className="card-content">
        <span className="card-title">{stat.name}</span>
        <p>{stat.number}</p>
      </div>;
    }
    return (
      <div className="col l4 m6 s12">
        <div className="card">
          <div className="card-content">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

class SongsPrinted extends MediasiteStat {
  constructor() {
    super();
    this.statEndpoint = '/api/v1/mediasiteStats/printOuts/';
    this.statName = 'Sheets Generated';
  }
}

class SongsInDatabase extends MediasiteStat {
  constructor() {
    super();
    this.statEndpoint = '/api/v1/mediasiteStats/songCount/';
    this.statName = '# of Songs';
  }
}

class UsersInDatabase extends MediasiteStat {
  constructor() {
    super();
    this.statEndpoint = '/api/v1/mediasiteStats/userCount/';
    this.statName = '# of Users';
  }
}

export { SongsPrinted, SongsInDatabase, UsersInDatabase };
