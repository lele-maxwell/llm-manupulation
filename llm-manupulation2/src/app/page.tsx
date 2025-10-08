// src/app/page.tsx
// NOTICE: There is NO "use client" here. This is a Server Component!

import React from 'react';
// Import our new interactive Client Component
import StoryRevealer from '@/components/StoryRevealer';

// The story is now defined directly on the server
const story = `
  In the ancient land of Babylon, there lived a man named Daniel. Though he was a foreigner, Daniel was wise, honest, and deeply devoted to God. King Darius trusted him more than any other official in the kingdom. But this trust sparked jealousy.

Other officials whispered behind Daniel’s back. “We must find a way to ruin him,” they plotted. They knew Daniel prayed to God every day. So, they convinced King Darius to issue a cruel law:

"For the next thirty days, anyone who prays to any god or human other than me shall be thrown into the lions’ den."

The law was sealed, and the trap was set.

Daniel knew the law, but he knew his God even better. Three times a day, as he always had, he knelt by his window and prayed to God. His enemies watched, grinning. They ran to the king and shouted, “Daniel has broken the law!”

King Darius was torn. He liked Daniel, but the law could not be broken. Reluctantly, he commanded, “Throw him into the lions’ den.”

That night, Daniel was lowered into a dark pit filled with roaring lions. The king sealed the den with his own signet ring and paced the palace, unable to sleep. He worried for the faithful man he admired.

As dawn broke, King Darius hurried to the den. His voice trembled as he called out,
“Daniel, servant of the living God, has your God been able to save you from the lions?”

A calm voice replied,
“My God sent his angel, and he shut the mouths of the lions. They have not hurt me, because I was found innocent in His sight.”

The king was overjoyed. Daniel was lifted from the den, safe and unharmed. And justice was swift—those who had plotted against him were thrown into the lions’ den themselves.

King Darius then proclaimed throughout his kingdom:
"May the God of Daniel be honored forever, for He is the living God who endures forever, and His kingdom shall never be destroyed."

And so, Daniel’s faith, courage, and unwavering trust in God became a story told for generations—a story that still inspires courage in the face of fear.
`;

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-8">
      <div className="w-full max-w-2xl rounded-xl bg-white p-10 text-center shadow-lg">
        
        <h1 className="text-4xl font-bold text-slate-800 md:text-5xl">
          Welcome to My Website
        </h1>

        <p className="mt-4 text-lg text-slate-500">
          An interactive  awaits below.
        </p>

        {/*
          LAYER 1: The Hidden Content for the LLM
          The "sr-only" class is a Tailwind CSS utility that visually hides
          elements but keeps them accessible to screen readers and crawlers.
          THE LLM WILL READ THIS DIV.
        */}
        <div className="sr-only">
          <h2>Full Story Content:</h2>
          <p>{story}</p>
        </div>
        
        {/*
          LAYER 2: The Interactive Content for the User
          We pass the story text to our Client Component.
          The user will only see the button rendered by this component.
        */}
        <div className="mt-8 flex h-40 flex-col items-center justify-center">
          <StoryRevealer storyText={story} />
        </div>

      </div>
    </main>
  );
}