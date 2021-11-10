/**
 *
 * @param {*} eventName : tên sự kiện cần lắng nghe
 * @param {*} handler : hàm thực thi sự kiện đó
 */

import { useRef, useEffect } from "react";

export function useEventListener(eventName, handler) {
  // Tạo ref để lưu trữ handler
  const savedHandler = useRef();

  // Cập nhật giá trị ref.current nếu handler thay đổi
  // Cho phép useEffect bên dưới luôn cập nhật event mới nhất
  // Dependency là handler (mỗi khi handler thay đổi là ref của ta thay đổi theo)

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Kiểm tra xem sự kiện window đó có được hỗ trợ hay không
      const isSupported = window && window.addEventListener;
      // Không hỗ trợ thì sẽ return
      if (!isSupported) return;

      // Tạo sự kiện được gọi từ cái ref ban đầu
      const eventListener = (event) => savedHandler.current(event);

      // Thêm sự kiện đó vào
      window.addEventListener(eventName, eventListener);

      // Cleanup
      return () => {
        window.removeEventListener(eventName, eventListener);
      };
    },
    [eventName] //Chạy lại nếu tên sự kiện đó thay đổi
  );
}
