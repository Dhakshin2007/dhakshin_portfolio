
import React from 'react';

const NUM_METEORS = 20;

export const MeteorBackground: React.FC = () => {
    const meteors = Array.from({ length: NUM_METEORS }).map((_, i) => {
        const style: React.CSSProperties = {
            top: `${-10 + Math.random() * 20}%`, // Start near the top edge
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${2 + Math.random() * 4}s`, // Duration between 2s and 6s
        };
        return <div key={i} className="meteor" style={style}></div>;
    });

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <style>
                {`
                .meteor {
                    position: absolute;
                    width: 2px;
                    height: 200px;
                    background: linear-gradient(to bottom, #00FFFF, rgba(0, 255, 255, 0));
                    border-radius: 50%;
                    filter: drop-shadow(0 0 6px #00FFFF);
                    transform-origin: top left;
                    animation: fall linear infinite;
                }

                @keyframes fall {
                    from {
                        transform: translate(0, -150px) rotate(315deg); /* Start slightly above view */
                        opacity: 1;
                    }
                    to {
                        transform: translate(-70vw, 70vh) rotate(315deg);
                        opacity: 0;
                    }
                }
                `}
            </style>
            {meteors}
        </div>
    );
};
