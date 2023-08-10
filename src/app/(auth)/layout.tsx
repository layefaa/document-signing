// import type { Metadata } from 'next'
// import {Inter} from 'next/font/google'
import React from "react";
// Inter({subsets: ['latin']});
export default function AuthLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}
