import { Palette, Users, Globe, Pencil, Share2, BarChart } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Liam Brooks",
    company: "Creative Horizons",
    image: user1,
    text: "VividVoxels made it incredibly easy to bring my vision to life. The customizable presets and seamless platform made collaboration smooth and efficient.",
  },
  {
    user: "Olivia Parker",
    company: "Artistry Collective",
    image: user2,
    text: "I can't imagine going back to traditional methods after using VividVoxels. The presets save so much time, and the marketplace is a game-changer.",
  },
  {
    user: "Ethan Harris",
    company: "Design Nexus",
    image: user3,
    text: "The integration with all major platforms makes this the go-to tool for all my projects. Real-time collaboration has never been smoother.",
  },
  {
    user: "Isla Johnson",
    company: "Vivid Studios",
    image: user4,
    text: "Working with the VividVoxels team was a transformative experience. The presets helped us get the job done faster while maintaining high-quality standards.",
  },
  {
    user: "Noah Campbell",
    company: "Innovative Creations",
    image: user5,
    text: "The ability to collaborate in real-time with other artists has made this platform essential for our workflow. Highly recommend!",
  },
  {
    user: "Sophia Walker",
    company: "Dream Designs",
    image: user6,
    text: "VividVoxels has revolutionized how I approach my art. The templates are intuitive, and the platform supports seamless integration with industry tools.",
  },
];

export const features = [
  {
    icon: <Palette />,
    text: "Customizable Presets for Artists",
    description:
      "Empower your creativity with our intuitive, customizable presets, designed to range from pixels to voxels. Easily build your art with pre-built options tailored to your vision.",
  },
  {
    icon: <Users />,
    text: "Real-Time Collaboration",
    description:
      "Collaborate seamlessly with artists from all over the world, offering real-time updates and feedback, fostering a collaborative creative environment.",
  },
  {
    icon: <Globe />,
    text: "Multi-Platform Compatibility",
    description:
      "Create and share your art across multiple platforms, from Blender and Maya 3D to Unity, Unreal Engine, and even Ren'Py for visual novels.",
  },
  {
    icon: <Pencil />,
    text: "Pre-built Art Templates",
    description:
      "Jumpstart your creative projects with a variety of pre-built art templates, offering versatile styles and themes to suit your artistic needs.",
  },
  {
    icon: <Share2 />,
    text: "Marketplace for Art Assets",
    description:
      "Buy, sell, and showcase 2D and 3D assets, providing a global marketplace for artists to monetize their creations and find inspiration.",
  },
  {
    icon: <BarChart />,
    text: "Insights & Analytics",
    description:
      "Gain valuable insights into your art's engagement and performance with a built-in analytics dashboard to track trends and optimize your creations.",
  },
];

export const checklistItems = [
  {
    title: "Merge Creative Assets with Ease",
    description:
      "Seamlessly combine code, 2D, and 3D assets, enabling smooth collaboration and version control across artistic teams.",
  },
  {
    title: "Refine Your Vision, Stress-Free",
    description:
      "Review and iterate on your artistic creations effortlessly, ensuring every detail aligns with your creative aspirations.",
  },
  {
    title: "Accelerate Creativity with AI",
    description:
      "Leverage AI-powered suggestions and tools to speed up repetitive tasks, allowing you to focus on bringing your artistic ideas to life.",
  },
  {
    title: "Instant Sharing for Instant Feedback",
    description:
      "Share your work with collaborators or clients in real-time, enabling immediate feedback and rapid iterations.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Market Place Access",
    ],
  },
  {
    title: "Pro",
    price: "$15",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Advanced Web Analytics",
      "Private Mode",
      "Marketplace Access",
    ],
  },
  {
    title: "Enterprise",
    price: "$250",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High-Performance Network",
      "Marketplace Access",
      "Customizable Analytics",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
