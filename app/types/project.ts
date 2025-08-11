export interface PROJECT {
  id: number;
  name: string;
  slug: string;
  categories: (
    | "Web Development"
    | "Mobile App"
    | "Frontend"
    | "Backend"
    | "Full-stack"
    | "API"
  )[];
  thumbnail: string;
  images: string[];
  description: string;
  techStack: string[];
  features?: string[];
  icon?: string;
  startDate?: Date;
  endDate?: Date;
  isCompleted: boolean;
  githubUrl?: string;
  websiteUrl?: string;
  role: string;
  year: number;
}
