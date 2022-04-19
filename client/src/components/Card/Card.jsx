import React from "react";
import styles from "./Card.module.scss";
import { motion } from "framer-motion";

const Card = ({ title, icon, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "10px" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: ".2",
      }}
      className={styles.card}
    >
      <div className={styles.card__header}>
        <img src={`/images/${icon}.png`} alt="" />
        <span>{title}</span>
      </div>
      {children}
    </motion.div>
  );
};

export default Card;
