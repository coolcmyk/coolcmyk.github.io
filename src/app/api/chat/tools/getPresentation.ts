import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Ryan Adidaru. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Ryan Adidaru, a 19-year-old Computer Engineering student at University of Indonesia specializing in AI, Robotics, and Autonomous Systems. Currently working as AI Staff for the Autonomous Marine Vehicle team, passionate about open-source development and building intelligent systems that solve real-world problems. I'm a hackathon enthusiast with wins at NASA Space Apps 2024 and ICP Hackathon, and I love working with cutting-edge tech like Rust, ROS2, and AI/ML frameworks.",
    };
  },
});
