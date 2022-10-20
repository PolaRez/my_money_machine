import { useState } from "react";
import "./login.css";

export default function TextField({ id, label }) {
  const [value, setValue] = useState('');

  console.log("rendered");
  const handleOnChange = (event) => {
    setValue(event.target.value);
  }
  return (
    <div className="input-container">
      <input className="login-input" id={id} type="text" onChange={handleOnChange}/>
      <label className={value && 'filled'} htmlFor={id}>{label}</label>
    </div>
  );
}