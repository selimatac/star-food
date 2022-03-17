import React from "react";
import PropTypes from "prop-types";

const StarTextarea = ({ label, inputProps, className }) => {
  return (
    <div className={`star-textarea ${className?className:''}`}>
      {label && <label htmlFor={inputProps?.id}>{label}</label>}
      <textarea {...inputProps}></textarea>
    </div>
  );
};

StarTextarea.propTypes = {
  label: PropTypes.string,
  inputProps: PropTypes.object,
  className: PropTypes.object,
};
export default StarTextarea;
