import axios from "axios";
import {
  API_ENDPOINT,
  USERS,
  UPLOAD_AVATAR,
  REMOVE_AVATAR,
} from "src/constant/Api";
import {
  GET_IP_LOCAL,
  GET_USER_INFO,
  UPDATE_AVATAR,
  DELETE_AVATAR,
  UPDATE_USER,
} from "src/redux/constant/userConstant";

import { TOKEN } from "@/src/constant/LocalStorage";
import { showToast } from "@/src/utils/ToastUtil";

export const getIpLocalAction = () => {
  return (dispatch) => {
    try {
      axios({
        url: "https://api.ipify.org",
        method: "get",
      })
        .then((res) => {
          dispatch({
            type: GET_IP_LOCAL,
            ip: res.data,
          });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const getUserInfoAction = (id) => {
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + USERS + `${id}`,
        method: "GET",
      })
        .then((res) => {
          dispatch({
            type: GET_USER_INFO,
            userInfo: res.data,
          });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(err.response.data);
    }
  };
};

export const updateAvatarAction = (formData, setLoadingImage) => {
  const token = localStorage.getItem(TOKEN);

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + UPLOAD_AVATAR,
        method: "POST",
        data: formData,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          setLoadingImage(false);
          dispatch({
            type: UPDATE_AVATAR,
            avatar: res.data.data,
          });

          showToast("success", "Cập nhật hình ảnh thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      setLoadingImage(false);
      showToast("error", "Không thể cập nhật hình ảnh", {
        timeout: 5000,
      });
      console.log(err.response.data);
    }
  };
};

export const deleteAvatarAction = (filename, setLoadingImage) => {
  const token = localStorage.getItem(TOKEN);

  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + REMOVE_AVATAR,
        method: "POST",
        data: {
          filename,
        },
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          setLoadingImage(false);
          dispatch({
            type: DELETE_AVATAR,
            avatar: res.data,
          });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      setLoadingImage(false);
      console.log(err.response.data);
    }
  };
};

export const updateUserAction = (id, dataUpdate, setIsLoading) => {
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + USERS + `${id}`,
        method: "PUT",
        data: dataUpdate,
      })
        .then((res) => {
          dispatch({
            type: UPDATE_USER,
            userUpdate: dataUpdate,
          });

          setIsLoading(false);

          showToast("success", "Cập nhật thông tin thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.log(err.response.data);
      setIsLoading(false);

      showToast("error", "Cập nhật thông tin thất bại", {
        timeout: 5000,
      });
    }
  };
};
