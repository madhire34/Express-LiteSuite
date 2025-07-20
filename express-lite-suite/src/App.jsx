// App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import SocialAddon from "./social-addon/SocialAddon";
import VideoAddon from "./video-addon/VideoAddon";
import BrandKitAddon from "./brandkit-addon/BrandkitAddon";
import TextAnimatorAddon from "./text-animator-addon/TextAnimatorAddon";
import GithubSyncAddon from "./github-sync-addon/GithubSyncAddon";

const addons = [
  { name: "Social", icon: "📷", path: "/social-addon" },
  { name: "Video", icon: "🎬", path: "/video-addon" },
  { name: "BrandKit", icon: "🏷️", path: "/brandkit-addon" },
  { name: "Text Animator", icon: "🔤", path: "/text-animator-addon" },
  { name: "GitHub Sync", icon: "🔧", path: "/github-sync-addon" },
];

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Express Lite Suite</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {addons.map((addon) => (
          <Link to={addon.path} key={addon.name} className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center flex-col hover:scale-105 transition-transform">
            <div className="text-3xl mb-1">{addon.icon}</div>
            <span className="text-sm font-medium text-gray-700">{addon.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/social-addon" element={<SocialAddon />} />
      <Route path="/video-addon" element={<VideoAddon />} />
      <Route path="/brandkit-addon" element={<BrandKitAddon />} />
      <Route path="/text-animator-addon" element={<TextAnimatorAddon />} />
      <Route path="/github-sync-addon" element={<GithubSyncAddon />} />
    </Routes>
  );
}
