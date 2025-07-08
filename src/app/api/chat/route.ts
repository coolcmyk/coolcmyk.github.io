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

const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT = 5; // 5 requests
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
    return new Response(JSON.stringify({error: 'slow down baby'}), 
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
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getSports,
      getCrazy,
      getInternship,
    };
    
    const response = await streamText({
      model: google('gemini-2.5-flash', {
        useSearchGrounding: true,
        dynamicRetrievalConfig: {
          mode: 'MODE_DYNAMIC',
          dynamicThreshold: 0.8,
        }
      }),
      messages: formattedMessages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });
    return response.toDataStreamResponse({getErrorMessage: errorHandler,});
  } catch (err) {
    console.error('[CHAT-API] Error:', error);
    return new Response(errorHandler(error), { status: 500 });
  }
}
