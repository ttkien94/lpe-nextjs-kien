import Slider from "react-slick";
import styles from "./styles/styles.module.scss";

const baseUrl = "https://minimals.cc/static/mock-images/products/";

function SliderWithThumb() {
  const settings = {
    customPaging: function (i) {
      return <img src={`${baseUrl}/product_${i + 1}.jpg`} />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
  };

  return (
    <div>
      <Slider
        {...settings}
        style={{
          marginBottom: "80px",
        }}
      >
        <div>
          <img src={baseUrl + "/product_1.jpg"} className={styles.bigPic} />
        </div>

        <div>
          <img src={baseUrl + "/product_2.jpg"} className={styles.bigPic} />
        </div>

        <div>
          <img src={baseUrl + "/product_3.jpg"} className={styles.bigPic} />
        </div>

        <div>
          <img src={baseUrl + "/product_4.jpg"} className={styles.bigPic} />
        </div>
      </Slider>
    </div>
  );
}

export default SliderWithThumb;
