# react-media-session

The react component that wraps `medisSession`. If browser do not support `mediaSession`, it will do nothing.

# What is `MediaSession`

- [MDN](https://developer.mozilla.org/docs/Web/API/MediaSession)
- [Google](https://developers.google.com/web/updates/2017/02/media-session)

# Requirement

- `react` >= 16.8 with `Hooks`

# Installation

```bash
npm install --save @mebtte/react-media-session
```

# [Example](./example/index.html)

```jsx
const musicList = [
  {
    title: '晴天',
    artists: ['周杰伦'],
    album: '叶惠美',
    cover:
      'https://static.mebtte.com/music_cover/67af86073121bf8bdf8980caeb53f9f0.jpeg',
    src: 'https://static.mebtte.com/music/3bd5c05b9f8d082ba3c9425a1a712394.mp3',
  },
  {
    title: 'Rolling in The Deep',
    artists: ['Adele'],
    album: 'Rolling In The Deep',
    cover:
      'https://static.mebtte.com/music_cover/456e1c50759d5b791ca612afee9c26c0.jpeg',
    src: 'https://static.mebtte.com/music/8809026cc527483aa64c67fa61a77ab9.mp3',
  },
  {
    title: 'Way Back',
    artists: ['Cozi Zuehlsdorff', 'Vicetone'],
    album: 'Way Back',
    cover:
      'https://static.mebtte.com/music_cover/304a07349deb91f1f69d21c2ced5573b.jpeg',
    src: 'https://static.mebtte.com/music/6312d6d9bb077fb39ec329ace4b7051b.mp3',
  },
].map((music) => {
  const { title, artists, album, cover, src } = music;
  return {
    title,
    artist: artists.join(','),
    album,
    artwork: [
      { src: cover, sizes: '96x96', type: 'image/jpeg' },
      { src: cover, sizes: '128x128', type: 'image/jpeg' },
      { src: cover, sizes: '192x192', type: 'image/jpeg' },
      { src: cover, sizes: '256x256', type: 'image/jpeg' },
      { src: cover, sizes: '384x384', type: 'image/jpeg' },
      { src: cover, sizes: '512x512', type: 'image/jpeg' },
    ],
    src,
  };
});

const Player = () => {
  const [index, setIndex] = React.useState(0);
  const audio = React.useRef();

  const music = musicList[index];

  const onPlay = () => audio.current.play();
  const onPause = () => audio.current.pause();
  const onBackwardTenSeconds = () => (audio.current.currentTime -= 10);
  const onforwardTenSeconds = () => (audio.current.currentTime += 10);
  const onPrevious = () =>
    setIndex((i) => Math.abs((i - 1) % musicList.length));
  const onNext = () => setIndex((i) => Math.abs((i + 1) % musicList.length));

  return (
    <div>
      <ReactMediaSession
        {...music}
        onPlay={onPlay}
        onPause={onPause}
        onSeekBackward={onBackwardTenSeconds}
        onSeekForward={onBackwardTenSeconds}
        onPreviousTrack={onPrevious}
        onNextTrack={onNext}
      />
      <div>
        {music.title}-{music.artist}
      </div>
      <audio src={music.src} controls autoPlay ref={audio} />
      <div>
        <button onClick={onPlay}>play</button>
        <button onClick={onPause}>pause</button>
        <button onClick={onBackwardTenSeconds}>backward 10s</button>
        <button onClick={onforwardTenSeconds}>forward 10s</button>
        <button onClick={onPrevious}>previous</button>
        <button onClick={onNext}>next</button>
      </div>
    </div>
  );
};
```

# Props

| props           | type   | required | default |
| --------------- | ------ | -------- | ------- |
| title           | string | false    | ''      |
| artist          | string | false    | ''      |
| album           | string | false    | ''      |
| artwork         | array  | false    | []      |
| onPlay          | func   | false    | null    |
| onPause         | func   | false    | null    |
| onSeekBackward  | func   | false    | null    |
| onSeekForward   | func   | false    | null    |
| onPreviousTrack | func   | false    | null    |
| onNextTrack     | func   | false    | null    |
