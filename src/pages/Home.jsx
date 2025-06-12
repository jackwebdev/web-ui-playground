// src/pages/Home.jsx
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bgGrid} />
      <h1>Welcome to the Playground</h1>

      <div className={styles.links}>
        <Link className={styles.glassUi} to="/glassui">
          Glass Ui
        </Link>
      </div>
    </div>
  );
}
