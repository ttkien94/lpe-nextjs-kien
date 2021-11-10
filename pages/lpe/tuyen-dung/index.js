import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import SliderItem from "react-slick";

import styles from "styles/tuyenDung/styles.module.scss";
import LPEBanner from "@/src/components/banner";

function TuyenDungPage() {
  const { t } = useTranslation("recruitment");

  const spotLight = [
    {
      icon: <i className="fas fa-brain"></i>,
      title: "Niềm đam mê",
      desc: "Một công viêc với niềm đam mê",
    },

    {
      icon: <i className="fas fa-city"></i>,
      title: "Môi trường",
      desc: "Bạn tự do thể hiện tài năng của mình",
    },

    {
      icon: <i className="far fa-money-bill-alt"></i>,
      title: "Lương + Thưởng",
      desc: "Mức lương + thưởng hấp dẫn - xứng đáng với năng lực cá nhân",
    },

    {
      icon: <i className="fas fa-chart-line"></i>,
      title: "Cơ hội",
      desc: "Tham gia nhiều chương trình đào tạo - huấn luyện NLP của công ty",
    },
  ];

  const jobList = [
    {
      jobTitle: "Digital Marketing",
      jobDesctiption:
        "SEO - Chạy quảng cáo, thống kê & phân tích quảng cáo đa kênh",
    },
    {
      jobTitle: "Content",
      jobDesctiption: "Marketing, Brand, PR",
    },
    {
      jobTitle: "Copywriter",
      jobDesctiption: "Mô tả công việc ngắn",
    },
    {
      jobTitle: "IT Helpdesk",
      jobDesctiption: "Mô tả công việc ngắn",
    },
    {
      jobTitle: "Chăm sóc khách hàng/nhân viên kinh doanh",
      jobDesctiption: "Marketing, Brand, PR",
    },
    {
      jobTitle: "Thiết kế",
      jobDesctiption: "Thiết kế đồ họa",
    },
    {
      jobTitle: "Dịch thuật tài liệu và video",
      jobDesctiption: "Mô tả công việc ngắn",
    },
    {
      jobTitle: "Hành chính nhân sự",
      jobDesctiption: "Mô tả công việc ngắn",
    },
    {
      jobTitle: "Video",
      jobDesctiption: "Quay + dựng video",
    },
    {
      jobTitle: "Kỹ thuật - âm thanh",
      jobDesctiption: "Part-time",
    },
  ];

  const companyImgSrc = [
    "https://picsum.photos/800/400",
    "https://picsum.photos/800/400",
  ];

  const forCarousel = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div>
      <Head>
        <title>
          {t("title")} - Công ty TNHH Giáo Dục Leading Performance Education
        </title>

        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main>
        {/* Background Title */}
        <LPEBanner
          bannerImg="https://grosum.com/blog/wp-content/uploads/2019/07/7-Simple-Strategies-to-Build-a-Strong-Company-Culture-in-2019.jpg"
          headText="Hãy cùng với chúng tôi tạo nên bước đột phá"
          subText="Đó là một hành trình và tất cả chúng ta chỉ mới ở điểm khởi đầu"
        />

        {/* Spotlight  */}

        <section className="container py-5">
          <h2 className={styles.spotLightMainTitle}>
            Điểm đáng chú ý ở công việc tại LPE
          </h2>
          <div className="row">
            {spotLight.map((spotLight) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-3 mb-4 mb-md-4 mb-lg-0"
                  key={spotLight.title}
                >
                  <div className={styles.spotLightItem}>
                    {spotLight.icon}

                    <h4>{spotLight.title}</h4>
                    <p>{spotLight.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Video */}
        <section className="container py-5">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/CRe6uT_u078"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            className={styles.iFrameVideo}
          ></iframe>
        </section>

        {/* Find Job */}
        <section className="container py-5">
          <h2 className={styles.spotLightMainTitle}>Tìm kiếm đam mê của bạn</h2>

          <div className="row">
            {jobList.map((job, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-3 mt-4" key={index}>
                  <div className={styles.jobItem}>
                    <h4>{job.jobTitle}</h4>

                    <p>{job.jobDesctiption}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Loved */}
        <section className="container py-3">
          <h4 className={styles.lovedTitle}>Bạn yêu thích</h4>

          <ul className={styles.lovedList}>
            <p>- Phục vụ, phụng sự và trao giá trị đến cho mọi người</p>
            <p>- Tham gia chạy event các khóa học NLP</p>
            <p>
              - Các hoạt động kích hoạt khả năng phi thường trong bạn (leo núi,
              teambuilding;..)
            </p>
            <p>
              - Phát triển bản thân, muốn có cuộc sống tốt đẹp hơn, kiểm soát
              cảm xúc tốt, tư duy phát triển, chuyên môn phát triển
            </p>
            <p>- Môi trường làm việc lâu dài, cởi mở, hòa đồng, vui vẻ</p>
            <p>- Phát huy nhiều tài năng lẻ của bản thân</p>
          </ul>
        </section>

        {/* interest */}
        <section className="container py-3">
          <h4 className={styles.lovedTitle}>Quyền lợi của bạn</h4>

          <ul className={styles.lovedList}>
            <p>- Tham gia đầy đủ các chế độ, phúc lợi của người lao động</p>
            <p>- Thu nhập tăng ca đặc biệt x200% với đơn giá 1 giờ lương</p>
            <p>- Mỗi tuần off 1 ngày tái tạo năng lượng</p>
            <p>- Companytrip mỗi năm</p>
            <p>- Teambuilding</p>
            <p>
              - Các chế độ phúc lợi nội bộ từ công ty (thưởng KPI, thưởng doanh
              số,…)
            </p>
            <p>- Lương thưởng tháng 13</p>
          </ul>
        </section>

        {/* Hình ảnh công ty */}
        <section className={styles.companyWrapperImg}>
          <h4 className={styles.titleCompany}>Hình ảnh công ty</h4>
          <SliderItem {...forCarousel} className={styles.companyImg}>
            {[1, 2]?.map((pic, index) => (
              <div key={index}>
                <img
                  src="https://picsum.photos/800/400"
                  alt="https://picsum.photos/800/400"
                  className={styles.companyImgItem}
                />
              </div>
            ))}
          </SliderItem>
        </section>

        {/*Info */}
        <section className="container text-center pb-5">
          <h4 className={styles.titleCompany}>Bạn đã sẵn sàng</h4>

          <p>
            <strong>
              Gửi CV hoặc liên hệ NGAY đến email: admin.hr@lpe.vn (Bộ phận Hành
              chính - Nhân sự)
            </strong>
          </p>
        </section>
      </main>
    </div>
  );
}

export default TuyenDungPage;
