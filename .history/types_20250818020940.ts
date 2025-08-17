
export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    codeUrl: string;
}

export interface Experience {
    date: string;
    title: string;
    company: string;
    description: string;
    icon: JSX.Element;
}

export interface NavLink {
    id: string;
    title: string;
}

export interface Language {
    name: string;
    proficiency: string;
}

export interface Certification {
    title: string;
    issuer: string;
    date: string;
    credentialUrl: string;
    description: string;
    skills: string[];
    logo: JSX.Element;
}
