import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNums } from './formsSlice';
import styles from './forms.module.css';

export default function Kills() {
  const [newKills, setNewKills] = useState(1); //number of the form field
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refreshing the page
    const payload = {
      type: 'kills',
      amount: newKills
    }
    dispatch(addNums(payload));
    setNewKills(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <button type="submit">Add Kills</button>
        <input
          id="killsInput"
          value={newKills}
          type="number"
          onChange={(e) => setNewKills(e.currentTarget.value)}
        />
      </div>
    </form>
  );
}