
import React from "react";

const SocialAddon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex flex-col items-center justify-center p-6 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-pink-600 mb-6 animate-pulse">
        🌐 Social Media Toolkit
      </h1>

      <div className="max-w-xl text-center space-y-4">
        <p className="text-lg">
          Instantly create, preview, and publish stunning social media posts across platforms!
        </p>
        <ul className="list-disc list-inside text-left space-y-1">
          <li>🎨 Post templates for Instagram, LinkedIn, Twitter</li>
          <li>🧠 AI Caption & Hashtag Generator</li>
          <li>📱 Mobile preview and scheduling mock UI</li>
        </ul>

        <button className="mt-6 px-6 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white shadow-lg transition-all duration-200 ease-in-out">
          Launch Social Tool
        </button>
      </div>
    </div>
  );
};

export default SocialAddon;
