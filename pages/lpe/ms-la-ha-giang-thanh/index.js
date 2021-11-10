import Head from "next/head";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { Flip, Fade, Zoom } from "react-reveal";
import Lightbox from "react-image-lightbox";

import styles from "styles/msLaHaGiangThanh/styles.module.scss";

function GiangThanhPage() {
  const { t } = useTranslation("giangThanh");
  const [isActiveTab, setIsActiveTab] = useState("aboutMe");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpenLightBox, setIsOpenLightBox] = useState(false);

  const menuContentAboutMe = [
    {
      id: "aboutMe",
      title: "Thông tin về tôi",
      desc: "Giang Thanh hiện đang là NLP Master Trainer, Advanced Generative Trance Coach, Time Line Therapist, Hypnotherapist. Cô là Giám đốc Điều hành của Leading Performance Education (LPE), cung cấp sản phẩm giáo dục trải nghiệm lĩnh vực NLP Khoa Học Tư Duy và các ngành khoa học tâm trí khác mà không nơi nào trên thế giới có được. Với các hoạt động của mình, cô đã mang đến làn sóng phát triển tư duy lan toả một cách lớn mạnh tại Việt Nam cũng như trên thế giới.",
      desc2:
        "La Hạ Giang Thanh còn là một chuyên gia Tư Vấn Trị Liệu với lịch Coaching dày đặc. Cô đã trực tiếp chữa lành và chuyển hoá thành công hàng trăm khách hàng từ trẻ em đến người lớn tuổi, từ nhân viên đến chủ doanh nghiệp về các vấn đề kinh doanh, sức khỏe, tâm sinh lý, vấn đề bất hòa trong mối quan hệ, vấn đề tài chính... đạt được thành công lâu dài và bền vững.",
    },

    {
      id: "career",
      title: "Sự nghiệp",
      desc: " Cô là Giám đốc Điều Hành của Leading Performance Education (LPE) trong 6 năm qua phát triển với tốc độ lan truyền chóng mặt, với sứ mệnh “Kiến tạo những nhà vô địch, để lại di sản đời sau”. Một người lãnh đạo đầy bản lĩnh, dám làm những gì người khác không dám làm, sáng tạo những gì chưa ai nghĩ đến, miễn là mang lại lợi ích cho nhiều người nhất. Điều cần phải được nhắc đến ở đây, đội ngũ nhân viên của cô là những bạn thanh niên trẻ tuổi.",
      desc2:
        "Với lượng kiến thức khổng lồ mà cô dày công nghiên cứu và với cách diễn đạt linh hoạt từ giọng điệu, ngôn từ và ngôn ngữ cơ thể, cô đã dẫn dắt những người tham gia đi qua nhiều cung bậc cảm xúc, để tự rút ra được những bài học áp dụng được ngay trong cuộc sống, tìm ra bản sắc độc đáo của chính họ, sống với niềm khát vọng cống hiến. Cô còn là người dẫn dắt và đào tạo chuyên sâu cho Khoá huấn luyện Coaching chuyên sâu của Life University, giúp các Nhà Thực Hành NLP, Nhà Tư Vấn Trị Liệu nâng cấp kỹ thuật, sở hữu và vận dụng kiến thức về khoa học tâm trí một cách đúng đắn.",
    },
  ];

  const contentHead = [
    { text: "aboutMe", content: "Về tôi" },
    { text: "career", content: "Sự nghiệp" },
    { text: "achievement", content: "Thành tựu" },
  ];

  const catelogyImg = [
    {
      id: 1,
      imgSrc:
        "https://preview.colorlib.com/theme/breed2/img/portfolio/xp1.jpg.pagespeed.ic.-lM5m8iYG-.webp",
      heading: "Lorem ipsum",
      text: "lorem, lorem issump",
    },
    {
      id: 2,
      imgSrc:
        "https://preview.colorlib.com/theme/breed2/img/portfolio/xp4.jpg.pagespeed.ic.K1EumjZqoh.webp",
      heading: "Lorem ipsum",
      text: "lorem, lorem issump",
    },
    {
      id: 3,
      imgSrc: "https://lpe.vn/beauty-from-within/static/media/2.52d9f0c3.png",
      heading: "Lorem ipsum",
      text: "lorem, lorem issump m issump lorem, lorem issumpm issump lorem, lorem issump",
    },
    {
      id: 4,
      imgSrc: "https://lpe.vn/beauty-from-within/static/media/4.8f14f428.png",
      heading: "Lorem ipsum Lorem ipsum Lorem ipsum",
      text: "lorem, lorem issump lorem, lorem issump",
    },
    {
      id: 5,
      imgSrc:
        "https://preview.colorlib.com/theme/breed2/img/portfolio/xp5.jpg.pagespeed.ic.TuKkbYuPVz.webp",
      heading: "Lorem ipsum",
      text: "lorem, lorem issump",
    },
    {
      id: 6,
      imgSrc:
        "https://preview.colorlib.com/theme/breed2/img/portfolio/xp6.jpg.pagespeed.ic.eiwhYLSWuB.webp",
      heading: "Lorem ipsum",
      text: "lorem, lorem issump",
    },
  ];

  const certificateList = [
    "https://lpe.vn/storage/gioi-thieu/la-ha-giang-thanh/bang-cap/gt-certificate-nlp-master-trainer.png",
    "https://lpe.vn/storage/gioi-thieu/la-ha-giang-thanh/bang-cap/gt-certificate-nlp-trainer.png",
    "https://lpe.vn/storage/gioi-thieu/la-ha-giang-thanh/bang-cap/gt-certificate-basic-training-in-generative-coach-work.png",
    "https://lpe.vn/storage/gioi-thieu/la-ha-giang-thanh/bang-cap/gt-certificate-intermediate-training-in-generative-coach-work.png",
    "https://lpe.vn/storage/gioi-thieu/la-ha-giang-thanh/bang-cap/gt-certificate-advenced-training-in-generative-coach-work.png",
    "https://lpe.vn/storage/gioi-thieu/la-ha-giang-thanh/bang-cap/gt-certificate-nlp-master-practictioner.png",
    "https://lpe.vn/storage/gioi-thieu/la-ha-giang-thanh/bang-cap/gt-certificate-timeline-therapist.png",
    "https://lpe.vn/storage/gioi-thieu/la-ha-giang-thanh/bang-cap/gt-certificate-hypnotherapist.png",
  ];

  const openTab = (tabName) => {
    setIsActiveTab(tabName);
  };

  const TabHeader = (contentHead) => {
    return (
      <div className="tab">
        {contentHead.map((tab) => {
          return (
            <button
              key={tab.text}
              className={`tablinks ${isActiveTab === tab.text && "active"}`}
              onClick={() => {
                openTab(tab.text);
              }}
            >
              {tab.content}
            </button>
          );
        })}
      </div>
    );
  };

  const GTTitle = (smallText, bigText) => {
    return (
      <div className={styles.mainTitle}>
        <p className={styles.topText}>
          {smallText}
          <span></span>
        </p>

        <h2>{bigText}</h2>
      </div>
    );
  };

  const handleOpenLightBox = (index) => {
    setIsOpenLightBox(true);
    setPhotoIndex(index);
  };

  return (
    <>
      <Head>
        <title>
          {t("title")} - Công ty TNHH Giáo Dục Leading Performance Education
        </title>

        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main>
        {/* Background Porfolio */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div className={styles.gtText}>
            <div className={styles.gtIntroduce}>
              <Flip bottom>
                <p>NLP Master Trainer & Advanced Generative Trance Coach</p>
                <h1>La Hạ Giang Thanh</h1>

                <a className={styles.buttonSeeMore} href="#infomore">
                  Tìm hiểu thêm
                </a>
              </Flip>
            </div>
          </div>

          <div className={styles.gtBackGround}>
            <Fade right>
              <img
                src="https://www.pngplay.com/wp-content/uploads/6/Asian-Women-Business-PNG.png"
                alt="https://www.pngplay.com/wp-content/uploads/6/Asian-Women-Business-PNG.png"
                className={styles.gtBgImg}
              />
            </Fade>
          </div>
        </div>

        <div className="container py-5">
          <Fade bottom>
            <iframe
              width="1100"
              height="600"
              src="https://www.youtube.com/embed/fAkvJPXMfjU"
              title="YouTube video player"
              frameBorder="0"
              allowfullcreen="true"
              className={styles.videoGt}
            ></iframe>
          </Fade>
        </div>

        {/* See More */}
        <div className="container" style={{ padding: "30px 0" }} id="infomore">
          <Fade bottom>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {/* Hình ảnh Coach */}
              <div className="col-12 col-lg-6 px-0">
                <img
                  src="https://images.unsplash.com/photo-1616325629936-99a9013c29c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBmZW1hbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                  alt="https://images.unsplash.com/photo-1616325629936-99a9013c29c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBmZW1hbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                  className={styles.imgGt}
                />
              </div>

              {/* Menu tab */}
              <div className="col-12 col-lg-6 py-5 px-2">
                {TabHeader(contentHead)}

                {menuContentAboutMe.map((info) => {
                  return (
                    <div
                      id={info.id}
                      key={info.id}
                      className={`tabcontent ${
                        isActiveTab === info.id && "d-block"
                      }`}
                    >
                      <h3>{info.title}</h3>

                      <p>{info.desc}</p>

                      <hr />

                      <p>{info.desc2}</p>
                    </div>
                  );
                })}

                <div
                  id="achievement"
                  className={`tabcontent ${
                    isActiveTab === "achievement" && "d-block"
                  }`}
                >
                  <h3>Thành tựu</h3>

                  <p>
                    - La Hạ Giang Thanh đã từng hợp tác huấn luyện và cố vấn cho
                    các tổ chức:
                  </p>

                  <p>- Trung tâm Khuyết tật và Phát triển DRD.</p>
                  <p>- Tập đoàn KTG (Khải Toàn Group).</p>
                  <p>- Tập đoàn World Star và Kênh truyền hình HOMEtv.</p>
                  <p>
                    - Công ty Cổ phần Đào tạo và Phát triển Spa Việt Nam - Ngọc
                    Anh Spa.
                  </p>
                  <p>- Công ty Cổ phần Công nghệ Song Thành - VoiceCloud</p>
                  <p>
                    - Công ty TNHH Phụng Hoàng - @Astore - Công nghệ di dộng.
                  </p>
                  <p>- Cơ Sở Bảo Trợ Xã Hội Thảo Đàn.</p>
                  <p>- Trung tâm Xã hội Bình Hưng.</p>
                  <p>
                    - Tập thể đại diện giáo viên các cấp tỉnh Bà Rịa - Vũng Tàu.
                  </p>
                  <p>Và còn nhiều đơn vị khác..</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* Hình ảnh các khóa học đã giảng dạy */}
        <section className="container py-5">
          {GTTitle("Một số hình ảnh", "Khóa học đã giảng dạy")}

          <div className={styles.wrapperImg}>
            {catelogyImg.map((catelogy) => {
              return (
                <Fade bottom>
                  <div
                    className={styles[`gridItem${catelogy.id}`]}
                    key={catelogy.id}
                  >
                    <img src={catelogy.imgSrc} alt={catelogy.imgSrc} />

                    <div className={styles.overlay}></div>

                    <div className={styles.shortInfo}>
                      <h4>{catelogy.heading}</h4>

                      <p>{catelogy.text}</p>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </section>

        {/* Bằng cấp */}
        <section className="container py-5">
          <Fade bottom>{GTTitle("Hình ảnh", "Bằng cấp & Chứng nhận")}</Fade>

          <div className="row mt-5">
            {certificateList.map((certify, index) => {
              return (
                <Fade bottom>
                  <div
                    className="col-12 col-md-3 my-3"
                    key={index}
                    onClick={() => {
                      handleOpenLightBox(index);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <img src={certify} alt={certify} className="img-fluid" />
                  </div>
                </Fade>
              );
            })}
          </div>
        </section>

        {/* Quotes */}
        <section>
          <div className={styles.bgQuotes}>
            <div className={styles.mainQuotes}>
              <Zoom left>
                <p>
                  "Mỗi chúng ta là một mảnh ghép độc đáo và quan trọng trong
                  kiệt tác vũ trụ."
                </p>

                <h3>- La Hạ Giang Thanh -</h3>
              </Zoom>
            </div>
          </div>
        </section>

        {isOpenLightBox && (
          <Lightbox
            mainSrc={certificateList[photoIndex]}
            nextSrc={certificateList[(photoIndex + 1) % certificateList.length]}
            prevSrc={
              certificateList[
                (photoIndex + certificateList.length - 1) %
                  certificateList.length
              ]
            }
            onCloseRequest={() => setIsOpenLightBox(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + certificateList.length - 1) %
                  certificateList.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % certificateList.length)
            }
          />
        )}
      </main>
    </>
  );
}

export default GiangThanhPage;
