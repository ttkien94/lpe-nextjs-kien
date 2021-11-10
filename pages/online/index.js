import { useState } from "react";
import Head from "next/head";

import {
  Button,
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import { Rating } from "@material-ui/lab";
import { FilterListOutlined, ExpandMore } from "@material-ui/icons";

import LPEDrawer from "@/src/components/drawer";
import FilterSide from "@/src/components/filterSide";

import styles from "@/styles/khoaHocOnline/styles.module.scss";

const useStyles = makeStyles((theme) => ({
  btnFilter: {
    backgroundColor: "#3777BC",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#3777BC",
      color: "#fff",
    },
    "@media(min-width: 992px)": {
      display: "none",
    },
  },
  btnClear: {
    backgroundColor: "#3777BC",
    color: "#fff",
    margin: "0 auto",
    width: "100%",
    marginTop: "50px",

    "&:hover": {
      backgroundColor: "#3777BC",
      color: "#fff",
    },
  },
  accordion: {
    boxShadow: "none",
    backgroundColor: "#f8f9ff",
    borderBottom: "1px solid #d1d7dc",
    margin: 0,
  },
}));

function OnlineCourse() {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Head>
        <title>
          Các khóa học Online - Công ty TNHH Giáo Dục Leading Performance
          Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main className={styles.wrapperCourse}>
        <div className="container">
          <div className="row py-5">
            <div className="d-none d-lg-block col-lg-3">
              <div className={styles.filterTitle}>
                <i className="fas fa-filter mr-1"></i>
                <p>Bộ lọc tìm kiếm</p>
              </div>

              <div className={styles.filterBox}>
                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    className={styles.accordionItem}
                  >
                    Level
                  </AccordionSummary>
                  <AccordionDetails className={styles.accordionContent}>
                    <RadioGroup
                      name="level"
                      //   value={value}
                      //   onChange={handleChange}
                    >
                      <FormControlLabel
                        value="level1"
                        control={<Radio color="primary" />}
                        label="Level 1"
                      />
                      <FormControlLabel
                        value="level2"
                        control={<Radio color="primary" />}
                        label="Level 2"
                      />
                      <FormControlLabel
                        value="level3"
                        control={<Radio color="primary" />}
                        label="Level 3"
                      />
                    </RadioGroup>
                  </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    className={styles.accordionItem}
                  >
                    Giá
                  </AccordionSummary>
                  <AccordionDetails className={styles.accordionContent}>
                    <RadioGroup
                      name="price"
                      //   value={value}
                      //   onChange={handleChange}
                    >
                      <FormControlLabel
                        value="under500"
                        control={<Radio color="primary" />}
                        label="Dưới 500K"
                      />
                      <FormControlLabel
                        value="between500and1000"
                        control={<Radio color="primary" />}
                        label="Từ 500K đến 1 Triệu"
                      />
                      <FormControlLabel
                        value="morethan1000"
                        control={<Radio color="primary" />}
                        label="1 Triệu trở lên"
                      />
                    </RadioGroup>
                  </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    className={styles.accordionItem}
                  >
                    Đánh giá
                  </AccordionSummary>
                  <AccordionDetails className={styles.accordionContent}>
                    <RadioGroup
                      name="level"
                      //   value={value}
                      //   onChange={handleChange}
                    >
                      <FormControlLabel
                        value="4"
                        control={<Radio color="primary" />}
                        label={
                          <Rating
                            name="size-small"
                            defaultValue={4.5}
                            precision={0.5}
                            size="small"
                            readOnly
                          />
                        }
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio color="primary" />}
                        label={
                          <Rating
                            name="size-small"
                            defaultValue={4}
                            precision={0.5}
                            size="small"
                            readOnly
                          />
                        }
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label={
                          <Rating
                            name="size-small"
                            defaultValue={3.5}
                            precision={0.5}
                            size="small"
                            readOnly
                          />
                        }
                      />
                      <FormControlLabel
                        value="1"
                        control={<Radio color="primary" />}
                        label={
                          <Rating
                            name="size-small"
                            defaultValue={3}
                            precision={0.5}
                            size="small"
                            readOnly
                          />
                        }
                      />
                    </RadioGroup>
                  </AccordionDetails>
                </Accordion>
              </div>

              <Button variant="contained" className={classes.btnClear}>
                Bỏ chọn
              </Button>
            </div>

            <div className="col-12 col-lg-9">
              <div className={styles.heading}>
                <h3>Tất cả khóa học</h3>
                <Button
                  variant="contained"
                  startIcon={<FilterListOutlined />}
                  className={classes.btnFilter}
                  onClick={toggleDrawer("right", true)}
                >
                  Lọc
                </Button>
              </div>

              <div className={styles.contaierCard}>
                <div className="row">
                  <div
                    className="col-4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://westsiderc.org/wp-content/uploads/2020/08/Survey.jpg"
                      alt="https://westsiderc.org/wp-content/uploads/2020/08/Survey.jpg"
                      className={styles.cardImg}
                    />
                  </div>
                  <div className="col-8 ">
                    <p className={styles.headingCard}>
                      Không thể vượt qua trì hoãn, mất tập trung, sự lười?
                    </p>

                    <div className={styles.author}>
                      <p>
                        Bởi <span>La Hạ Giang Thanh</span>
                      </p>
                    </div>

                    <p className={styles.descriptionCard}>
                      Xác định rõ bạn đang mắc phải vấn đề gì dẫn đến các tình
                      trạng trễ nãi, trì hoãn,... hiện tại
                    </p>

                    <p className={styles.ratingCard}>
                      <p className={styles.ratingNumber}>4.7</p>

                      <Rating
                        name="size-small"
                        defaultValue={4.7}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                    </p>

                    <div className={styles.price}>
                      <p>300.000đ</p>
                    </div>

                    <div className={styles.tagRed}>
                      <p>Bán chạy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.contaierCard}>
                <div className="row">
                  <div
                    className="col-4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://westsiderc.org/wp-content/uploads/2020/08/Survey.jpg"
                      alt="https://westsiderc.org/wp-content/uploads/2020/08/Survey.jpg"
                      className={styles.cardImg}
                    />
                  </div>
                  <div className="col-8 ">
                    <p className={styles.headingCard}>
                      Không thể vượt qua trì hoãn, mất tập trung, sự lười?
                    </p>

                    <div className={styles.author}>
                      <p>
                        Bởi <span>La Hạ Giang Thanh</span>
                      </p>
                    </div>

                    <p className={styles.descriptionCard}>
                      Xác định rõ bạn đang mắc phải vấn đề gì dẫn đến các tình
                      trạng trễ nãi, trì hoãn,... hiện tại
                    </p>

                    <p className={styles.ratingCard}>
                      <p className={styles.ratingNumber}>4.7</p>

                      <Rating
                        name="size-small"
                        defaultValue={4.7}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                    </p>

                    <div className={styles.price}>
                      <p>300.000đ</p>
                    </div>

                    <div className={styles.tagGreen}>
                      <p>Ưu thích</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.contaierCard}>
                <div className="row">
                  <div
                    className="col-4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://westsiderc.org/wp-content/uploads/2020/08/Survey.jpg"
                      alt="https://westsiderc.org/wp-content/uploads/2020/08/Survey.jpg"
                      className={styles.cardImg}
                    />
                  </div>
                  <div className="col-8 ">
                    <p className={styles.headingCard}>
                      Không thể vượt qua trì hoãn, mất tập trung, sự lười?
                    </p>

                    <div className={styles.author}>
                      <p>
                        Bởi <span>La Hạ Giang Thanh</span>
                      </p>
                    </div>

                    <p className={styles.descriptionCard}>
                      Xác định rõ bạn đang mắc phải vấn đề gì dẫn đến các tình
                      trạng trễ nãi, trì hoãn,... hiện tại
                    </p>

                    <p className={styles.ratingCard}>
                      <p className={styles.ratingNumber}>4.7</p>

                      <Rating
                        name="size-small"
                        defaultValue={4.7}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                    </p>

                    <div className={styles.price}>
                      <p>300.000đ</p>
                    </div>

                    <div className={styles.tagBlue}>
                      <p>Mới</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LPEDrawer
          anchor="right"
          isOpen={state["right"]}
          onToggle={toggleDrawer}
          disableScrollLock
        >
          <FilterSide onToggleDrawer={toggleDrawer} />
        </LPEDrawer>
      </main>
    </>
  );
}

export default OnlineCourse;
