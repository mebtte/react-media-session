# react-media-session

The react component that wraps `mediaSession`.

![](./docs/example.png)

# What is `MediaSession`

- [MDN](https://developer.mozilla.org/docs/Web/API/MediaSession)
- [Google](https://developers.google.com/web/updates/2017/02/media-session)

# Requirement

- `react` >= 16.8 with `Hooks`

# Installation

```bash
npm install --save @mebtte/react-media-session
```

# Usage

```jsx
import MediaSession from '@mebtte/react-media-session';

/**
 * <MediaSession {...props} />
 * or
 * <MediaSession {...props}>
 *   children
 * </MediaSession>
 */
<MediaSession
  title="Way back"
  artist="Vicetone,Cozi Zuehlsdorff"
  album="Way Back"
  artwork={[
    {
      src: 'cover_large.jpeg',
      size: '256x256,384x384,512x512',
      type: 'image/jpeg',
    },
    {
      src: 'cover_small.jpeg',
      size: '96x96,128x128,192x192',
      type: 'image/jpeg',
    },
  ]}
  onPlay={() => audio.play()}
  onPause={() => audio.pause()}
  onSeekBackward={() => (audio.currentTime -= 10)}
  onSeekForward={() => (audio.currentTime += 10)}
  onPreviousTrack={() => playPreviousMusic()}
  onNextTrack={() => playNextMusic()}
/>;
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

# Example

- [CodeSandbox](https://codesandbox.io/s/friendly-worker-94cto?fontsize=14)
  > Use browser that support `mediaSession`

# Question

- If browser do not support `mediaSession`, will it throw error?
  > if browser do not support `mediaSession`, it will do nothing.

# LICENSE

MIT
