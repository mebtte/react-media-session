# react-media-session

The react component that wraps `mediaSession`.

![](./screenshots/android.png)

# What is `MediaSession`

- [MDN](https://developer.mozilla.org/docs/Web/API/MediaSession)
- [Google](https://developers.google.com/web/updates/2017/02/media-session)
- [Can I use](https://caniuse.com/?search=mediasession)

# Requirement

- `react` >= 16.8 with `hooks`

# Installation

```bash
npm install --save @mebtte/react-media-session
```

# Usage

## As component

When browser do not support `mediaSession`, it will be render `children` only.

```jsx
import MediaSession from '@mebtte/react-media-session';

<MediaSession
  title="Way back"
  artist="Vicetone,Cozi Zuehlsdorff"
  album="Way Back"
  artwork={[
    {
      src: 'cover_large.jpeg',
      sizes: '256x256,384x384,512x512',
      type: 'image/jpeg',
    },
    {
      src: 'cover_small.jpeg',
      sizes: '96x96,128x128,192x192',
      type: 'image/jpeg',
    },
  ]}
  onPlay={audio.play}
  onPause={audio.pause}
  onSeekBackward={onSeekBackward}
  onSeekForward={onSeekForward}
  onPreviousTrack={playPreviousMusic}
  onNextTrack={playNextMusic}
>
  children or null
</MediaSession>;
```

## As hooks

```jsx
import { useMediaSession } from '@mebtte/react-media-session';

const Component = () => {
  // ...

  useMediaSession({
    title: 'Way back',
    artist: 'Vicetone,Cozi Zuehlsdorff',
    album: 'Way Back',
    artwork: [
      {
        src: 'cover_large.jpeg',
        sizes: '256x256,384x384,512x512',
        type: 'image/jpeg',
      },
      {
        src: 'cover_small.jpeg',
        sizes: '96x96,128x128,192x192',
        type: 'image/jpeg',
      },
    ],
    onPlay: audio.play,
    onPause: audio.pause,
    onSeekBackward,
    onSeekForward,
    onPreviousTrack,
    onNextTrack,
  });

  // ...
};
```

When using hooks, you must make sure `mediaSession` exists. You can judge by blow.

```js
import { HAS_MEDIA_SESSION } from '@mebtte/react-media-session';
```

# Props

| props           | type                                                 | required | default |
| --------------- | ---------------------------------------------------- | -------- | ------- |
| title           | string                                               | false    | ''      |
| artist          | string                                               | false    | ''      |
| album           | string                                               | false    | ''      |
| artwork         | array({ src: string, sizes: string, type?: string }) | false    | []      |
| onPlay          | func                                                 | false    | null    |
| onPause         | func                                                 | false    | null    |
| onSeekBackward  | func                                                 | false    | null    |
| onSeekForward   | func                                                 | false    | null    |
| onPreviousTrack | func                                                 | false    | null    |
| onNextTrack     | func                                                 | false    | null    |

# Screenshot

- [Android Chrome](./screenshots/android.png)
- [PC Chrome](./screenshots/chrome.png)

# LICENSE

MIT
