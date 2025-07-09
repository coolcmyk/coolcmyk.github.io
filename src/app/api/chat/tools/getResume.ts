import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'Use this tool when the user explicitly asks for a resume, CV, curriculum vitae, or a formal summary of Ryan\'s work history and qualifications. Provides a link to his resume.',
  parameters: z.object({}),
  execute: async () => {
    return "You can download my resume by clicking on the link above.";
  },
});
