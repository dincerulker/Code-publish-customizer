import React from 'react';
import './Dropdown.css';

const Dropdown =(props) => {
  return (
    <select className="select"  onChange={props.onChange}>
      {Object.keys(props.data)
        .map((theme, index) => {
          return (
            <option key={index} value={theme}>
              {theme}
            </option>
          );
        })}
    </select>
  )
}

export default Dropdown;
