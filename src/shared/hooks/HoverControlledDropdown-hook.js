import React, { useState } from "react";
import { Dropdown } from "reactstrap";

const HoverControlledDropdown = (props) => {
  const [isOpen, updateIsOpen] = useState(false);

  return (
    <Dropdown
      {...props}
      onMouseOver={() => updateIsOpen(true)}
      onFocus={() => updateIsOpen(true)}
      onMouseLeave={() => updateIsOpen(false)}
      onBlur={() => updateIsOpen(false)}
      toggle={() => updateIsOpen(!isOpen)}
      isOpen={isOpen}
    />
  );
};

export default HoverControlledDropdown;
