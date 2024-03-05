import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNums } from './formsSlice';
import styles from './forms.module.css';

export default function FaceTouches() {
  const [newFaceTouches, setNewFaceTouches] = useState(1); //number of the form field
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refreshing the page
    const payload = {
      type: 'faceTouches',
      amount: newFaceTouches
    }
    dispatch(addNums(payload));
    setNewFaceTouches(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="submit">Add Face Touches</button>
        <input
          id="faceTouchesInput"
          value={newFaceTouches}
          type="number"
          onChange={(e) => setNewFaceTouches(e.currentTarget.value)}
        />
      </div>
    </form>
  );
}