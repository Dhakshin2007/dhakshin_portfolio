
import React from 'react';
import { Experience } from '../types';

interface TimelineItemProps {
    experience: Experience;
    isLeft: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isLeft }) => {
    const { date, title, company, description, icon } = experience;

    const content = (
        <div className="glass-panel p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 w-full md:w-[calc(50%-2rem)]">
            <div className="flex items-center mb-3">
                <div className="bg-cyan-800/50 text-cyan-300 p-2 rounded-full mr-4">{icon}</div>
                <div>
                    <p className="text-sm text-cyan-300">{date}</p>
                    <h3 className="text-xl font-bold font-orbitron">{title}</h3>
                    <h4 className="text-md text-magenta-400">{company}</h4>
                </div>
            </div>
            <p className="text-gray-400">{description}</p>
        </div>
    );

    return (
        <div className={`flex items-center w-full relative ${isLeft ? 'justify-start' : 'justify-end'}`}>
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full" style={isLeft ? { right: 'calc(50% - 8px)' } : { left: 'calc(50% - 8px)' }}></div>
            {content}
        </div>
    );
};
