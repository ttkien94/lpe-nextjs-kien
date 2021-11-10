import { GET_LIST_COURSE } from "redux/constant/courseConstant";

const initialState = {
  list: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_COURSE:
      console.log("get list course");
      return { ...state };
    default:
      return { ...state };
  }
};
