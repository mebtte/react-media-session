import React from 'react';

import { MediaSessionProps } from './constant';
import useMediaSession from './use_media_session';

const MediaSession = (props: React.PropsWithChildren<MediaSessionProps>) => {
  const { children, ...rest } = props;
  useMediaSession(rest);
  return <>{children || null}</>;
};

export default MediaSession;
