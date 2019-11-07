import React from 'react';

import { HAS_MEDIA_SESSION } from './constants';

import MediaSession from './MediaSession';

const Wrapper = ({ ...props }) => {
  if (!HAS_MEDIA_SESSION) {
    return props.children || null;
  }
  return <MediaSession {...props} />;
};

export default Wrapper;
