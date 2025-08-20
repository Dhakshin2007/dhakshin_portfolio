import React, { useState } from 'react';
import { CoinIcon } from './IconComponents';

const cardCharacterImage = "https://i.postimg.cc/MHhnNrKn/Whats-App-Image-2025-08-20-at-22-47-07-be7726bc.jpg";

export const AboutCard: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        // The container that provides the 3D perspective
        <div className="w-full max-w-xs sm:max-w-sm mx-auto h-[580px]" style={{ perspective: '1200px' }}>
            {/* The inner element that flips */}
            <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out cursor-pointer"
                style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                onClick={handleFlip}
                role="button"
                tabIndex={0}
                aria-label="About me card, click to flip"
                onKeyDown={(e) => e.key === 'Enter' && handleFlip()}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="relative font-sans w-full h-full bg-[#1F1A36] border-2 border-yellow-500/80 rounded-2xl shadow-[0_0_20px_rgba(192,132,252,0.5),0_0_40px_rgba(192,132,252,0.3)] transform-gpu">
                        {/* Card Texture */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M5%200h1L0%206V5zM6%205v1H5z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50 rounded-[14px]"></div>
                        
                        <div className="relative p-5 sm:p-6 flex flex-col h-full">
                            {/* Header */}
                            <div className="flex justify-between items-center text-xs font-semibold text-gray-300 font-orbitron tracking-wider">
                                <span>HACK THE NORTH 2025</span>
                                <span>AMETHYST</span>
                            </div>

                            {/* Image Section */}
                            <div className="my-4 p-2 bg-black/30 rounded-lg border border-purple-500/30">
                                <div className="relative">
                                    <img 
                                        src={cardCharacterImage}
                                        alt="Card character art of a black cat with a purple scarf" 
                                        className="w-full h-auto aspect-square object-cover rounded" 
                                    />
                                    {/* Coin */}
                                    <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300">
                                        <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center">
                                            <CoinIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="text-white mt-8 flex-grow flex flex-col">
                                <h3 className="text-3xl font-light">Dhakshin's</h3>
                                <h2 className="text-4xl font-orbitron font-bold text-purple-400 -mt-2">Profile</h2>
                                
                                <p className="text-[10px] font-semibold text-gray-400 tracking-[0.2em] my-3 uppercase">Cave Explorer Details</p>
                                
                                <div className="border-t border-purple-500/20 my-4"></div>

                                <div className="flex justify-between text-sm mt-auto">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">Origin</p>
                                        <p className="font-semibold">Narsaraopet, IN</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400 uppercase">Experience</p>
                                        <p className="font-semibold">"Literally 0"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div 
                    className="absolute w-full h-full"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className="font-sans w-full h-full bg-[#1F1A36] border-2 border-purple-500/80 rounded-2xl shadow-[0_0_20px_rgba(192,132,252,0.5),0_0_40px_rgba(192,132,252,0.3)] p-6 flex flex-col justify-center items-center text-center">
                        <h3 className="font-orbitron text-2xl font-bold magenta-glow">About Me</h3>
                        <div className="border-t border-purple-500/20 my-4 w-1/2"></div>
                        <p className="text-gray-300 leading-relaxed text-base">
                            I'm a first-year B.Tech student in Artificial Intelligence and Data Engineering at IIT Ropar.
                             My passion lies in software architecture and building robust, production-level systems. I have hands-on experience in circuit design and a proven ability to develop practical applications. I am always eager to tackle real-world challenges and innovate with technology.
                        </p>
                        <p className="text-center text-xs text-cyan-400 mt-6 animate-pulse">Flip It Dude!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
