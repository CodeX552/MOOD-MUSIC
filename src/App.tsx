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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex flex-col items-center justify-center p-6 text-white">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-5xl font-extrabold text-center mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        🎶 Mood Music
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-slate-300 text-center text-lg mb-10"
      >
        Pick your mood & enjoy curated playlists
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10 w-full max-w-3xl">
        {moods.map((mood, index) => (
          <motion.div
            key={index}
            className={
              selectedMood === mood
                ? "bg-purple-500/30 backdrop-blur-md border border-purple-400/60 rounded-2xl py-5 px-4 text-center cursor-pointer font-semibold text-white ring-2 ring-purple-400 transition-all duration-200"
                : "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-5 px-4 text-center cursor-pointer font-semibold text-white hover:bg-white/20 transition-all duration-200"
            }
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
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 w-full max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-center mb-4 text-purple-300">
              You are feeling {selectedMood} 💡
            </h2>

            <iframe
              key={selectedMood}
              src={moodPlaylists[selectedMood]}
              width="100%"
              height="380"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "12px", border: "none" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;