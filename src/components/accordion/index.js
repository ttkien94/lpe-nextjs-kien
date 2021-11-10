import { forwardRef, useRef, useState } from "react";

const LPEAccordion = forwardRef(({ children, title }, ref) => {
  const [onToggle, setOnToggle] = useState(false);
  const [height, setHeight] = useState("0px");
  const refHeight = useRef(null);

  const handleToggle = () => {
    setOnToggle(!onToggle);

    if (refHeight.current !== null) {
      setHeight(onToggle ? "0px" : `${refHeight.current.scrollHeight}px`);
    }
  };

  return (
    <>
      <div
        className="accordion-title"
        onClick={() => {
          handleToggle();
        }}
      >
        <p className="accordion-title_primary">
          {onToggle ? (
            <i className="fas fa-minus mr-2"></i>
          ) : (
            <i className="fas fa-plus  mr-2"></i>
          )}
          {title}
        </p>
      </div>

      <div
        className="wrapper-accordion"
        ref={refHeight}
        style={{
          maxHeight: `${height}`,
        }}
      >
        {children}
      </div>
    </>
  );
});

export default LPEAccordion;
