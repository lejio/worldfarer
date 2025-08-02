import React from "react";
import { navigate } from "astro:transitions/client";

export default function RegisterButton() {
  return (
    <button
      className="rounded-full border border-green-600 dark:border-green-600 p-2 px-3 text-green-600 dark:text-green-600 max-w-[40vw] hover:cursor-pointer"
      onClick={() => navigate('/')}
    >
      Register
    </button>
  );
}
