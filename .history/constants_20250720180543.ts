
import React from 'react';
import { Project, Experience, NavLink, Language, Certification } from './types';
import { BriefcaseIcon, GraduationCapIcon, HPLifeLogo, GoogleCloudLogo, TcsIonLogo } from './components/IconComponents';

export const navLinks: NavLink[] = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'education', title: 'Education' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'extras', title: 'Extras' },
    { id: 'contact', title: 'Contact' },
];

export const skills: string[] = [
    'C', 'AI & Data Engineering', 'Software Architecture', 'Firebase', 'Canva', 
    'Google AI', 'Prompt Design', 'Public Speaking', 'Git & GitHub'
];

export const projects: Project[] = [
    {
        title: 'BLEPay — Gesture & BLE Payments',
        description: 'Innovative prototype enabling hands-free UPI payments using BLE signals and device tap gestures. Built with Firebase, Google AI Studio, and React.',
        image: 'https://picsum.photos/seed/blepay/600/400',
        tags: ['ReactJS', 'Firebase', 'Google AI', 'BLE'],
        liveUrl: 'https://blepay.vercel.app/',
        codeUrl: 'https://github.com/Dhakshin2007/Tapless_Pay',
    },
    {
        title: 'TCA Website',
        description: 'Designed and redacted visual content for the Telugu Culture Association at IIT Ropar, enhancing public engagement through creative graphics using Canva. Website showcases the association\'s activities and events.',
        image: 'https://picsum.photos/seed/tca/600/400',
        tags: ['Canva', 'Graphic Design', 'Public Relations' , 'IIT Ropar' , 'WebDevelopment'],
        liveUrl: 'https://tcaiitrpr.vercel.app/',
        codeUrl: 'https://github.com/Dhakshin2007/tca_website/tree/main',
    },
    {
        title: 'Whatsapp Web Lock Extension',
        description: 'It is a Whatsapp Web Extension to Lock which safe and Secure , I am not even collecting any data from the user, it is just a simple extension to lock your whatsapp web.',
        image: 'https://picsum.photos/seed/prompt/600/400',
        tags: ['Java Script', 'Html', 'CSS' , 'Extension'],
        liveUrl: '#',
        codeUrl: 'https://github.com/Dhakshin2007/wsuplock/tree/main',
    },
    {
        title: 'College Entry and Exit System',
        description: '',
        image: 'https://picsum.photos/seed/prompt/600/400',
        tags: ['Java Script', 'Html', 'CSS' , 'Extension'],
        liveUrl: '#',
        codeUrl: 'https://github.com/Dhakshin2007/wsuplock/tree/main',
    },
];

export const education: Experience[] = [
    {
        date: '2024 - 2028',
        title: 'B.Tech in AI & Data Engineering',
        company: 'Indian Institute of Technology, Ropar',
        description: 'Pursuing undergraduate studies with a focus on AI, Data Engineering, C, and Software Architecture.',
        icon: React.createElement(GraduationCapIcon)
    },
    {
        date: '2022 - 2024',
        title: 'Intermediate (MPC)',
        company: 'Vignan Co-operative Junior College',
        description: 'Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry, achieving a grade of 97.2%.',
        icon: React.createElement(GraduationCapIcon)
    },
    {
        date: 'Jun 2021 - Apr 2022',
        title: '10th Class',
        company: 'Tiny Tots High School',
        description: 'Achieved a grade of 91.5%.',
        icon: React.createElement(GraduationCapIcon)
    },
];

export const experience: Experience[] = [
    {
        date: 'Jan 2025 - Apr 2025',
        title: 'Public Relations Volunteer',
        company: 'Aarohan, IIT Ropar',
        description: 'Assisted in promotional activities and communications for the annual cultural fest.',
        icon: React.createElement(BriefcaseIcon)
    },
    {
        date: 'Nov 2024 - Feb 2025',
        title: 'Workshops & Talks Volunteer',
        company: 'Advitiya, IIT Ropar',
        description: 'Facilitated technical workshops and talks during the annual tech fest.',
        icon: React.createElement(BriefcaseIcon)
    },
    {
        date: 'Jul 2024 - Jun 2025',
        title: 'Photo Editor & Redactor',
        company: 'Telugu Culture Association, IIT Ropar',
        description: 'Responsible for creating and editing visual content for the association.',
        icon: React.createElement(BriefcaseIcon)
    },
    {
        date: 'Jul 2024 - Present',
        title: 'Volunteer',
        company: 'National Service Scheme',
        description: 'Engaging in community service and various social welfare activities as part of the NSS unit at IIT Ropar.',
        icon: React.createElement(BriefcaseIcon)
    }
];

export const languages: Language[] = [
    { name: 'Telugu', proficiency: 'Native or bilingual proficiency' },
    { name: 'English', proficiency: 'Professional working proficiency' },
    { name: 'Hindi', proficiency: 'Professional working proficiency' },
];

export const certifications: Certification[] = [
    {
        title: 'Data Science & Analytics',
        issuer: 'HP LIFE',
        date: 'Issued Dec 2024',
        credentialUrl: 'https://www.life-global.org/certificate/12c5dcc9-affc-4127-817a-45eabd0ffdc1',
        description: 'Learned foundational concepts in data science, including data analysis, visualization, and interpretation.',
        skills: ['Data Science', 'Analytics'],
        logo: React.createElement(HPLifeLogo),
    },
    {
        title: 'Prompt Design in AI',
        issuer: 'Google Cloud Skills Boost',
        date: 'Issued Dec 2024',
        credentialUrl: 'https://www.credly.com/badges/71e37d9b-84f3-4edf-8c08-5963f77931fe/public_url',
        description: 'This course equipped me with knowledge for designing prompts that produce meaningful AI outcomes and helps make use of its potential towards delivering innovative content creation.',
        skills: ['Prompt Design', 'AI'],
        logo: React.createElement(GoogleCloudLogo),
    },
    {
        title: 'Soft Skills',
        issuer: 'TCS iON',
        date: 'Issued Dec 2024',
        credentialUrl: '#',
        description: 'Developed key professional soft skills including communication, teamwork, and public speaking. Credential ID: 119854-27523403-1016.',
        skills: ['Soft Skills', 'Public Speaking'],
        logo: React.createElement(TcsIonLogo),
    }
];
