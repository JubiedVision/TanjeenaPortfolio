import { PortfolioItem } from '@/types';

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Healthcare Platform Redesign",
    description: "A comprehensive redesign of a healthcare platform serving 2M+ patients, focusing on accessibility, user satisfaction, and clinical workflow efficiency. The project resulted in a 40% improvement in user satisfaction scores and a 25% reduction in task completion time.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: [
      { name: "UX Research", color: "bg-lavender/50" },
      { name: "Product Strategy", color: "bg-mint/50" },
      { name: "UI Design", color: "bg-coral/50" }
    ],
    featured: true,
    company: "Global Solutions Ltd.",
    companyLogo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    span: "col-span-1 md:col-span-2",
    imageHeight: "h-64"
  },
  {
    title: "Financial App Usability",
    description: "Comprehensive usability testing and improvements for a financial services mobile app, resulting in a 28% increase in user retention.",
    image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: [
      { name: "Usability Testing", color: "bg-lavender/50" },
      { name: "Mobile UX", color: "bg-mint/50" }
    ],
    span: "col-span-1",
    imageHeight: "h-48"
  },
  {
    title: "SaaS Feature Prioritization",
    description: "Developed a data-driven feature prioritization framework that reduced development waste by 40% and increased customer satisfaction.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: [
      { name: "Product Strategy", color: "bg-mint/50" },
      { name: "Data Analysis", color: "bg-coral/50" }
    ],
    span: "col-span-1 md:col-span-2 lg:col-span-1",
    imageHeight: "h-48"
  },
  {
    title: "Design System Creation",
    description: "Led the development of a comprehensive design system that reduced inconsistencies by 90% and accelerated product development.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: [
      { name: "Design Systems", color: "bg-coral/50" },
      { name: "Documentation", color: "bg-lavender/50" }
    ],
    span: "col-span-1",
    imageHeight: "h-48"
  },
  {
    title: "E-Commerce Product Strategy",
    description: "Developed and executed product roadmap for an e-commerce platform, increasing conversion rates by 35% and revenue by $5M annually.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: [
      { name: "Product Strategy", color: "bg-mint/50" },
      { name: "User Research", color: "bg-lavender/50" }
    ],
    span: "col-span-1",
    imageHeight: "h-48"
  }
];
