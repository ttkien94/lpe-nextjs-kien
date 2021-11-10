import { useState } from "react";

import styles from "./styles/styles.module.scss";

function ZoomPic() {
  const src = "https://images.unsplash.com/photo-1444065381814-865dc9da92c0";
  const [backGroundImg, setBackGroundImg] = useState(`url(${src})`);
  const [bgPosition, setBgPosition] = useState("0% 0%");

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBgPosition(`${x}% ${y}%`);
  };
  return (
    <figure
      className={styles.zoomPic}
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: backGroundImg,
        backgroundPosition: bgPosition,
      }}
    >
      <img src={src} alt={src} className={styles.zoomImg} />
    </figure>
  );
}

export default ZoomPic;
