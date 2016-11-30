import React from 'react';

const YouTube = ({ youTubeLink }) => {
  let youTubeId;
  if (youTubeLink.substr(0, 4) === 'http') {
    const parser = document.createElement('a');
    parser.href = youTubeLink;
    const queryParams = parser.search.substr(1); // Strip initial '?'
    youTubeId = queryParams.split('&').filter((pair) => pair.substr(0, 1) === 'v')[0].split('=')[1];
  } else {
    youTubeId = youTubeLink;
  }

  const youtubeEmbedLink = `https://www.youtube.com/embed/${youTubeId}`;
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">YouTube</div>
        <iframe className='youtube-video' src={youtubeEmbedLink} frameBorder='0'></iframe>
      </div>
    </div>
  );
};

export default YouTube;
