import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

// Component from next
import Head from "next/head";
import Link from "next/link";
// Authentication
import withAuth from "src/HOC/withAuth";
// Component from project
import TextInput from "src/components/textInput";
import LPEButton from "src/components/button";
import { makeStyles } from "@material-ui/core/styles";

// util file
import { ValidationEmail } from "src/utils/EmailUtil";
// import action
import { loginAction } from "src/redux/actions/authActions.js";
// Styled
import styles from "styles/dangNhap/Login.module.scss";

const useStyles = makeStyles((theme) => ({
  loginBtn: {
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#3777BC",
    color: "#fff",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#6499e7",
    },
  },
  registerBtn: {
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#16a085",
    color: "#fff",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#3ec5aa",
    },
  },
  cancelButton: {
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#e4e6eb",
    color: "#333",
    textTransform: "capitalize",
    fontWeight: "bold",
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

  loginBtnFB: {
    marginTop: "20px",
    padding: "15px 5px",
    // backgroundColor: "#3777BC",
    color: "#3777BC",
    textTransform: "capitalize",
    fontSize: "18px",
    border: "1px solid #adb5bd",
    // "&:hover": {
    //   backgroundColor: "#2c5a8b",
    // },
  },
  loginBtnGG: {
    marginTop: "20px",
    padding: "15px 5px",
    // backgroundColor: "#e74c3c",
    color: "#e74c3c",
    textTransform: "capitalize",
    fontSize: "18px",
    border: "1px solid #adb5bd",

    // "&:hover": {
    //   backgroundColor: "#9b3328",
    // },
  },
  textLighter: {
    color: "#adb5bd",
  },
}));

function DangNhapPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const refForm = useRef(null);

  const handleLogin = () => {
    const email = refForm.current["email"].value;
    const password = refForm.current["password"].value;

    if (!email) {
      setError({
        email: "Email kh??ng ???????c b??? tr???ng",
      });

      refForm.current["email"].focus();
      return;
    } else {
      if (!ValidationEmail(email)) {
        setError({
          email: "Email kh??ng h???p l???",
        });
        refForm.current["email"].focus();
        return;
      }
    }

    if (!password) {
      setError({
        password: "M???t kh???u kh??ng ???????c b??? tr???ng",
      });
      refForm.current["password"].focus();
      return;
    }

    const dataSubmit = {
      email,
      password,
    };

    handleSubmit(dataSubmit);
  };

  const handleSubmit = (data) => {
    setError({});
    dispatch(loginAction(data, setLoading, setError));
    setLoading(true);
  };

  return (
    <>
      <Head>
        <title>
          ????ng nh???p - C??ng ty TNHH Gi??o D???c Leading Performance Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main className={styles.loginContainer}>
        <div className={styles.formContainer}>
          <form
            ref={refForm}
            style={{
              width: "330px",
            }}
          >
            <TextInput
              label="Email"
              placeHolder="Nh???p Email"
              type="text"
              name="email"
              error={error.email}
              typeInput="text"
            />

            <TextInput
              label="M???t kh???u"
              placeHolder="Nh???p m???t kh???u t??i kho???n"
              type="password"
              name="password"
              error={error.password}
              typeInput="text"
            />
          </form>

          <LPEButton
            action={handleLogin}
            name="????ng nh???p"
            loading={loading}
            fullWidth
            sizeButton="large"
            classStyled={classes.loginBtn}
          />

          <Link href="/quen-mat-khau" className={styles.forgetPassword}>
            <a
              style={{
                marginTop: "20px",
              }}
            >
              Qu??n m???t kh???u?
            </a>
          </Link>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/dang-ky">
              <a className={styles.createButton}>T???o t??i kho???n m???i</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default withAuth(DangNhapPage);
