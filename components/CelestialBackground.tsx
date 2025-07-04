
import React from 'react';

export const CelestialBackground: React.FC = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <style>
                {`
                .celestial-body {
                    position: absolute;
                    border-radius: 50%;
                    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.1));
                }

                .moon {
                    width: 120px;
                    height: 120px;
                    top: 10%;
                    right: 15%;
                    background: radial-gradient(circle at 30% 30%, #f0f0f0, #c0c0c0);
                    box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, inset -20px -10px 40px #555;
                    animation: slow-drift 60s ease-in-out infinite alternate;
                }

                .saturn {
                    width: 80px;
                    height: 80px;
                    bottom: 15%;
                    left: 10%;
                    background: radial-gradient(circle, #f0e68c, #d2b48c);
                    box-shadow: 0 0 15px #f0e68c;
                    animation: slow-drift 80s ease-in-out infinite alternate;
                }

                .saturn::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: -50%;
                    width: 200%;
                    height: 8%;
                    background: rgba(210, 180, 140, 0.7);
                    border-radius: 50%;
                    transform: translateY(-50%) rotate(-20deg);
                    box-shadow: 0 0 10px rgba(210, 180, 140, 0.5);
                }
                
                .planet-1 {
                    width: 20px;
                    height: 20px;
                    top: 20%;
                    left: 25%;
                    background: radial-gradient(circle, #ff6b6b, #c44d4d);
                     animation: slow-drift 70s ease-in-out infinite alternate;
                }

                .planet-2 {
                    width: 30px;
                    height: 30px;
                    bottom: 30%;
                    right: 20%;
                    background: radial-gradient(circle, #4d4dff, #3a3aad);
                    animation: slow-drift 90s ease-in-out infinite alternate;
                }

                @keyframes slow-drift {
                    from {
                        transform: translate(0, 0);
                    }
                    to {
                        transform: translate(20px, -30px);
                    }
                }
                `}
            </style>
            <div className="moon celestial-body"></div>
            <div className="saturn celestial-body"></div>
            <div className="planet-1 celestial-body"></div>
            <div className="planet-2 celestial-body"></div>
        </div>
    );
};
