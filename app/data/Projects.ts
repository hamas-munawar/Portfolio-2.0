import { PROJECT } from '../types/project';

export const PROJECTS: PROJECT[] = [
  {
    id: 1,
    name: "Kumo Store",
    slug: "kumo-store-website",
    categories: ["Web Development", "Frontend", "Full-stack"],
    description:
      "An e-commerce website for a clothing brand, Kumo, featuring a new winter collection, trending products, client reviews, and a blog/updates section. The site has a clean, modern design with a focus on product display.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    thumbnail: "/images/projects/thumbnails/kumo.jpeg",
    images: [
      "/images/projects/images/kumo-1.png",
      "/images/projects/images/kumo-2.png",
      "/images/projects/images/kumo-3.png",
      "/images/projects/images/kumo-4.png",
    ],
    features: [
      "Product catalog with trending items",
      "New seasonal collection showcase",
      "Customer review section",
      "Blog/news updates section",
      "Responsive navigation menu",
      "Product rating display",
    ],
    challenges: [
      {
        title: "Building a Responsive Layout with Tailwind CSS",
        description:
          "Ensuring the e-commerce store was fully responsive across various devices was a key goal. I leveraged Tailwind CSS's utility-first approach to quickly and efficiently build a mobile-first design, which was then scaled up for tablet and desktop views.",
      },
      {
        title: "Creating a Dynamic Product Display",
        description:
          "To showcase different product collections (e.g., 'Winter Collection' vs. 'Trending'), I structured the data and used JavaScript to dynamically render different sections of the page, making the content easy to manage and update.",
      },
    ],
    isCompleted: true,
    githubUrl: "https://github.com/hamas-munawar/Kumo-E-com-Store.git",
    websiteUrl: "https://kumo-store.vercel.app",
    role: "Solo Developer",
    year: 2023,
  },
  {
    id: 2,
    name: "Shelvet",
    slug: "shelvet-e-commerce-store",
    categories: ["Web Development", "Frontend"],
    description:
      "An e-commerce website for a clothing brand, Shelvet. The site showcases trending, summer, and winter collections with smooth animations and a clean, modern aesthetic.",
    techStack: ["HTML", "CSS", "GSAP", "JavaScript"],
    thumbnail: "/images/projects/thumbnails/shelvet.jpeg",
    images: [
      "/images/projects/images/sehlvet-1.png",
      "/images/projects/images/sehlvet-2.png",
      "/images/projects/images/sehlvet-3.png",
      "/images/projects/images/sehlvet-4.png",
      "/images/projects/images/sehlvet-5.png",
    ],
    features: [
      "Trending, Summer, and Winter product collections",
      "Customer review section",
      "Smooth animations powered by GSAP",
      "Clean, minimalist UI design",
      "Responsive layout",
    ],
    challenges: [
      {
        title: "Implementing Advanced Animations with GSAP",
        description:
          "Integrating the GreenSock Animation Platform (GSAP) to create smooth, high-performance animations was a core focus. The challenge was to coordinate animations on scroll and on hover without impacting site performance, resulting in a premium user experience.",
      },
      {
        title: "Ensuring Cross-Browser Consistency",
        description:
          "A major challenge was ensuring the custom animations and CSS layouts rendered consistently across different web browsers. I meticulously tested and refined the code to ensure a uniform and bug-free visual experience for all users.",
      },
    ],
    isCompleted: true,
    githubUrl: "https://github.com/hamas-munawar/Shelvet-E-com-Store.git",
    websiteUrl: "https://shelvet-e-com-store.vercel.app",
    role: "Solo Developer",
    year: 2024,
  },
  {
    id: 3,
    name: "Game Hub",
    slug: "game-hub",
    categories: ["Web Development", "Frontend", "API"],
    description:
      "A web application for Browse and discovering video games. Users can filter games by genre, sort by relevance, and see details like platform and ratings. The site features a clean, dark-themed UI.",
    techStack: ["React", "Chakra UI", "React Query", "TypeScript", "RAWG API"],
    thumbnail: "/images/projects/thumbnails/game-hub.jpeg",
    images: [
      "/images/projects/images/game-hub-1.png",
      "/images/projects/images/game-hub-2.png",
      "/images/projects/images/game-hub-3.png",
      "/images/projects/images/game-hub-4.png",
    ],
    features: [
      "Game list display with cards for each game",
      "Filtering by genre and platform",
      "Sorting functionality",
      "Search bar",
      "Dark/Light mode toggle",
    ],
    challenges: [
      {
        title: "Optimizing API Performance and State Management",
        description:
          "The RAWG API returns a large volume of data. I used **React Query** for efficient caching, data fetching, and state synchronization, which significantly improved the application's performance and reduced unnecessary network requests.",
      },
      {
        title: "Building a Dynamic Filtering System",
        description:
          "Creating a dynamic filter that combined genres and platforms required careful state management. I designed a system where filters could be toggled and applied in real-time, providing a seamless user experience.",
      },
    ],
    isCompleted: true,
    githubUrl: "https://github.com/hamas-munawar/game-hub.git",
    websiteUrl: "https://games-hub-tawny.vercel.app/",
    role: "Solo Developer",
    year: 2025,
  },
  {
    id: 4,
    name: "Exclusive E-Commerce Store",
    slug: "exclusive-e-com-store",
    categories: ["Web Development", "Frontend"],
    description:
      "A static e-commerce store with a focus on product display and a clean layout. The project is built using fundamental web technologies.",
    techStack: ["HTML", "CSS"],
    thumbnail: "/images/projects/thumbnails/exclusive.png",
    images: [
      "/images/projects/images/exclusive-1.png",
      "/images/projects/images/exclusive-2.png",
      "/images/projects/images/exclusive-3.png",
      "/images/projects/images/exclusive-4.png",
      "/images/projects/images/exclusive-5.png",
      "/images/projects/images/exclusive-6.png",
      "/images/projects/images/exclusive-7.png",
      "/images/projects/images/exclusive-8.png",
    ],
    features: [
      "Product catalog display",
      "Navigation bar",
      "Footer with contact and social media links",
    ],
    challenges: [
      {
        title: "Creating a Responsive Design with Pure CSS",
        description:
          "Without the help of a framework, the main challenge was crafting a fully responsive design using only native CSS. I used CSS Flexbox and Grid to build a fluid layout that adapts gracefully to different screen sizes, demonstrating a solid understanding of fundamental CSS principles.",
      },
      {
        title: "Efficient Code Organization",
        description:
          "For a multi-page static site, I focused on organizing the HTML and CSS in a modular and maintainable way. This involved using semantic HTML and a clear CSS file structure to ensure the codebase was clean and easy to navigate.",
      },
    ],
    isCompleted: true,
    githubUrl: "https://github.com/hamas-munawar/Exclusive-E-com-Store.git",
    websiteUrl: "https://exclusive-e-com-store.vercel.app/",
    role: "Solo Developer",
    year: 2023,
  },
  {
    id: 5,
    name: "Issue Tracker",
    slug: "issue-tracker",
    categories: ["Web Development", "Full-stack"],
    description:
      "A full-stack web application designed for tracking and managing project issues. It allows users to create, view, and manage issues, with a dashboard for quick insights.",
    techStack: ["Next.js", "MySQL", "Prisma", "Radix UI", "Tailwind CSS"],
    thumbnail: "/images/projects/thumbnails/issue-tracker.png",
    images: [
      "/images/projects/images/issue-tracker-1.png",
      "/images/projects/images/issue-tracker-2.png",
      "/images/projects/images/issue-tracker-3.png",
      "/images/projects/images/issue-tracker-4.png",
      "/images/projects/images/issue-tracker-5.png",
      "/images/projects/images/issue-tracker-6.png",
    ],
    features: [
      "Issue creation and management with full CRUD functionality",
      "Dashboard with issue status charts and metrics",
      "Filtering and sorting issues by status",
      "Responsive design with a modern UI/UX",
      "Database integration with Prisma and MySQL",
    ],
    challenges: [
      {
        title: "Managing Full-stack Data Flow and State",
        description:
          "Building a full-stack application required seamless communication between the front-end and a MySQL database. I used **Next.js** for the API routes and **Prisma** as the ORM to manage data, which simplified database queries and ensured type-safe data handling.",
      },
      {
        title: "Creating a Secure and Scalable Data Schema",
        description:
          "Designing the database schema for issue tracking with features like status, priority, and user assignments was a key challenge. I designed a scalable and efficient relational database model using **MySQL** and configured the schema with **Prisma** to prevent data inconsistencies.",
      },
    ],
    isCompleted: true,
    githubUrl: "https://github.com/hamas-munawar/Issues-Tracker.git",
    // Note: websiteUrl is not provided, so it is omitted here.
    role: "Solo Developer",
    year: 2025,
  },
];
