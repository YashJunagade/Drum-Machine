import { useEffect } from "react";

function DrumKey({ drumKey, volume, handleDisplay }) {
  function playAudio() {
    const audio = document.getElementById(drumKey.key);
    audio.volume = volume;
    audio.play();
    handleDisplay(drumKey.id);
  }

  function handleKeyDown(event) {
    if (event.key.toUpperCase() === drumKey.key) {
      playAudio();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button id={drumKey.id} className="drum-pad" onClick={playAudio}>
        {drumKey.key}
        <audio className="clip" id={drumKey.key} src={drumKey.url}></audio>
      </button>
    </>
  );
}

export default DrumKey;
