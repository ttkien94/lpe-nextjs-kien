import axios from "axios";
import { useRef, useState } from "react";
// compoennt nextjs
import Head from "next/head";
import { useRouter } from "next/router";
// component
import TextInput from "src/components/textInput";
import LPEButton from "src/components/button";
import { makeStyles } from "@material-ui/core/styles";
// constant
import {
  API_ENDPOINT,
  VERIFY_FORGET_PASSWORD,
  CODE_SUCCESS,
} from "src/constant/Api";
// styles
import styles from "../../../styles/quenMatKhau/Forget-Password.module.scss";

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
  const refForm = useRef();
  const router = useRouter();
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { token } = router.query;

  const handleSubmit = () => {
    const password = refForm.current["password"].value;
    const repassword = refForm.current["repassword"].value;

    if (!password) {
      setError({
        password: "Không được bỏ trống",
      });

      refForm.current["password"].focus();
      return;
    }

    if (password.trim().length) {
      if (password.length < 6) {
        setError({
          password: "Mật khẩu không được nhỏ hơn 6 ký tự",
        });
        return;
      } else {
        if (password.trim() !== repassword.trim()) {
          setError({
            repassword: "Không khớp với mật khẩu trên",
          });
          refForm.current["repassword"].focus();
          return;
        }
      }
    }

    changePasswordAction(repassword);
  };

  const changePasswordAction = async (submitData) => {
    setError({});
    setLoading(true);

    await axios({
      method: "POST",
      url: API_ENDPOINT + VERIFY_FORGET_PASSWORD,
      data: {
        password: submitData,
      },
      headers: {
        token: `${token}`,
      },
    })
      .then((res) => {
        if (res.status === CODE_SUCCESS) {
          setLoading(false);
          setStep((prevStep) => prevStep + 1);
        }
      })
      .catch(() => {
        setLoading(false);
        setError({
          repassword: "Hết hạn truy xuất đường dẫn này!!",
        });
      });
  };

  const renderUI = (step) => {
    switch (step) {
      case 0:
        return (
          <main className={styles.forgetContainer}>
            <div className={styles.formContainer}>
              <div className={styles.formHeading}>
                <h5>Xác nhận đổi mật khẩu mới</h5>
              </div>

              <p className={styles.descText}>
                Vui lòng nhập mật khẩu mới cho tài khoản của bạn.
              </p>

              <form className={styles.formInput} ref={refForm}>
                <TextInput
                  label="Mật khẩu mới"
                  placeHolder="Nhập mật khẩu mới"
                  type="password"
                  name="password"
                  error={error.password}
                  typeInput="text"
                />

                <TextInput
                  label="Xác nhận mật khẩu mới"
                  placeHolder="Nhập lại mật khẩu mới"
                  type="password"
                  name="repassword"
                  error={error.repassword}
                  typeInput="text"
                />

                <div className={styles.wrapperButton}>
                  <LPEButton
                    name="Xác nhận"
                    classStyled={classes.confirmBtn}
                    action={handleSubmit}
                    loading={loading}
                  />
                </div>
              </form>
            </div>
          </main>
        );
      case 1:
        return (
          <main className={styles.forgetContainer}>
            <div className={styles.formContainerForget}>
              <div className={styles.formHeading}>
                <h5>Lấy lại mật khẩu thành công</h5>
              </div>

              <p className={styles.descText}>
                Tài khoản của bạn đã được tạo mật khẩu mới
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
          </main>
        );
    }
  };

  return (
    <>
      <Head>
        <title>
          Quên mật khẩu - Công ty TNHH Giáo Dục Leading Performance Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      {renderUI(step)}
    </>
  );
}

export default VerifyForgotPassword;
