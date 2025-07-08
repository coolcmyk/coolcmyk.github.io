'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Importation correcte pour Next.js 13+
import { useState } from 'react';

interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialisation du router avec useRouter

  const defaultTrigger = (
    <Button
      variant="ghost"
      className="h-auto w-auto cursor-pointer rounded-2xl bg-white/30 p-3 shadow-lg backdrop-blur-lg hover:bg-white/60 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={() => setIsOpen(true)}
    >
      <Image
        src="/ky0-logo-2.jpeg"
        width={100}
        height={100}
        alt="Logo"
        className="h-full w-full object-cover"
      />
      <span className="sr-only">About ky0</span>
    </Button>
  );

  const handleContactMe = () => {
    setIsOpen(false);
    window.location.href = '/chat?query=How%20can%20I%20contact%20you%3F';
  };
  const handleProfileClick = () => {
    window.location.href = '/chat';
  };

  return (
    <>
      {/* Use custom trigger if provided, otherwise use default */}
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        defaultTrigger
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background z-52 max-h-[85vh] overflow-auto rounded-2xl border-none p-4 py-6 shadow-xl sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col"
          >
            {/* Header */}
            <DialogHeader className="relative flex flex-row items-start justify-between px-8 pt-8 pb-6">
              <div>
                <DialogTitle className="flex items-center gap-2 text-4xl font-bold tracking-tight">
                  welcome to ky0.dev               </DialogTitle>
                <DialogDescription className="mt-2 text-base">
                  {/*My interactive AI portfolio experience*/} </DialogDescription> </div>
              <Button
                variant="ghost"
                size="icon"
                className="sticky top-0 right-0 cursor-pointer rounded-full bg-black p-2 text-white hover:bg-black/90 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogHeader>

            {/* Content area */}
            <div className="space-y-6 overflow-y-auto px-2 py-4 md:px-8">
              <section className="bg-accent w-full space-y-8 rounded-2xl p-8">
                {/* What section */}
                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    so what's this?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    this is a reworked version of my previous portfolio, with integration of{' '}
                    <strong>mitsuki, a virtual friend of mine that will guide your journey</strong>
                    <br /> whether you're a recruiter, a friend, or just curious, feel free to ask her anything you want.
                  </p>
                </div>

                {/* Why section */}
                <div className="space-y-3">
                  <h3 className="text-primary flex items-center gap-2 text-xl font-semibold">
                    okay cool, so what's{' '}
                    <strong>mitsuki</strong> again?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    she's a finetuned assistant with gemini as her base model and function calling capabilites
                    <br /> feel free to ask her anything.
                    <br />
                    <strong>
                      she has all of my information and exactly what you're interested in knowing about me and my
                      work.
                    </strong>
                    <br />
                  </p>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center px-8 pt-4 pb-0 md:pb-8">
              <Button
                onClick={() => {setIsOpen(false); handleProfileClick();}}
                className="h-auto rounded-full px-4 py-3"
                size="sm"
              >
                chat with mitsuki
              </Button>
              <div
                className="mt-6 flex flex-col cursor-pointer gap-1 text-center text-sm"
                onClick={handleContactMe}
              >
                <p className="justify-center text-muted-foreground w-full">
                  this is a forked version of the gpt-based repository of the maker, pay him a visit :) 
                  <br/>
                  github.com/toukoum/portfolio 
                  <br/>
                  If you like it, please share it, feedback is always welcome.

                </p>
                <div className="text-center flex justify-center items-center text-blue-500 hover:underline mt-2">
                  contact me.
                </div>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
