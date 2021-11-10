import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// import from next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

// Component from material
import { Container, AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// component
import LPEDrawer from "src/components/drawer";
import LoginButton from "./component/login";
import SidebarHeader from "./component/sidebarMenu";
import LPEAvatar from "./component/avatar";
import LPEPopover from "src/components/popover";

// constant
import { TOKEN, USER_INFO } from "src/constant/LocalStorage";
import { isEmpty } from "@/src/utils/CheckEmpty";

// action
import { getUserInfoAction } from "@/src/redux/actions/userActions";

// styled SCSS
import styles from "./styles/styles.module.scss";

const useStyles = makeStyles(() => ({
  btnPopOver: {
    padding: "10px 20px",
    fontWeight: "bold",
    fontFamily: "product-sans",
    "&:hover": {
      color: "#fff",
      backgroundColor: "black",
    },
  },
}));

export default function Header() {
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const classes = useStyles();
  const { locale, asPath } = useRouter();
  const { userInfo } = useSelector((state) => state.user);
  const refLogin = useRef();
  const refLanguages = useRef();
  const [state, setState] = useState({
    top: false,
    right: false,
  });
  const anchor = { vertical: "bottom", horizontal: "right" };
  const transfrom = { vertical: "top", horizontal: "right" };

  const contentMenu = [
    {
      title: "LPE",
      url: "/",
      childMenu: [
        {
          title: t("about_vas"),
          url: "/lpe/mr-vas",
        },
        {
          title: t("about_gt"),
          url: "/lpe/ms-la-ha-giang-thanh",
        },
        {
          title: t("vision_lpe"),
          url: "/lpe/tam-nhin-su-menh-lpe",
        },
        {
          title: t("recruitment"),
          url: "/lpe/tuyen-dung",
        },
        {
          title: t("rules"),
          url: "/lpe/noi-quy-quy-dinh",
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
    const localInfo = localStorage.getItem(USER_INFO);
    const result = JSON.parse(localInfo);

    localInfo !== null && dispatch(getUserInfoAction(result._id));
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleMenu = (data) => {
    return (
      <ul>
        {data?.map((child, index) => {
          return (
            <li key={index}>
              <Link href={child.url}>
                <a>{child.title.toLocaleUpperCase()}</a>
              </Link>

              {child.childMenu && handleMenu(child.childMenu)}
            </li>
          );
        })}
      </ul>
    );
  };

  const logOut = () => {
    // remove data localstorage
    localStorage.removeItem(USER_INFO);
    localStorage.removeItem(TOKEN);

    // reload current page
    location.reload();
  };

  // Nội dung chứa trong pop over header
  const PopOverContent = () => {
    return (
      <div className={styles.popOver}>
        <Link href={`/thong-tin-tai-khoan/ho-so`}>
          <Button
            className={classes.btnPopOver}
            onClick={() => {
              refLogin.current.handleCloseClick();
            }}
          >
            {t("account_info")}
          </Button>
        </Link>

        <Button
          className={classes.btnPopOver}
          onClick={() => {
            logOut();
          }}
        >
          {t("logout")}
        </Button>
      </div>
    );
  };

  // Nội dung popover ngôn ngữ
  const PopOverTranslation = () => {
    return (
      <div className={styles.contentTranslationPopover}>
        <Link href={asPath} locale="en">
          <a
            onClick={() => {
              refLanguages.current.handleCloseClick();
            }}
          >
            <Image
              src="/images/en-icon.png"
              alt="/images/en-icon.png"
              width={30}
              height={30}
              style={{
                marginRight: "5px",
              }}
            />
          </a>
        </Link>

        <Link href={asPath} locale="vn">
          <a
            onClick={() => {
              refLanguages.current.handleCloseClick();
            }}
          >
            <Image
              src="/images/vn-icon.png"
              alt="/images/vn-icon.png"
              width={30}
              height={30}
              style={{
                marginRight: "5px",
              }}
            />
          </a>
        </Link>
      </div>
    );
  };

  return (
    <Container maxWidth="lg">
      <AppBar>
        <Toolbar className={styles.headerContent}>
          <Link href="/">
            <a>
              <img
                src="https://lpe.vn//storage/logo/lpe-nlp-logo.png"
                alt="https://lpe.vn//storage/logo/lpe-nlp-logo.png"
                className={styles.imgLogo}
              />
            </a>
          </Link>

          <ul className={styles.dropdown}>
            {contentMenu?.map((ele, index) => {
              return (
                <li key={index}>
                  <Link href={ele.url}>
                    <a>{ele.title.toLocaleUpperCase()}</a>
                  </Link>

                  {ele.childMenu && handleMenu(ele.childMenu)}
                </li>
              );
            })}
          </ul>

          <div className={styles.appLeftLg}>
            <Link href="/gio-hang">
              <a className={styles.cartIcon}>
                <i className="fas fa-shopping-cart"></i>
              </a>
            </Link>

            {/* <div
              className={styles.searchIcon}
              onClick={toggleDrawer("top", true)}
            >
              <i className="fas fa-search"></i>
            </div> */}

            {!isEmpty(userInfo) ? (
              <>
                <LPEAvatar
                  name={userInfo?.name}
                  avatar={userInfo?.avatar}
                  action={(e) => {
                    refLogin.current.handleClick(e);
                  }}
                />

                <LPEPopover
                  ref={refLogin}
                  anchor={anchor}
                  transfrom={transfrom}
                  content={<PopOverContent />}
                />
              </>
            ) : (
              // Button Đăng nhập
              <LoginButton />
            )}

            <div className={styles.contentTranslation}>
              <Image
                src={`/images/${locale === "en" ? "en" : "vn"}-icon.png`}
                alt={`/images/${locale === "en" ? "en" : "vn"}-icon.png`}
                width={40}
                height={40}
                className={styles.button}
                onClick={(e) => {
                  refLanguages.current.handleClick(e);
                }}
              />
            </div>
          </div>

          <div className={styles.appLeftSm}>
            <Link href="/gio-hang">
              <a className={styles.cartIcon}>
                <i className="fas fa-shopping-cart"></i>
              </a>
            </Link>

            {/* <div
              className={styles.searchIcon}
              onClick={toggleDrawer("top", true)}
            >
              <i className="fas fa-search"></i>
            </div> */}

            <div
              style={{
                marginRight: "10px",
                display: "flex",
                alignItem: "center",
              }}
            >
              <Image
                src={`/images/${locale === "en" ? "en" : "vn"}-icon.png`}
                alt={`/images/${locale === "en" ? "en" : "vn"}-icon.png`}
                width={40}
                height={40}
                className={styles.button}
                onClick={(e) => {
                  refLanguages.current.handleClick(e);
                }}
              />
            </div>

            <Image
              src="/images/menuOption.png"
              alt="/images/menuOption.png"
              width={20}
              height={20}
              onClick={toggleDrawer("right", true)}
            />
          </div>

          {/* Drawer mobile menu */}
          <LPEDrawer
            anchor="right"
            isOpen={state["right"]}
            onToggle={toggleDrawer}
            disableScrollLock
          >
            <SidebarHeader onToggle={toggleDrawer} menuContent={contentMenu} />
          </LPEDrawer>

          {/* Thanh search */}
          {/* <LPEDrawer
            anchor="top"
            isOpen={state["top"]}
            onToggle={toggleDrawer}
            disableScrollLock
          >
            <Search />
          </LPEDrawer> */}
        </Toolbar>

        {/* Drawer ngôn ngữ */}
        <LPEPopover
          ref={refLanguages}
          anchor={anchor}
          transfrom={transfrom}
          content={<PopOverTranslation />}
        />
      </AppBar>

      <Toolbar id="back-to-top-anchor" />
    </Container>
  );
}
