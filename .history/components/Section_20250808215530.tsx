
import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
    const ref = useRef<Element>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

    return (
        <section
            id={id}
            ref={ref}
            className={`relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8 min-h-screen/2 transition-all duration-1000 ${className} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {children}
        </section>
    );
};
