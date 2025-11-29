
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { AnimatedCursor } from './components/AnimatedCursor';
import { Blob } from './components/Blob';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { TimelineItem } from './components/TimelineItem';
import { CertificationCard } from './components/CertificationCard';
import { useTypewriter } from './hooks/useTypewriter';
import { projects, education, experience, languages, navLinks, categorizedSkills, certifications, keyCourses } from './constants';
import { profileImage } from './assets/profile';
import { resumeDriveLink } from './assets/resume';
import { Project } from './types';
import { GitHubIcon, LinkedInIcon, MailIcon, LinkIcon, CodeIcon, CloseIcon, MonkeyTypeIcon, GFGIcon, LeetCodeIcon, XIcon, InstagramIcon } from './components/IconComponents';
import { MeteorBackground } from './components/MeteorBackground';
import { CelestialBackground } from './components/CelestialBackground';
import { MatrixRain } from './components/MatrixRain';
import { CyberRunnerGame } from './components/CyberRunnerGame';
import { SpotifyPlayer } from './components/SpotifyPlayer';
import { AboutCard } from './components/AboutCard';
import { ThreeDTagCloud } from './components/ThreeDTagCloud';

const App: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const roles = ['AI & DE Student', 'Aspiring Software Architect', 'Tech Enthusiast'];
    const typewriterText = useTypewriter(roles, 150, 100, 2000);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [visitorCount, setVisitorCount] = useState<number | null>(null);
    const [isSpotifyPlayerVisible, setIsSpotifyPlayerVisible] = useState(false);
    const [skillsViewMode, setSkillsViewMode] = useState<'3d' | 'list'>('3d');

    const mainContainerRef = useRef<HTMLDivElement>(null);
    
    // Combine all skills for the 3D cloud
    const allSkills = categorizedSkills.flatMap(cat => cat.skills).filter(Boolean) as string[];

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedProject]);
    
    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                const response = await fetch('https://api.counterapi.dev/v1/dhakshinkotha-portfolio/visits/up');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setVisitorCount(data.count);
            } catch (error) {
                console.error("Could not fetch visitor count:", error);
            }
        };

        fetchVisitorCount();
    }, []);

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
        window.location.href = `mailto:2024aib1009@iitrpr.ac.in?subject=${subject}&body=${body}`;
    };

    const handleResumeClick = () => {
        window.open(resumeDriveLink, '_blank', 'noopener,noreferrer');
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
                           {project.liveUrl !== '#' && (
                             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-cyan-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-cyan-400 transition-all transform hover:scale-105">
                                <LinkIcon /> Live Demo
                            </a>
                           )}
                           {project.codeUrl !== '#' && (
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105">
                                <CodeIcon /> View Code
                            </a>
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div ref={mainContainerRef} className="bg-[#0D0D0D] text-white scroll-smooth">
            <AnimatedCursor />
            <Header 
                navLinks={navLinks} 
                onNavClick={scrollToSection} 
                onMusicClick={() => setIsSpotifyPlayerVisible(prev => !prev)}
                onResumeClick={handleResumeClick}
            />
            <SpotifyPlayer isVisible={isSpotifyPlayerVisible} onClose={() => setIsSpotifyPlayerVisible(false)} />

            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
                <Blob styles="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-magenta-500/30 rounded-full filter blur-3xl opacity-50 animate-blob" />
                <Blob styles="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-cyan-500/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
                <Blob styles="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-indigo-500/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
            </div>

            <main className="relative z-10">
                {/* Home Section */}
                <section id="home" className="h-screen flex items-center justify-center text-center p-4 relative overflow-hidden perspective-1000">
                    <MeteorBackground />
                    <CelestialBackground />
                    <div className="z-10 transform transition-transform duration-500 hover:scale-105 hover:rotate-1">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron uppercase tracking-tighter">
                            <span className="cyan-glow inline-block" style={{ textShadow: '2px 2px 0px #FF00FF' }}>Dhakshin</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Kotha</span>
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-gray-300">
                           An <span className="font-bold text-white magenta-glow">{typewriterText}</span>
                            <span className="inline-block w-1 h-8 bg-cyan-400 animate-pulse ml-1 align-middle"></span>
                        </p>
                    </div>
                </section>

                {/* About Section */}
                <Section id="about">
                    <MatrixRain />
                    <div className="relative z-10 max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold font-orbitron text-center mb-16 cyan-glow">About &amp; Skills</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
                            {/* Column 1: About Card */}
                            <div className="w-full flex justify-center perspective-1000">
                                <AboutCard />
                            </div>

                            {/* Column 2: Tech Stack Universe */}
                            <div className="flex flex-col gap-6 items-center justify-center w-full">
                                <div className="w-full flex justify-between items-end mb-2">
                                     <h3 className="text-2xl font-bold font-orbitron magenta-glow text-left">Tech Stack Universe</h3>
                                     
                                     {/* View Toggle */}
                                     <div className="flex bg-black/40 rounded-lg p-1 border border-cyan-500/30 backdrop-blur-sm">
                                        <button 
                                            onClick={() => setSkillsViewMode('3d')}
                                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all duration-300 ${skillsViewMode === '3d' ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,255,255,0.4)]' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            3D Sphere
                                        </button>
                                        <button 
                                            onClick={() => setSkillsViewMode('list')}
                                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all duration-300 ${skillsViewMode === 'list' ? 'bg-magenta-500 text-black shadow-[0_0_15px_rgba(255,0,255,0.4)]' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            List View
                                        </button>
                                     </div>
                                </div>

                                <div className={`glass-panel rounded-xl p-4 w-full h-[400px] flex relative transition-all duration-500 ${skillsViewMode === 'list' ? 'items-start overflow-hidden' : 'items-center justify-center'}`}>
                                    {skillsViewMode === '3d' ? (
                                        <div className="w-full h-full animate-fade-in">
                                             <ThreeDTagCloud skills={allSkills} />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full flex flex-col gap-6 p-2 overflow-y-auto custom-scrollbar animate-fade-in">
                                            {categorizedSkills.map((cat, idx) => (
                                                <div key={idx} className="opacity-0 animate-slide-up" style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}>
                                                    <h4 className="text-lg font-bold font-orbitron text-cyan-300 mb-3 border-b border-cyan-500/20 pb-1 flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-magenta-500 rounded-full inline-block"></span>
                                                        {cat.category}
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2.5">
                                                        {cat.skills?.filter(Boolean).map((skill) => (
                                                            <span key={skill} className="bg-[#1a1a2e] hover:bg-magenta-900/20 border border-gray-700 hover:border-magenta-500/50 text-gray-300 hover:text-magenta-300 text-sm px-3 py-1.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_10px_rgba(255,0,255,0.2)] cursor-default select-none">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                
                {/* Education Section */}
                <Section id="education">
                    <MatrixRain />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold font-orbitron text-center mb-16 cyan-glow">Education</h2>
                        <div className="relative max-w-5xl mx-auto">
                            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-cyan-500/50 via-magenta-500/50 to-indigo-500/50 rounded-full"></div>
                            <div className="space-y-16">
                                {education.map((edu, index) => (
                                    <TimelineItem key={edu.title + edu.company} experience={edu} isLeft={index % 2 === 0} />
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>
                
                {/* Experience Section */}
                <Section id="experience">
                    <MatrixRain />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold font-orbitron text-center mb-16 magenta-glow">Experience & Responsibilities</h2>
                        <div className="relative max-w-5xl mx-auto">
                            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-magenta-500/50 via-indigo-500/50 to-cyan-500/50 rounded-full"></div>
                            <div className="space-y-16">
                                {experience.map((exp, index) => (
                                    <TimelineItem key={exp.title + exp.company} experience={exp} isLeft={index % 2 !== 0} />
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Projects Section */}
                <Section id="projects">
                    <MatrixRain />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold font-orbitron text-center mb-12 magenta-glow">My Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 perspective-1000">
                            {projects.map((project) => (
                                <ProjectCard key={project.title} project={project} onCardClick={setSelectedProject} />
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Extras Section */}
                <Section id="extras">
                    <MatrixRain />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold font-orbitron text-center mb-12 cyan-glow">Extras</h2>
                        
                        <div className="mb-20">
                            <h3 className="text-3xl font-bold font-orbitron text-center mb-12 magenta-glow">Certifications & Trainings</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {certifications.map((cert) => (
                                    <CertificationCard key={cert.title} certification={cert} />
                                ))}
                            </div>
                        </div>
                        
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
                            {/* Column 1: Key Courses */}
                            <div>
                                <h3 className="text-3xl font-bold font-orbitron text-center mb-8 cyan-glow">Key Courses Taken</h3>
                                <div className="glass-panel p-8 rounded-xl h-full transform transition-transform hover:scale-[1.02] duration-300">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-4">
                                        {keyCourses.map((course) => (
                                            <div key={course} className="text-lg text-gray-300 border-l-4 border-cyan-500 pl-4">
                                                {course}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Column 2: Languages */}
                            <div>
                                <h3 className="text-3xl font-bold font-orbitron text-center mb-8 magenta-glow">Languages</h3>
                                <div className="space-y-6">
                                    {languages.map((lang) => {
                                        const getProficiencyWidth = (proficiency: string) => {
                                            if (proficiency.toLowerCase().includes('native')) return '100%';
                                            if (proficiency.toLowerCase().includes('professional')) return '90%';
                                            return '75%';
                                        };

                                        return (
                                            <div key={lang.name} className="glass-panel p-4 rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/10 hover:translate-x-2 duration-300">
                                                <div className="flex justify-between items-center mb-2 font-sans">
                                                    <h3 className="text-xl font-semibold text-white">{lang.name}</h3>
                                                    <p className="text-sm text-gray-400">{lang.proficiency}</p>
                                                </div>
                                                <div className="w-full bg-black/30 rounded-full h-2.5">
                                                    <div
                                                        className="bg-gradient-to-r from-cyan-400 to-magenta-500 h-2.5 rounded-full relative"
                                                        style={{ width: getProficiencyWidth(lang.proficiency) }}
                                                    >
                                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </Section>

                {/* Game Section */}
                <Section id="game">
                    <MatrixRain />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold font-orbitron text-center mb-12 magenta-glow">Neon Grid Runner</h2>
                        <CyberRunnerGame />
                    </div>
                </Section>

                {/* Contact Section */}
                <Section id="contact">
                    <MatrixRain />
                    <div className="relative z-10">
                         <h2 className="text-4xl font-bold font-orbitron text-center mb-12 cyan-glow">Get In Touch</h2>
                         <div className="max-w-2xl mx-auto glass-panel p-8 rounded-2xl transform hover:scale-[1.01] transition-transform duration-500 border border-gray-700 hover:border-cyan-500/50">
                             <form className="space-y-6" onSubmit={handleFormSubmit}>
                                 <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Your Name" className="w-full bg-transparent border-b-2 border-gray-500 focus:border-cyan-400 outline-none p-3 transition-colors text-lg" required />
                                 <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Your Email" className="w-full bg-transparent border-b-2 border-gray-500 focus:border-cyan-400 outline-none p-3 transition-colors text-lg" required />
                                 <textarea name="message" value={formData.message} onChange={handleFormChange} placeholder="Your Message" rows={4} className="w-full bg-transparent border-b-2 border-gray-500 focus:border-cyan-400 outline-none p-3 transition-colors text-lg" required></textarea>
                                 <button type="submit" className="w-full font-orbitron font-bold py-3 px-6 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg text-white hover:opacity-90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                                     Send Message
                                 </button>
                             </form>
                         </div>
                    </div>
                </Section>
            </main>
            
            <footer className="relative py-12 px-4 text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/50 via-magenta-500/50 to-indigo-500/50 animate-pulse"></div>
                 <div className="flex flex-wrap justify-center gap-6 mb-4">
                    <a href="https://github.com/Dhakshin2007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125" title="GitHub"><GitHubIcon /></a>
                    <a href="https://linkedin.com/in/dhakshinkotha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125" title="LinkedIn"><LinkedInIcon /></a>
                    <a href="mailto:2024aib1009@iitrpr.ac.in" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125" title="Email"><MailIcon /></a>
                    
                    <a href="https://monkeytype.com/profile/mr_dk_24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125" title="MonkeyType"><MonkeyTypeIcon /></a>
                    <a href="https://www.geeksforgeeks.org/profile/kothadhakiw15" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125" title="GeeksforGeeks"><GFGIcon /></a>
                    <a href="https://leetcode.com/u/Dhakshin_K/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125" title="LeetCode"><LeetCodeIcon /></a>
                    <a href="https://x.com/Dhakshin2007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125" title="X"><XIcon /></a>
                    <a href="https://instagram.com/mr_dhakshin__" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125" title="Instagram"><InstagramIcon /></a>
                </div>
                <p className="text-gray-500">&copy; {new Date().getFullYear()} Dhakshin Kotha. All rights reserved.</p>
                {visitorCount !== null && (
                    <p className="text-gray-600 text-sm mt-2">
                        Portfolio Visitors: {visitorCount.toLocaleString()}
                    </p>
                )}
            </footer>

            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </div>
    );
};

export default App;
