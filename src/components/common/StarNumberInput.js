import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const StarNumberInput = ({ onChange, value }) => {
  const [inputVal, setInputVal] = useState({ value: value || 1 });

  useEffect(() => {
    onChange?.(inputVal);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputVal]);

  return (
    <div className={`star-quantity`}>
      <button
        className="-minus"
        type="button"
        onClick={() =>
          setInputVal((prev) => ({
            value: inputVal.value > 1 ? prev.value - 1 : prev.value,
          }))
        }
      >
        -
      </button>
      <input
        type="number"
        min={1}
        value={inputVal.value}
        onChange={(e) => setInputVal({ value: e.target.value })}
      />
      <button
        className="-plus"
        type="button"
        onClick={() => setInputVal((prev) => ({ value: prev.value + 1 }))}
      >
        +
      </button>
    </div>
  );
};

StarNumberInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
};
export default StarNumberInput;
