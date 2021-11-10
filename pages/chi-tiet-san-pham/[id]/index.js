import Head from "next/head";

import SliderWithThumb from "@/src/components/sliderWithThumb";
import LPETag from "@/src/components/tag";
import { Rating } from "@material-ui/lab";

import styles from "styles/chiTietSanPham/styles.module.scss";

function ProductDetail() {
  const price = 5000000;
  return (
    <>
      <Head>
        <title>
          Chi tiết sản phẩm - Công ty TNHH Giáo Dục Leading Performance
          Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main>
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-12 col-lg-6">
              <SliderWithThumb />
            </div>

            <div className="col-12 col-lg-6">
              <LPETag status="inStock" />

              <p className={styles.productName}>Nike Air Max 270 React ENG</p>

              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
                className={styles.ratingStar}
                size="large"
              />

              <p className={styles.priceDetail}>đ {price?.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
