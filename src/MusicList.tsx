import React, { useEffect, useState } from "react";
import { getTracksByMood } from "./spotifyApi";

interface Props {
  mood: string;
}

interface Track {
  name: string;
  artist: string;
  preview: string | null;
  url: string;
}

const MusicList: React.FC<Props> = ({ mood }) => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTracksByMood(mood).then((songs) => {
      setTracks(songs);
      setLoading(false);
    });
  }, [mood]);

  if (loading) return <p>Loading {mood} songs...</p>;

  return (
    <div>
      <h3>Suggested {mood} songs:</h3>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <strong>{track.name}</strong> by {track.artist} <br />
            {track.preview ? (
              <audio controls src={track.preview}></audio>
            ) : (
              <em>No preview available</em>
            )}
            <br />
            <a href={track.url} target="_blank" rel="noopener noreferrer">
              Open in Spotify
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
