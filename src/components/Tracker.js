/*
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
// import selectors
import {selectTopics, addQuizToTopic} from '../features/topics/topicsSlice';
import {addQuiz} from '../features/quizzes/quizzesSlice';
import {addCard} from '../features/cards/cardsSlice';
*/
import React from "react";
import BodyTouches from '../features/BodyTouches';
import FaceTouches from '../features/FaceTouches';
import Kills from '../features/Kills';
import DailySummary from '../features/DailySummary';
import Reset from '../features/Reset';

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