'use client';

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-2xl mb-4">Not Logged In</h1>
        <a href="/login">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-2xl mb-4">🎉 Welcome to your Dashboard 🚀</h1>
      <p className="mb-8">You are successfully logged in.</p>
    </div>
  );
}
