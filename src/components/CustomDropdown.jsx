import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const CustomDropdown = ({ title, handleChange, type, values, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const onClick = (e) => handleChange(e, type);
  return (
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle caret>
        {selected}
      </DropdownToggle>
      <DropdownMenu dark>
        {/* <DropdownItem onClick={(e) => handleChange(e, type)}>All</DropdownItem>
        <DropdownItem active>Human</DropdownItem>
        <DropdownItem>Alian</DropdownItem> */}
        {values.map(value => (
          <DropdownItem 
            key={value} 
            active={value === selected}
            onClick={(e) => handleChange(e, type)}
            value={value}
          >
            {value}
          </DropdownItem>

        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default CustomDropdown
