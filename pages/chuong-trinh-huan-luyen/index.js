import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Link from "next/link";
import styles from "styles/chuongTrinhHuanLuyen/styles.module.scss";

export default function index() {
  const { t } = useTranslation("trainingProgram");

  return (
    <>
      <Head>
        <title>
          {t("title")} - Công ty TNHH Giáo Dục Leading Performance Education
        </title>

        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main>
        <div className={styles.wrapperImgBg}>
          <Link href="/">
            <a
              className={styles.bgOnline}
              style={{
                background: `url("https://mytourcdn.com/upload_images/Image/Location/13_5_2015/9-nhung-buc-anh-mien-trung-mytour-1.jpg")`,
              }}
            >
              <div className={styles.overlay}></div>

              <div className={styles.textTitle}>
                <h3>Khóa học Online</h3>
                <p>Mô tả khóa học Online....</p>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a
              className={styles.bgOnline}
              style={{
                background: `url("https://img4.thuthuatphanmem.vn/uploads/2019/12/10/hinh-nen-thien-nhien-cho-iphone-6-7-8_120850572.jpg")`,
              }}
            >
              <div className={styles.overlay}></div>

              <div className={styles.textTitle}>
                <h3>Khóa học Offline</h3>

                <p>Mô tả khóa học Offline....</p>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a
              className={styles.bgOnline}
              style={{
                background: `url("https://upanh123.com/wp-content/uploads/2020/11/hinh-anh-co-don-mot-minh2.jpg")`,
              }}
            >
              <div className={styles.overlay}></div>

              <div className={styles.textTitle}>
                <h3>Khóa học Media</h3>

                <p>Mô tả khóa học Media....</p>
              </div>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
