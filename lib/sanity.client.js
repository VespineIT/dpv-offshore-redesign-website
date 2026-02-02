// lib/sanity.client.js
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "l6fns8zj", 
  dataset: "production",
  apiVersion: "2024-01-01",
  // useCdn: true enables faster responses by using Sanity's edge cache.
  // Set to false if you need the absolute latest data immediately (like for live updates).
  useCdn: false, 
});