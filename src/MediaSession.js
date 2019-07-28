import { useEffect } from 'react';
import Types from 'prop-types';

const MediaSession = ({
  title,
  artist,
  album,
  artwork,
  onPlay,
  onPause,
  onSeekBackward,
  onSeekForward,
  onPreviousTrack,
  onNextTrack,
}) => {
  useEffect(() => {
    navigator.mediaSession.metadata = new MediaMetadata({
      title,
      artist,
      album,
      artwork,
    });
    return () => {
      navigator.mediaSession.metadata = null;
    };
  }, [title, artist, album, artwork]);

  useEffect(() => {
    navigator.mediaSession.setActionHandler('play', onPlay);
    return () => {
      navigator.mediaSession.setActionHandler('play', null);
    };
  }, [onPlay]);
  useEffect(() => {
    navigator.mediaSession.setActionHandler('pause', onPause);
    return () => {
      navigator.mediaSession.setActionHandler('pause', null);
    };
  }, [onPause]);
  useEffect(() => {
    navigator.mediaSession.setActionHandler('seekbackward', onSeekBackward);
    return () => {
      navigator.mediaSession.setActionHandler('seekbackward', null);
    };
  }, [onSeekBackward]);
  useEffect(() => {
    navigator.mediaSession.setActionHandler('seekforward', onSeekForward);
    return () => {
      navigator.mediaSession.setActionHandler('seekforward', null);
    };
  }, [onSeekForward]);
  useEffect(() => {
    navigator.mediaSession.setActionHandler('previoustrack', onPreviousTrack);
    return () => {
      navigator.mediaSession.setActionHandler('previoustrack', null);
    };
  }, [onPreviousTrack]);
  useEffect(() => {
    navigator.mediaSession.setActionHandler('nexttrack', onNextTrack);
    return () => {
      navigator.mediaSession.setActionHandler('nexttrack', null);
    };
  }, [onNextTrack]);

  return null;
};
MediaSession.propTypes = {
  title: Types.string,
  artist: Types.string,
  album: Types.string,
  artwork: Types.arrayOf(
    Types.shape({
      src: Types.string.isRequired,
      sizes: Types.string,
      type: Types.string,
    }),
  ),

  onPlay: Types.func,
  onPause: Types.func,
  onSeekBackward: Types.func,
  onSeekForward: Types.func,
  onPreviousTrack: Types.func,
  onNextTrack: Types.func,
};
MediaSession.defaultProps = {
  title: '',
  artist: '',
  album: '',
  artwork: [],

  onPlay: null,
  onPause: null,
  onSeekBackward: null,
  onSeekForward: null,
  onPreviousTrack: null,
  onNextTrack: null,
};

export default MediaSession;
