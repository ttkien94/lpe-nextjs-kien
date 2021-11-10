import PropTypes from "prop-types";
// utils
import { splitLastName, splitFirstName } from "src/utils/NameUtil";
// import SCSS
import styles from "./styles/styles.module.scss";

function LPEAvatar({ avatar, name, color, className, action, imageOnly }) {
  const openPopOver = (e) => {
    action && action(e);
  };

  const DefaultAvatar = () => {
    return (
      <div
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

        {name && (
          <span
            style={{
              color: "#333",
            }}
          >
            <>
              {splitLastName(name)} {splitFirstName(name)}
            </>
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
