import React from "react"

import "./button.css"

export const Button = ({ label, styling = "primary", onClick }) =>
  <button className={styling} onClick={onClick}>{label}</button>
