import React from "react";

interface Props {
  setMood: React.Dispatch<React.SetStateAction<string>>;
}

const MoodSelector: React.FC<Props> = ({ setMood }) => {
  return (
    <div>
      <h3>Select your mood:</h3>
      <button onClick={() => setMood("happy")}>😊 Happy</button>
      <button onClick={() => setMood("sad")}>😢 Sad</button>
      <button onClick={() => setMood("energetic")}>⚡ Energetic</button>
      <button onClick={() => setMood("relaxed")}>😌 Relaxed</button>
    </div>
  );
};

export default MoodSelector;
