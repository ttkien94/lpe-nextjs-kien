import { useRef, useState } from "react";
import axios from "axios";
// components nextjs
import Head from "next/head";
// Import component
import TextInput from "src/components/textInput";
import LPEButton from "src/components/button";
// Material UI
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core";
// utils
import { convertFullDate, timeToUnix } from "src/utils/DateUtil.js";
import { ValidationEmail } from "src/utils/EmailUtil";
import { phoneValidate } from "src/utils/PhoneUtil";
import DateFnsUtils from "@date-io/date-fns";
// protect Router
import withAuth from "src/HOC/withAuth";
// constant
import { API_ENDPOINT, CODE_SUCCESS, REGISTER } from "src/constant/Api";
// styled scss
import styles from "styles/dangKy/Register.module.scss";

const useStyles = makeStyles((theme) => ({
  datePicker: {
    width: "100%",
    "& > label": {
      fontSize: "17px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "0",
      fontFamily: "product-sans, sans-serif",
    },
    "& > label + .MuiInput-formControl": {
      border: "1px solid #e5e5e5",
      borderRadius: "5px",
      padding: "10px",
      marginTop: "2.1rem",
    },
    "& .MuiInputLabel-shrink": {
      transform: "unset",
      transformOrigin: "unset",
    },
  },
  registerBtn: {
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#3777bc",
    color: "#fff",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#448ad5",
    },
  },
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

function DangKyPage() {
  const classes = useStyles();
  const refForm = useRef();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [birthDay, setBirthDay] = useState("2000-09-20T21:11:54");
  const [selectedDate, setSelectedDate] = useState(
    new Date("2000-09-20T21:11:54") // default Date
  );

  const handleRegister = () => {
    const dataSubmit = {};
    const errorMsg = {};

    // V??ng loop checking empty input
    for (let index = 0; index < refForm.current.length; index++) {
      const { name, value, type } = refForm.current[index];
      if (!value.length) {
        if (type !== "button") {
          errorMsg[name] = "Kh??ng ???????c b??? tr???ng tr?????ng n??y";
        }
      } else {
        switch (name) {
          case "birthDay": {
            dataSubmit["birthDay"] = timeToUnix(birthDay);
            break;
          }
          // passing repassword
          case "repassword": {
            break;
          }
          // passing password
          case "password": {
            break;
          }
          default:
            dataSubmit[name] = value.trim();
            break;
        }
      }
    }

    // Ki???m tra t??n ????ng k??
    const name = refForm.current["name"].value.trim();
    if (name.length > 30) {
      errorMsg["name"] = "T??n kh??ng v?????t qu?? 30 k?? t???";
      refForm.current["name"].focus();
    }

    // Ki???m tra email c?? h???p l???
    const email = refForm.current["email"].value;
    if (email.trim().length) {
      if (!ValidationEmail(email)) {
        errorMsg["email"] = "Email kh??ng h???p l???";
        refForm.current["email"].focus();
      }
    }

    // Ki???m tra s??? ??i???n tho???i c?? h???p l???
    const phone = refForm.current["phone"].value;
    if (phone.trim().length) {
      if (!phoneValidate(phone)) {
        errorMsg["phone"] = "S??? ??i???n tho???i kh??ng h???p l???";
        refForm.current["phone"].focus();
      }
    }

    // Ki???m tra m???t kh???u
    const password = refForm.current["password"].value;
    const repassword = refForm.current["repassword"].value;

    if (password.trim().length) {
      if (password.length < 6) {
        errorMsg["password"] = "M???t kh???u kh??ng ???????c nh??? h??n 6 k?? t???";
      } else {
        if (password.trim() !== repassword.trim()) {
          errorMsg["repassword"] = "Kh??ng kh???p v???i m???t kh???u tr??n";
        } else {
          dataSubmit["password"] = password;
        }
      }
    }

    // Hi???n th??? l???i v??? ph??a client
    setError(errorMsg);

    // Ki???m tra object n???u l???i s??? kh??ng th???c hi???n h??m ????ng k??
    if (Object.keys(errorMsg).length === 0) {
      handleSubmit(dataSubmit, setLoading);
    }
  };

  const handleSubmit = async (data) => {
    setLoading(true);

    await axios({
      method: "POST",
      url: API_ENDPOINT + REGISTER,
      data,
    })
      .then((response) => {
        if (response.status === CODE_SUCCESS) {
          setLoading(false);
          setStep((prevState) => prevState + 1);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError({
          email: "Email ???? t???n t???i",
        });
        console.log(err);
      });
  };

  const handleDateChange = (date) => {
    setBirthDay(convertFullDate(date));
    setSelectedDate(date);
  };

  const RenderUI = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <main className={styles.registerContainer}>
              <div className="row">
                <div className={styles.formContainer}>
                  <form ref={refForm}>
                    <div className="row">
                      <div className="col-12">
                        <TextInput
                          label="H??? v?? t??n"
                          placeHolder="Nguy???n V??n A"
                          type="text"
                          name="name"
                          error={error.name}
                          typeInput="text"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-md-6">
                        <TextInput
                          label="Email"
                          placeHolder="JohnDoe@gmail.com"
                          type="email"
                          name="email"
                          error={error.email}
                          typeInput="text"
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <TextInput
                          label="S??? ??i???n tho???i"
                          placeHolder="09XXXXXXXX"
                          type="phone"
                          name="phone"
                          error={error.phone}
                          typeInput="text"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div
                        className="col-12 col-md-6"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            className={classes.datePicker}
                            id="date-picker-dialog"
                            label="Ng??y sinh"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                            name="birthDay"
                          />
                        </MuiPickersUtilsProvider>
                      </div>
                      <div className="col-12 col-md-6">
                        <TextInput
                          label="Gi???i t??nh"
                          placeHolder="Nh???p gi???i t??nh"
                          name="gender"
                          error={error.gender}
                          typeInput="select"
                        />
                      </div>
                    </div>

                    <TextInput
                      label="M???t kh???u"
                      placeHolder="Nh???p m???t kh???u"
                      type="password"
                      name="password"
                      error={error.password}
                      typeInput="text"
                    />

                    <TextInput
                      label="Nh???p l???i m???t kh???u"
                      placeHolder="Nh???p l???i m???t kh???u"
                      type="password"
                      name="repassword"
                      error={error.repassword}
                      typeInput="text"
                    />
                  </form>

                  <div className={styles.positionButton}>
                    <LPEButton
                      action={handleRegister}
                      name="T???o t??i kho???n"
                      loading={loading}
                      classStyled={classes.registerBtn}
                    />
                  </div>
                </div>
              </div>
            </main>
          </>
        );
      case 1:
        return (
          <>
            <main className={styles.OTPContainer}>
              <div className={styles.formContainerOTP}>
                <div className={styles.formHeading}>
                  <h5>LPE ???? g???i m???t Email x??c th???c ?????n cho b???n</h5>
                </div>

                <p className={styles.descText}>
                  Vui l??ng ki???m tra h???p th?? ?????n, c?? th??? Email n???m trong m???c spam
                  c???a b???n.
                </p>
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <>
      <Head>
        <title>
          ????ng k?? - C??ng ty TNHH Gi??o D???c Leading Performance Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      {RenderUI(step)}
    </>
  );
}

export default withAuth(DangKyPage);
