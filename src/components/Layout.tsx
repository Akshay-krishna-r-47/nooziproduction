import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className={`flex-grow ${isHomePage ? '' : 'pt-20'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
