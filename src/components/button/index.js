import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

function LPEButton({
  action,
  loading,
  name,
  sizeButton,
  classStyled,
  fullWidth,
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={action}
        fullWidth={fullWidth}
        size={sizeButton}
        className={classStyled}
        disabled={loading}
      >
        {loading && <div className="loader"></div>}
        {name}
      </Button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  action: PropTypes.func,
  type: PropTypes.string,
  loading: PropTypes.bool,
};

export default LPEButton;
