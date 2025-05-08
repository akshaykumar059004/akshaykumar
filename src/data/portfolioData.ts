export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "project1",
    title: "Const-easy-tution",
    description: "Implementing a transformer-based language model from first principles, with detailed notes and explanations about the architecture and training process.",
    tags: ["Machine Learning", "NLP", "PyTorch"],
    link: "#",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "project2",
    title: "Nexus TPMS",
    description: " Crafted a multi-sensor network within an IoT framework specifically targeting tyre health at the Smart India Hackathon 2024; findings contributed towards solving longer downtimes and high maintenance costs",
    tags: ["Education", "Deep Learning", "Python"],
    link: "#",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "project3",
    title: "Spot it Glasses",
    description: "Designed and developed smart glasses embedded with a capacitive touch sensor and a 5MP mini camera, enabling real-time text capture with 95% accuracy.",
    tags: ["Machine Learning", "Autograd", "Python"],
    link: "#",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "project4",
    title: "Forms processing system for PRADAN",
    description: "Designed and implemented a form processing system to digitalize data collection, reducing manual entry time by 60% and streamlining submissions from 100+ users.",
    tags: ["Research", "NLP", "Transformers"],
    link: "#",
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/akshaykumar059004/",
    icon: "Github"
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "Twitter"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "Linkedin"
  }
];

export const bioData = {
  name: "Akshaykumar S",
  title: "AI Researcher & Engineer",
  shortBio: "Building intelligent systems that understand and generate language.",
  longBio: `I am an AI researcher and engineer with a focus on deep learning and neural networks. Previously, I led AI at Tesla, was a research scientist at OpenAI, and completed my PhD at Stanford focused on deep learning and computer vision.

I'm interested in training large-scale neural networks and understanding the fundamentals of intelligence and cognition. I enjoy breaking down complex AI concepts into understandable explanations.

My work spans computer vision, language models, and reinforcement learning, with a particular interest in creating systems that can understand and generate human-like text.`,
  experience: [
    {
      title: "Backend Developer Intern",
      company: "PRADAN",
      period: "April 2025 - May 2025",
      description: " Coordinated with a 4-member team and led client meetings, ensuring 100% on-time delivery of project milestones."
    }
  ]
};