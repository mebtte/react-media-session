import { useEffect } from 'react';

import { MediaSessionProps } from './constant';

// @ts-ignore
const { mediaSession } = navigator;

const MediaSession = (props: MediaSessionProps) => {
  const {
    title = '',
    artist = '',
    album = '',
    artwork = [],

    onPlay,
    onPause,
    onSeekBackward,
    onSeekForward,
    onPreviousTrack,
    onNextTrack,

    children,
  } = props;

  useEffect(() => {
    // @ts-ignore
    mediaSession.metadata = new MediaMetadata({
      title,
      artist,
      album,
      artwork,
    });
    return () => {
      mediaSession.metadata = null;
    };
  }, [title, artist, album, artwork]);

  useEffect(() => {
    mediaSession.setActionHandler('play', onPlay);
    return () => {
      mediaSession.setActionHandler('play', null);
    };
  }, [onPlay]);
  useEffect(() => {
    mediaSession.setActionHandler('pause', onPause);
    return () => {
      mediaSession.setActionHandler('pause', null);
    };
  }, [onPause]);
  useEffect(() => {
    mediaSession.setActionHandler('seekbackward', onSeekBackward);
    return () => {
      mediaSession.setActionHandler('seekbackward', null);
    };
  }, [onSeekBackward]);
  useEffect(() => {
    mediaSession.setActionHandler('seekforward', onSeekForward);
    return () => {
      mediaSession.setActionHandler('seekforward', null);
    };
  }, [onSeekForward]);
  useEffect(() => {
    mediaSession.setActionHandler('previoustrack', onPreviousTrack);
    return () => {
      mediaSession.setActionHandler('previoustrack', null);
    };
  }, [onPreviousTrack]);
  useEffect(() => {
    mediaSession.setActionHandler('nexttrack', onNextTrack);
    return () => {
      mediaSession.setActionHandler('nexttrack', null);
    };
  }, [onNextTrack]);

  return children || null;
};

export default MediaSession;
