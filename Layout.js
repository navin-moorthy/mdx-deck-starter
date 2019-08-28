import React from "react";

export default ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100%"
    }}
  >
    {children}
  </div>
);
