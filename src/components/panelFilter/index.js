import { Button, makeStyles } from "@material-ui/core";
import { useRef, useState } from "react";
import LPEPopover from "../popover";

const useStyles = makeStyles((theme) => ({
  btnFilter: {
    padding: "0",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: "700",
    marginRight: "30px",
  },
  btnSort: {
    padding: "0",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: "700",
  },
  textInBtn: {
    fontWeight: "500",
    marginLeft: "10px",
  },
  popOver: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  btnOption: {
    padding: "10px 20px",
    width: "100%",
  },
}));

const anchor = { vertical: "bottom", horizontal: "right" };
const transfrom = { vertical: "top", horizontal: "right" };

function PanelFilter({ onToggleDrawer }) {
  const classes = useStyles();
  const refOptionSort = useRef();

  const openPopOver = (e) => {
    refOptionSort.current.handleClick(e);
  };

  const PopOverContent = () => {
    return (
      <div className={classes.popOver}>
        <Button variant="text" size="small" className={classes.btnOption}>
          Mới nhất
        </Button>

        <Button variant="text" size="small" className={classes.btnOption}>
          Ưu chuộng
        </Button>

        <Button variant="text" size="small" className={classes.btnOption}>
          Giá thấp - cao
        </Button>

        <Button variant="text" size="small" className={classes.btnOption}>
          Giá cao - thấp
        </Button>
      </div>
    );
  };

  return (
    <div>
      <Button
        variant="text"
        size="small"
        className={classes.btnFilter}
        onClick={onToggleDrawer("right", true)}
      >
        Lọc
        <i className="fas fa-filter ml-2"></i>
      </Button>

      <Button
        variant="text"
        size="small"
        className={classes.btnSort}
        onClick={(e) => {
          openPopOver(e);
        }}
      >
        Sắp xếp theo: <p className={classes.textInBtn}>Giá thấp - cao</p>
        <i className="fas fa-sort-down ml-1 mb-2"></i>
      </Button>

      <LPEPopover
        ref={refOptionSort}
        anchor={anchor}
        transfrom={transfrom}
        content={<PopOverContent />}
      />
    </div>
  );
}

export default PanelFilter;
