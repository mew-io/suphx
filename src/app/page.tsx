'use client';

import { useEffect } from 'react';
import links from '../suphx.json';

export default function Home() {
  useEffect(() => {
    // Select a random link from the JSON array
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];

    // Redirect to the random link
    window.location.href = randomLink;
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-lg">Redirecting to a random link...</p>
      </div>
    </div>
  );
}
