import React, { Fragment } from 'react';

import { HAS_MEDIA_SESSION, MediaSessionProps } from './constant';
import useMediaSession from './use_media_session';

import MediaSession from './media_session';

const MediaSessionWrapper = (props: React.PropsWithChildren<MediaSessionProps>) => {
  if (!HAS_MEDIA_SESSION) {
    return <Fragment>{props.children || null}</Fragment>;
  }
  return <MediaSession {...props} />;
};

export { HAS_MEDIA_SESSION, useMediaSession };
export default MediaSessionWrapper;
