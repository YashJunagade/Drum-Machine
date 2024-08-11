import DrumKey from "./components/DrumKey";
import Display from "./components/Display";
import { useState } from "react";
import "./App.css";
import { Button, Slider } from "@mui/material";

function App() {
  const drumKeys = [
    {
      key: "Q",
      id: "Heater-1",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    },
    {
      key: "W",
      id: "Heater-2",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    },
    {
      key: "E",
      id: "Heater-3",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    },
    {
      key: "A",
      id: "Heater-4",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    },
    {
      key: "S",
      id: "Clap",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    },
    {
      key: "D",
      id: "Open-HH",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      id: "Kick-n-Hat",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      id: "Kick",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      id: "Closed-HH",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    },
  ];

  const [display, setDisplay] = useState("");
  function handleDisplay(key) {
    setDisplay(key);
  }

  const [volume, setVolume] = useState(0.5);
  function handleVolumeChange(event, newValue) {
    setVolume(newValue / 100);
  }

  const [onOf, setOnOf] = useState(false);
  function handleOnOf() {
    if (onOf) {
      setOnOf(!onOf);
    } else {
      setOnOf(!onOf);
    }
  }

  return (
    <>
      <div id="drum-machine">
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleVolumeChange}
        />
        {onOf === true ? (
          <Button variant="contained" color="success" onClick={handleOnOf}>
            On
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={handleOnOf}>
            Error
          </Button>
        )}
        <Display display={display} />
        {drumKeys.map((drumKey) => (
          <DrumKey
            key={drumKey.id}
            drumKey={drumKey}
            volume={volume}
            handleDisplay={handleDisplay}
          />
        ))}
      </div>
    </>
  );
}

export default App;
