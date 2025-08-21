import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const moods = ["Happy", "Sad", "Energetic", "Chill", "Romantic"];

const moodPlaylists: Record<string, string> = {
  Happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",
  Sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",
  Energetic: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",
  Chill: "https://open.spotify.com/embed/playlist/37i9dQZF1DX889U0CL85jj",
  Romantic: "https://open.spotify.com/embed/playlist/37i9dQZF1DX50QitC6Oqtn",
};

function App() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="app-container">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="title"
      >
        🎶 Mood Music
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="subtitle"
      >
        Pick your mood & enjoy curated playlists
      </motion.p>

      <div className="mood-grid">
        {moods.map((mood, index) => (
          <motion.div
            key={index}
            className={`mood-card ${selectedMood === mood ? "active" : ""}`}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMood(mood)}
          >
            {mood}
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedMood && (
          <motion.div
            key={selectedMood}
            className="result-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h2>You are feeling {selectedMood} 💡</h2>
            <motion.iframe
              key={selectedMood + "-playlist"}
              src={moodPlaylists[selectedMood]}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            ></motion.iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
