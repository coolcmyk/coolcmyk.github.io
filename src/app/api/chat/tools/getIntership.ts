import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship Ryan is looking for, plus his contact info and how to reach him. Use this tool when the user asks about his internship search or how to contact him for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm looking for 👇

- 📅 **Duration**: 6-month internship starting **July 2025** (before graduation in 2027)
- 🌍 **Location**: **Jakarta, Indonesia** 🇮🇩 (Remote/Hybrid preferred)
- 🧑‍💻 **Focus**: AI development, robotics, autonomous systems, computer vision
- 🛠️ **Stack**: Rust, Python, C++, ROS2, CUDA, Unity3D, OpenCV, Machine Learning
- 💼 **Experience**: AI Staff at UI's Autonomous Marine Vehicle team, hackathon winner (NASA Space Apps 2024, ICP Hackathon)
- ✅ **What I bring**: Real experience with autonomous navigation, sensor fusion, computer vision, and open-source development
- 🔥 I move fast, learn faster, and I'm passionate about building intelligent systems that solve real problems!

📬 **Contact me** via:
- Email: ryanadi001@gmail.com
- Phone: +62 8956 0502 1916
- LinkedIn: [linkedin.com/ryan-adidaru](https://linkedin.com/ryan-adidaru)
- GitHub: [github.com/coolcmyk](https://github.com/coolcmyk)

Let's build the future together! 🚀
    `;
  },
});
