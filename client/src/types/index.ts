export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  category: 'research' | 'product' | 'design';
  image: string;
}

export interface TagType {
  name: string;
  color: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: TagType[];
  featured?: boolean;
  company?: string;
  companyLogo?: string;
  span: string;
  imageHeight: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  items: Skill[];
}
