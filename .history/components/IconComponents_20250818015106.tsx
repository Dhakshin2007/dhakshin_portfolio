import React from 'react';

export const GitHubIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export const LinkedInIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const MailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

export const LinkIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
);

export const CodeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

export const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

export const MenuIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

export const BriefcaseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

export const GraduationCapIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.72l-9.17-5.15a1 1 0 0 0-.5 0L2.58 10.72a1 1 0 0 0 0 1.76l9.17 5.15a1 1 0 0 0 .5 0l9.17-5.15a1 1 0 0 0 0-1.76z"></path><path d="M22 12v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
);

export const HPLifeLogo: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#0096d6" />
        <text x="50" y="45" fontFamily="Orbitron, sans-serif" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">HP</text>
        <text x="50" y="70" fontFamily="Orbitron, sans-serif" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">LIFE</text>
    </svg>
);

export const GoogleCloudLogo: React.FC<{className?: string}> = ({className}) => (
     <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.42 13.9a5.18 5.18 0 01-4.14-2.81h-2.1c.36 2.39 2.43 4.24 4.88 4.24 1.25 0 2.39-.46 3.28-1.23l-1.92-1.2z" fill="#fbbc04"></path>
        <path d="M5.18 11.09a5.18 5.18 0 010-3.18l-1.92-1.2A7.18 7.18 0 002 12a7.18 7.18 0 001.26 4.29l1.92-1.2z" fill="#ea4335"></path>
        <path d="M15.42 10.1a5.18 5.18 0 01-1.89-4.24c0-2.45-1.78-4.5-4.15-4.88l-1.2 1.92a5.16 5.16 0 014.28 7.2l1.87-1.4z" fill="#4285f4"></path>
        <path d="M15.42 13.9a5.18 5.18 0 01-3.28 1.23c-2.45 0-4.52-1.85-4.88-4.24h2.1a5.18 5.18 0 014.14 2.81l1.92 1.2zM20.74 15.29l1.92 1.2A11.02 11.02 0 0024 12c0-2.02-.56-3.9-1.52-5.48l-1.93 1.2a9 9 0 010 8.57z" fill="#34a853"></path>
    </svg>
);

export const TcsIonLogo: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="60" fill="#0C326F" rx="8"/>
        <text x="50" y="38" fontFamily="Orbitron, sans-serif" fontSize="20" fill="white" textAnchor="middle" fontWeight="bold">TCS iON</text>
    </svg>
);

export const LinktreeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#39e09b"/>
    <path d="M12 6v8M12 6l-3 4M12 6l3 4M9 10v4M15 10v4M9 18h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AWSLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="80" fill="white" rx="12"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="40" fill="#232F3E">
      AWS
    </text>
    <path d="M100 65 Q200 90 300 65" stroke="#FF9900" strokeWidth="6" fill="none"/>
    <circle cx="295" cy="65" r="5" fill="#FF9900"/>
  </svg>
);

export const AnthropicLogo: React.FC<{className?: string}> = ({className}) => (
    <div className={className} style={{ background: '#333', borderRadius: '0.375rem', padding: '10%' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
            <path d="M8.509.868a7.5 7.5 0 0 0-7.05 9.626l.001-.002a7.5 7.5 0 0 0 13.67-3.874l-.001.002a6 6 0 0 1-10.876 2.999l-.002.003a6 6 0 0 1 5.76-8.528.375.375 0 0 0-.197-.707l-.005.002Z"/>
        </svg>
    </div>
);


export const MusicIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
);

export const DownloadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);