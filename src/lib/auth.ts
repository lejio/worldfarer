import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MICROSOFT_CLIENT_ID } from "astro:env/client";
import { MICROSOFT_CLIENT_SECRET } from "astro:env/server";
import { MONGODB_URI } from "astro:env/server";

const client = new MongoClient(MONGODB_URI);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db),
  trustedOrigins: ["https://localhost:3000", "https://localhost:4321", "https://worldfarer.com", "https://www.worldfarer.com"],
  socialProviders: {
    microsoft: {
      clientId: MICROSOFT_CLIENT_ID,
      clientSecret: MICROSOFT_CLIENT_SECRET,
      tenantId: "common",
      prompt: "select_account",
    },
  },
});
