import { Button, Slider } from "@mui/material";
import { useState } from "react";

function Controls({ setVolume, volume, power, setPower }) {
  function handleVolumeChange(event, newValue) {
    setVolume(newValue / 100);
  }

  function togglePower() {
    setPower(!power);
  }

  return (
    <>
      <Slider
        value={volume * 100}
        aria-label="Volume"
        valueLabelDisplay="auto"
        onChange={handleVolumeChange}
      />
      {power ? (
        <Button variant="contained" color="success" onClick={togglePower}>
          On
        </Button>
      ) : (
        <Button variant="contained" color="error" onClick={togglePower}>
          Off
        </Button>
      )}
    </>
  );
}

export default Controls;
