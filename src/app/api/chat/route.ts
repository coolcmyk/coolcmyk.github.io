import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getInternship } from './tools/getIntership';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';



/////////////////////////////////TESTINGGG
//
//
//
import { getTest } from './tools/getTest';

export const maxDuration = 30;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('Missing GEMINI_API_KEY!');
}

const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT = 15; // 15 requests
const WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (entry) {
    if (now - entry.lastRequest > WINDOW_MS) {
      // Reset window
      entry.count = 1;
      entry.lastRequest = now;
      rateLimitMap.set(ip, entry);
      return false;
    } else if (entry.count >= RATE_LIMIT) {
      return true;
    } else {
      entry.count += 1;
      entry.lastRequest = now;
      rateLimitMap.set(ip, entry);
      return false;
    }
  } else {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
    return false;
  }
}

function errorHandler(error: unknown): string {
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
  const ip = req.headers.get('x-forwarded-for') || 'unknown';

  //rate limiter for safety
  if(isRateLimited(ip)){
    return new Response(JSON.stringify({err: 'slow down baby'}), 
    {status: 420, headers: {'Content-Type': 'application/json'}});
  }
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);
    
    const formattedMessages = [
      {
        role: 'system',
        content: SYSTEM_PROMPT, 
      },
      ...messages,
    ];
    
    const tools = {
      getTest,
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getInternship,
    };
    
    // console.log('[CHAT-API] 🔍 Available tools:', Object.keys(tools));
    // console.log('[CHAT-API] 🔍 Tools validation:', Object.entries(tools).map(([name, tool]) => ({
    //   name,
    //   exists: !!tool,
    //   type: typeof tool,
    //   hasDescription: tool?.description ? true : false
    // })));

    const response = await streamText({
      // model: google('gemini-2.5-pro', {
      //   useSearchGrounding: true,
      //   dynamicRetrievalConfig: {
      //     mode: 'MODE_DYNAMIC',
      //     dynamicThreshold: 0.8,
      //   }
      // }),
      model: google('gemini-2.5-flash'),
      messages: formattedMessages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });
      
    return response.toDataStreamResponse({getErrorMessage: errorHandler,});
  } catch (err) {
    console.error('[CHAT-API] Error:', err);
    return new Response(errorHandler(err), { status: 500 });
  }
}
