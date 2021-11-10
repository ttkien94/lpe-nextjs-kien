import { AUTH_LOGIN } from "src/redux/constant/authConstant";

const initialState = {
  userInfo: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      // set thông tin người dùng phía dưới local
      const userInfo = JSON.stringify(action.user);
      localStorage.setItem("userInfo", userInfo);
      // set thông tin người dùng trên redux
      state.userInfo = action.user;
      return { ...state };
    default:
      return { ...state };
  }
};
