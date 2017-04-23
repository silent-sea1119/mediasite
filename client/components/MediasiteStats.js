import React from 'react';
import { DOM as rxAjax } from 'rx-dom';

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
  gatherStats() {
    rxAjax.getJSON('/api/v1/mediasiteStats/printOuts/')
      .map(resp => resp.data)
      .subscribe(
        songsPrinted => {
          this.setState({
            loading: false,
            stat: new Stat({
              name: 'Sheets Generated',
              number: songsPrinted
            })
          });
        }
      );
  }
}

class SongsInDatabase extends MediasiteStat {
  gatherStats() {
    rxAjax.getJSON('/api/v1/mediasiteStats/songCount/')
      .map(resp => resp.data)
      .subscribe(
        songsInDb => {
          this.setState({
            loading: false,
            stat: new Stat({
              name: '# of Songs',
              number: songsInDb
            })
          });
        }
      );
  }
}

class UsersInDatabase extends MediasiteStat {
  gatherStats() {
    rxAjax.getJSON('/api/v1/mediasiteStats/userCount/')
      .map(resp => resp.data)
      .subscribe(
        usersInDb => {
          this.setState({
            loading: false,
            stat: new Stat({
              name: '# of Users',
              number: usersInDb
            })
          });
        }
      );
  }
}

export { SongsPrinted, SongsInDatabase, UsersInDatabase };
