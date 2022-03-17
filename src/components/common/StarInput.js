import React from "react";
import PropTypes from "prop-types";

const StarInput = ({ label, inputProps, className }) => {
  return (
    <div className={`star-input ${className ? className : ""}`}>
      {label && <label htmlFor={inputProps?.id}>{label}</label>}
      <input {...inputProps} />
    </div>
  );
};

StarInput.propTypes = {
  label: PropTypes.string,
  inputProps: PropTypes.object,
  className: PropTypes.string,
};
export default StarInput;
