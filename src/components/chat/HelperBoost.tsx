import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  BriefcaseIcon,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleEllipsis,
  CodeIcon,
  GraduationCapIcon,
  Laugh,
  Layers,
  MailIcon,
  PartyPopper,
  Sparkles,
  UserRoundSearch,
  UserSearch,
  Bot,
  Heart,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import { Drawer } from 'vaul';

interface HelperBoostProps {
  submitQuery?: (query: string) => void;
  setInput?: (value: string) => void;
}

// Ryan-focused questions
const ryanQuestions = {
  About: 'Tell me about Ryan. What makes him special?',
  Projects: 'Show me Ryan\'s projects. What has he built recently?',
  Skills: 'What are Ryan\'s technical skills and expertise?',
  Experience: 'What\'s Ryan\'s work experience and achievements?',
  Contact: 'How can I contact Ryan? Is he available for opportunities?',
};

// Mitsuki-focused questions
const mitsukiQuestions = {
  About: 'Who are you, Mitsuki? Tell me about yourself!',
  Personality: 'What are your hobbies and interests?',
  Tech: 'What technologies do you work with?',
  Fun: 'What\'s the most chaotic thing you\'ve done lately?',
  Ryan: 'What\'s it like working with Ryan?',
};

const ryanQuestionConfig = [
  { key: 'About', color: '#329696', icon: UserSearch },
  { key: 'Projects', color: '#3E9858', icon: CodeIcon },
  { key: 'Skills', color: '#856ED9', icon: GraduationCapIcon },
  { key: 'Experience', color: '#B95F9D', icon: BriefcaseBusiness },
  { key: 'Contact', color: '#C19433', icon: MailIcon },
];

const mitsukiQuestionConfig = [
  { key: 'About', color: '#FF69B4', icon: Heart },
  { key: 'Personality', color: '#9370DB', icon: Sparkles },
  { key: 'Tech', color: '#32CD32', icon: Zap },
  { key: 'Fun', color: '#FF6347', icon: PartyPopper },
  { key: 'Ryan', color: '#4169E1', icon: UserRoundSearch },
];

// Helper drawer data for Ryan
const ryanSpecialQuestions = [
  'Tell me about Ryan',
  'Show me his resume',
  'What projects is he most proud of?',
  'What are his technical skills?',
  'How can I contact him?',
];

const ryanQuestionsByCategory = [
  {
    id: 'about',
    name: 'About Ryan',
    icon: UserSearch,
    questions: [
      'Tell me about Ryan',
      'What makes Ryan special?',
      'What are Ryan\'s passions?',
      'Where does Ryan see himself in 5 years?',
      'What\'s Ryan\'s educational background?',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: BriefcaseIcon,
    questions: [
      'Show me his resume',
      'What\'s Ryan\'s work experience?',
      'What makes Ryan a valuable team member?',
      'Why should I hire Ryan?',
      'What are Ryan\'s achievements?',
      'Is Ryan available for internships?',
    ],
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: CodeIcon,
    questions: [
      'What projects is he most proud of?',
      'Show me Ryan\'s latest work',
      'What hackathons has Ryan participated in?',
      'Tell me about DecentraLearn',
      'What\'s RoR (RewrittenOnRust)?',
      'Show me his open-source contributions',
    ],
  },
  {
    id: 'skills',
    name: 'Skills & Tech',
    icon: GraduationCapIcon,
    questions: [
      'What are his technical skills?',
      'Does Ryan know Rust?',
      'What about his AI/ML experience?',
      'Can Ryan work with ROS2?',
      'What programming languages does he know?',
    ],
  },
  {
    id: 'contact',
    name: 'Contact & Opportunities',
    icon: MailIcon,
    questions: [
      'How can I contact Ryan?',
      'What opportunities interest Ryan?',
      'Where is Ryan located?',
      'What kind of projects excite Ryan?',
      'How can I collaborate with Ryan?',
    ],
  },
];

// Helper drawer data for Mitsuki
const mitsukiSpecialQuestions = [
  'Who are you, Mitsuki?',
  'What are your hobbies?',
  'What technologies do you love?',
  'Tell me something chaotic!',
  'What\'s Ryan like as a boss?',
];

const mitsukiQuestionsByCategory = [
  {
    id: 'about',
    name: 'About Mitsuki',
    icon: Heart,
    questions: [
      'Who are you, Mitsuki?',
      'Tell me about yourself!',
      'What makes you special?',
      'How did you become Ryan\'s assistant?',
      'What\'s your background?',
    ],
  },
  {
    id: 'personality',
    name: 'Personality & Interests',
    icon: Sparkles,
    questions: [
      'What are your hobbies?',
      'Do you really collect mechanical keyboards?',
      'What\'s your favorite anime?',
      'Tell me about your lasagna obsession',
      'What\'s your dream project?',
    ],
  },
  {
    id: 'tech',
    name: 'Tech & Skills',
    icon: Zap,
    questions: [
      'What technologies do you love?',
      'Are you really good at debugging?',
      'What\'s your favorite programming language?',
      'Do you work with ROS2 too?',
      'What AI ideas do you have?',
    ],
  },
  {
    id: 'fun',
    name: 'Fun & Chaos',
    icon: PartyPopper,
    questions: [
      'Tell me something chaotic!',
      'What\'s the weirdest server name you\'ve used?',
      'What arcade games do you play?',
      'Show me your competitive side!',
      'What\'s your latest weird AI idea?',
    ],
  },
  {
    id: 'ryan',
    name: 'Working with Ryan',
    icon: UserRoundSearch,
    questions: [
      'What\'s Ryan like as a boss?',
      'What\'s the coolest thing Ryan has built?',
      'How do you help Ryan with his projects?',
      'What do you think of Ryan\'s code?',
      'Any funny Ryan stories?',
    ],
  },
];

// Animated Chevron component
const AnimatedChevron = () => {
  return (
    <motion.div
      animate={{
        y: [0, -4, 0], // Subtle up and down motion
      }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="text-primary mb-1.5"
    >
      <ChevronUp size={16} />
    </motion.div>
  );
};

export default function HelperBoost({
  submitQuery,
  setInput,
}: HelperBoostProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'ryan' | 'mitsuki'>('ryan'); // Toggle between Ryan and Mitsuki questions

  const currentQuestions = mode === 'ryan' ? ryanQuestions : mitsukiQuestions;
  const currentConfig = mode === 'ryan' ? ryanQuestionConfig : mitsukiQuestionConfig;
  const currentSpecialQuestions = mode === 'ryan' ? ryanSpecialQuestions : mitsukiSpecialQuestions;
  const currentQuestionsByCategory = mode === 'ryan' ? ryanQuestionsByCategory : mitsukiQuestionsByCategory;

  const handleQuestionClick = (questionKey: string) => {
    if (submitQuery) {
      submitQuery(currentQuestions[questionKey as keyof typeof currentQuestions]);
    }
  };

  const handleDrawerQuestionClick = (question: string) => {
    if (submitQuery) {
      submitQuery(question);
    }
    setOpen(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleMode = () => {
    setMode(mode === 'ryan' ? 'mitsuki' : 'ryan');
  };

  return (
    <>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <div className="w-full">
          {/* Mode Toggle */}
          <div className="mb-2 flex justify-center">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-1">
              <button
                onClick={toggleMode}
                className={cn(
                  'flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  mode === 'ryan' 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                <UserSearch size={14} />
                Ryan
              </button>
              <button
                onClick={toggleMode}
                className={cn(
                  'flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  mode === 'mitsuki' 
                    ? 'bg-pink-500 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                <Bot size={14} />
                Mitsuki
              </button>
            </div>
          </div>

          {/* Toggle Button */}
          <div className={isVisible ? 'mb-2 flex justify-center' : 'mb-0 flex justify-center'}>
            <button
              onClick={toggleVisibility}
              className="flex items-center gap-1 px-3 py-1 text-xs text-gray-500 transition-colors hover:text-gray-700"
            >
              {isVisible ? (
                <>
                  <ChevronDown size={14} />
                  Hide quick questions
                </>
              ) : (
                <>
                  <ChevronUp size={14} />
                  Show quick questions
                </>
              )}
            </button>
          </div>

          {/* HelperBoost Content */}
          {isVisible && (
            <div className="w-full">
              <div
                className="flex w-full flex-wrap gap-1 md:gap-3"
                style={{ justifyContent: 'safe center' }}
              >
                {currentConfig.map(({ key, color, icon: Icon }) => (
                  <Button
                    key={key}
                    onClick={() => handleQuestionClick(key)}
                    variant="outline"
                    className="border-border hover:bg-border/30 h-auto min-w-[100px] flex-shrink-0 cursor-pointer rounded-xl border bg-white/80 px-4 py-3 shadow-none backdrop-blur-sm transition-none active:scale-95"
                  >
                    <div className="flex items-center gap-3 text-gray-700">
                      <Icon size={18} strokeWidth={2} color={color} />
                      <span className="text-sm font-medium">{key}</span>
                    </div>
                  </Button>
                ))}

                {/* Need Inspiration Button */}
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Drawer.Trigger className="group relative flex flex-shrink-0 items-center justify-center">
                        <motion.div
                          className="hover:bg-border/30 flex h-auto cursor-pointer items-center space-x-1 rounded-xl border border-neutral-200 bg-white/80 px-4 py-3 text-sm backdrop-blur-sm transition-all duration-200 dark:border-neutral-800 dark:bg-neutral-900"
                          whileHover={{ scale: 1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-3 text-gray-700">
                            <CircleEllipsis
                              className="h-[20px] w-[18px]"
                              strokeWidth={2}
                            />
                          </div>
                        </motion.div>
                      </Drawer.Trigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <AnimatedChevron />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Content */}
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-100 bg-black/60 backdrop-blur-xs" />
          <Drawer.Content className="fixed right-0 bottom-0 left-0 z-100 mt-24 flex h-[80%] flex-col rounded-t-[10px] bg-gray-100 outline-none lg:h-[60%]">
            <div className="flex-1 overflow-y-auto rounded-t-[10px] bg-white p-4">
              <div className="mx-auto max-w-md space-y-4">
                <div
                  aria-hidden
                  className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300"
                />
                
                {/* Mode indicator in drawer */}
                <div className="mb-4 flex justify-center">
                  <div className={cn(
                    'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium',
                    mode === 'ryan' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-pink-100 text-pink-700'
                  )}>
                    {mode === 'ryan' ? <UserSearch size={16} /> : <Bot size={16} />}
                    Ask about {mode === 'ryan' ? 'Ryan' : 'Mitsuki'}
                  </div>
                </div>

                <div className="mx-auto w-full max-w-md">
                  <div className="space-y-8 pb-16">
                    {currentQuestionsByCategory.map((category) => (
                      <CategorySection
                        key={category.id}
                        name={category.name}
                        Icon={category.icon}
                        questions={category.questions}
                        onQuestionClick={handleDrawerQuestionClick}
                        specialQuestions={currentSpecialQuestions}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

// Component for each category section
interface CategorySectionProps {
  name: string;
  Icon: React.ElementType;
  questions: string[];
  onQuestionClick: (question: string) => void;
  specialQuestions: string[];
}

function CategorySection({
  name,
  Icon,
  questions,
  onQuestionClick,
  specialQuestions,
}: CategorySectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5 px-1">
        <Icon className="h-5 w-5" />
        <Drawer.Title className="text-[22px] font-medium text-gray-900">
          {name}
        </Drawer.Title>
      </div>

      <Separator className="my-4" />

      <div className="space-y-3">
        {questions.map((question, index) => (
          <QuestionItem
            key={index}
            question={question}
            onClick={() => onQuestionClick(question)}
            isSpecial={specialQuestions.includes(question)}
          />
        ))}
      </div>
    </div>
  );
}

// Component for each question item with animated chevron
interface QuestionItemProps {
  question: string;
  onClick: () => void;
  isSpecial: boolean;
}

function QuestionItem({ question, onClick, isSpecial }: QuestionItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        'flex w-full items-center justify-between rounded-[10px]',
        'text-md px-6 py-4 text-left font-normal',
        'transition-all',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        'bg-black'
      )}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        backgroundColor: '#1a1a1a',
      }}
      whileTap={{
        scale: 0.98,
        backgroundColor: '#0a0a0a',
      }}
    >
      <div className="flex items-center">
        {isSpecial && <Sparkles className="mr-2 h-4 w-4 text-white" />}
        <span className={isSpecial ? 'font-medium text-white' : 'text-white'}>
          {question}
        </span>
      </div>
      <motion.div
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <ChevronRight
          className="h-5 w-5 shrink-0 text-white"
        />
      </motion.div>
    </motion.button>
  );
}
