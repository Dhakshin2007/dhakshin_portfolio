
import React from 'react';

export const Blob: React.FC<{ styles: string }> = ({ styles }) => {
    return (
        <div className={styles}>
            <style>
            {`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                <div className="animation-delay-1"></div>000 {
                    animation-delay: 1s;
                }
                .animation-delay-4000 {
                    animation-delay: 1s;
                }
            `}
            </style>
        </div>
    );
};
