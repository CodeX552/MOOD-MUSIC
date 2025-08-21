import React, { useState } from "react";
import MoodSelector from "./MoodSelector";
import MusicList from "./MusicList";
import "./styles.css";

const App: React.FC = () => {
  const [mood, setMood] = useState<string>("");

  return (
    <div className="container">
      <h1>🎵 Mood Music Suggestion</h1>
      <MoodSelector setMood={setMood} />
      {mood && <MusicList mood={mood} />}
    </div>
  );
};

export default App;
