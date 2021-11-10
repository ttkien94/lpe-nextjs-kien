import React from "react";
import Video from "src/components/video";

import Link from "next/link";

import styles from "./styles/styles.module.scss";

function Trainer({ name, desc, link, imgUrl, handleOpenVideo, videoId }) {
  return (
    <div className={styles.wrapperTrainer}>
      <div className="row ml-1">
        <div className=" col-12 col-md-12 col-lg-6 p-0">
          <Video
            imgSrc={imgUrl}
            onHandleOpenVideo={handleOpenVideo}
            videoId={videoId}
          />
        </div>

        <div
          className="col-12 col-md-12 col-lg-6 mb-4 mb-lg-0 px-4"
          style={{
            position: "relative",
          }}
        >
          <div className={styles.trainerText}>
            <p className={styles.textVas}>{name}</p>

            <p>{desc}</p>

            {link && (
              <Link href={link}>
                <a className={styles.btnDetail}>Xem chi tiết</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainer;
