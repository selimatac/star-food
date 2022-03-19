import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon } from "@heroicons/react/outline";
import ClickAwayListener from "react-click-away-listener";

const StarDropdown = ({
  label,
  id,
  name,
  placeholder,
  value,
  data,
  onChange,
  className,
  required,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectChange = (isChecked, item) => {
    isChecked
      ? onChange([...value, item])
      : onChange(value.filter((x) => x.id !== item.id));
  };
  return (
    <div className={`star-dropdown-multiple ${className ? className : ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
        <div className="star-dropdown-multiple__wrapper">
          <div
            className="star-dropdown-multiple__selected"
            onClick={() => setIsOpen(true)}
          >
            {value.length === 0 ? (
              <span className="-placeholder">{placeholder}</span>
            ) : (
              <span className="-value">
                {value.map((x) => x.text).join(", ")}
              </span>
            )}
            <ChevronDownIcon
              className={isOpen ? "w-5 text-blue-40" : "w-5 text-gray-60"}
            />
          </div>
          {isOpen && (
            <div className="star-dropdown-multiple__list">
              {data?.map((x) => (
                <label key={x.id}>
                  <input
                    type="checkbox"
                    checked={value.find((v) => v.id === x.id) || false}
                    onChange={(e) => handleSelectChange(e.target.checked, x)}
                  />
                  {x.text}
                </label>
              ))}
            </div>
          )}
        </div>
      </ClickAwayListener>
      <select className="opacity-0 absolute" multiple required={required} value={value.map((x) => x.id)}>
        <option value=""></option>
        {data?.map((x) => (
          <option key={x.id} value={x.id}>{x.text}</option>
        ))}
      </select>
    </div>
  );
};

StarDropdown.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.array,
  data: PropTypes.array,
  onChange: PropTypes.func,
  className: PropTypes.string,
  required: PropTypes.string,
};
export default StarDropdown;
