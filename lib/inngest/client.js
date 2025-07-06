import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "my-app", // Unique app ID
  name: "mentorai",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});