export interface Project {
  title: string
  description: string
  shortDescription: string
  image: string | null
  video: string | null
  link: string
  isLive: boolean
  domain?: string
}

export const projectsData: Project[] = [
  {
    title: "TikTok Video Downloader",
    description: "A full-stack web application built with React + Vite on the frontend and Python FastAPI on the backend. The frontend is deployed on Vercel, while the backend API is hosted on Render. Designed for fast, simple, and user-friendly TikTok video downloading, with Google AdSense integration for monetization.",
    shortDescription: "Full-stack TikTok video downloader with monetization",
    image: null,
    video: null,
    link: "https://tiktok-downloader-byjcg.vercel.app/",
    isLive: true,
    domain: "tiktok-downloader-byjcg.vercel.app"
  },
  {
    title: "WebP Image Converter",
    description: "A high-performance WebP Image Converter built using React + Vite. The application allows users to convert up to 20 images simultaneously with minimal quality loss, significantly improving image optimization workflows. Converted images can be downloaded individually or bundled into a ZIP file for convenience. Focused on speed, simplicity, and real-world usability compared to typical online converters.",
    shortDescription: "High-performance image converter with batch processing",
    image: null,
    video: null,
    link: "https://webp-coverter-byjcg.vercel.app/",
    isLive: true,
    domain: "webp-coverter-byjcg.vercel.app"
  },
  {
    title: "CyberZone E-commerce Website",
    description: "Designed modern UI for product management, order tracking, and inventory updates. Implemented dynamic frontend components for smooth user experience.",
    shortDescription: "Modern e-commerce platform for tech products",
    image: "/project-images/cyberzone.jpg",
    video: "/project-videos/cyberzone-admin.mp4",
    link: "#",
    isLive: false
  },
  {
    title: "PC Bulacan E-commerce System",
    description: "Developed full shopping cart and checkout system with deals engine. Integrated AI chat support for customer assistance.",
    shortDescription: "E-commerce system with AI chat support",
    image: "/project-images/pcbulacan.png",
    video: "/project-videos/pcbulacan.mp4",
    link: "#",
    isLive: false
  },
  {
    title: "DriveWise Gamified Learning App",
    description: "Created a driving simulation mobile app to teach practical driving skills. Implemented interactive gameplay with realistic vehicle physics. Published on Google Play Store.",
    shortDescription: "Gamified driving simulation mobile app",
    image: "/project-images/drivewise.png",
    video: "/project-videos/drivewise.mp4",
    link: "#",
    isLive: false
  },
  {
    title: "Bigbrew Online Coffee Management System",
    description: "Developed system to manage orders, products, and inventory with modern UI. Built backend order tracking and reporting features for admin dashboard.",
    shortDescription: "Coffee shop management and ordering system",
    image: "/project-images/bigbrew.jpg",
    video: "/project-videos/bigbrew.mp4",
    link: "#",
    isLive: false
  }
]
