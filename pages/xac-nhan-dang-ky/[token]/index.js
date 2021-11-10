import axios from "axios";
import { useEffect, useState } from "react";

// compoennt nextjs
import Head from "next/head";
import { useRouter } from "next/router";

// component
import LPEButton from "src/components/button";
import { makeStyles } from "@material-ui/core/styles";

// styles
import styles from "styles/quenMatKhau/Forget-Password.module.scss";
import { API_ENDPOINT, VERIFY_REGISTER } from "src/constant/Api";

const useStyles = makeStyles(() => ({
  confirmBtn: {
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#3777BC",
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#6499e7",
    },
  },
}));

function VerifyForgotPassword() {
  const router = useRouter();
  const { token } = router.query;
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);

    await axios({
      method: "post",
      url: API_ENDPOINT + VERIFY_REGISTER,
      data: {
        token: token,
      },
    })
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>
          Xác thực Email - Công ty TNHH Giáo Dục Leading Performance Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main className={styles.forgetContainer}>
        {isLoading ? (
          "Đang tải"
        ) : (
          <div className={styles.formContainerForget}>
            <div className={styles.formHeading}>
              <h5>Tạo tài khoản thành công</h5>
            </div>

            <p className={styles.descText}>
              Tài khoản của bạn đã được xác thực
            </p>

            <p className={styles.descText}>
              Giờ đây bạn có thể đăng nhập và sử dụng tài khoản.
            </p>

            <div className={styles.formInput}>
              <LPEButton
                name="Đăng nhập"
                classStyled={classes.confirmBtn}
                action={() => {
                  router.push("/dang-nhap");
                }}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default VerifyForgotPassword;
