import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
export const summarizeNovel = async (title: string, content: string) => {
  const res = await ai.models.generateContent({ model: "gemini-3-flash-preview", contents: `Summarize ${title}: ${content}` });
  return res.text;
};
