import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import SliderItem from "react-slick";
import { Fade } from "react-reveal";

import LPEBanner from "@/src/components/banner";

import styles from "styles/tamNhinSuMenh/styles.module.scss";

function VisionPage() {
  const { t } = useTranslation("vision");

  const quotes = (title, quote, width) => {
    return (
      <>
        <p className={styles.subTitle}>{title}</p>

        <p
          className={styles.quotes}
          style={{
            width,
          }}
        >
          {quote}
        </p>
      </>
    );
  };

  const forCarousel = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const ceoLPE = [
    {
      name: "Vasanth Gopalan",
      position: "NLP Master Trainer / Chairman",
      desc: [
        " - Là chủ tịch của tập đoàn Leading Performance Group, hoạt động tại Singapore, Malaysia, Vietnam, Thailand, Maldives, Sri Lanka. Các công ty con hoạt động mạnh nhất",
        "  - Mr.Vas là Master Trainer trong ngành khoa học NLP và nhiều ngành khoa học tâm trí khác. Hiện tại, hai đối tác Leading Performance đã hình thành nên những chiến lược kinh doanh cụ thể để phục vụ thị trường Việt Nam theo một cách có tổ chức, với tư duy hướng đến tầm nhìn lâu dài và phát triển bền vững. Thương hiệu NLP của Vas được lập ra trên nền tảng mối quan hệ đối tác thân tín của ông với Hội đồng NLP Hoa Kỳ và Đại học NLP USA. Thương hiệu NLP của ông trở nên mạnh mẽ hơn hẳn nhờ vào 30 năm kinh nghiệm trong lĩnh vực đào tạo, khi ông đang phục vụ cho Lực lượng vũ trang Singapore trên vai trò Sĩ Quan Tham Mưu.",
      ],
      avatar: "https://picsum.photos/600/400",
    },
    {
      name: "Ms. La Hạ Giang Thanh",
      position: "Managing Director",
      desc: [
        " - La Hạ Giang Thanh là Giám Đốc Điều Hành của Leading Performance Education và là đối tác của Mr.Vas. Là Giám Đốc Điều hành trẻ tuổi và tài năng, La Hạ Giang Thanh đã dẫn dắt đội ngũ nhân viên của mình là những bạn thanh niên trẻ tuổi, năng động trở thành con người tuyệt vời nhất của chính họ và từng bước khẳng định vị thế của ngành khoa học tư duy NLP tại Việt Nam, và cả Châu Á.",
        "  - Bên cạnh đó, cô phát triển và xây dựng hệ thống công ty trở nên vững mạnh đặc biệt là bộ phận Sale Marketing, để truyền thông quảng bá một sản phẩm vô hình - các khóa học NLP chuyên sâu và các môn khoa học tâm trí khác. Để có được thành công mạnh mẽ cho các dự án, cô đã sử dụng ngôn ngữ tâm lý và kỹ thuật giao tiếp với vô thức (phần tâm trí 90% tiềm năng trong con người), cũng như các chiến lược xuất chúng vào trong chiến lược hoạt động của công ty.",
      ],
      avatar: "https://picsum.photos/600/400",
    },
    {
      name: "Mr. Rossi Vasanth",
      position: "Business Development Director",
      desc: [
        " - NLP Trainer - Chuyên Gia Đào Tạo ngành khoa học NLP.",
        " - Musician - Nhạc Sĩ.",
        " - Rossi Vasanth, là con trai thứ của Mr. Vas. Xuất phát là một ca sĩ chuyên nghiệp hoạt động tại Singapore, nhưng anh đã quyết định dấng thân vào ngành kinh doanh Huấn Luyện cùng cha mình, với mong muốn “LÀM CHO CON NGƯỜI HẠNH PHÚC”. Anh biến âm nhạc trở thành một loại thuốc chữa cho tâm hồn trong tất cả các chương trình Huấn Luyện của Leading Performance Education.",
      ],
      avatar: "https://picsum.photos/600/400",
    },
  ];

  return (
    <>
      <Head>
        <title>
          {t("title")} - Công ty TNHH Giáo Dục Leading Performance Education
        </title>

        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main className="pb-5">
        <LPEBanner
          bannerImg="https://t4.ftcdn.net/jpg/02/24/03/63/240_F_224036335_7S4yLGab8V3fJjCR5C8gw8y95DQ2zXux.jpg"
          headText="Hãy cùng với chúng tôi hướng về một tương lai tốt đẹp hơn"
          subText="Tầm nhìn và sứ mệnh cao cả của đội ngũ LPE"
        />

        <div className="container">
          <Fade bottom>
            <h1 className={styles.heading}>
              Tầm nhìn, Sứ mệnh và Giá trị cốt lõi
            </h1>
          </Fade>

          <Fade bottom>
            {quotes(
              "Tầm nhìn LPE",
              "Một ngày nào đó, mọi con người sẽ có cảm giác được Tốt Nghiệp Cuộc Đời này để sống mỗi khoảnh khắc trong mừng vui và phước lành.",
              "70%"
            )}
          </Fade>

          <Fade bottom>
            <p className={styles.textDetail}>
              Công ty giáo dục TNHH Leading Performance - Leading Performance
              Education (LPE) là công ty chuyên cung cấp các giải pháp cho các
              vấn đề sức khoẻ, nghề nghiệp, học vấn, mối quan hệ gia đình, nuôi
              dạy con cái, mối quan hệ xã hội, cống hiến xã hội, thú vui và giải
              trí, đời sống tâm linh, kỹ năng với các dòng sản phẩm chính.
            </p>
          </Fade>
        </div>

        <Fade bottom>
          <div
            style={{
              backgroundColor: "#f7f7f7",
              marginTop: "40px",
            }}
          >
            <div className="container">
              <div className="row py-1">
                <div className="col-12 col-md-7">
                  <img
                    src="https://picsum.photos/600/400"
                    alt="https://picsum.photos/600/400"
                    className="img-fluid"
                  />
                </div>

                <div className="col-12 col-md-5">
                  {quotes(
                    "Sứ mệnh",
                    "Giúp đỡ người Việt có được tư duy tích cực hướng đến thành công toàn diện khi họ đang phục vụ cho nước nhà trở thành một cường quốc kinh tế toàn cầu.",
                    "100%"
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <div className="container py-5">
          <Fade bottom>
            <p className={styles.subTitle}>Thành viên ban giám đốc</p>
          </Fade>

          <Fade bottom>
            <div className={styles.customSlider}>
              <SliderItem {...forCarousel} className="visonPage">
                {ceoLPE.map((person, index) => {
                  return (
                    <div className={styles.carouselCeo} key={index}>
                      <div className="col-12 col-lg-6">
                        <p className={styles.lpeceo}>{person.name}</p>
                        <p className={styles.ceoPosition}>{person.position}</p>

                        {person.desc.map((info, index) => {
                          return (
                            <p className={styles.descCeo} key={index}>
                              {info}
                            </p>
                          );
                        })}
                      </div>

                      <div className="col-12 col-lg-6">
                        <img
                          src={person.avatar}
                          alt={person.avatar}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  );
                })}
              </SliderItem>
            </div>
          </Fade>
        </div>
      </main>
    </>
  );
}

export default VisionPage;
