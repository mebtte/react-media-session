import React from "react";

import { HAS_MEDIA_SESSION, MediaSessionProps } from "./constant";

import MediaSession from "./media_session";

const Wrapper = (props: MediaSessionProps) => {
  if (!HAS_MEDIA_SESSION) {
    return props.children || null;
  }
  return <MediaSession {...props} />;
};

export default Wrapper;
