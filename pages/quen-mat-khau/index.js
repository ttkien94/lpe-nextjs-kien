import axios from "axios";
import { useState, useRef, useEffect } from "react";
// Component from Nextjs
import Head from "next/head";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Component
import TextInput from "src/components/textInput";
import LPEButton from "src/components/button";
// utils and constant
import { API_ENDPOINT, FORGET_PASSWORD, CODE_SUCCESS } from "src/constant/Api";
import { ValidationEmail } from "src/utils/EmailUtil";
// styles
import styles from "styles/quenMatKhau/Forget-Password.module.scss";

const useStyles = makeStyles(() => ({
  cancelButton: {
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#e4e6eb",
    color: "#333",
    textTransform: "capitalize",
    fontWeight: "bold",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "#edeef1",
    },
  },
  findButton: {
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

function ForgetPassword() {
  const classes = useStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter((prevState) => prevState - 1);
      }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  const refForm = useRef();

  const handleCancel = () => {
    router.back();
  };

  const handleSubmit = () => {
    const email = refForm.current["email"].value;

    if (!email) {
      setError({
        email: "Email không được bỏ trống",
      });

      refForm.current["email"].focus();
      return;
    } else {
      if (!ValidationEmail(email)) {
        setError({
          email: "Email không hợp lệ",
        });
        refForm.current["email"].focus();
        return;
      }
    }

    forgetAction(email);
  };

  const forgetAction = async (email) => {
    setError({});
    setLoading(true); //disable nút

    setTimeout(() => {
      setLoading(false); //active nút
    }, 60000);

    setCounter(60);

    await axios({
      method: "POST",
      url: API_ENDPOINT + FORGET_PASSWORD,
      data: {
        email,
      },
    })
      .then((res) => {
        if (res.status === CODE_SUCCESS) {
          console.log(res.data);
        }
      })
      .catch(() => {
        setLoading(false);
        setError({
          email: "Email không được tìm thấy",
        });
      });
  };

  return (
    <>
      <Head>
        <title>
          Quên mật khẩu - Công ty TNHH Giáo Dục Leading Performance Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main className={styles.forgetContainer}>
        <div className={styles.formContainer}>
          <div className={styles.formHeading}>
            <h5>Tìm lại mật khẩu của bạn</h5>
          </div>

          <p className={styles.descText}>
            Vui lòng nhập email để tìm kiếm tài khoản của bạn.
          </p>

          <form className={styles.formInput} ref={refForm}>
            <TextInput
              label="Email"
              placeHolder="Nhập Email"
              type="text"
              name="email"
              error={error.email}
              typeInput="text"
            />

            <p className="text-warning text-left">
              {loading && "Gửi lại nếu bạn không nhận được mail"}
            </p>

            <div className={styles.wrapperButton}>
              <LPEButton
                name="Hủy"
                action={handleCancel}
                classStyled={classes.cancelButton}
              />

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={handleSubmit}
                  className={classes.findButton}
                  disabled={loading}
                >
                  {loading ? `Gửi lại sau ${counter}s` : "Tìm kiếm"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default ForgetPassword;
