import Link from "next/link";
import Image from "next/image";

import styles from "./styles/styles.module.scss";
import useTranslation from "next-translate/useTranslation";

function LoginButton({ sidebar, onClose }) {
  const { t } = useTranslation("common");

  return (
    <Link href="/dang-nhap">
      <a
        className={sidebar ? styles.imgLinkSide : styles.imgLink}
        onClick={onClose}
      >
        <Image
          src="/images/btnLogin.png"
          alt="/images/btnLogin.png"
          width={30}
          height={30}
          className={styles.imgBorder}
        />

        <span
          style={{
            marginLeft: sidebar ? "10px" : "5px",
            fontSize: sidebar ? "16px" : "14px",
            color: "#000",
          }}
          className={styles.loginText}
        >
          {t("login")}
        </span>
      </a>
    </Link>
  );
}

export default LoginButton;
