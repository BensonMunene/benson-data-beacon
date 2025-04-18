export interface Skill {
  name: string;
  level: number;
  category: 'language' | 'tool' | 'cloud' | 'ml' | 'quant' | 'other';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  category: 'data-science' | 'machine-learning' | 'financial' | 'cloud';
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
