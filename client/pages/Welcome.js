import React from 'react';
import Link from 'react-router/lib/Link';

const CircleLoader = () => {
  return (
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  );
}

class MediasiteStats extends React.Component {
  render() {
    return (
      <div className="stats-area">
        <CircleLoader></CircleLoader>
      </div>
    )
  }
}

const Welcome = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>Circle's Mediasite</h2>
        <MediasiteStats></MediasiteStats>
        <Link className='btn btn-large waves-effect btn-primary' to='/songs'>Song Search</Link>
      </div>
    </div>
  )
};

export default Welcome;
