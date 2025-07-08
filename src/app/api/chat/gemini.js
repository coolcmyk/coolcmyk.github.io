import { GoogleGenAI } from '@google/genai';
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('❌ Missing GEMINI_API_KEY!');
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

async function testGoogleGenAI() {
  console.log('\n🔍 Testing @google/genai (direct Gemini API call)...');
  try {
    const result = await ai.models.generateContent({
      model: 'gemini-1.5-flash', // Use a supported model
      contents: [{ role: 'user', parts: [{ text: 'Hello from Google GenAI!' }] }],
    });
    console.log('✅ Success:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('❌ Error in GoogleGenAI:', error);
  }
}

async function testAiSdkGoogle() {
  console.log('\n🔍 Testing @ai-sdk/google with streamText...');
  try {
    const response = streamText({
      model: google('gemini-1.5-flash', {}),
      messages: [{ role: 'user', content: 'Hello from ai-sdk!' }],
    });

    for await (const chunk of response) {
      console.log('✅ Streamed chunk:', chunk.text);
    }
  } catch (error) {
    console.error('❌ Error in ai-sdk/google:', error);
  }
}

async function main() {
  await testGoogleGenAI();
  await testAiSdkGoogle();
}

main();

