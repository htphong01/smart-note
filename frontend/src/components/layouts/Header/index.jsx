import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

export default function Header() {
  const note = useSelector(state => state.notes);

  return <div className={styles.header}>
    {note.image && (<img src={note.image} />)}
    <span>{note.path}</span>
  </div>;
}
