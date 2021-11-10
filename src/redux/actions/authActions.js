import { showToast } from "@/src/utils/ToastUtil";
import axios from "axios";
import {
  API_ENDPOINT,
  CHANGE_PASSWORD,
  CODE_FAILURE,
  CODE_SUCCESS,
  LOGIN,
  REGISTER,
} from "src/constant/Api";
import { AUTH_LOGIN } from "src/redux/constant/authConstant";

/**
 *
 * @param {*} data : Data gửi lên cho server
 * @param {*} setLoading : loading nút đăng nhập
 * @param {*} setError : Thông báo lỗi về client nếu có lỗi
 * @returns
 */
export const loginAction = (data, setLoading, setError) => {
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + LOGIN,
        method: "POST",
        data,
      })
        .then((response) => {
          if (response.status === CODE_SUCCESS) {
            // Get data của user từ phía client
            const { userLogin, token } = response.data;

            // Dispatch action lên redux
            dispatch({
              type: AUTH_LOGIN,
              user: userLogin,
            });

            // Lưu accessToken xuống LocalStorage
            localStorage.setItem("accessToken", token);

            setLoading(false);

            window.location.href = "/";
          }
        })
        .catch((error) => {
          if (response.status === CODE_FAILURE) {
            setError({ password: error });
            setLoading(false);
          }
        });
    } catch (error) {
      setError({ email: "Email hoặc mật khẩu bạn nhập không đúng" });
      setLoading(false);
    }
  };
};

/**
 *
 * @param {*} data dữ liệu từ người dùng gửi lên
 * @param {*} setIsLoading set loading nút đăng ký
 * @param {*} setError hiển thị lỗi về client
 * @returns
 */

export const registerAction = (data, setLoading, setError) => {
  return async () => {
    // This action dont use dispatch to redux
    try {
      await axios({
        method: "POST",
        url: API_ENDPOINT + REGISTER,
        data,
      }).then((response) => {
        if (response.status === CODE_SUCCESS) {
          setLoading(false);
        }
      });
    } catch (error) {
      setError("Email đã tồn tại");
      setLoading(false);
      console.log(error);
    }
  };
};

export const changePasswordAction = (data, setIsLoading, setErrors) => {
  return async () => {
    // This action dont use dispatch to redux
    try {
      await axios({
        method: "POST",
        url: API_ENDPOINT + CHANGE_PASSWORD,
        data,
      }).then((response) => {
        if (response.status === CODE_SUCCESS) {
          setIsLoading(false);

          showToast("success", "Cập nhật mật khẩu thành công", {
            timeout: 5000,
          });
        }
      });
    } catch (error) {
      showToast("error", "Mật khẩu cũ không chinh xác", {
        timeout: 5000,
      });
      setIsLoading(false);
      console.log(error);
    }
  };
};
