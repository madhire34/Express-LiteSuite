// src/github-sync-addon/GitHubSyncAddon.jsx
import React, { useState } from "react";
import { CloudUpload, CheckCircle, Loader2 } from "lucide-react";

const GitHubSyncAddon = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [synced, setSynced] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setSynced(false);
    setTimeout(() => {
      setIsSyncing(false);
      setSynced(true);
    }, 3000); // simulate 3s sync
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-50 to-gray-200 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-6">
        🛠️ GitHub Sync Addon
      </h1>

      <p className="mb-4 text-lg text-gray-500 max-w-xl">
        Sync your designs, templates, and add-ons to GitHub repositories effortlessly for version control and team collaboration.
      </p>

      <button
        onClick={handleSync}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
          isSyncing
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
        disabled={isSyncing}
      >
        {isSyncing ? (
          <>
            <Loader2 className="animate-spin w-5 h-5" /> Syncing...
          </>
        ) : synced ? (
          <>
            <CheckCircle className="w-5 h-5 text-green-500" /> Synced!
          </>
        ) : (
          <>
            <CloudUpload className="w-5 h-5" /> Sync to GitHub
          </>
        )}
      </button>

      {synced && (
        <p className="mt-4 text-sm text-green-600">
          ✅ Your project has been synced to GitHub successfully!
        </p>
      )}
    </div>
  );
};

export default GitHubSyncAddon;
