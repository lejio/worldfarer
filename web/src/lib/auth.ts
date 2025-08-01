import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
 
const client = new MongoClient("mongodb://root:example@mongo:27017/");
const db = client.db();
 
export const auth = betterAuth({
  database: mongodbAdapter(db),
});