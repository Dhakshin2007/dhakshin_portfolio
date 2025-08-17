
import React from 'react';
import { Certification } from '../types';
import { LinkIcon } from './IconComponents';

interface CertificationCardProps {
    certification: Certification;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
    return (
        <div className="glass-panel rounded-2xl p-4 flex flex-col h-full group transition-all duration-300 hover:shadow-xl hover:shadow-magenta-500/10 hover:-translate-y-2">
            <div className="flex items-center mb-3">
                <div className="w-10 h-10 mr-4 flex-shrink-0 bg-white/10 rounded-md p-1">
                   <img src={certification.logo} alt={`${certification.issuer} logo`} className="w-full h-full rounded-sm object-contain" />
                </div>
                <div>
                    <h3 className="text-lg font-bold font-orbitron text-white leading-tight">{certification.title}</h3>
                    <p className="text-xs text-cyan-300">{certification.issuer}</p>
                </div>
            </div>
            <p className="text-gray-400 text-xs flex-grow mb-3">{certification.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
                {certification.skills.map(skill => (
                    <span key={skill} className="bg-magenta-900/50 text-magenta-300 text-xs font-semibold px-2 py-0.5 rounded-full">{skill}</span>
                ))}
            </div>
             <a 
                href={certification.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`mt-auto flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors w-fit group-hover:underline text-sm ${certification.credentialUrl === '#' ? 'pointer-events-none opacity-50' : ''}`}
            >
                <LinkIcon /> Show Credential
            </a>
        </div>
    );
};