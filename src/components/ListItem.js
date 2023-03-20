import React from "react";
import { ObjectViewer } from "./index.js";
import { isValidDate, getPropertyName } from "../helper.js";

const getListItem = ({ propertyKey, propertyValue, indicator }) => {
  let humanReadablePropertyValue = propertyValue;
  if (isValidDate(propertyValue)) {
    const date = new Date(propertyValue);
    humanReadablePropertyValue = date.toDateString();
  }
  return (
    <li className="">
      {indicator}
      {propertyKey && (
        <span className="property-key-container">
          {getPropertyName(propertyKey)}
        </span>
      )}
      {humanReadablePropertyValue}
    </li>
  );
};

const getContent = ({ propertyKey, propertyValue }) => {
  if (propertyKey === "rawText" || propertyKey === "strippedText") return;

  if (Array.isArray(propertyValue)) {
    return (
      <div className="section-container">
        <span className="property-key-container">
          {getPropertyName(propertyKey)}
        </span>
        <ul>
          {propertyValue.map((element, index) =>
            getListItem({
              indicator: index + 1 + ". ",
              propertyValue: element,
            })
          )}
        </ul>
      </div>
    );
  } else if (typeof propertyValue === "object") {
    return (
      <ObjectViewer propertyKey={propertyKey} propertyValue={propertyValue} />
    );
  }
  return getListItem({
    indicator: "- ",
    propertyKey: propertyKey + ": ",
    propertyValue,
  });
};

export const ListItem = ({ propertyKey, propertyValue }) => {
  return <>{getContent({ propertyKey, propertyValue })}</>;
};
