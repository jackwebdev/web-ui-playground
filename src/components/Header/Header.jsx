import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1>Header</h1>
        <p>lorem</p>
      </div>
    </header>
  );
}
