
import React, { useRef } from 'react';
import { Project } from '../types';
import { CodeIcon, LinkIcon } from './IconComponents';

interface ProjectCardProps {
    project: Project;
    onCardClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onCardClick }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        const rotateX = -((y - height / 2) / (height / 2)) * 10;
        const rotateY = ((x - width / 2) / (width / 2)) * 10;

        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
    };
    
    return (
        <div
            ref={cardRef}
            className="glass-panel rounded-2xl p-6 transition-transform duration-300 ease-out cursor-pointer group relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onCardClick(project)}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-2xl font-bold font-orbitron mb-2 magenta-glow">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2 py-0.5 rounded-full">{tag}</span>
                ))}
            </div>
            <p className="text-gray-400 text-sm h-16 overflow-hidden">{project.description}</p>
             <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xl font-bold text-white">View Details</span>
            </div>
        </div>
    );
};
