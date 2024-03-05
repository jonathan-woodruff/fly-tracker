import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNums } from './formsSlice';
import styles from './forms.module.css';

export default function BodyTouches() {
  const [newBodyTouches, setNewBodyTouches] = useState(1); //number of the form field
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refreshing the page
    const payload = {
      type: 'bodyTouches',
      amount: newBodyTouches
    }
    dispatch(addNums(payload));
    setNewBodyTouches(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="submit">Add Body Touches</button>
        <input
          id="bodyTouchesInput"
          value={newBodyTouches}
          type="number"
          onChange={(e) => setNewBodyTouches(e.currentTarget.value)}
        />
      </div>
    </form>
  );
}