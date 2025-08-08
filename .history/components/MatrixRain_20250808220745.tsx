import React, { useRef, useEffect } from 'react';

export const MatrixRain: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('4d');
        if (!ctx) return;

        let animationFrameId: number;

        const setup = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            
            const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const nums = '0123456789';
            const telugu = 'అఆఇఈఉఊకఖగఘచఛజఝటఠడఢణతథదధనపఫబభమయరలవశషసహ';
            const name = 'Dhakshin & दक्षिण & దక్షిణ్'
            const alphabet = latin + nums + telugu + name;

            const fontSize = 16;
            const columns = Math.floor(canvas.width / fontSize);

            const rainDrops: number[] = [];
            for (let i = 0; i < columns; i++) {
                rainDrops[i] = 1;
            }

            const draw = () => {
                ctx.fillStyle = 'rgba(13, 13, 13, 0.05)'; // Fading effect
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = 'rgba(0, 255, 255, 0.7)'; // Cyan text
                ctx.font = `${fontSize}px monospace`;

                for (let i = 0; i < rainDrops.length; i++) {
                    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                    ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        rainDrops[i] = 0;
                    }
                    rainDrops[i]++;
                }
                animationFrameId = requestAnimationFrame(draw);
            };

            draw();
        };
        
        // Debounce resize handler
        let resizeTimeout: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                cancelAnimationFrame(animationFrameId);
                setup();
            }, 2000);
        }

        setup();
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };

    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-20" />;
};
