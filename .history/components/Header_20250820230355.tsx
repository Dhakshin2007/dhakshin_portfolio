import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';
import { MenuIcon, CloseIcon, MusicIcon, DownloadIcon } from './IconComponents';

interface HeaderProps {
    navLinks: NavLink[];
    onNavClick: (id: string) => void;
    onMusicClick: () => void;
    onResumeClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ navLinks, onNavClick, onMusicClick, onResumeClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (id: string) => {
        onNavClick(id);
        setIsMenuOpen(false);
    }

    return (
        <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'glass-panel shadow-lg' : 'pt-4'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <span className="text-2xl font-bold font-orbitron cyan-glow cursor-pointer" onClick={() => handleLinkClick('home')}>
                               DK
                            </span>
                        </div>
                        <button onClick={onMusicClick} className="text-gray-300 hover:text-cyan-400 transition-colors animate-pulse-glow rounded-full p-2" aria-label="Toggle music player">
                            <MusicIcon />
                        </button>
                    </div>
                    <nav className="hidden md:flex items-center">
                        <ul className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => handleLinkClick(link.id)}
                                        className="relative text-gray-300 hover:text-white transition-colors duration-200 group"
                                    >
                                        {link.title}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                         <button 
                            onClick={onResumeClick}
                            className="ml-8 flex items-center gap-2 bg-cyan-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-cyan-400 transition-all transform hover:scale-105"
                        >
                            <DownloadIcon /> Resume
                        </button>
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                 <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-panel">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                             <button
                                onClick={() => handleLinkClick(link.id)}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                            >
                                {link.title}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => {
                                onResumeClick();
                                setIsMenuOpen(false);
                            }}
                             className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-base font-medium text-cyan-300 hover:text-white hover:bg-white/10"
                        >
                           <DownloadIcon /> Download Resume
                        </button>
                    </li>
                 </ul>
            </div>
        </header>
    );
};