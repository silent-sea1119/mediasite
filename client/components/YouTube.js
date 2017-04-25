import React from 'react';

const parseYouTubeLink = (youTubeLink, shouldEmbed) => {
  let youTubeId;
  if (youTubeLink.substr(0, 4) === 'http') {
    const parser = document.createElement('a');
    parser.href = youTubeLink;
    const queryParams = parser.search.substr(1); // Strip initial '?'
    // Youtu.be links do not work, need to fix.
    youTubeId = queryParams.split('&').filter((pair) => pair.substr(0, 1) === 'v')[0].split('=')[1];
  } else {
    youTubeId = youTubeLink;
  }

  return `https://www.youtube.com/${shouldEmbed ? 'embed/' : 'watch?v='}${youTubeId}`;
};

export { parseYouTubeLink };

const YouTube = ({ youTubeLink }) => {
  const youtubeEmbedLink = parseYouTubeLink(youTubeLink, true);

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">YouTube</div>
        <iframe className='youtube-video' src={youtubeEmbedLink} frameBorder='0'></iframe>
        <p>Embedded video not working? Try watching it <a href={parseYouTubeLink(youTubeLink, false)} target='_blank'>on YouTube</a></p>
      </div>
    </div>
  );
};

export default YouTube;
