/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './findCristal3.css';

export default function FindCristal3({ checkQuest, setPlanet3isIsClickable, setPath }) {
  const [displayCrystal, setdisplayCrystal] = useState(false);
  const [displayWellDone, setDisplayWellDone] = useState(false);

  const dNoneCrystal = () => {
    setdisplayCrystal(false);
    setDisplayWellDone(!displayWellDone);
    setPlanet3isIsClickable(true);
  };

  return (
    <div className="findCristalBg3">
      <button onClick={() => setPath('/')} aria-label="back to map" className="button-backToMap btn-cristal-3" type="button">Back to map</button>
      <button onClick={() => setdisplayCrystal(!displayCrystal)} aria-label="crystal-3" className="myCristal-toFind3" type="button" />
      {displayCrystal && (
      <div className="myCrystal-container3">
        <div className="myCristal3" />
        <h2>Well done ! You find the crystal !</h2>
        <button onClick={dNoneCrystal} type="button" className='btn-cristal-3'>Click here</button>
      </div>
      )}
      {displayWellDone && (
      <div className="well-done3">
        <h2>Well done ! You can access the next planet !</h2>
        <button onClick={checkQuest} type="button" className="btn-cristal-3">Back to map</button>
      </div>
      )}
    </div>
  );
}
