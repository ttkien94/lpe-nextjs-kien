import Head from "next/head";
import { makeStyles } from "@material-ui/core";

import TextInput from "@/src/components/textInput";
import LPEButton from "@/src/components/button";

import styles from "@/styles/nang-cap/styles.module.scss";

const upgradeItem = [
  {
    icon: <i className="fas fa-medal"></i>,
    heading: "Huy hiệu đặc quyền",
    content:
      "Bạn sẽ nhận được huy hiệu nổi bật khi tham gia các hoạt động của LPE",
  },
  {
    icon: <i className="fas fa-percent"></i>,
    heading: "Coupon miễn phí 50%",
    content:
      "Coupon giảm giá trực tiếp 50% giá trị đơn hàng của các khóa học chất lượng cao của LPE",
  },
  {
    icon: <i className="far fa-money-bill-alt"></i>,
    heading: "Tiết kiệm chi phí",
    content:
      "Giúp bạn tiết kiệm hơn tất cả các khoản chi phí đáng kể so với thành viên thông thường",
  },
  {
    icon: <i className="fas fa-ticket-alt"></i>,
    heading: "Vé offline Miễn phí",
    content:
      "Được tham gia các buổi offline của LPE miễn phí khi có sự kiện offline mới diễn ra.",
  },
  {
    icon: <i className="fas fa-headset"></i>,
    heading: "Ưu tiên hỗ trợ",
    content: "Thanh viên VIP sẽ được LPE team hỗ trợ ưu tiên nhanh chóng hơn.",
  },
  {
    icon: <i className="fas fa-tshirt"></i>,
    heading: "Áo thun miễn phí",
    content:
      "Được nhận 1 áo thun miễn phí trong bộ sưu tập LPE. LPE sẽ gửi về trực tiếp nơi bạn đang sinh sống.",
  },
  {
    icon: <i className="fas fa-cogs"></i>,
    heading: "Ưu tiên sử dụng các tính năng mới LPE",
    content:
      "Trải nghiệm sớm hơn các tính năng mới và có quyền đề xuất thay đổi.",
  },
  {
    icon: <i className="fas fa-history"></i>,
    heading: "Hỗ trợ cập nhật",
    content:
      "Khi sắp hết hạn VIP sẽ được thông báo cập nhập lại quyền VIP 1 cách nhanh chóng. Đảm bảo bạn không bỏ lỡ những cập nhật mới của LPE.",
  },
];

const useStyles = makeStyles((theme) => ({
  confirmBtn: {
    margin: "30px 0",
    width: "30%",
    padding: "12px 0",
    background: "linear-gradient(to right,#ffa751,#ffe259)",
    color: "#fff",
    textTransform: "capitalize",
    fontSize: "16px",
    borderRadius: "10px",
  },
}));

function Upgrade() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>
          Nâng cấp tài khoản - Công ty TNHH Giáo Dục Leading Performance
          Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={styles.wrapperUpgrade}>
          <header className={styles.bgUpgrade}>
            <h1>
              Trở thành thành viên VIP để có thêm nhiều quà tặng, ưu đãi và
              nhiều quyền lợi khác trên LPE
            </h1>
          </header>

          <div className={styles.contentUpgrade}>
            <h2>Chương trình Ưu Đãi cho VIP</h2>

            <p>
              LPE tạo ra chương trình Thành Viên VIP đánh dấu những thành viên
              học tập tích cực tại nền tảng. Khi đăng ký trở thành thành viên
              VIP bạn sẽ được những quyền lợi ưu tiên và ưu đãi hấp dẫn
            </p>

            <div className="row my-5 p-3">
              {upgradeItem.map((item, index) => {
                return (
                  <div className="col-6 col-lg-3 mb-3" key={index}>
                    <div className={styles.upgradeItem}>
                      {item.icon}
                      <h3>{item.heading}</h3>
                      <p>{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <h2>Tiến hàng nâng cấp VIP cho bạn</h2>

            <p>
              Nhập Email của bạn để LPE có thể xác nhận đăng ký VIP, đồng thời
              chúng tôi sẽ hỗ trợ trực tiếp cho bạn qua email.
            </p>

            <div className={styles.tagPrice}>
              <p>Chỉ 499k/tháng</p>
            </div>

            <form className={styles.formUpgrade}>
              <TextInput
                label="Email đăng ký VIP với LPE"
                placeHolder="Nhập Email đăng ký VIP"
                type="email"
                name="email"
                // error={error.email}
                typeInput="text"
              />
            </form>

            <LPEButton
              name="Xác nhận đăng ký"
              classStyled={classes.confirmBtn}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Upgrade;
