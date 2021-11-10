import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import ScrollTopButton from "src/components/scrollTop";

// styles SCSS
import styles from "./styles/styles.module.scss";

function Footer() {
  const { t } = useTranslation("common");
  const renderLeftMenu = [
    {
      id: 1,
      name: t("home_page"),
      path: "/",
    },
    {
      id: 2,
      name: t("training_program"),
      path: "/chuong-trinh-huan-luyen",
    },
    {
      id: 3,
      name: t("posts"),
      path: "/bai-viet",
    },
    {
      id: 4,
      name: t("personality_test"),
      path: "/kiem-tra-tam-ly",
    },
    {
      id: 5,
      name: t("shop"),
      path: "/shop",
    },
  ];

  const renderRightMenu = [
    {
      id: 1,
      name: t("about_vas"),
      path: "/mr-vas",
    },
    {
      id: 2,
      name: t("about_gt"),
      path: "/ms-la-ha-giang-thanh",
    },
    {
      id: 3,
      name: t("vision_lpe"),
      path: "/tam-nhin-su-menh",
    },
    {
      id: 4,
      name: t("recruitment"),
      path: "/tuyen-dung",
    },
    {
      id: 5,
      name: t("rules"),
      path: "/noi-quy-va-chinh-sach",
    },
  ];

  return (
    <>
      <footer className={styles.wrapperFooter}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <h4 className={styles.heading}>{t("lpe_company")}</h4>
              <p>
                <i className="fas fa-location-arrow mr-1"></i>
                490 Phạm Thái Bường, Khu Mỹ Toàn I, P. Tân Phong, Quận 7, TP.
                HCM.
              </p>
              <p>
                <i className="fas fa-clock mr-1"></i>
                {t("lpe_company_timeworking")}
              </p>
              <p>
                <i className="fas fa-phone-alt mr-1"></i>028 7303 9996 - 1900
                636 034
              </p>

              <h2 className={styles.heading2}>{t("connect_us")}</h2>
              <i className="fab fa-facebook-f mr-3"></i>
              <i className="fab fa-instagram mr-3"></i>
              <i className="fab fa-youtube mr-3"></i>
              <i className="fab fa-tiktok"></i>
            </div>

            <div className="col-12 col-md-6 col-lg-5 mt-3 mt-lg-0">
              <div className="row">
                <div className="col-6">
                  <ul
                    className={styles.wrapperMenu}
                    style={{
                      listStyle: "none",
                    }}
                  >
                    {renderLeftMenu.map((item, index) => {
                      return (
                        <li className={styles.itemMenu} key={index}>
                          <Link href={item.path}>
                            <a>{item.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-6">
                  <ul
                    style={styles.wrapperMenu}
                    style={{
                      listStyle: "none",
                    }}
                  >
                    {renderRightMenu.map((item, index) => {
                      return (
                        <li className={styles.itemMenu} key={index}>
                          <Link href={item.path}>
                            <a>{item.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
              <h4 className={styles.heading}>{t("media")}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <h4
                className={styles.heading}
                style={{
                  marginTop: "30px",
                }}
              >
                {t("customer_support")}
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
        </div>
      </footer>

      <footer className={styles.wrapperInfo}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="col-12">
              <i
                className="far fa-copyright"
                style={{
                  marginRight: "10px",
                }}
              ></i>
              <span>2021 LPE Company, No copyright</span>
            </div>
          </div>
        </div>
      </footer>

      <ScrollTopButton />
    </>
  );
}

export default Footer;
