import React from "react";
import { signIn, signUp, useSession } from "../lib/auth-client";

export default function LoginButton() {
  const login = async () => {
    console.log(
      "Starting login"
    )
    await signIn.social({
      provider: "microsoft",
      callbackURL: '/dashboard'
    });
  };
  return (
    <div>
      <button onClick={login}>Log In</button>
    </div>
  );
}
