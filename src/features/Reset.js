import React from "react";
import { useDispatch } from "react-redux";
import { resetNums } from "./formsSlice";
import styles from './reset.module.css';

export default function Reset() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetNums());
  }

  return (
    <button onClick={handleClick} className={styles.resetButton}>Reset Today's Numbers</button>
  );
}