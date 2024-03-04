import React from "react";
import { useSelector } from "react-redux";
import { selectBodyTouches, selectFaceTouches, selectKills } from './formsSlice';

export default function DailySummary() {
  const numBodyTouches = useSelector(selectBodyTouches);
  const numFaceTouches = useSelector(selectFaceTouches);
  const numKills = useSelector(selectKills);
  alert(numBodyTouches);

  return (
    <>
      <h2>Today's Numbers</h2>
      <p>Body Touches: {numBodyTouches}</p>
      <p>Face Touches: {numFaceTouches}</p>
      <p>Kills: {numKills}</p>
    </>
  );
}