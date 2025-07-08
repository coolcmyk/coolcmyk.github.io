'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion, cubicBezier, Transition } from 'framer-motion';
import { toast } from 'sonner';
import { Info, Github } from 'lucide-react';

import ChatBottombar from '@/components/chat/chat-bottombar';
import ChatLanding from '@/components/chat/chat-landing';
import ChatMessageContent from '@/components/chat/chat-message-content';
import { SimplifiedChatView } from '@/components/chat/simple-chat-view';
import { ChatBubble, ChatBubbleMessage } from '@/components/ui/chat/chat-bubble';
import WelcomeModal from '@/components/welcome-modal';
import HelperBoost from './HelperBoost';

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

interface AvatarProps {
  hasActiveTool: boolean;
}

const Avatar = dynamic<AvatarProps>(
  () =>
    Promise.resolve(({ hasActiveTool }: AvatarProps) => {
      return (
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${hasActiveTool ? 'h-20 w-20' : 'h-28 w-28'}`}
        >
          <div
            className="relative cursor-pointer"
            onClick={() => (window.location.href = '/')}
          >
            <img
              src="/mitsuki-logo.png"
              alt="mitsuki"
              className="h-full w-full scale-[1.8] object-contain"
            />
          </div>
        </div>
      );
    }),
  { ssr: false }
);

const Chat = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query');
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    setMessages,
    setInput,
    reload,
    addToolResult,
    append,
  } = useChat({
    onResponse: (response) => {
      if (response) {
        setLoadingSubmit(false);
      }
    },
    onFinish: () => {
      setLoadingSubmit(false);
    },
    onError: (error) => {
     setLoadingSubmit(false);
     console.error('⚠️ Full error object:', error);

     let message = 'Unknown error';
  try {
    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === 'string') {
      message = error;
    } else {
      message = JSON.stringify(error, null, 2);
    }
  } catch (e) {
    message = 'Error while processing error object';
  }

  toast.error(`Error: ${message}`);
},

    onToolCall: (tool) => {
      console.log('Tool call:', tool.toolCall.toolName);
    },
  });

  const { currentAIMessage, latestUserMessage, hasActiveTool } = useMemo(() => {
    const latestAIMessageIndex = messages.findLastIndex((m) => m.role === 'assistant');
    const latestUserMessageIndex = messages.findLastIndex((m) => m.role === 'user');

    const result = {
      currentAIMessage: latestAIMessageIndex !== -1 ? messages[latestAIMessageIndex] : null,
      latestUserMessage: latestUserMessageIndex !== -1 ? messages[latestUserMessageIndex] : null,
      hasActiveTool: false,
    };

    if (result.currentAIMessage) {
      result.hasActiveTool =
        result.currentAIMessage.parts?.some(
          (part) => part.type === 'tool-invocation' && part.toolInvocation?.state === 'result'
        ) || false;
    }

    if (latestAIMessageIndex < latestUserMessageIndex) {
      result.currentAIMessage = null;
    }

    return result;
  }, [messages]);

  const isToolInProgress = messages.some(
    (m) =>
      m.role === 'assistant' &&
      m.parts?.some((part) => part.type === 'tool-invocation' && part.toolInvocation?.state !== 'result')
  );

  const submitQuery = (query: string) => {
    if (!query.trim() || isToolInProgress) return;
    setLoadingSubmit(true);
    append({ role: 'user', content: query });
  };

  useEffect(() => {
    if (initialQuery && !autoSubmitted) {
      setAutoSubmitted(true);
      setInput('');
      submitQuery(initialQuery);
    }
  }, [initialQuery, autoSubmitted]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isToolInProgress) return;
    submitQuery(input);
    setInput('');
  };

  const handleStop = () => {
    stop();
    setLoadingSubmit(false);
  };

  const isEmptyState = !currentAIMessage && !latestUserMessage && !loadingSubmit;
  const headerHeight = hasActiveTool ? 100 : 180;

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-6 right-8 z-51 flex flex-col-reverse items-center justify-center gap-1 md:flex-row">
        <WelcomeModal
          trigger={
            <div className="hover:bg-accent cursor-pointer rounded-2xl px-3 py-1.5">
              <Info className="text-accent-foreground h-8" />
            </div>
          }
        />
        <a
          href="https://github.com/coolcmyk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-xs md:text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          <Github className="h-4 w-4 md:h-5 md:w-5" />
          <span className="hidden sm:inline">visit my github</span>
        </a>
      </div>

      <div
        className="fixed top-0 right-0 left-0 z-50"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.95) 30%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 100%)',
        }}
      >
        <div
          className={`transition-all duration-300 ease-in-out ${hasActiveTool ? 'pt-6 pb-0' : 'py-6'}`}
        >
          <div className="flex justify-center">
            <ClientOnly>
              <Avatar hasActiveTool={hasActiveTool} />
            </ClientOnly>
          </div>

          <AnimatePresence>
            {latestUserMessage && !currentAIMessage && (
              <motion.div className="mx-auto flex max-w-3xl px-4">
                <ChatBubble variant="sent">
                  <ChatBubbleMessage>
                    <ChatMessageContent
                      message={latestUserMessage}
                      isLast={true}
                      isLoading={false}
                      reload={() => Promise.resolve(null)}
                    />
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="container mx-auto flex h-full max-w-3xl flex-col">
        <div className="flex-1 overflow-y-auto px-2" style={{ paddingTop: `${headerHeight}px` }}>
          <AnimatePresence mode="wait">
            {isEmptyState ? (
              <motion.div key="landing" className="flex min-h-full items-center justify-center">
                <ChatLanding submitQuery={submitQuery} />
              </motion.div>
            ) : currentAIMessage ? (
              <div className="pb-4">
                <SimplifiedChatView
                  message={currentAIMessage}
                  isLoading={isLoading}
                  reload={reload}
                  addToolResult={addToolResult}
                />
              </div>
            ) : (
              loadingSubmit && (
              <motion.div key="loading" className="px-4 pt-18">
                  <ChatBubble variant="received">
                    <ChatBubbleMessage isLoading />
                  </ChatBubble>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        <div className="sticky bottom-0 bg-black px-2 pt-3 md:px-0 md:pb-4">
          <div className="relative flex flex-col items-center gap-3">
            <HelperBoost submitQuery={submitQuery} setInput={setInput} />
            <ChatBottombar
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={onSubmit}
              isLoading={isLoading}
              stop={handleStop}
              isToolInProgress={isToolInProgress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
