import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Component NextJS
import Head from "next/head";

// component Created
import Card from "src/components/card";
import Title from "src/components/title";
import Trainer from "src/components/trainer";
import EventCard from "src/components/eventCard";

// component library
import SliderItem from "react-slick";
import ModalVideo from "react-modal-video";
import useTranslation from "next-translate/useTranslation";
import Fade from "react-reveal/Fade";

// import styles scss
import styles from "@/styles/Home/Home.module.scss";

// Action
import { getIpLocalAction } from "src/redux/actions/userActions";

const menu = [
  {
    title: "Corp",
    img: "https://picsum.photos/500/300",
    link: "/",
  },
  {
    title: "Education",
    img: "https://picsum.photos/500/300",
    link: "/",
  },
  {
    title: "Performance",
    img: "https://picsum.photos/500/300",
    link: "/",
  },
  {
    title: "Coach",
    img: "https://picsum.photos/500/300",
    link: "/",
  },
  {
    title: "individual",
    img: "https://picsum.photos/500/300",
    link: "/",
  },
  {
    title: "Shop",
    img: "https://picsum.photos/500/300",
    link: "/",
  },

  // {
  //   title: "New posts",
  //   img: "https://picsum.photos/500/300",
  //   link: "/",
  // },
  // {
  //   title: "Personality Test",
  //   img: "https://picsum.photos/500/300",
  //   link: "/",
  // },
];

const content = [
  "https://www.youtube.com/embed/xvZFMeSjY2k",
  "https://www.youtube.com/embed/MTm9ckSaygs",
  "https://www.youtube.com/embed/9YvFSa_i1fk",
  "https://www.youtube.com/embed/HKgq4SXC-I4",
  "https://www.youtube.com/embed/PfFBtHYSmrE",
  "https://www.youtube.com/embed/CdiMQ05yK7o",
];

function Home() {
  const dispatch = useDispatch();
  const { t } = useTranslation("home");
  const [toggleVideo, setToggleVideo] = useState(false);
  const [videoId, setVideoId] = useState("");

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const forCarousel = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const forTrainer = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleOpenVideo = (videoId) => {
    setToggleVideo(!toggleVideo);
    setVideoId(videoId);
  };

  useEffect(() => {
    // Fetch IP from user local
    dispatch(getIpLocalAction());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {t("title")} - Công ty TNHH Giáo Dục Leading Performance Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main>
        <section className={styles.introduceTrainer}>
          <SliderItem {...forTrainer}>
            <Trainer
              name="Coach Vas"
              desc="Morbi aliquet justo eget libero lobortis, id varius dui viverra.
              In ante metus, finibus at lacus quis, luctus convallis nulla.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Donec efficitur orci molestie consectetur
              condimentum. Fusce laoreet orci ut arcu hendrerit molestie.
              Integer vehicula magna quam, quis ullamcorper neque cursus quis.
              Suspendisse potenti. Duis lacinia a tellus sed consequat. Praesent
              risus augue, varius eget enim quis, lacinia ornare enim. In in est
              ut nulla tristique cursus."
              link="/lpe/mr-vas"
              videoId="YqhZLhY_nOQ"
              imgUrl="https://i0.wp.com/finetechraju.com/wp-content/uploads/2020/09/finetechra.gif?fit=540%2C263&ssl=1"
              handleOpenVideo={handleOpenVideo}
            />

            <Trainer
              name="Coach Giang Thanh"
              desc="Morbi aliquet justo eget libero lobortis, id varius dui viverra.
              In ante metus, finibus at lacus quis, luctus convallis nulla.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Donec efficitur orci molestie consectetur
              condimentum. Fusce laoreet orci ut arcu hendrerit molestie.
              Integer vehicula magna quam, quis ullamcorper neque cursus quis.
              Suspendisse potenti. Duis lacinia a tellus sed consequat. Praesent
              risus augue, varius eget enim quis, lacinia ornare enim. In in est
              ut nulla tristique cursus."
              link="/lpe/ms-la-ha-giang-thanh"
              videoId="fAkvJPXMfjU"
              imgUrl="https://i0.wp.com/finetechraju.com/wp-content/uploads/2020/09/finetechra.gif?fit=540%2C263&ssl=1"
              handleOpenVideo={handleOpenVideo}
            />
          </SliderItem>
        </section>

        {/* make your life */}
        <section className="py-5">
          <Fade botom>
            <Title
              title="các mục quan trọng"
              description="At vero eos et accusamus et iusto odio dignissimos ducimus qui"
              textAlign="center"
            />
          </Fade>

          <div className="container">
            <div className="row">
              {menu?.map((card, index) => {
                return <Card content={card} key={index} />;
              })}
            </div>
          </div>
        </section>

        <section className={styles.upcomingEvent}>
          <Fade botom>
            <Title
              title="sự kiện sắp tới"
              description="At vero eos et accusamus et iusto odio dignissimos ducimus qui."
              textAlign="center"
            />
          </Fade>

          <Fade bottom>
            <div className="container my-5">
              <div className={styles.event}>
                <SliderItem {...settings}>
                  <EventCard />
                  <EventCard />
                  <EventCard />
                </SliderItem>
              </div>
            </div>
          </Fade>
        </section>

        {/* <div className={styles.videoTestimonials}>
          <SliderItem {...forCarousel}>
            {content.map((video, index) => {
              return (
                <div
                  style={{
                    textAlign: "center!important",
                  }}
                  key={index}
                >
                  <iframe
                    width="90%"
                    height="300"
                    src={video}
                    frameBorder={0}
                  ></iframe>
                </div>
              );
            })}
          </SliderItem>
        </div> */}

        <section className={styles.feedBack}>
          <Fade bottom>
            <Title
              title="CÂU CHUYỆN CỦA HỌC VIÊN"
              description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. PROIN FRINGILLA SAPIEN UT SAPIEN TRISTIQUE, UT LAOREET NISI CONGUE."
              textAlign="center"
            />
          </Fade>

          <Fade bottom>
            <div className="container my-4">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <figure className={styles.snip1192}>
                    <blockquote>
                      Morbi aliquet justo eget libero lobortis, id varius dui
                      viverra. In ante metus, finibus at lacus quis, luctus
                      convallis nulla. Vestibulum ante ipsum primis in faucibus
                      orci luctus et ultrices posuere cubilia curae; Donec
                      efficitur orci molestie consectetur condimentum. Fusce
                      laoreet orci ut arcu hendrerit molestie. Integer vehicula
                      magna quam, quis ullamcorper neque cursus quis.
                    </blockquote>
                    <div className={styles.author}>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                        alt="sq-sample1"
                      />
                      <h5>
                        Pelican Steve <span> LittleSnippets</span>
                      </h5>
                    </div>
                  </figure>
                </div>
                <div className="col-12 col-lg-4">
                  <figure className={styles.snip1192}>
                    <blockquote>
                      Morbi aliquet justo eget libero lobortis, id varius dui
                      viverra. In ante metus, finibus at lacus quis, luctus
                      convallis nulla. Vestibulum ante ipsum primis in faucibus
                      orci luctus et ultrices posuere cubilia curae; Donec
                      efficitur orci molestie consectetur condimentum. Fusce
                      laoreet orci ut arcu hendrerit molestie. Integer vehicula
                      magna quam, quis ullamcorper neque cursus quis.
                    </blockquote>
                    <div className={styles.author}>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                        alt="sq-sample1"
                      />
                      <h5>
                        Pelican Steve <span> LittleSnippets</span>
                      </h5>
                    </div>
                  </figure>
                </div>
                <div className="col-12 col-lg-4">
                  <figure className={styles.snip1192}>
                    <blockquote>
                      Morbi aliquet justo eget libero lobortis, id varius dui
                      viverra. In ante metus, finibus at lacus quis, luctus
                      convallis nulla. Vestibulum ante ipsum primis in faucibus
                      orci luctus et ultrices posuere cubilia curae; Donec
                      efficitur orci molestie consectetur condimentum. Fusce
                      laoreet orci ut arcu hendrerit molestie. Integer vehicula
                      magna quam, quis ullamcorper neque cursus quis.
                    </blockquote>
                    <div className={styles.author}>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                        alt="sq-sample1"
                      />
                      <h5>
                        Pelican Steve <span> LittleSnippets</span>
                      </h5>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </Fade>
        </section>

        {/* <section className={styles.testPsy}>
          <div className={styles.wrapperStarted}>
            <Fade bottom>
              <div>
                <h3>Bài thử tính cách</h3>
                <p>
                  Không biết làm thế nào để bắt đầu? Công cụ tìm giải pháp của
                  chúng tôi có thể giúp
                </p>
              </div>
              <button type="button" className={styles.btnStarter}>
                BẮT ĐẦU NGAY
              </button>
            </Fade>
          </div>
        </section> */}
      </main>

      <ModalVideo
        channel="youtube"
        isOpen={toggleVideo}
        videoId={videoId}
        onClose={() => handleOpenVideo()}
      />
    </div>
  );
}

export default Home;
