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

export const getCityDescription = async (keyword) => {
    if (!keyword) throw new Error("keyword가 비어있습니다.");
    const prompt = `여행객에게 ${keyword}를 해당 나라 또는 도시로 여행가야 하는 이유를 5문장으로 소개해줘. 생생한 분위기와 특징을 강조해줘.`;
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        const data = response.candidates[0].content.parts[0].text;
        return data;
    } catch (error) {
        throw new Error(error?.message);
    }
};
