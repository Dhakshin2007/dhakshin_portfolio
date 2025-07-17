
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { AnimatedCursor } from './components/AnimatedCursor';
import { Blob } from './components/Blob';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { TimelineItem } from './components/TimelineItem';
import { CertificationCard } from './components/CertificationCard';
import { useTypewriter } from './hooks/useTypewriter';
import { projects, education, experience, languages, navLinks, skills, certifications } from './constants';
import { profileImage } from './assets/profile';
import { Project } from './types';
import { GitHubIcon, LinkedInIcon, MailIcon, LinkIcon, CodeIcon, CloseIcon } from './components/IconComponents';
import { MeteorBackground } from './components/MeteorBackground';
import { CelestialBackground } from './components/CelestialBackground';
import { WelcomeOverlay } from './components/WelcomeOverlay';

const App: React.FC = () => {
    const [showOverlay, setShowOverlay] = useState(true);
    const [unmountOverlay, setUnmountOverlay] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const roles = ['AI & DE Student', 'Aspiring Software Architect', 'Tech Enthusiast'];
    const typewriterText = useTypewriter(roles, 150, 100, 2000);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const mainContainerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // Disable scroll when overlay or modal is active
        if (selectedProject || showOverlay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedProject, showOverlay]);

    const handleOverlayFinished = () => {
        setShowOverlay(false); // Triggers content fade-in
        // Wait for the fade-out animation to complete before removing from DOM
        setTimeout(() => {
            setUnmountOverlay(true);
        }, 1000); // Animation duration is < 1s, 1s is a safe buffer
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent("Contact from Portfolio");
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:dhakshinkotha2007@gmail.com?subject=${subject}&body=${body}`;
    };


    const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="glass-panel rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transition-all duration-300 transform scale-95 animate-scale-in"
                 onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
                    <CloseIcon />
                </button>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <img src={project.image} alt={project.title} className="rounded-lg w-full h-auto object-cover shadow-2xl shadow-cyan-500/10" />
                    </div>
                    <div className="lg:w-1/2 flex flex-col">
                        <h2 className="text-3xl font-bold font-orbitron cyan-glow mb-2">{project.title}</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <p className="text-gray-300 flex-grow mb-6">{project.description}</p>
                        <div className="flex gap-4 mt-auto">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-cyan-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-cyan-400 transition-all transform hover:scale-105">
                                <LinkIcon /> Live Demo
                            </a>
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105">
                                <CodeIcon /> View Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div ref={mainContainerRef} className="bg-[#0D0D0D] text-white scroll-smooth">
            {!unmountOverlay && <WelcomeOverlay onFinished={handleOverlayFinished} />}
            
            <div className={showOverlay ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
                <AnimatedCursor />
                <Header navLinks={navLinks} onNavClick={scrollToSection} />

                <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <Blob styles="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-magenta-500/30 rounded-full filter blur-3xl opacity-50 animate-blob" />
                    <Blob styles="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-cyan-500/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
                    <Blob styles="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-indigo-500/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
                </div>

                <main className="relative z-10">
                    {/* Home Section */}
                    <section id="home" className="h-screen flex items-center justify-center text-center p-4 relative overflow-hidden">
                        <MeteorBackground />
                        <CelestialBackground />
                        <div className="z-10">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron uppercase">
                                <span className="cyan-glow">Dhakshin Kotha</span>
                            </h1>
                            <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-gray-300">
                               An <span className="font-bold text-white magenta-glow">{typewriterText}</span>
                                <span className="inline-block w-1 h-8 bg-cyan-400 animate-pulse ml-1"></span>
                            </p>
                        </div>
                    </section>

                    {/* About Section */}
                    <Section id="about">
                        <h2 className="text-4xl font-bold font-orbitron text-center mb-12 cyan-glow">About Me</h2>
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                            <img src={profileImage} alt="Dhakshin Kotha" className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-2xl shadow-magenta-500/20 border-4 border-magenta-500/50"/>
                            <p className="text-lg text-gray-300 leading-relaxed text-center md:text-left">
                               I'm an undergraduate at IIT Ropar, pursuing a BTech in Artificial Intelligence and Data Engineering. I have a strong foundation in C and a growing passion for blending technology with creativity—especially through software architecture, AI, and tech exploration. I thrive on solving real-world problems and collaborating with people who take initiative.
                            </p>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-3xl font-bold font-orbitron text-center mb-8 magenta-glow">Core Skills</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {skills.map(skill => (
                                    <div key={skill} className="glass-panel px-4 py-2 rounded-lg text-lg hover:bg-cyan-400/20 hover:text-cyan-300 transition-all cursor-pointer">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Section>
                    
                    {/* Education Section */}
                    <Section id="education">
                        <h2 className="text-4xl font-bold font-orbitron text-center mb-16 cyan-glow">Education</h2>
                        <div className="relative max-w-5xl mx-auto">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500/50 via-magenta-500/50 to-indigo-500/50 rounded-full"></div>
                            <div className="space-y-16">
                                {education.map((edu, index) => (
                                    <TimelineItem key={edu.title + edu.company} experience={edu} isLeft={index % 2 === 0} />
                                ))}
                            </div>
                        </div>
                    </Section>
                    
                    {/* Experience Section */}
                    <Section id="experience">
                        <h2 className="text-4xl font-bold font-orbitron text-center mb-16 magenta-glow">Experience</h2>
                        <div className="relative max-w-5xl mx-auto">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-magenta-500/50 via-indigo-500/50 to-cyan-500/50 rounded-full"></div>
                            <div className="space-y-16">
                                {experience.map((exp, index) => (
                                    <TimelineItem key={exp.title + exp.company} experience={exp} isLeft={index % 2 !== 0} />
                                ))}
                            </div>
                        </div>
                    </Section>

                    {/* Projects Section */}
                    <Section id="projects">
                        <h2 className="text-4xl font-bold font-orbitron text-center mb-12 magenta-glow">My Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {projects.map((project) => (
                                <ProjectCard key={project.title} project={project} onCardClick={setSelectedProject} />
                            ))}
                        </div>
                    </Section>

                    {/* Extras Section */}
                    <Section id="extras">
                        <h2 className="text-4xl font-bold font-orbitron text-center mb-12 cyan-glow">Extras</h2>
                        
                        <div className="mb-20">
                            <h3 className="text-3xl font-bold font-orbitron text-center mb-12 magenta-glow">Certifications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                                {certifications.map((cert) => (
                                    <CertificationCard key={cert.title} certification={cert} />
                                ))}
                            </div>
                        </div>
                        
                        <div>
                             <h3 className="text-3xl font-bold font-orbitron text-center mb-12 cyan-glow">Languages</h3>
                            <div className="max-w-2xl mx-auto space-y-6">
                                {languages.map((lang) => {
                                    const getProficiencyWidth = (proficiency: string) => {
                                        if (proficiency.toLowerCase().includes('native')) return '100%';
                                        if (proficiency.toLowerCase().includes('professional')) return '90%';
                                        return '75%';
                                    };

                                    return (
                                        <div key={lang.name} className="glass-panel p-4 rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                                            <div className="flex justify-between items-center mb-2 font-sans">
                                                <h3 className="text-xl font-semibold text-white">{lang.name}</h3>
                                                <p className="text-sm text-gray-400">{lang.proficiency}</p>
                                            </div>
                                            <div className="w-full bg-black/30 rounded-full h-2.5">
                                                <div
                                                    className="bg-gradient-to-r from-cyan-400 to-magenta-500 h-2.5 rounded-full"
                                                    style={{ width: getProficiencyWidth(lang.proficiency) }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Section>

                    {/* Contact Section */}
                    <Section id="contact">
                         <h2 className="text-4xl font-bold font-orbitron text-center mb-12 cyan-glow">Get In Touch</h2>
                         <div className="max-w-2xl mx-auto glass-panel p-8 rounded-2xl">
                             <form className="space-y-6" onSubmit={handleFormSubmit}>
                                 <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Your Name" className="w-full bg-transparent border-b-2 border-gray-500 focus:border-cyan-400 outline-none p-3 transition-colors text-lg" required />
                                 <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Your Email" className="w-full bg-transparent border-b-2 border-gray-500 focus:border-cyan-400 outline-none p-3 transition-colors text-lg" required />
                                 <textarea name="message" value={formData.message} onChange={handleFormChange} placeholder="Your Message" rows={4} className="w-full bg-transparent border-b-2 border-gray-500 focus:border-cyan-400 outline-none p-3 transition-colors text-lg" required></textarea>
                                 <button type="submit" className="w-full font-orbitron font-bold py-3 px-6 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg text-white hover:opacity-90 transition-opacity transform hover:scale-105">
                                     Send Message
                                 </button>
                             </form>
                         </div>
                    </Section>
                </main>
                
                <footer className="relative py-12 px-4 text-center overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/50 via-magenta-500/50 to-indigo-500/50 animate-pulse"></div>
                     <div className="flex justify-center gap-6 mb-4">
                        <a href="https://github.com/Dhakshin2007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125"><GitHubIcon /></a>
                        <a href="https://linkedin.com/in/dhakshinkotha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125"><LinkedInIcon /></a>
                        <a href="mailto:dhakshinkotha2007@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125"><MailIcon /></a>
                    </div>
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} Dhakshin Kotha. All rights reserved.</p>
                </footer>
            </div>
            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </div>
    );
};

export default App;
