
/*import React, { useEffect } from 'react';

interface WelcomeOverlayProps {
    onFinished: () => void;
}

export const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ onFinished }) => {
    useEffect(() => {
        // Trigger the onFinished callback to start the cross-fade
        // This is timed to match the 85% mark of the 3.5s animation
        const timer = setTimeout(() => {
            onFinished();
        }, 2975);

        return () => clearTimeout(timer);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // Empty dependency array ensures this effect runs only once on mount.

    return (
        <div
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-transparent animate-welcome-fade-out"
            aria-hidden="true" // Hide from screen readers as it's decorative
        >
            <div className="relative flex items-center justify-center w-64 h-64 mb-8">
                {/* Crosshair lines */
                /*<div className="absolute w-full h-0.5 bg-cyan-400/50 crosshair-h"></div>
                <div className="absolute w-0.5 h-full bg-cyan-400/50 crosshair-v"></div>
                {/* Target dot */
                /*<div className="absolute w-3 h-3 rounded-full bg-red-500 target-dot shadow-[0_0_10px_red]"></div>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl uppercase text-white text-reveal" style={{ letterSpacing: '0.25em' }}>
                Hunt Begins
            </h1>
        </div>
    );
};