import {
  DELETE_AVATAR,
  GET_IP_LOCAL,
  GET_USER_INFO,
  UPDATE_AVATAR,
  UPDATE_USER,
} from "src/redux/constant/userConstant";

const initialState = {
  customerIP: 0,
  userInfo: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IP_LOCAL:
      state.customerIP = action.ip;
      return { ...state };

    case GET_USER_INFO:
      state.userInfo = action.userInfo;

      return { ...state };

    case UPDATE_AVATAR: {
      // Clone object from initial state
      const result = { ...state.userInfo };
      // update avatar
      result.avatar = action.avatar;
      // remake userInfo
      state.userInfo = result;
      const user = JSON.stringify(result);

      localStorage.setItem("userInfo", user);
      return { ...state };
    }
    case DELETE_AVATAR: {
      // Clone object from initial state
      const result = { ...state.userInfo, avatar: "" };
      // remake userInfo
      state.userInfo = result;

      const user = JSON.stringify(result);

      localStorage.setItem("userInfo", user);
      return { ...state };
    }
    case UPDATE_USER: {
      const result = { ...state.userInfo, ...action.userUpdate };

      state.userUpdate = result;
      const user = JSON.stringify(result);

      localStorage.setItem("userInfo", user);
      return { ...state };
    }
    default:
      return { ...state };
  }
};
