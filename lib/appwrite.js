import "react-native-url-polyfill/auto";
import { Client, Account, Databases } from "react-native-appwrite";

export const client = new Client()
  .setProject("69adb9f00027091e6394")
  .setEndpoint("https://sfo.cloud.appwrite.io/v1");

export const account = new Account(client);
export const databases = new Databases(client);

export const DATABASE_ID = "69b070910038d3e74039";
export const PROFILES_COLLECTION_ID = "profiles";
