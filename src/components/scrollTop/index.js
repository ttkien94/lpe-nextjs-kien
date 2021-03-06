import styles from "./styles/styles.module.scss";
// import from material
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={styles.buttonTopPosition}
      >
        {children}
      </div>
    </Zoom>
  );
}

function ScrollTopButton(props) {
  return (
    <ScrollTop {...props}>
      <Fab
        size="medium"
        aria-label="scroll back to top"
        className={styles.buttonColor}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  );
}

export default ScrollTopButton;
