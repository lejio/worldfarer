import React from "react";
import { signOut } from "../lib/auth-client";
import { navigate } from "astro:transitions/client";
import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
  const LOGOUT_ICON_SIZE = 32;
  const logout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate("/");
        },
      },
    });
  };
  return (
    <button onClick={logout} className="hover:cursor-pointer">
      <FiLogOut
        className="transition-color duration-300 hover:text-green-800 dark:hover:text-green-600 text-[#888888] dark:text-gray-400"
        size={LOGOUT_ICON_SIZE}
      />
    </button>
  );
}
