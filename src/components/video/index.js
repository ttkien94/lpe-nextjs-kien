import React from "react";

import styles from "./styles/styles.module.scss";

function Video({
  wrapperContainer,
  imgSrc,
  height,
  onHandleOpenVideo,
  videoId,
}) {
  const handleToggleVideo = (videoId) => {
    onHandleOpenVideo && onHandleOpenVideo(videoId);
  };

  return (
    <>
      <div className={styles.videoContainer}>
        <img src={imgSrc} alt={imgSrc} className="img-fluid" />

        <div
          className={styles.buttonVideo}
          onClick={() => handleToggleVideo(videoId)}
        >
          <i className="fas fa-play"></i>
        </div>
      </div>
    </>
  );
}

export default Video;
