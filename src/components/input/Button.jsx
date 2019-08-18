import React from "react"

import "./button.css"

const Button = ({ label, styling = "primary", onClick }) =>
  <button className={styling} onClick={onClick}>{label}</button>

export default Button
