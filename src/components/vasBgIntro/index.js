import React from "react";
import Link from "next/link";

import styles from "./styles/styles.module.scss";

function VasBgIntro({ picture, title, description, positionPic, linkButton }) {
  return (
    <>
      <div className="col-12 col-lg-6 p-0">
        <div
          className={styles.vasBackground}
          style={{
            backgroundImage: `url(${picture})`,
            width: "100%",
            height: "400px",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="text-left p-5">
          <h3>{title}</h3>
          <p>{description}</p>

          <Link href={linkButton}>
            <a>
              <button className={styles.buttonVas}>Xem thêm</button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default VasBgIntro;
