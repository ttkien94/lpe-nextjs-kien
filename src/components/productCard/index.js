import Link from "next/link";
import styles from "./styles/styles.module.scss";

function ProductCard({ price, imgSrc, name, id }) {
  return (
    <Link href={`/chi-tiet-san-pham/${id}`}>
      <a>
        <div className={styles.productBox}>
          <img src={imgSrc} alt={imgSrc} className={styles.productImg} />

          <div className={styles.productDetail}>
            <p className={styles.productName}>{name}</p>

            <p className={styles.productPrice}>đ {price?.toLocaleString()}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProductCard;
