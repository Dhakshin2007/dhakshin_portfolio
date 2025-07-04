
import React, { useState, useEffect } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

export const AnimatedCursor: React.FC = () => {
    const { x, y } = useMousePosition();
    const [isPointer, setIsPointer] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        
        const handleMouseMove = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button')) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (isTouchDevice) {
        return null;
    }

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-400 transition-transform duration-300 ease-out pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 ${isPointer ? 'scale-150' : ''}`}
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                }}
            ></div>
            <div
                className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isPointer ? 'opacity-0' : 'opacity-100'}`}
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                }}
            ></div>
        </>
    );
};
