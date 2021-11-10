import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  FormControlLabel,
  IconButton,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Rating } from "@material-ui/lab";

import styles from "./styles/styles.module.scss";

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

function FilterSide({ onToggleDrawer }) {
  const classes = useStyles();

  return (
    <div className={styles.filterSide}>
      <div className={styles.filterTitle}>
        <i className="fas fa-filter mr-1"></i>
        <p>Bộ lọc</p>
      </div>

      <div className={styles.filterBox}>
        {/* <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
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
        </Accordion> */}

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
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
            expandIcon={<ExpandMoreIcon />}
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
                  <div className={styles.ratingContent}>
                    <Rating
                      name="size-small"
                      defaultValue={4.5}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    & Trở lên
                  </div>
                }
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label={
                  <div className={styles.ratingContent}>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    & Trở lên
                  </div>
                }
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label={
                  <div className={styles.ratingContent}>
                    <Rating
                      name="size-small"
                      defaultValue={3.5}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    & Trở lên
                  </div>
                }
              />
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label={
                  <div className={styles.ratingContent}>
                    <Rating
                      name="size-small"
                      defaultValue={3}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    & Trở lên
                  </div>
                }
              />
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      </div>

      <Button
        variant="contained"
        className={classes.btnClear}
        onClick={onToggleDrawer("right", false)}
      >
        Bỏ chọn
      </Button>
    </div>
  );
}

export default FilterSide;
