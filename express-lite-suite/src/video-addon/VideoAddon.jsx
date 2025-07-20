
import React from "react";

const VideoAddon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex flex-col items-center justify-center p-6 text-gray-900 font-sans">
      <h1 className="text-4xl font-bold text-yellow-600 mb-6 animate-bounce">
        🎥 Video Creator Kit
      </h1>

      <div className="max-w-xl text-center space-y-4">
        <p className="text-lg">
          Quickly create short videos for reels, ads, or stories with easy tools!
        </p>
        <ul className="list-disc list-inside text-left space-y-1">
          <li>✂️ Trim, crop, add transitions</li>
          <li>🎵 Add background music and subtitles</li>
          <li>🚀 Export in multiple formats (MP4, WebM)</li>
        </ul>

        <button className="mt-6 px-6 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg transition duration-200">
          Open Video Studio
        </button>
      </div>
    </div>
  );
};

export default VideoAddon;
