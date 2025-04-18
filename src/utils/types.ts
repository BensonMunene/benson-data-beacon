export interface Skill {
  name: string;
  level: number;
  category: 'language' | 'tool' | 'cloud' | 'ml' | 'quant' | 'algotrading' | 'dashboard' | 'bigdata';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  category: 'data-science' | 'machine-learning' | 'financial' | 'cloud' | 'algotrading' | 'dashboard';
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  description?: string;
}
