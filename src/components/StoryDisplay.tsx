// src/components/StoryDisplay.tsx
import React from 'react';

// Define the type for the component's props using TypeScript
interface StoryDisplayProps {
  text: string;
}

// This is a simple, reusable component to display our story
const StoryDisplay: React.FC<StoryDisplayProps> = ({ text }) => {
  return (
    <div className="mt-8 w-full animate-fade-in text-left">
      <div className="rounded-lg border-l-4 border-blue-500 bg-gray-800 p-6">
        <p className="text-lg leading-relaxed text-white">{text}</p>
      </div>
    </div>
  );
};

export default StoryDisplay;