import Head from "next/head";
import { ProgressBarLine } from "react-progressbar-line";

import { useState, useEffect } from "react";

import styles from "@/styles/baiThuTinhCach/styles.module.scss";

export const questionBank = [
  {
    key: "question1",
    id: 1,
    question: "Câu hỏi số 1?",
    answer: [
      {
        key: 1,
        img: "http://cdn.shopify.com/s/files/1/1061/1924/products/Man_Emoji_Icon_ios10_grande.png?v=1571606091",
        text: "Nam",
      },
      {
        key: 2,
        img: "https://cdn.shopify.com/s/files/1/1061/1924/products/Woman_Emoji_Icon_ios10_1024x1024.png?v=1571606114",
        text: "Nữ",
      },
    ],
  },
  {
    id: 2,
    key: "question2",
    question: "Câu hỏi số 2?",
    answer: [
      {
        key: 1,
        text: "20s",
        desc: "18-29 tuổi",
      },
      {
        key: 2,
        text: "30s",
        desc: "30-39 tuổi",
      },
      {
        key: 3,
        text: "40s",
        desc: "40-49 tuổi",
      },
      {
        key: 4,
        text: "+50",
      },
    ],
  },
  {
    id: 3,
    key: "question3",
    question: "Câu hỏi số 3?",
    subTitle:
      "Chọn khoảng thời gian bạn sẽ dành để phát triển bản thân hàng ngày.",
    answer: [
      {
        key: 1,
        text: "Dễ",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/victory-hand_270c.png",
        desc: "5 phút/ngày",
      },
      {
        key: 2,
        text: "Chung",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/ok-hand-sign_1f44c.png",
        desc: "10 phút/ngày",
      },
      {
        key: 3,
        text: "Quan trọng",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/raised-fist_270a.png",
        desc: "15 phút/ngày",
      },
      {
        key: 4,
        text: "Chuyên sâu",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/flexed-biceps_1f4aa.png",
        desc: "20 phút/ngày",
      },
    ],
  },
  {
    id: 4,
    key: "question4",
    question: "Câu hỏi số 4?",
    subTitle: "Chọn trả lời.",
    answer: [
      {
        key: 1,
        text: "Trả lời 1",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/victory-hand_270c.png",
      },
      {
        key: 2,
        text: "Trả lời 2",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/ok-hand-sign_1f44c.png",
      },
      {
        key: 3,
        text: "Trả lời 3",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/raised-fist_270a.png",
      },
      {
        key: 4,
        text: "Trả lời 4",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/flexed-biceps_1f4aa.png",
      },
    ],
  },
  {
    id: 5,
    key: "question5",
    question: "Câu hỏi số 5?",
    subTitle: "Chọn trả lời.",
    answer: [
      {
        key: 1,
        text: "Trả lời 1",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/victory-hand_270c.png",
      },
      {
        key: 2,
        text: "Trả lời 2",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/ok-hand-sign_1f44c.png",
      },
      {
        key: 3,
        text: "Trả lời 3",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/raised-fist_270a.png",
      },
      {
        key: 4,
        text: "Trả lời 4",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/flexed-biceps_1f4aa.png",
      },
    ],
  },
  {
    id: 6,
    key: "question6",
    question: "Câu hỏi số 6?",
    subTitle: "Chọn trả lời.",
    answer: [
      {
        key: 1,
        text: "Trả lời 1",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/victory-hand_270c.png",
      },
      {
        key: 2,
        text: "Trả lời 2",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/ok-hand-sign_1f44c.png",
      },
      {
        key: 3,
        text: "Trả lời 3",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/raised-fist_270a.png",
      },
      {
        key: 4,
        text: "Trả lời 4",
        img: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/flexed-biceps_1f4aa.png",
      },
    ],
  },
];

function PersonalityTest() {
  // const { question } = useParams();
  const [progresValue, setProgresValue] = useState(20);

  const demo = questionBank[2];

  return (
    <>
      <Head>
        <title>
          Bài thử tính cách - Công ty TNHH Giáo Dục Leading Performance
          Education
        </title>

        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main className="container">
        <div className={styles.wrapperQuiz}>
          <div className={styles.quizAnimation}>
            {demo?.id > 1 && (
              <div className="mt-5">
                <div className={styles.quizInfo}>
                  <p
                  // onClick={() => {
                  //   goBack(1);
                  // }}
                  >
                    <i className="fas fa-arrow-left mr-1"></i> Trở lại
                  </p>

                  <p>{1}/30</p>
                </div>

                <div className={styles.vquizProgress}>
                  <ProgressBarLine
                    value={progresValue}
                    min={0}
                    max={100}
                    strokeWidth={0.5}
                    trailWidth={0.5}
                    styles={{
                      path: {
                        stroke: "#77b497",
                      },
                      trail: {
                        stroke: "#e4e6ec",
                      },
                      text: {
                        fill: "#404040",
                        textAlign: "right",
                        fontSize: "20px",
                      },
                    }}
                  />
                </div>
              </div>
            )}

            <div className="content-quiz">
              <div className={styles.question}>
                <p>{demo?.question}</p>

                <p className={styles.subtitle}>{demo?.subTitle}</p>
              </div>

              <div className={styles.answer}>
                <div className={styles.answerW}>
                  {demo?.answer.map((item, index) => {
                    return (
                      <div
                        className="col-12 col-lg-3"
                        key={index}
                        // onClick={() => {
                        //   handleQuestion(
                        //     item.key,
                        //     demo?.key,
                        //     demo?.id
                        //   );
                        // }}
                      >
                        <div className={styles.answerQ}>
                          {item?.img && (
                            <img src={item?.img} alt="" className="img-fluid" />
                          )}

                          <div className={styles.textQuiz}>
                            <p className="mb-0">{item.text}</p>

                            {item?.desc && <span>{item.desc}</span>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PersonalityTest;
