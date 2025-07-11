'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import GitHubButton from 'react-github-btn';
import { Button } from '@/components/ui/button';
import WelcomeModal from '@/components/welcome-modal';
import {
  ArrowRight,
  BriefcaseBusiness,
  Code,
  GraduationCap,
  Contact,
  UserSearch,
  Github,
} from 'lucide-react';

/* ---------- Quick Question Data ---------- */
const questions = {
  about: "Tell me about Ryan Adidaru's background",
  projects: 'What are Ryan\'s most impressive projects? Tell me about CaptureTheGun and TanyaJawab.',
  skills: 'What programming languages and technologies does Ryan know? Tell me about his AI experience.',
  edu : 'Where did Ryan study? What certifications does he have?',
  contact: 'How can I contact Ryan for job opportunities?',
} as const;

const questionConfig = [
  { key: 'about', color: '#FFFFFF', icon: UserSearch },
  { key: 'projects', color: '#FFFFFF', icon: BriefcaseBusiness },
  { key: 'skills', color: '#FFFFFF', icon: Code },
  { key: 'edu', color: '#FFFFFF', icon: GraduationCap },
  { key: 'contact', color: '#FFFFFF', icon: Contact},
] as const;

/* ---------- Component ---------- */
export default function Home() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const goToChat = (query: string) => {
    router.push(`/chat?query=${encodeURIComponent(query)}`);
  };

  const topVariants: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0, transition: { type: 'tween', duration: 0.8 } },
  };

  const bottomVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { type: 'tween', duration: 0.8, delay: 0.2 } },
  };

  useEffect(() => {
    const img = new Image();
    img.src = '/landing-memojis.png';

    const preloadVideo = (href: string, as: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = as;
      link.href = href;
      document.head.appendChild(link);
    };

    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-10 md:pb-20 overflow-hidden">
      {/* Decorative Footer Word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden sm:block bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-transparent text-[10rem] lg:text-[16rem] font-black select-none"
          style={{ marginBottom: '-2.5rem' }}
        ></div>
      </div>

      {/* Header Buttons */}
      <div className="absolute top-6 left-6 right-6 z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <button
          onClick={() => goToChat('Are you looking for internship opportunities?')}
          className="flex items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          looking for internship by any chance?
        </button>
<a
  href="https://github.com/coolcmyk"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-xs md:text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800
    px-2 py-1 md:px-4 md:py-1.5"
>
  <Github className="h-4 w-4 md:h-5 md:w-5" />
  <span className="hidden sm:inline">visit my github</span>
</a>

     </div>

      {/* Hero Section */}
      <motion.div
        variants={topVariants}
        initial="hidden"
        animate="visible"
        className="mt-24 md:mt-4 mb-8 md:mb-12 flex flex-col items-center text-center"
      >
        <WelcomeModal />
        <h2 className="mt-1 text-xl md:text-2xl font-semibold text-secondary-foreground">@coolcmyk</h2>
        <h1 className="text-2xl sm:text-2xl md:text-6xl lg:text-4xl font-bold">
          ai/ml & software engineer
        </h1>
      </motion.div>

      {/* Input & Quick Buttons */}
      <motion.div
        variants={bottomVariants}
        initial="hidden"
        animate="visible"
        className="mt-4 z-10 flex w-full flex-col items-center justify-center"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input.trim());
          }}
          className="relative w-full max-w-lg"
        >
          <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 px-6 pr-2 backdrop-blur-lg transition hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ask mitsuki about me..."
              className="w-full bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-white p-2.5 text-black transition-colors hover:bg-gray-300 disabled:opacity-70 dark:bg-white dark:hover:bg-gray-300"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <Button
              key={key}
              onClick={() => goToChat(questions[key])}
              variant="outline"
              className="aspect-square w-full rounded-2xl border bg-white/30 py-8 md:p-10 backdrop-blur-lg border-border hover:bg-border/30 shadow-none active:scale-95"
            >
              <div className="flex flex-col items-center justify-center gap-1 text-gray-700">
                <Icon size={22} strokeWidth={2} color={color} />
                <span className="text-xs sm:text-sm font-medium">{key}</span>
              </div>
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

