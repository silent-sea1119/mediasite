import React from 'react';
import Loadable from 'react-loadable';

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

const createLoadable = path => {
  return Loadable({
    loader: () => import(path),
    loading: Loading,
    delay: 300
  });
};

export const LoadableNewSong = Loadable({
  loader: () => import('./NewSong'),
  loading: Loading,
  delay: 300
});
export const LoadableEditSong = Loadable({
  loader: () => import('./EditSong'),
  loading: Loading,
  delay: 300
});
export const LoadableSongTable = Loadable({
  loader: () => import('./SongTable'),
  loading: Loading,
  delay: 300
});
export const LoadableSongSheet = Loadable({
  loader: () => import('./SongSheet'),
  loading: Loading,
  delay: 300
});
export const LoadableSong = Loadable({
  loader: () => import('./Song'),
  loading: Loading,
  delay: 300
});
export const LoadableSongList = Loadable({
  loader: () => import('./SongList'),
  loading: Loading,
  delay: 300
});
