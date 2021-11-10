import React from "react";

import styles from "./styles/styles.module.scss";

function LPEBanner({ bannerImg, headText, subText }) {
  return (
    <section
      className={styles.bgHeading}
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.introText}>
        <h4>{headText}</h4>

        <p>{subText}</p>
      </div>
    </section>
  );
}

export default LPEBanner;
