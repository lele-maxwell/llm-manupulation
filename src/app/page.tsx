// src/app/page.tsx

// THIS IS THE MOST IMPORTANT LINE.
// It declares this component as a "Client Component", which means it will
// run in the browser, allowing interactivity and state management (hooks).
"use client";

import React, { useState } from 'react';
// We can use the path alias '@/' because we configured it during setup.
import StoryDisplay from '@/components/StoryDisplay';

// This is our main HomePage component
export default function HomePage() {
  // State management with TypeScript types
  const [story, setStory] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // This function only runs when the button is clicked by a user
  const handleLoadStory = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/story.txt');
      const text = await response.text();
      setStory(text);
    } catch (error) {
      console.error('Failed to fetch story:', error);
      setStory('Error: The story could not be loaded.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-8">
      <div className="w-full max-w-2xl rounded-xl bg-white p-10 text-center shadow-lg">
        
        <h1 className="text-4xl font-bold text-slate-800 md:text-5xl">
          Welcome to My Website
        </h1>

        <p className="mt-4 text-lg text-slate-500">
          The content below is hidden until you interact with the page.
        </p>

        <div className="mt-8 flex h-40 flex-col items-center justify-center">
          {/* Conditional Rendering Logic */}
          
          {!story && !isLoading && (
            <button
              onClick={handleLoadStory}
              className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Reveal the Secret
            </button>
          )}

          {isLoading && (
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>
          )}

          {story && <StoryDisplay text={story} />}
        </div>
      </div>
    </main>
  );
}