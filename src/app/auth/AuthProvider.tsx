'use client';

import { ReactNode } from 'react';
import { MemberstackProvider } from '@memberstack/nextjs/client';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const publicKey = process.env.NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY;
    if (!publicKey) {
        if (process.env.NODE_ENV === 'production') {
            console.error(
                'Missing environment variable: NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY'
            );
            return <h1>Application Error. Please try again later.</h1>;
        }
        throw new Error(
            'Missing environment variable: NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY'
        );
    }
  return (
    <MemberstackProvider
      config={{
        publicKey,
      }}
    >
      {children}
    </MemberstackProvider>
  );
};

export default AuthProvider;
