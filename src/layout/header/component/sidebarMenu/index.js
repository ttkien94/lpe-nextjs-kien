import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
// NextJS component
import Image from "next/image";
import Link from "next/link";
// Material UI component
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// component
import LoginButton from "../login";
import LPEAvatar from "../avatar";

// constant
import { TOKEN, USER_INFO } from "src/constant/LocalStorage";

// Styles CSS
import styles from "./styles/styles.module.scss";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function SidebarHeader({ onToggle }) {
  const [userInfo, setUserInfo] = useState(null);
  const { t } = useTranslation("common");

  const contentMenu = [
    {
      title: "LPE",
      url: "/",
      childMenu: [
        {
          title: t("about_vas"),
          url: "/mr-vas",
        },
        {
          title: t("about_gt"),
          url: "/ms-la-ha-giang-thanh",
        },
        {
          title: t("vision_lpe"),
          url: "/tam-nhin-su-menh-lpe",
        },
        {
          title: t("recruitment"),
          url: "/tuyen-dung",
        },
        {
          title: t("rules"),
          url: "/noi-quy-quy-dinh",
        },
      ],
    },
    {
      title: t("training_program"),
      url: "/chuong-trinh-huan-luyen",
      childMenu: [
        {
          title: t("live_course"),
          url: "/online",
        },
        {
          title: t("online_course"),
          url: "/offline",
        },
        {
          title: t("media_course"),
          url: "/video-audio",
        },
      ],
    },
    // {
    //   title: t("posts"),
    //   url: "/bai-viet",
    // },
    // {
    //   title: t("personality_test"),
    //   url: "/bai-thu-tinh-cach",
    // },
    {
      title: t("shop"),
      url: "/cua-hang",
    },
  ];

  useEffect(() => {
    const user = localStorage.getItem(USER_INFO);
    // chuyển json sang object
    const parseUser = JSON.parse(user);

    user !== null && setUserInfo(parseUser);
  }, []);

  const logOut = () => {
    // remove data localstorage
    localStorage.removeItem(USER_INFO);
    localStorage.removeItem(TOKEN);

    // reload current page
    location.reload();
  };

  const handleMenu = (data) => {
    return (
      <ul>
        {data?.map((child, index) => {
          return (
            <Accordion
              key={index}
              style={{
                border: "none",
                boxShadow: "transparent",
                padding: 0,
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                  backgroundColor: "#fff",
                  margin: 0,
                  paddingLeft: "36px",
                }}
                className={styles.wrapperMenu}
                expandIcon={child.childMenu && <ExpandMoreIcon />}
              >
                <Link href={child.url}>
                  <a
                    className={styles.titleUrl2}
                    onClick={onToggle("right", false)}
                  >
                    {child.title.toLocaleUpperCase()}
                  </a>
                </Link>
              </AccordionSummary>

              {child.childMenu && (
                <AccordionDetails>
                  {handleMenu(child.childMenu)}
                </AccordionDetails>
              )}
            </Accordion>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.sideMenu}>
      <div>
        <div className={styles.menuLogin}>
          {userInfo !== null ? (
            <Link href={`/thong-tin-tai-khoan/ho-so`}>
              <a className={styles.titleUrl} onClick={onToggle("right", false)}>
                <LPEAvatar name={userInfo.name} avatar={userInfo.avatar} />
              </a>
            </Link>
          ) : (
            <LoginButton sidebar onClose={onToggle("right", false)} />
          )}

          <Image
            src="/images/nextButton.png"
            width={18}
            height={18}
            className={styles.imgNext}
            onClick={onToggle("right", false)}
          />
        </div>

        <ul className={styles.menuSide}>
          {contentMenu?.map((ele, index) => {
            return (
              <Accordion
                key={index}
                style={{
                  border: "none",
                  boxShadow: "transparent",
                }}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{
                    backgroundColor: "#fff",
                  }}
                  expandIcon={ele.childMenu && <ExpandMoreIcon />}
                >
                  <Link href={ele.url}>
                    <a
                      className={styles.titleUrl}
                      onClick={onToggle("right", false)}
                    >
                      {ele.title.toLocaleUpperCase()}
                    </a>
                  </Link>
                </AccordionSummary>

                {ele.childMenu && (
                  <AccordionDetails>
                    {handleMenu(ele.childMenu)}
                  </AccordionDetails>
                )}
              </Accordion>
            );
          })}
        </ul>

        {userInfo && (
          <>
            <div
              className={styles.logOut}
              onClick={() => {
                logOut();
              }}
            >
              <p className={styles.titleUrl}>Đăng xuất</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SidebarHeader;
