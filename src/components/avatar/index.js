import PropTypes from "prop-types";
// import SCSS
import styles from "./styles/styles.module.scss";

function LPEAvatar({ avatar, name, color, className, action, imageOnly }) {
  const openPopOver = (e) => {
    action && action(e);
  };

  const DefaultAvatar = () => {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          cursor: "pointer",
        }}
        onClick={(e) => {
          openPopOver(e);
        }}
      >
        {avatar ? (
          <img src={avatar} alt={avatar} className={styles.circle} />
        ) : (
          <span
            className={styles.circle}
            style={{
              backgroundColor: color || "#ffba00",
              color: "#fff",
            }}
          >
            {name && name[0].toUpperCase()}
          </span>
        )}
      </div>
    );
  };

  const AvatarImage = () => {
    return <img src={avatar} alt={avatar} className={styles.circle} />;
  };
  return <div>{imageOnly ? <AvatarImage /> : <DefaultAvatar />}</div>;
}

LPEAvatar.propTypes = {
  // avatar: PropTypes.String,
  // name: PropTypes.String,
  // color: PropTypes.String,
  // className: PropTypes.String,
  action: PropTypes.func,
};

export default LPEAvatar;
