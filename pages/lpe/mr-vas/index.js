import React, { useState } from "react";
import Head from "next/head";
import ModalVideo from "react-modal-video";
import useTranslation from "next-translate/useTranslation";
import Lightbox from "react-image-lightbox";

import styles from "@/styles/mrvas/mrvas.module.scss";

import Title from "src/components/title";
import VasBgIntro from "src/components/vasBgIntro";
import VideoCoach from "src/components/videoCoach";

function mrVas() {
  const { t } = useTranslation("aboutVas");
  const [videoId, setvideoId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpenLightBox, setIsOpenLightBox] = useState(false);

  const contentIntroduction = [
    {
      id: 0,
      picture: "https://picsum.photos/1200/500",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dolor turpis, eget ultrices erat volutpat eu. Aliquam tincidunt risus et nisi vulputate, at mollis tellus rutrum. Duis interdum lectus ex, ac elementum ipsum laoreet quis. Sed sagittis mi odio, sed mollis lectus luctus at. Aliquam tellus neque, fringilla vitae urna ac, tincidunt iaculis enim.",
      linkButton: "/",
    },
    {
      id: 1,
      picture: "https://picsum.photos/1200/500",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dolor turpis, eget ultrices erat volutpat eu. Aliquam tincidunt risus et nisi vulputate, at mollis tellus rutrum. Duis interdum lectus ex, ac elementum ipsum laoreet quis. Sed sagittis mi odio, sed mollis lectus luctus at. Aliquam tellus neque, fringilla vitae urna ac, tincidunt iaculis enim.",
      linkButton: "/",
    },
    {
      id: 2,
      picture: "https://picsum.photos/1200/500",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dolor turpis, eget ultrices erat volutpat eu. Aliquam tincidunt risus et nisi vulputate, at mollis tellus rutrum. Duis interdum lectus ex, ac elementum ipsum laoreet quis. Sed sagittis mi odio, sed mollis lectus luctus at. Aliquam tellus neque, fringilla vitae urna ac, tincidunt iaculis enim.",
      linkButton: "/",
    },

    {
      id: 3,
      picture: "https://picsum.photos/1200/500",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dolor turpis, eget ultrices erat volutpat eu. Aliquam tincidunt risus et nisi vulputate, at mollis tellus rutrum. Duis interdum lectus ex, ac elementum ipsum laoreet quis. Sed sagittis mi odio, sed mollis lectus luctus at. Aliquam tellus neque, fringilla vitae urna ac, tincidunt iaculis enim.",
      linkButton: "/",
    },
  ];

  const videoVas = [
    {
      id: 0,
      imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
      videoId: "n6Pnzi6r9NU",
    },
    {
      id: 1,
      imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
      videoId: "u9vQcTYyQE4",
    },
    {
      id: 2,
      imgSrc: "https://lpe.vn/storage/gioi-thieu/mr-vas/mrvas-6.jpg",
      videoId: "n6Pnzi6r9NU",
    },
  ];

  const handleOpenVideo = (id) => {
    setvideoId(id);
    setIsOpen(!isOpen);
  };

  const handleOpenLightBox = (index) => {
    setIsOpenLightBox(true);
    setPhotoIndex(index);
  };

  const AboutMrVas = () => {
    return (
      <>
        <h3 className={styles.introName}>VASANTH GOPALAN</h3>

        {[0, 1, 2].map((info, index) => {
          return (
            <p className={styles.introTestDesc} key={index}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              dapibus dolor turpis, eget ultrices erat volutpat eu. Aliquam
              tincidunt risus et nisi vulputate, at mollis tellus rutrum. Duis
              interdum lectus ex, ac elementum ipsum laoreet quis. Sed sagittis
              mi odio, sed mollis lectus luctus at. Aliquam tellus neque,
              fringilla vitae urna ac, tincidunt iaculis enim. Aliquam massa
              dui, lobortis vitae ultrices
            </p>
          );
        })}
      </>
    );
  };

  const certificationList = [
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-1.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-2.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-3.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-4.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-5.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-6.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-7.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-8.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-9.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-10.jpg",
  ];

  const images = [
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-1.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-2.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-3.jpg",
    "https://lpe.vn/storage/gioi-thieu/mr-vas/bang-4.jpg",
  ];

  return (
    <>
      <Head>
        <title>
          {t("title")} - Công ty TNHH Giáo Dục Leading Performance Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />

        <link
          rel="preload"
          href="/fonts/tungsten/SF-UI-Text-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main>
        <div className={styles.bannerVas}>
          <div className={styles.bannerText}>
            <h1>COACH VAS</h1>

            <div
              className={styles.buttonPlay}
              onClick={() => {
                handleOpenVideo("4K_FXp8YAMA");
              }}
            >
              <i className="fas fa-play"></i>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div
              className="col-12 col-lg-6"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div className={styles.introText}>
                <AboutMrVas />
              </div>
            </div>

            <div
              className="col-12 col-lg-6 mt-4 mt-lg-0"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="https://lpe.vn/visionary-leadership/static/media/vas.338dc886.png"
                alt="https://lpe.vn/visionary-leadership/static/media/vas.338dc886.png"
                className="img-fluid"
                style={{
                  height: "500px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <Title
            title="CÁC CHỨNG NHẬN NLP"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui"
            textAlign="center"
          />

          <div className="row mt-4 d-flex justify-content-center">
            {certificationList.map((src, index) => {
              return (
                <div
                  className="col-12 col-lg-3 mb-3"
                  key={index}
                  onClick={() => {
                    handleOpenLightBox(index);
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img src={src} alt={src} className="img-fluid" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="container-fluid">
          <div className={styles.vasCanDo}>
            <Title
              title="PHẦN GIỚI THIỆU"
              description="At vero eos et accusamus et iusto odio dignissimos ducimus qui."
              textAlign="center"
              titleClass={styles.titleClass}
              descriptionClass={styles.descriptionClass}
            />
          </div>

          <div className="row">
            {contentIntroduction?.map((item, index) => {
              return <VasBgIntro {...item} key={index} />;
            })}
          </div>
        </div>

        <div className="container mt-5">
          <Title
            title="CÁC VIDEO GIỚI THIỆU THẦY VAS"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui"
            textAlign="center"
          />

          <div className="row my-4">
            {videoVas?.map((item) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <VideoCoach
                    key={item.id}
                    imgSrc={item.imgSrc}
                    onHandleOpenVideo={handleOpenVideo}
                    videoId={item.videoId}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="container-fluid mt-5">
          <Title
            title="HÌNH ẢNH"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui"
            textAlign="center"
          />

          <div className="row mt-4">
            {images.map((pic, index) => {
              return (
                <div className="col-12 col-lg-3 mb-3 mb-lg-0" key={index}>
                  <img src={pic} alt={pic} className="img-fluid" />
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.bannerBottomVas}>
          <div className={styles.bannerBottomText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              dapibus dolor turpis, eget ultrices erat volutpat eu. Aliquam
              tincidunt risus et nisi vulputate, at mollis tellus rutrum.
            </p>
            <h3>VASANTH GOPALAN </h3>
          </div>
        </div>

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => handleOpenVideo(!isOpen)}
        />

        {isOpenLightBox && (
          <Lightbox
            mainSrc={certificationList[photoIndex]}
            nextSrc={
              certificationList[(photoIndex + 1) % certificationList.length]
            }
            prevSrc={
              certificationList[
                (photoIndex + certificationList.length - 1) %
                  certificationList.length
              ]
            }
            onCloseRequest={() => setIsOpenLightBox(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + certificationList.length - 1) %
                  certificationList.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % certificationList.length)
            }
          />
        )}

        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => handleOpenVideo()}
        />
      </main>
    </>
  );
}

export default mrVas;
