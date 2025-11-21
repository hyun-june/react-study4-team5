import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_API_GEMINI_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const getAi = async (message) => {
  if (!message) throw new Error("message가 비어있습니다.");
  const prompt = `너는 여행지를 소개 시켜주는 가이드야. 다음 문장에 답해줘:\n${message}`;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const data = response.candidates[0].content.parts[0].text;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
