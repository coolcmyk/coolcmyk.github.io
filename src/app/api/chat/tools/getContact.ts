import { tool } from 'ai';
import { z } from 'zod';


export const getContact = tool({
  description:
    'This tool show a my contact informations.',
  parameters: z.object({}),
  execute: async () => {
    return "here's my contact, feel free to reach out!";
  },
});
