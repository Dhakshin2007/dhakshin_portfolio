import { useState, useEffect } from 'react';

export const useTypewriter = (words: string[], typeSpeed = 150, deleteSpeed = 100, delay = 2000): string => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (isDeleting) {
            if (text.length > 0) {
                timeout = setTimeout(() => {
                    setText(currentWord.substring(0, text.length - 1));
                }, deleteSpeed);
            } else {
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        } else {
            if (text.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setText(currentWord.substring(0, text.length + 1));
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, delay);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);

    return text;
};
