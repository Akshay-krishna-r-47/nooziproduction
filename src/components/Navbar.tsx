import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';
import logo from '../assets/images/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Home', path: '/' },

    { name: 'Our Services', path: '/services' },
    { name: 'Rates', path: '/rates' },
    { name: 'Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    // Handle scroll state on mount and window resize/scroll
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                // Always expand at the top
                setIsScrolled(false);
            } else if (currentScrollY > lastScrollY.current + 5) {
                // Scrolling Down -> Shrink
                setIsScrolled(true);
            } else if (currentScrollY < lastScrollY.current - 5) {
                // Scrolling Up -> Expand
                setIsScrolled(false);
            }

            lastScrollY.current = currentScrollY;
        };

        // Initial check
        if (window.scrollY > 50) setIsScrolled(true);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Initial check

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const mainNavItems = navItems.filter(item => item.name !== 'Contact');

    return (
        <motion.nav
            layout
            initial={false} // Disable initial animation on mount

            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 z-50",
                isMobile ? "rounded-[2rem]" : "rounded-full",
                "bg-white/90 backdrop-blur-md shadow-sm border border-white/20",
                "overflow-hidden",
                isScrolled ? "w-auto px-6 py-2" : "w-[90%] max-w-4xl px-6 py-3"
            )}
        >
            <div className="flex items-center justify-between h-10 w-full relative gap-0">
                {/* Left: Logo */}
                <motion.div
                    layout
                    initial={false}
                    animate={{
                        width: (isScrolled && !isMobile) ? 0 : "auto",
                        opacity: (isScrolled && !isMobile) ? 0 : 1,
                        marginRight: (isScrolled && !isMobile) ? 0 : 20,
                        scale: (isScrolled && !isMobile) ? 0.8 : 1, // Shrink slightly
                        filter: (isScrolled && !isMobile) ? "blur(4px)" : "blur(0px)" // Add blur for fade
                    }}
                    transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1] // Smooth easing
                    }}
                    className="flex-shrink-0 overflow-hidden"
                >
                    <Link to="/" className="flex items-center gap-2 group whitespace-nowrap">
                        <img src={logo} alt="Noozi Production" className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    </Link>
                </motion.div>

                {/* Center: Main Navigation */}
                <motion.div layout className="hidden md:flex items-center gap-6 mx-auto whitespace-nowrap">
                    {mainNavItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={cn(
                                    "text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300",
                                    "text-primary/70 hover:text-primary hover:scale-105",
                                    isActive ? "text-accent scale-110" : ""
                                )}
                            >
                                {isActive ? `[ ${item.name} ]` : item.name}
                            </Link>
                        );
                    })}
                </motion.div>

                {/* Right: Contact & Mobile Menu */}
                <div className="flex items-center">
                    <motion.div
                        layout
                        initial={false}
                        animate={{
                            width: isScrolled ? 0 : "auto",
                            opacity: isScrolled ? 0 : 1,
                            marginLeft: isScrolled ? 0 : 8,
                            scale: isScrolled ? 0.8 : 1,
                            filter: isScrolled ? "blur(4px)" : "blur(0px)"
                        }}
                        transition={{
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                        className="flex items-center overflow-hidden"
                    >
                        <Link
                            to="/contact"
                            className={cn(
                                "text-[9px] font-bold uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap",
                                "bg-white border border-primary text-primary hover:bg-primary hover:text-white shadow-sm"
                            )}
                        >
                            CONTACT
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button - Always visible on mobile */}
                    <div className="flex md:hidden ml-auto">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full hover:bg-black/5 text-primary transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden w-full bg-white border-t border-gray-100 mt-2"
                    >
                        <div className="px-4 py-4 space-y-2 flex flex-col items-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary/5 w-full text-center"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >
        </motion.nav >
    );
}
