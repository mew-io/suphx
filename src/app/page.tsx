import { redirect } from 'next/navigation';
import links from '../suphx.json';

// Force dynamic rendering to prevent caching
export const dynamic = 'force-dynamic';

export default function Home() {
  // Select a random link from the JSON array
  const randomIndex = Math.floor(Math.random() * links.length);
  const randomLink = links[randomIndex];

  // Perform server-side redirect
  redirect(randomLink);
}
