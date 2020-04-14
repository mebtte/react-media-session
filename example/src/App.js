import React, { useState, useRef, useCallback } from 'react';
import MediaSession from '@mebtte/react-media-session';

import musicList from './data.js';

import Music from './music';

const App = () => {
  const [index, setIndex] = useState(0);
  const audioRef = useRef();

  const onPlay = useCallback(() => audioRef.current.play(), []);
  const onPause = useCallback(() => audioRef.current.pause(), []);
  const onSeekBackward = useCallback(
    () => (audioRef.current.currentTime -= 10),
    [],
  );
  const onSeekForward = useCallback(
    () => (audioRef.current.currentTime += 10),
    [],
  );
  const onPreviousTrack = useCallback(
    () =>
      setIndex((i) => {
        const target = i - 1;
        if (target < 0) {
          return target + musicList.length;
        }
        return target;
      }),
    [],
  );
  const onNextTrack = useCallback(
    () => setIndex((i) => (i + 1) % musicList.length),
    [],
  );

  const music = musicList[index];
  return (
    <MediaSession
      title={music.name}
      artist={music.singers.join(',')}
      artwork={[
        {
          src: music.cover,
          sizes: '512x512',
        },
      ]}
      album={music.album}
      onPlay={onPlay}
      onPause={onPause}
      onSeekBackward={onSeekBackward}
      onSeekForward={onSeekForward}
      onPreviousTrack={onPreviousTrack}
      onNextTrack={onNextTrack}
    >
      <div className="music-list">
        {musicList.map((m, i) => (
          <Music
            key={m.id}
            music={m}
            playing={i === index}
            onPlay={() => setIndex(i)}
          />
        ))}
      </div>
      <audio
        src={music.src}
        controls
        autoPlay
        loop
        ref={audioRef}
        style={{ width: '100%', margin: '20px 0' }}
      />
    </MediaSession>
  );
};

export default App;
