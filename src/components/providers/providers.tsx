"use client";

import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from '../ui/tooltip';

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <TooltipProvider>
                {children}
                </TooltipProvider>
        </QueryClientProvider>
    )
};

export default Providers
