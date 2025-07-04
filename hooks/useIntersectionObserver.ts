
import React, { useState, useEffect, RefObject } from 'react';

export const useIntersectionObserver = (
    elementRef: RefObject<Element>,
    { threshold = 0.1, root = null, rootMargin = '0%' }: IntersectionObserverInit
): boolean => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    // Optional: unobserve after first intersection
                    // observer.unobserve(element);
                } else {
                    // Optional: reset when out of view
                    // setIsIntersecting(false); 
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [elementRef, threshold, root, rootMargin]);

    return isIntersecting;
};
