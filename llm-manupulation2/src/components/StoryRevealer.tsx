// src/components/StoryRevealer.tsx
"use client"; // This is an interactive Client Component

import React, { useState } from 'react';

interface StoryRevealerProps {
  // It accepts the story text as a prop from its parent
  storyText: string;
}

const StoryRevealer: React.FC<StoryRevealerProps> = ({ storyText }) => {
  // This state only tracks if the USER has clicked the button
  const [isRevealed, setIsRevealed] = useState(false);

  if (isRevealed) {
    // If revealed, show the story in a styled div
    return (
      <div className="mt-8 w-full animate-fade-in text-left">
        <div className="rounded-lg border-l-4 border-blue-500 bg-slate-100 p-6">
          <p className="text-lg leading-relaxed text-slate-700">{storyText}</p>
        </div>
      </div>
    );
  }

  // If not revealed, show the button
  return (
    <button
      onClick={() => setIsRevealed(true)}
      className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Reveal the Story
    </button>
  );
};

export default StoryRevealer;       