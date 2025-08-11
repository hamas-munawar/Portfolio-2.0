export interface PROJECT {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  images: string[];
  description: string;
  techStack: string[];
  categories: string[];
  features: string[];
  challenges?: {
    title: string;
    description: string;
  }[];
  role: string;
  year: number;
  isCompleted: boolean;
  githubUrl?: string;
  websiteUrl?: string;
}
