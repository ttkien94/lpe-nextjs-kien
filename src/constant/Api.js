// Đường dẫn server
export const API_ENDPOINT = "https://be-lpe.herokuapp.com/api";
// export const API_ENDPOINT = "http://localhost:8000/api";

// Auth
export const LOGIN = "/auth/sign-in";
export const REGISTER = "/auth/sign-up";
export const CHANGE_PASSWORD = "/auth/change-password";
export const FORGET_PASSWORD = "/auth/forgot-password";
export const VERIFY_FORGET_PASSWORD = "/auth/verify-forgot-password";
export const VERIFY_REGISTER = "/auth/verify-sign-up/";
// USER
export const USERS = "/users/"; // có id
export const UPLOAD_AVATAR = "/users/upload-avatar";
export const REMOVE_AVATAR = "/users/delete-avatar";
// export const GET_LIST_USERS = "/users/";

// status code
export const CODE_SUCCESS = 200;
export const CODE_CREATE_SUCCESS = 201;
export const CODE_FAILURE = 403;
export const CODE_FAILURE_SERVER = 500;
export const CODE_FAILAUTHENTICATION = 401;
