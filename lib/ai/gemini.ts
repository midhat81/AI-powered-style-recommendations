import { createGoogleGenerativeAI } from '@ai-sdk/google';

const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

if (!apiKey) {
  throw new Error('GOOGLE_GENERATIVE_AI_API_KEY is not set in environment variables');
}

const google = createGoogleGenerativeAI({
  apiKey: apiKey,
});

export const geminiModel = google('gemini-2.5-flash');