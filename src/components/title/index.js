import styles from "./styles/styles.module.scss";

function Title({ textAlign, title, description }) {
  return (
    <div
      style={{
        textAlign: textAlign,
      }}
    >
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Title;
