import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import Drawer from "@material-ui/core/Drawer";
function LPEDrawer({ anchor, disableScrollLock, children, isOpen, onToggle }) {
  const [openDrawer, setOpenDrawer] = useState();

  useEffect(() => {
    setOpenDrawer(isOpen);
  }, [isOpen]);

  return (
    <Drawer
      anchor={anchor}
      open={openDrawer}
      onClose={onToggle(anchor, false)}
      disableScrollLock={disableScrollLock}
    >
      {children}
    </Drawer>
  );
}

LPEDrawer.propTypes = {
  anchor: PropTypes.string,
  disableScrollLock: PropTypes.bool,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default LPEDrawer;
