import { Button, Slider } from "@mui/material";
import { useState } from "react";

function Controls({ setVolume, volume, power, setPower, setDisplay }) {
  function handleVolumeChange(event, newValue) {
    setVolume(newValue / 100);
  }

  function togglePower() {
    setPower(!power);
    if (power === true) setDisplay("Turn on the Power");
    if (power === false) setDisplay("");
  }

  return (
    <div className="drum-controls">
      <Slider
        value={volume * 100}
        aria-label="Volume"
        valueLabelDisplay="auto"
        onChange={handleVolumeChange}
      />
      <div className="empty"></div>
      {power ? (
        <Button variant="contained" color="success" onClick={togglePower}>
          On
        </Button>
      ) : (
        <Button
          className="btn"
          variant="contained"
          color="error"
          onClick={togglePower}
        >
          Off
        </Button>
      )}
    </div>
  );
}

export default Controls;
