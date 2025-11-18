import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_API_GEMINI_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const getAi = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "넌 누구야",
    });
    console.log(response.candidates[0].content.parts[0].text);
  } catch (error) {
    throw new Error(error);
  }
};
