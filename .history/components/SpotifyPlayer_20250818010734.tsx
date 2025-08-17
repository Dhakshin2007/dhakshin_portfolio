import React from 'react';
import { CloseIcon } from './IconComponents';

interface SpotifyPlayerProps {
    isVisible: boolean;
    onClose: () => void;
}

export const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ isVisible, onClose }) => {
    const spotifyTrackId = '6Ce0KCbllK0WknIK2YIafx';

    return (
        <div 
            className={`fixed top-20 right-4 sm:right-6 lg:right-8 z-50 transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
            aria-modal="true"
            role="dialog"
            aria-hidden={!isVisible}
        >
            <div className="glass-panel rounded-2xl p-4 w-80 shadow-2xl shadow-black/30">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-orbitron text-lg font-bold magenta-glow">My Vibe</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close music player">
                        <CloseIcon />
                    </button>
                </div>
                <iframe
                    style={{ borderRadius: '12px' }}
                    src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Player for Starboy"
                ></iframe>
            </div>
        </div>
    );
};
