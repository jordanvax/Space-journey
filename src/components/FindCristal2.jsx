/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './findCristal2.css';

export default function FindCristal2({ checkQuest, setPlanet2isIsClickable, setPath }) {
  const [displayCrystal, setdisplayCrystal] = useState(false);
  const [displayWellDone, setDisplayWellDone] = useState(false);

  const dNoneCrystal = () => {
    setdisplayCrystal(false);
    setDisplayWellDone(!displayWellDone);
    setPlanet2isIsClickable(true);
  };

  return (
    <div className="findCristalBg2">
      <button onClick={() => setPath('/')} aria-label="crystal-2" className="button-backToMap btn-cristal-2" type="button">Back to map</button>
      <button onClick={() => setdisplayCrystal(!displayCrystal)} aria-label="crystal-1" className="myCristal-toFind2" type="button" />
      {displayCrystal && (
      <div className='myCrystal-container2'>
        <div className="myCristal2 " />
        <h2>Well done ! You find the crystal !</h2>
        <button onClick={dNoneCrystal} type='button' className="btn-cristal-2">Click here</button>
      </div>
      )}
      {displayWellDone && (
      <div className="well-done2">
        <h2>Well done ! You can access the next planet !</h2>
        <button onClick={checkQuest} type="button" className="btn-cristal-2">Back to map</button>
      </div>
      )}
    </div>
  );
}
