import React from "react";
import { signIn } from "../lib/auth-client";

export default function LoginButton() {
  const login = async () => {
    console.log("Starting login");
    await signIn.social({
      provider: "microsoft",
      callbackURL: "/dashboard",
    });
  };
  return (
    <button
      className="rounded-full bg-green-800 dark:bg-green-600 p-2 px-3 text-white hover:cursor-pointer"
      onClick={login}
    >
      Login
    </button>
  );
}
