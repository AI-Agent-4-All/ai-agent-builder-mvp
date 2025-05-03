"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
      className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Logout
    </button>
  );
}
