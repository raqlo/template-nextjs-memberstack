'use client';

import { ReactNode } from 'react';
import { MemberstackProvider } from '@memberstack/nextjs/client';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MemberstackProvider
      config={{
        publicKey: process.env.NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY as string,
      }}
    >
      {children}
    </MemberstackProvider>
  );
};

export default AuthProvider;
