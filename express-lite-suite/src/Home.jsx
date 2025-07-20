// src/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Rocket, Camera, Brush, Type, Github } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const apps = [
    {
      name: "Social Addon",
      icon: <Rocket className="w-6 h-6" />,
      path: "/social-addon",
      color: "bg-gradient-to-r from-pink-500 to-yellow-500",
    },
    {
      name: "Video Addon",
      icon: <Camera className="w-6 h-6" />,
      path: "/video-addon",
      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      name: "Brand Kit Addon",
      icon: <Brush className="w-6 h-6" />,
      path: "/brandkit-addon",
      color: "bg-gradient-to-r from-green-400 to-blue-500",
    },
    {
      name: "Text Animator",
      icon: <Type className="w-6 h-6" />,
      path: "/text-animator-addon",
      color: "bg-gradient-to-r from-yellow-400 to-red-500",
    },
    {
      name: "GitHub Sync",
      icon: <Github className="w-6 h-6" />,
      path: "/github-sync-addon",
      color: "bg-gradient-to-r from-gray-600 to-black",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <h1 className="text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Express Lite Suite 🚀
      </h1>
      <p className="text-gray-600 text-center text-lg mb-10 max-w-xl">
        A modular design suite built to help content creators, video editors, and brand designers work faster using creative tools.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {apps.map((app) => (
          <div
            key={app.name}
            className={`cursor-pointer rounded-xl p-6 text-white shadow-xl hover:scale-105 transition-all duration-300 ${app.color}`}
            onClick={() => navigate(app.path)}
          >
            <div className="mb-4">{app.icon}</div>
            <h2 className="text-xl font-bold">{app.name}</h2>
            <p className="text-sm opacity-80 mt-2">
              Open the {app.name} tool now
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
