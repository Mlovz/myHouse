import React from "react";
import styles from "./Button.module.scss";

const Button = ({ txt, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{txt}</span>
      <img src="/images/arrow-forward.png" alt="" />
    </button>
  );
};

export default Button;
