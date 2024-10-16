import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Tittle({ text, ...props }) {
  // eslint-disable-next-line react/prop-types
  return <h1 className={styles.h1Main}>{text}</h1>;
}
