import React from 'react';

const YouTube = ({ youTubeLink }) => {
  const youtubeEmbedLink = `http://www.youtube.com/embed/${youTubeLink}`;
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
