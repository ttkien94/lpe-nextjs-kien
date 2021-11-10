import styles from "./styles/styles.module.scss";

function LPETag({ status }) {
  return (
    <div>
      {status === "inStock" && (
        <div className={styles.inStockCSS}>
          <p>Còn hàng</p>
        </div>
      )}

      {status === "lowStock" && (
        <div className={styles.lowStockCSS}>
          <p>Còn ít</p>
        </div>
      )}

      {status === "outOfStock" && (
        <div className={styles.outOfStockCSS}>
          <p>Hết hàng</p>
        </div>
      )}
    </div>
  );
}

export default LPETag;
