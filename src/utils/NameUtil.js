/**
 * Cắt Họ và Tên từ chuỗi họ và tên
 * @param {String} Đầu vào là chuỗi tên
 */

// Cắt chuỗi
const splitStr = (str) => {
  return str.split(" ");
};

// Lấy họ
export const splitLastName = (nameStr) => {
  return splitStr(nameStr).slice(0, 1);
};

// Lấy tên
export const splitFirstName = (nameStr) => {
  return splitStr(nameStr).slice(-1);
};
