import { useState, useEffect } from "react";

const stations = [
  { name: "LoFi Radio", url: "https://stream-uk1.radioparadise.com/aac-320" },
  { name: "Jazz FM", url: "https://stream.srg-ssr.ch/m/rsj/mp3_128" },
  { name: "Rock Classics", url: "https://streaming.radionomy.com/ClassicRock" },
];

export default function App() {
  const [currentStation, setCurrentStation] = useState(stations[0]);
  const [audio, setAudio] = useState(new Audio(currentStation.url));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.src = currentStation.url;
    if (isPlaying) audio.play();
  }, [currentStation]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Online Radio</h1>
      <select
        className="p-2 mb-4 bg-gray-800 border border-gray-600 rounded"
        onChange={(e) =>
          setCurrentStation(
            stations.find(
              (s) => s.name === e.target.value
            ) as typeof currentStation
          )
        }
        value={currentStation.name}
      >
        {stations.map((station) => (
          <option key={station.name} value={station.name}>
            {station.name}
          </option>
        ))}
      </select>
      <button
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
        onClick={togglePlay}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
