import { forwardRef, useRef, useEffect, useState } from "react";

import styles from "./styles/styles.module.scss";

const TextInput = forwardRef(
  (
    {
      label,
      placeHolder,
      type,
      name,
      error,
      typeInput,
      defaultValue,
      onChange,
      disabled,
      required,
    },
    refs
  ) => {
    const refInput = useRef(refs);
    const [value, setValue] = useState("");
    const [typeIn, setTypeIn] = useState("");

    useEffect(() => {
      typeInput && setTypeIn(typeInput);
    }, []);

    useEffect(() => {
      defaultValue && setValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (e) => {
      setValue(e.target.value);
      onChange && onChange(e);
    };

    const renderInput = (typeInput) => {
      if (typeInput === "text") {
        return (
          <>
            <label>{label}</label>

            <input
              ref={refInput}
              name={name}
              placeholder={placeHolder}
              type={type}
              className={styles.inputClass}
              autoComplete="off"
              aria-autocomplete="none"
              spellCheck={false}
              value={value}
              onChange={handleChange}
              disabled={disabled}
              required={required}
            />

            {error && (
              <p
                className="text-danger text-left"
                style={{
                  marginTop: "10px",
                }}
              >
                *{error}
              </p>
            )}
          </>
        );
      }
      if (typeInput === "select") {
        return (
          <>
            <label>{label}</label>

            <select name={name} className={styles.inputClass} ref={refInput}>
              <option value="nam">Nam</option>
              <option value="nu">Nữ</option>
              <option value="khac">Khác</option>
            </select>

            {error && (
              <p
                className="text-danger text-left"
                style={{
                  marginTop: "10px",
                }}
              >
                *{error}
              </p>
            )}
          </>
        );
      }
    };

    return <div className={styles.wrapperInput}>{renderInput(typeIn)}</div>;
  }
);

export default TextInput;
