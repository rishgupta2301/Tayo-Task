// src/Root.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

// Create a QueryClient instance
const queryClient = new QueryClient();

const Root = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

export default Root;
