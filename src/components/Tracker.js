import React from "react";
import BodyTouches from '../features/BodyTouches';
import FaceTouches from '../features/FaceTouches';
import Kills from '../features/Kills';
import DailySummary from '../features/DailySummary';
import Reset from '../features/Reset';
import styles from './tracker.module.css';

export default function Tracker() {

  return (
    <>
      <h1>Fly Tracker</h1>
      <BodyTouches />
      <FaceTouches />
      <Kills />
      <DailySummary />
      <Reset />
    </>
  );
}