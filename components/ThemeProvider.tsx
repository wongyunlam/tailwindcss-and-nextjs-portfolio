'use client';
import React from 'react';
import { ThemeProvider as Provider } from 'next-themes';

function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider enableSystem={true} attribute="class">
            {children}
        </Provider>
    );
}

export default ThemeProvider;
