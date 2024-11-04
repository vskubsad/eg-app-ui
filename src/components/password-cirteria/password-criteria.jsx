import React from "react";

const PasswordDescritption = () => {
  return (
    <div className="password-desc">
      <p>Password should meet the following criteria:</p>
      <ul>
        <li>Minimum length of 8 characters </li>
        <li>Contains at least 1 letter. </li>
        <li>Contains at least 1 number.</li>
        <li>Contains at least 1 special character.</li>
      </ul>
    </div>
  );
};

export default PasswordDescritption;
