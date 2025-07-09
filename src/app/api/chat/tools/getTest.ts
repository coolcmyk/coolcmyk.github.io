import { tool } from 'ai';
import { z } from 'zod';

export const getTest = tool({
  description: 'Runs a simple test to confirm tool-calling is working.',
  parameters: z.object({}),
  execute: async () => {
    console.log('[TOOL] getTest is executing...');
    return { 
      success: true, 
      message: 'The test tool was called successfully!',
      timestamp: new Date().toISOString()
    };
  },
});
