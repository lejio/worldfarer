import React from "react";
import type { SessionType } from "../types/auth";

export default function Profile({ session }: { session: SessionType | null }) {
  console.log(session);
  return (
    <div>
      {session ? session.id : "No session ID"},{" "}
      {session ? session.userId : "No session userId"}
    </div>
  );
}
