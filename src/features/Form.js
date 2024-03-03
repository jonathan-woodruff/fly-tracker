import React, { useState } from "react";
import { useSelector } from "react-redux";
import {selectBodyTouches, selectFaceTouches, selectKills} from './formsSlice';

const getProperty = type => { //Return a state property
  switch (type) {
    case 'bodyTouches':
      return useSelector(selectBodyTouches);
    case 'faceTouches':
      return useSelector(selectFaceTouches);
    case 'kills':
      return useSelector(selectKills);
  }
  console.log('Whoops. Unexpected type handled.') //this should never fire
}

export default function Form({ type }) { //type is a state property
  const selectedProperty = getProperty(type);
  const className = 'slapButton- ' + type; //concatenate slapButton with the type
  //NEED VARIABLE TO DECIDE WHAT TO DISPLAY IN THE FORM AND WHICH PROPERTY THE FORM UPDATES

  return (
    //NEED FORM ELEMENT
    <li>
      <button className={className} onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}