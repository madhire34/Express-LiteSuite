
import React from "react";

const BrandKitAddon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex flex-col items-center justify-center p-6 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6 animate-pulse">
        🎨 Brand Kit Studio
      </h1>

      <div className="max-w-xl text-center space-y-4">
        <p className="text-lg">
          Organize all your brand assets in one place — perfect for teams & creators!
        </p>
        <ul className="list-disc list-inside text-left space-y-1">
          <li>🖼️ Upload logos and brand icons</li>
          <li>🎨 Define brand color palettes</li>
          <li>📝 Set preferred fonts and type styles</li>
        </ul>

        <button className="mt-6 px-6 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg transition duration-200">
          Launch Brand Kit
        </button>
      </div>
    </div>
  );
};

export default BrandKitAddon;
