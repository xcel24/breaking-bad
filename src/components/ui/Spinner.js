import React from "react";
import spinner from "../../img/spinner.gif";

export default function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading.."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
}
