import React from "react";
import { useDispatch } from "react-redux";
import { resetNums } from "./formsSlice";

export default function Reset() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetNums());
  }

  return (
    <button onClick={handleClick}>Reset Today's Numbers</button>
  );
}