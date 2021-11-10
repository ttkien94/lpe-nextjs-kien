import React from "react";
import styles from "./styles/styles.module.scss";

function VideoCoach({ imgSrc, height, videoId, onHandleOpenVideo }) {
  const handleOpenVideo = (id) => {
    onHandleOpenVideo && onHandleOpenVideo(id);
  };

  return (
    <div className={styles.wrapperContainer}>
      <img
        src={imgSrc}
        alt={imgSrc}
        className="img-fluid"
        style={{
          height: height,
          width: "100%",
        }}
      />

      <div
        className={styles.buttonVideo}
        onClick={() => {
          handleOpenVideo(videoId);
        }}
      >
        <i className="fas fa-play"></i>
      </div>
    </div>
  );
}

export default VideoCoach;
