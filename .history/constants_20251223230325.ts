import React from 'react';
import { Project, Experience, NavLink, Language, Certification } from './types';
import { BriefcaseIcon, GraduationCapIcon } from './components/IconComponents';
import { hpLifeLogo, googleCloudLogo, tcsIonLogo, anthropicLogo, awsLogo , GfgLogo } from './assets/logo.ts';

export const navLinks: NavLink[] = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About & Skills' },
    { id: 'education', title: 'Education' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'extras', title: 'Extras' },
    { id: 'game', title: 'Game' },
    { id: 'contact', title: 'Contact' },
];

export const categorizedSkills = [
    {
        category: 'Programming Languages',
        skills: ['C', 'C++', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
    },
    {
        category: 'Web Development',
        skills: ['HTML5', 'CSS3', 'ReactJS'],
    },
    {
        category: 'Platforms',
        skills: ['Firebase', 'Google AI Studio', 'TinkerCAD', 'Canva', 'Supabase', 'Git & GitHub','MongoDB' , 'Vertex AI', 'Kaggle' , 'Google AntiGravity' , 'Google Colab'],
    },
    {
        category: 'Extras',
        skills: ['AI & Data Engineering', 'Software Architecture', 'Prompt Design' , 'System Design' , 'Data Structures & Algorithms' , 'Linear Algebra' , 'Calculus'],
    },
];

export const projects: Project[] = [
    {
        title: 'TradeoBull - Stock Trading Platform',
        description: 'A comprehensive stock trading platform that allows users to buy, sell, and manage their stock portfolios with real-time market data and analytics. Built using ReactJS and Supabase for seamless user experience and data management.',
        image: './assets/TradeoBull.png',
        tags: ['ReactJS', 'Supabase', 'Google AI', 'Finance' , 'Stock Trading' , 'Analytics' , 'Real-time Data'],
        liveUrl: 'https://tradeobull.vercel.app/',
        codeUrl: 'https://github.com/Dhakshin2007/tradeobull',
    },
    {
        title: 'BLEPay — Gesture & BLE Payments',
        description: 'Innovative prototype enabling hands-free UPI payments using BLE signals and device tap gestures. Built with Firebase, Google AI Studio, and React.',
        image: 'https://www.shutterstock.com/image-vector/payment-approved-online-card-concept-600nw-2133510943.jpg',
        tags: ['ReactJS', 'Firebase', 'Google AI', 'BLE'],
        liveUrl: 'https://blepay.vercel.app/',
        codeUrl: 'https://github.com/Dhakshin2007/Tapless_Pay',
    },
    {
        title: 'QrGo - Event Hosting & Ticket Management',
        description: 'With QrGo, event organizers can generate tickets, verify attendees, and track participation — all in one streamlined platform. Built with Gemini 2.5 Pro & ChatGPT 5 as Coding Companions',
        image: 'https://i.postimg.cc/qqNh1hD9/Google-AI-Studio-2025-08-09-T14-17-15-618-Z.png',
        tags: ['TypeScript (TSX / TS)', 'Firebase', 'Google AI', 'Event Booking', 'Supabase'],
        liveUrl: 'https://qrgo-weld.vercel.app/#/',
        codeUrl: '#',
    },
    {
        title: 'TCA Website',
        description: 'Designed and redacted visual content for the Telugu Culture Association at IIT Ropar, enhancing public engagement through creative graphics using Canva. Website showcases the association\'s activities and events.',
        image: 'https://picsum.photos/seed/tca/600/400',
        tags: ['Canva', 'Graphic Design', 'Public Relations', 'IIT Ropar', 'WebDevelopment'],
        liveUrl: 'https://tcaiitrpr.vercel.app/',
        codeUrl: 'https://github.com/Dhakshin2007/tca_website/tree/main',
    },
    {
        title: 'Pulpy ',
        description: 'It is a Whatsapp Web Extension to Lock which safe and Secure , I am not even collecting any data from the user, it is just a simple extension to lock your whatsapp web.',
        image: 'https://www.igeeksblog.com/wp-content/uploads/2023/07/Lock-WhatsApp-chats-on-iPhone.jpg',
        tags: ['ReactJS', 'TypeScript', 'Advertising', 'Coco-Cola','Promotional Campaign'],
        liveUrl: 'https://pulpyorange.vercel.app',
        codeUrl: 'https://github.com/Dhakshin2007/pulpyorange',
    },
    {
        title: 'Whatsapp Web Lock Extension',
        description: 'It is a Whatsapp Web Extension to Lock which safe and Secure , I am not even collecting any data from the user, it is just a simple extension to lock your whatsapp web.',
        image: 'https://www.igeeksblog.com/wp-content/uploads/2023/07/Lock-WhatsApp-chats-on-iPhone.jpg',
        tags: ['JavaScript', 'Html', 'CSS', 'Extension'],
        liveUrl: '#',
        codeUrl: 'https://github.com/Dhakshin2007/wsuplock/tree/main',
    },
    {
        title: 'College Entry and Exit System',
        description: 'A web application designed to streamline the process of recording student entry and exit times at college, enhancing campus security and attendance tracking.',
        image: 'https://www.iitms.co.in/rfid-based-attendance-system/img/Biometric-Attendance-System-Application-banner.png',
        tags: ['JavaScript', 'Html', 'CSS', 'Entry System'],
        liveUrl: 'https://college-entry-system.onrender.com',
        codeUrl: 'https://github.com/Dhakshin2007/entry_system',
    },
    {
        title: 'AI Women Safety Web Service',
        description: 'A web service that uses AI to enhance women safety by providing real-time alerts and location tracking, ensuring a secure environment.',
        image: 'https://open-ai.sgp1.digitaloceanspaces.com/blogs/ai-s-next-frontier-a-safer-world-for-women.webp',
        tags: ['JavaScript', 'Html', 'CSS', 'Safety System'],
        liveUrl: 'https://www.linkedin.com/posts/dhakshinkotha_aiforgood-womensafety-hackforchange-activity-7341751189216075777-e-iq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVUKLoBsAeJw5dsDyd1maoE5UhEk2xPf7M',
        codeUrl: '#',
    },
    {
        title: 'English Programming Language',
        description: 'It is a simple programming language which is written in Python, it is a simple compiler which takes the input from the user in English Syntax and gives the output.',
        image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_177809840_65441.jpg',
        tags: ['Python', 'Programming Language', 'Compiler'],
        liveUrl: 'https://github.com/Dhakshin2007/eng_lang',
        codeUrl: 'https://github.com/Dhakshin2007/eng_lang',
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
        title: '12th Class',
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
        date: 'Aug 2025 - Present',
        title: 'Campus Partner',
        company: 'Perplexity',
        description: 'Collaborating with Perplexity to enhance campus engagement and promote innovative solutions.',
        icon: React.createElement(BriefcaseIcon)
    },
    {
        date: 'Jul 2024 - Present',
        title: 'Volunteer',
        company: 'National Service Scheme',
        description: 'Engaging in community service and various social welfare activities as part of the NSS unit at IIT Ropar.',
        icon: React.createElement(BriefcaseIcon)
    },
    
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

];

export const languages: Language[] = [
    { name: 'Telugu', proficiency: 'Native or bilingual proficiency' },
    { name: 'English', proficiency: 'Professional working proficiency' },
    { name: 'Hindi', proficiency: 'Professional working proficiency' },
];

export const certifications: Certification[] = [
      {
        title: 'GFG 160 Days of Code',
        issuer: 'GeeksForGeeks',
        date: 'Issued Sep 2025',
        credentialUrl: 'https://media.geeksforgeeks.org/courses/certificates/8fff8db26a0827d6edabff113a3139da.pdf',
        description: 'Completed 160 days of coding challenge on GeeksForGeeks, solving problems across various topics in Data Structures and Algorithms.',
        skills: ['C', 'Python' , 'Data Structures', 'Algorithms' , 'Java'],
        logo: GfgLogo,
    },
    {
        title: 'Data Science & Analytics',
        issuer: 'HP LIFE',
        date: 'Issued Dec 2024',
        credentialUrl: 'https://www.life-global.org/certificate/12c5dcc9-affc-4127-817a-45eabd0ffdc1',
        description: 'Learned foundational concepts in data science, including data analysis, visualization, and interpretation.',
        skills: ['Data Science', 'Analytics'],
        logo: hpLifeLogo,
    },
    {
        title: 'Prompt Design in AI',
        issuer: 'Google Cloud Skills Boost',
        date: 'Issued Dec 2024',
        credentialUrl: 'https://www.credly.com/badges/71e37d9b-84f3-4edf-8c08-5963f77931fe/public_url',
        description: 'This course equipped me with knowledge for designing prompts that produce meaningful AI outcomes and helps make use of its potential towards delivering innovative content creation.',
        skills: ['Prompt Design', 'AI'],
        logo: googleCloudLogo,
    },
    {
        title: 'Soft Skills',
        issuer: 'TCS iON',
        date: 'Issued Dec 2024',
        credentialUrl: '#',
        description: 'Developed key professional soft skills including communication, teamwork, and public speaking. Credential ID: 119854-27523403-1016.',
        skills: ['Soft Skills', 'Public Speaking'],
        logo: tcsIonLogo,
    },
    {
        title: 'Solution Architecture',
        issuer: 'Amazon Web Services(AWS)',
        date: 'Issued July 2025',
        credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_rLX2boarfdpzGPWu3_1753160372622_completion_certificate.pdf',
        description: 'This course provided a comprehensive understanding of solution architecture principles, focusing on designing scalable and efficient systems using AWS services.',
        skills: ['Solution Architecture', 'Client Handling'],
        logo: awsLogo,
    },
    {
        title: 'Introduction to Model Context Protocol',
        issuer: 'Anthropic',
        date: 'Issued August 2025',
        credentialUrl: 'https://verify.skilljar.com/c/i8njtsn43ogz',
        description: 'This helped me Understanding the LLM Models and Their Protocols and how the models work with the servers.',
        skills: ['Model Context Protocol', 'LLM Models'],
        logo: anthropicLogo,
    },
];

export const keyCourses: string[] = [
    'Introduction to C Programming',
    'Data Structures & Algorithms',
    'Mathematical Foundation for AI & Data Engineering',
    'Software Architecture Basics',
    'Foundation of Computer Systems',
    'Calculus & Linear Algebra',
    'Differential Equations',
];
