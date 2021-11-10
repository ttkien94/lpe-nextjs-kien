import Head from "next/head";

import styles from "@/styles/khoaHocOnline/[id]/styles.module.scss";
import LPEButton from "@/src/components/button";
import { makeStyles } from "@material-ui/core";
import Link from "next/link";
import { useRef } from "react";
import LPEAccordion from "@/src/components/accordion";

const useStyles = makeStyles((theme) => ({
  addToCartButton: {
    width: "100%",
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#3777BC",
    color: "#fff",
    textTransform: "capitalize",
    fontSize: "15px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#6499e7",
    },
  },

  buyButton: {
    width: "100%",
    backgroundColor: "#fff",
    color: "#333",
    textTransform: "capitalize",
    fontSize: "16px",
    border: "1px solid #333",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
}));

function CourseDetail() {
  const classes = useStyles();
  const accordionRef = useRef();

  return (
    <>
      <Head>
        <title>
          Không thể vượt qua trì hoãn, mất tập trung, sự lười? - Công ty TNHH
          Giáo Dục Leading Performance Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main className="container py-4">
        <section className="row">
          <div className="col-12 col-lg-8">
            <div className={styles.content}>
              <div className={styles.introVideo}>
                <img
                  src="https://westsiderc.org/wp-content/uploads/2020/08/Survey.jpg"
                  alt="https://westsiderc.org/wp-content/uploads/2020/08/Survey.jpg"
                  className="img-fluid"
                />

                <div className={styles.courseVideoOverlay}>
                  <div className={styles.playButton}>
                    <i className="fas fa-play"></i>
                  </div>
                </div>
              </div>

              <h2 className={styles.contentHeading}>
                Không thể vượt qua trì hoãn, mất tập trung, sự lười?
              </h2>

              <p className={styles.contentDescription}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci veli.
              </p>

              <p className={styles.contentAuthor}>
                <span className="mr-1">Bởi</span>
                <Link href="/ms-la-ha-giang-thanh">
                  <a>La Hạ Giang Thanh</a>
                </Link>
              </p>
            </div>

            <div className={styles.smallScreenContent}>
              <p className={styles.coursePrice}>300.000đ</p>

              <div className={styles.wrapperButton}>
                <LPEButton
                  name="Thêm vào giỏ hàng"
                  classStyled={classes.addToCartButton}
                />

                <LPEButton name="Mua ngay" classStyled={classes.buyButton} />
              </div>

              <div className={styles.wrapperInclude}>
                <p className={styles.includeHeading}>Khóa học bao gồm: </p>
                <div className={styles.includeItem}>
                  <i className="far fa-clock mr-2"></i>
                  <p>2 giờ học trên Video</p>
                </div>
                <div className={styles.includeItem}>
                  <i className="far fa-file mr-2"></i>
                  <p>20 Chủ đề</p>
                </div>
                <div className={styles.includeItem}>
                  <i className="far fa-user mr-2"></i>
                  <p>Dành cho tất cả mọi người</p>
                </div>
                <div className={styles.includeItem}>
                  <i className="fas fa-film mr-2"></i>
                  <p>Tổng số 5 video</p>
                </div>
              </div>
            </div>

            <div className={styles.benefitContent}>
              <p className={styles.benefitHeading}>Bạn sẽ học được gì?</p>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className={styles.benefitItem}>
                    <i className="fas fa-check mr-1"></i>
                    Tìm lại động lực thúc đẩy bản thân thoát khỏi những cảm xúc
                    chán nản giúp đạt hiệu quả trong công việc.
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className={styles.benefitItem}>
                    <i className="fas fa-check mr-1"></i>
                    Hiểu rõ lý do khiến bạn thường xuyên mất động lực dẫn đến
                    thói quen trì hoãn, lười.
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className={styles.benefitItem}>
                    <i className="fas fa-check mr-1"></i>
                    Tìm lại cảm giác hạnh phúc thật sự khi hoàn thành nhiệm vụ
                    của mình.
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className={styles.benefitItem}>
                    <i className="fas fa-check mr-1"></i>
                    Xác định rõ bạn đang mắc phải vấn đề gì dẫn đến các tình
                    trạng xao nhãng hiện tại.
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className={styles.benefitItem}>
                    <i className="fas fa-check mr-1"></i>
                    Tìm lại cảm giác hạnh phúc thật sự khi hoàn thành nhiệm vụ
                    của mình.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contentCourse}>
              <p className={styles.headingContent}>Nội dung khóa học</p>

              <div className={styles.wrapperAllAccordion}>
                <div className={styles.wrapperLession}>
                  <LPEAccordion title="Chủ đề 1: Sed ut perspiciatis unde.">
                    <p className={styles.lessionItem}>
                      <i className="fas fa-video mr-1"></i>1. Giới thiệu khóa
                      học
                    </p>
                    <p className={styles.lessionItem}>
                      <i className="fas fa-video mr-1"></i>2. Làm thế nào để có
                      thể hiểu bản thân?
                    </p>
                    <p className={styles.lessionItem}>
                      <i className="fas fa-video mr-1"></i>3. Tại sao Lại có
                      triệu chứng như thế?
                    </p>
                  </LPEAccordion>
                </div>

                <div className={styles.wrapperLession}>
                  <LPEAccordion title="Chủ đề 2: Sed ut perspiciatis unde omnis iste natus error.">
                    <p className={styles.lessionItem}>
                      <i className="fas fa-video mr-1"></i>4. Chúng ta Sẽ làm gì
                      để giữ bản thân luôn khỏe mạnh?
                    </p>
                    <p className={styles.lessionItem}>
                      <i className="fas fa-video mr-1"></i>5. Các bước thực hiện
                      tại nhà
                    </p>
                    <p className={styles.lessionItem}>
                      <i className="fas fa-video mr-1"></i>6. Hãy cố gắng luyện
                      tập thật nhiều.
                    </p>
                  </LPEAccordion>
                </div>
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block col-lg-4">
            <div className={styles.courseBox}>
              <div className={styles.courseBoxVideo}>
                <img
                  src="https://westsiderc.org/wp-content/uploads/2020/08/Survey.jpg"
                  alt="https://westsiderc.org/wp-content/uploads/2020/08/Survey.jpg"
                  className="img-fluid"
                />

                <div className={styles.courseVideoOverlay}>
                  <div className={styles.playButton}>
                    <i className="fas fa-play"></i>
                  </div>
                </div>
              </div>
              <div className={styles.courseBoxText}>
                <p className={styles.coursePrice}>300.000đ</p>

                <div className={styles.wrapperButton}>
                  <LPEButton
                    name="Thêm vào giỏ hàng"
                    classStyled={classes.addToCartButton}
                  />

                  <LPEButton name="Mua ngay" classStyled={classes.buyButton} />
                </div>

                <div className={styles.wrapperInclude}>
                  <p className={styles.includeHeading}>Khóa học bao gồm: </p>
                  <div className={styles.includeItem}>
                    <i className="far fa-clock mr-2"></i>
                    <p>2 giờ học trên Video</p>
                  </div>
                  <div className={styles.includeItem}>
                    <i className="far fa-file mr-2"></i>
                    <p>20 Chủ đề</p>
                  </div>
                  <div className={styles.includeItem}>
                    <i className="far fa-user mr-2"></i>
                    <p>Dành cho tất cả mọi người</p>
                  </div>
                  <div className={styles.includeItem}>
                    <i className="fas fa-film mr-2"></i>
                    <p>Tổng số 5 video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default CourseDetail;
