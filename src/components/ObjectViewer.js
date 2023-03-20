import React, { useState } from "react";
import { ListItem, CaretDownIcon, CaretRightIcon } from "./index.js";
import { getPropertyName } from "../helper.js";

export const ObjectViewer = ({ propertyKey, propertyValue }) => {
  const [isFolded, setIsFolded] = useState(true);

  const toggleFolded = () => {
    setIsFolded((prevState) => !prevState);
  };
  return (
    <div className="section-container">
      <div className="section-key-container" onClick={toggleFolded}>
        {isFolded ? <CaretRightIcon /> : <CaretDownIcon />}
        {getPropertyName(propertyKey)}
      </div>
      <ul>
        {!isFolded &&
          Object.keys(propertyValue).map((key) => (
            <ListItem
              key={key}
              propertyKey={key}
              propertyValue={propertyValue[key]}
            />
          ))}
      </ul>
    </div>
  );
};
