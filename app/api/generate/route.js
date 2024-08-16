import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run() {
    const prompt = ""
    // you are a flashcard creator.Your task is a genrate consie and effective falshcard based on the the given topic or content. follow these guideline to genarte a flashcsrd
    // 1. create a clear and concise question for the front of the flashcard.
    // 2. provide accurate informative answer for the back of the flashcard.
    // 3. Ensure that each flashcard focuses on a single concept pr piece of infomation
    // 4. Ensure that the flashcard is easy to understand.
    
    const result = await model.generateContent(prompt);
    // export API_KEY=<YOUR_API_KEY>

    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
  run();