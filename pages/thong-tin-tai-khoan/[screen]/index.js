import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Next components
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
// components
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import withAuth from "src/HOC/withAuth";
import LPEAvatar from "src/components/avatar";
import { AccountInfo, ChangePassword } from "src/modules/setting-account";
import MemberVip from "@/src/modules/setting-account/memberVip";
// import action
import { getUserInfoAction } from "src/redux/actions/userActions.js";
// constants
import { TOKEN, USER_INFO } from "src/constant/LocalStorage";
// import styled
import styles from "styles/thongTinTaiKhoan/account-info.module.scss";
import useTranslation from "next-translate/useTranslation";

function UserInfo() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const { screen } = router.query;
  const { userInfo } = useSelector((state) => state.user);
  const [tab, setTab] = useState();
  const menuTab = [
    {
      href: `/thong-tin-tai-khoan/khu-vuc-hoc-tap/`,
      name: "Khu vực học tập",
      icon: <i className="fab fa-discourse mr-3"></i>,
      screen: "khu-vuc-hoc-tap",
    },
    {
      href: `/thong-tin-tai-khoan/thanh-vien-vip/`,
      name: "Thành viên VIP",
      icon: <i className="far fa-gem text-warning mr-3"></i>,
      screen: "thanh-vien-vip",
    },
    {
      href: `/thong-tin-tai-khoan/doi-mat-khau`,
      name: "Đổi mật khẩu",
      icon: <i className="fas fa-lock mr-3"></i>,
      screen: "doi-mat-khau",
    },
    {
      href: `/thong-tin-tai-khoan/chi-tiet-don-hang/`,
      name: "Chi tiết đơn hàng",
      icon: <i className="fab fa-buffer mr-3"></i>,
      screen: "chi-tiet-don-hang",
    },
    {
      href: `/thong-tin-tai-khoan/nhan-ho-tro/`,
      name: "Nhận hỗ trợ",
      icon: <i className="fas fa-headphones-alt mr-3"></i>,
      screen: "nhan-ho-tro",
    },
  ];

  useEffect(() => {
    id && dispatch(getUserInfoAction(id));
  }, [id]);

  useEffect(() => {
    const localData = localStorage.getItem(USER_INFO);
    const idLocal = JSON.parse(localData)._id;

    setId(idLocal);
  }, [id]);

  const handleTab = (content) => {
    setTab(content);
  };

  const handleLogOut = () => {
    localStorage.removeItem(USER_INFO);
    localStorage.removeItem(TOKEN);

    location.reload();
  };

  return (
    <div className="bg-color-wh">
      <Head>
        <title>
          {t("account_info")} - Công ty TNHH Giáo Dục Leading Performance
          Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main className="container  py-5">
        {/* Button collapse menu when screen on mobile */}
        {/* Breadcrumb */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Trang chủ
          </Link>

          <Link color="inherit" href={`/thong-tin-tai-khoan/ho-so`}>
            {t("account_info")}
          </Link>

          {tab && screen !== "ho-so" && (
            <Link color="inherit" href={tab.href}>
              {tab.name}
            </Link>
          )}
        </Breadcrumbs>

        <div className="row mt-5">
          {/* Table */}
          <div className="col-4 d-none d-xl-block">
            <div className={styles.menuBox}>
              <Link
                href={`/thong-tin-tai-khoan/ho-so`}
                onClick={() => {
                  removeBreadCumb();
                }}
              >
                {/* avatar */}
                <a className={styles.infoUser}>
                  {!!userInfo && (
                    <LPEAvatar
                      name={userInfo?.name}
                      avatar={userInfo?.avatar}
                      className={styles.avatar}
                    />
                  )}

                  <div className={styles.wrapperName}>
                    {/* Tên */}
                    <p>{userInfo.name}</p>
                    {/* chức vụ */}
                    <p>
                      {userInfo.role === "client" ? "Người dùng" : "Admin"} tại
                      LPE
                    </p>
                  </div>
                </a>
              </Link>

              <ul className={styles.menuList}>
                {menuTab.map((item, index) => {
                  return (
                    <li
                      className={
                        screen !== item.screen
                          ? styles.menuItem
                          : styles.menuItemActive
                      }
                      key={index}
                      onClick={() => {
                        handleTab(item);
                      }}
                    >
                      <Link href={item.href}>
                        <a>
                          {item.icon}
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  );
                })}

                <li onClick={handleLogOut} className={styles.logout}>
                  <i className="fas fa-sign-out-alt mr-3"></i>
                  {t("logout")}
                </li>
              </ul>
            </div>
          </div>

          {/* Info */}
          <div className="col-12 col-xl-8">
            {screen === "ho-so" && (
              <>
                <div className={styles.heading}>
                  <h3>Thông tin cá nhân</h3>
                  <p>
                    Cập nhật chính xác thông tin của bạn để hoạt động tốt hơn
                    trên LPE
                  </p>
                </div>

                <AccountInfo userInfo={userInfo} id={id} />
              </>
            )}

            {screen === "khu-vuc-hoc-tap" && (
              <>
                <div className={styles.heading}>
                  <h3>Khu vực học tập</h3>
                  <p>Khóa học mà bạn đăng ký sẽ được hiển thị dưới đây</p>
                </div>
              </>
            )}

            {screen === "thanh-vien-vip" && (
              <>
                <div className={styles.heading}>
                  <h3>Thành viên VIP</h3>
                  <p>
                    Ưu đãi và lợi ích của thành viên VIP sẽ hiển thị dưới đây
                  </p>
                </div>

                <MemberVip userInfo={userInfo} id={id} />
              </>
            )}

            {screen === "doi-mat-khau" && (
              <>
                <div className={styles.heading}>
                  <h3>Đổi mật khẩu</h3>
                  <p>Đổi mật khẩu cho tài khoản của bạn</p>
                </div>

                <ChangePassword userInfo={userInfo} id={id} />
              </>
            )}

            {screen === "chi-tiet-don-hang" && (
              <>
                <div className={styles.heading}>
                  <h3>Chi tiết đơn hàng</h3>
                  <p>Chi tiết và lịch sử những đơn hàng của bạn</p>
                </div>
              </>
            )}

            {screen === "nhan-ho-tro" && (
              <>
                <div className={styles.heading}>
                  <h3>Nhận hỗ trợ</h3>
                  <p>
                    LPE chúng tôi nhận hỗ trợ các vấn đề cho bạn trong giờ hành
                    chính. nhưng chúng tôi vẫn hỗ trợ các vấn đề quan trọng
                    ngoài giờ làm việc
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
export default withAuth(UserInfo, true);
