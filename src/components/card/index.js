import Fade from "react-reveal/Fade";

import styles from "./styles/styles.module.scss";

function Card({ content }) {
  return (
    <a href={content.link} className="col-lg-4 col-md-6 col-sm-12">
      <Fade bottom>
        <div className={styles.container}>
          <img
            src={content.img}
            alt={content.img}
            className={styles.imageCard}
          />

          <div className={styles.darkLayout}></div>

          <p className={styles.textCard}>{content.title.toUpperCase()}</p>
        </div>
      </Fade>
    </a>
  );
}

export default Card;
