import { useState, useEffect } from "react";
// Action
import { useSelector, useDispatch } from "react-redux";
import { getIpLocalAction } from "../../src/redux/actions/userActions";
import { createOrderCourse } from "../../src/constant/Payment";

const danhSachSanPham = [
  {
    id: 1,
    img: "https://picsum.photos/100/100",
    name: "Điện thoại",
    price: 20000,
  },
  {
    id: 2,
    img: "https://picsum.photos/101/101",
    name: "Máy tính",
    price: 50000,
  },
  {
    id: 2,
    img: "https://picsum.photos/101/101",
    name: "Bàn làm việc",
    price: 3000000,
  },
];

function ChuongTrinhGioiThieu() {
  const [url, setUrl] = useState(null);
  const dispatch = useDispatch();
  const { customerIP } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getIpLocalAction());
  }, [customerIP]);

  const payment = (detail, customIP) => {
    const uid = new Date().getTime().toString(36);
    const newObject = Object.assign(detail, { merchRef: uid });
    const data = createOrderCourse(newObject, customIP);
    setUrl(data);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {danhSachSanPham.map((item, index) => {
          return (
            <div className="card text-white bg-secondary col-4" key={index}>
              <img className="card-img-top" src={item.img} alt={item.img} />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.price}</p>
                <a
                  onClick={() => {
                    payment(item, customerIP);
                  }}
                  className="btn btn-danger mt-3"
                  href={url}
                >
                  Thanh toán
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChuongTrinhGioiThieu;
