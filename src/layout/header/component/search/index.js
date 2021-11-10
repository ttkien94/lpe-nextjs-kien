import { Grid, Typography, InputBase, Button } from "@material-ui/core";
import styles from "./styles/styles.module.scss";

function Search() {
  return (
    <Grid
      container
      xs={12}
      justify="center"
      direction="column"
      className={styles.searchMenu}
    >
      <Typography
        variant="h6"
        align="center"
        style={{
          marginBottom: "20px",
        }}
      >
        CHÚNG TÔI CÓ THỂ GIÚP BẠN TÌM ĐƯỢC GÌ?
      </Typography>
      <Grid item justify="center" align="center" xs={12}>
        <InputBase
          placeholder="Nhập tên khóa học"
          className={styles.inputSearch}
          inputProps={{ "aria-label": "search" }}
        />
        <Button className={styles.searchButton}>Tìm kiếm</Button>
      </Grid>
    </Grid>
  );
}

export default Search;
