'use client';

import { motion, Variants, cubicBezier } from 'framer-motion'; 
import { Award, Code, GraduationCap, Mail, MessageSquare } from 'lucide-react';
import React from 'react';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
}

const ChatLanding: React.FC<ChatLandingProps> = ({ submitQuery }) => {
  const suggestedQuestions = [
    {
      icon: <MessageSquare className="h-4 w-4" />,
      text: 'introduce yourself.',
    },
    {
      icon: <Code className="h-4 w-4" />,
      text: 'what projects have ryan worked on?',
    },
    {
      icon: <Award className="h-4 w-4" />,
      text: "tell me about ryan's skills.",
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'how can I contact him?',
    },
  ];

  const containerVariants: Variants = { // Explicitly type containerVariants as Variants
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = { // Explicitly type itemVariants as Variants
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        // FIX: Use cubicBezier to correctly type the easing array
        ease: cubicBezier(0.25, 0.1, 0.25, 1), 
      },
    },
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="w-full max-w-md space-y-3"
        variants={containerVariants}
      >
        {suggestedQuestions.map((question, index) => (
          <motion.button
            key={index}
            className="bg-accent hover:bg-accent/80 flex w-full items-center rounded-lg px-4 py-3 transition-colors"
            onClick={() => submitQuery(question.text)}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="bg-background mr-3 rounded-full p-2">
              {question.icon}
            </span>
            <span className="text-left">{question.text}</span>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ChatLanding;

