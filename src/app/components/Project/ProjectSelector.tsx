"use client"; // Required for Next.js app router (client-side rendering)
import { useState } from "react";

export default function JoinTrello() {
  const [link] = useState("https://trello.com/invite/b/NiM6bRy4/ATTl2ce57e4e2588ac7b0f94270cfd2sd");

  // Copy the link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-lg font-semibold">2. Join Trello</label>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={link}
          readOnly
          className="w-full border rounded-md p-2 text-gray-600 bg-gray-100 cursor-not-allowed"
        />
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-600"
          aria-label="Copy Link"
        >
          📋
        </button>
        {/* Open Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-600"
          aria-label="Open Link"
        >
          🔗
        </a>
      </div>
    </div>
  );
}
