import React from 'react'
import { signOut } from "../lib/auth-client";
import { navigate } from 'astro:transitions/client';

export default function LogoutButton() {
    const logout = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    navigate('/')
                }
            }
        })
    }
  return (
    <button onClick={logout}>
        Sign Out
    </button>
  )
}
