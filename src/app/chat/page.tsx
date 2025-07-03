'use client';

import { Suspense } from 'react';
import Chat from '@/components/chat/chat';

export default function Page() {
  return (
    <Suspense fallback={<div>still loading, wait a sec...</div>}>
      <Chat />
    </Suspense>
  );
}
