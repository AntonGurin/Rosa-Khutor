import '../styles/globals.scss';
import React from 'react';
import type { AppProps } from 'next/app'
import { Rubik } from '@next/font/google' 
import {
    QueryClient, 
    QueryClientProvider,
    useQuery } from 'react-query';
import Vacancies from '@/components/vacancies';


const rubik = Rubik({ 
  weight: '400',
  subsets: [
    'latin', 
    'cyrillic'] 
})

interface TimeValues {
  fullTime: string;
  halftime: string;
  partTime: string;
}


const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      refetchOnWindowFocus: false,
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient;

  return (
    <QueryClientProvider client={queryClient}>
      <div className={rubik.className}>
      <Component {...pageProps} />
      </div>
    </QueryClientProvider>
);}
