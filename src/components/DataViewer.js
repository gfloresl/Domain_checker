import React from "react";
import { ListItem, ObjectViewer } from "./index.js";
import { isValidDate } from "../helper.js";

export const DataViewer = ({ data }) => {
  return (
    <div className="data-viewer">
      <ObjectViewer propertyKey="result" propertyValue={data} />
    </div>
  );
};