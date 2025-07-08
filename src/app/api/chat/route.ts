import { 
  GoogleGenAI,
  FunctionCallingConfigMode,
  FunctionDeclaration,
  Type
} from '@google/genai';

import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getInternship } from './tools/getIntership';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getSports } from './tools/getSport';

export const maxDuration = 30;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('Missing GEMINI_API_KEY!');
}
const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY
})

function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);
    
    messages.unshift(SYSTEM_PROMPT);
    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getSports,
      getCrazy,
      getInternship,
    };

    // const response = await ai.models.generateContentStream({
    //   model: 'gemini-2.5-flash',
    //   contents: messages,
    //   config: CONFIGS,
    // );
    // for await (const chunk of response) {
    //  console.log(chunk.text);
    // }
    // for streaming purposes
    //
    const response = streamText({
      model: google('gemini-2.5-flash', {
        useSearchGrounding: true,
        dynamicRetrievalConfig: {
          mode: 'MODE_DYNAMIC',
          dynamicThreshold: 0.8,
        }
      }),
      messages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });
    return response.toDataStreamResponse();
    } catch (error) {
    console.error('[CHAT-API] Error:', error);
    return new Response(errorHandler(error), { status: 500 });
  }
}

