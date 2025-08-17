
import React from 'react';
import { Certification } from '../types';
import { LinkIcon } from './IconComponents';

interface CertificationCardProps {
    certification: Certification;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
    return (
        <div className="glass-panel rounded-2xl p-6 flex flex-col h-full group transition-all duration-300 hover:shadow-xl hover:shadow-magenta-500/10 hover:-translate-y-2">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4 flex-shrink-0">
                   {React.cloneElement(certification.logo, { className: 'w-full h-full rounded-md object-contain' })}
                </div>
                <div>
                    <h3 className="text-xl font-bold font-orbitron text-white leading-tight">{certification.title}</h3>
                    <p className="text-sm text-cyan-300">{certification.issuer}</p>
                </div>
            </div>
            <p className="text-gray-400 text-sm flex-grow mb-4">{certification.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {certification.skills.map(skill => (
                    <span key={skill} className="bg-magenta-900/50 text-magenta-300 text-xs font-semibold px-2.5 py-1 rounded-full">{skill}</span>
                ))}
            </div>
             <a 
                href={certification.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`mt-auto flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors w-fit group-hover:underline ${certification.credentialUrl === '#' ? 'pointer-events-none opacity-50' : ''}`}
            >
                <LinkIcon /> Show Credential
            </a>
        </div>
    );
};
