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
      id: "project4",
      title: "Forms processing system for PRADAN",
      description: "Designed and implemented a form processing system to digitalize data collection, reducing manual entry time by 60% and streamlining submissions from 100+ users.",
      tags: ["Express.js", "AWS", "React Native"],
      link: "https://github.com/akshaykumar059004/pradan_forms_processing_system_backend",
      image: "https://www.pradan.net/wp-content/uploads/2023/02/PRADAN-appoints-Saroj-Mahapatra-as-its-next-Executive-Director.jpg"
    },
    {
    id: "project1",
    title: "Const-easy-tution",
    description: "Implementing a transformer-based language model from first principles, with detailed notes and explanations about the architecture and training process.",
    tags: ["Deep Learning", "NLP", "PyTorch"],
    link: "https://github.com/akshaykumar059004/const-easy-tution",
    image: "https://media.istockphoto.com/id/1445426863/vector/chat-bot-vector-logo-design-concept.jpg?s=612x612&w=0&k=20&c=XDdfzS4lNW9yxQ0BQGZq9KMLL4bJ8ywXlYdAhBSuoCA="
  },
  {
    id: "project2",
    title: "Nexus TPMS",
    description: " Crafted a multi-sensor network within an IoT framework specifically targeting tyre health at the Smart India Hackathon 2024; findings contributed towards solving longer downtimes and high maintenance costs",
    tags: ["React Native", "AWS", "Python"],
    link: "https://github.com/akshaykumar059004/Nexus-TPMS",
    image: "https://ntmedia.in/wp-content/uploads/2024/09/smart-india-hackathon-2024.jpg"
  },
  {
    id: "project3",
    title: "Spot it Glasses",
    description: "Designed and developed smart glasses embedded with a capacitive touch sensor and a 5MP mini camera, enabling real-time text capture with 95% accuracy.",
    tags: ["Android Framework", "Java/XML", "Machine learning"],
    link: "https://github.com/akshaykumar059004/Spot-It-Smart-Reading-Glasses",
    image: "https://media.licdn.com/dms/image/v2/D5622AQE5cSHkYErFNg/feedshare-shrink_1280/B56ZWK5m3OGsAk-/0/1741792118422?e=1749686400&v=beta&t=fLqk_AwWiYcDat-JBD8MHEhJqaZaiKx_L3Xc9uASod0"
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
    url: "https://www.linkedin.com/in/akshaykumar-s-ak05092004/",
    icon: "Linkedin"
  }
];

export const bioData = {
  name: "Akshaykumar S",
  title: "Backend Developer",
  shortBio: "Building scalable and robust server applications.",
  longBio: `
Akshaykumar S is a passionate and results-driven backend developer with a strong foundation in Artificial Intelligence and Data Science. Currently pursuing his final year of B.Tech, Akshaykumar brings a blend of technical depth and creative problem-solving to every project he undertakes. His core expertise lies in backend development, where he specializes in building scalable, efficient server-side applications using technologies like Express.js, Flask, and MySQL, often deploying them on AWS and GCP platforms.

With a proven track record of leading and managing technical projects, Akshaykumar excels not only in coding but also in project planning, client communication, and team coordination. During his internship, he successfully led a team in designing a digital form processing system and delivered all milestones on time while interfacing directly with stakeholders.

Beyond the backend, Akshaykumar is skilled in UI/UX design using tools like Figma, ensuring that the solutions he builds are not only robust but also user-friendly. He has built full-stack and mobile applications using React, React Native, and Expo, and has a keen eye for design and usability. His work on projects like Const-easy-tution, a legal chatbot powered by a fine-tuned T5 transformer model, and Nexus TPMS, an IoT-enabled tyre health monitoring system, showcases his ability to integrate AI, cloud, and software development into impactful, real-world solutions.

Whether it's deploying applications with GitHub Actions, managing infrastructure with cloud services, or translating complex requirements into seamless user experiences, Akshaykumar approaches every challenge with focus, adaptability, and a passion for learning.
`,
  experience: [
    {
      title: "Backend Developer Intern",
      company: "PRADAN",
      period: "April 2025 - May 2025",
      description: " Built a forms processing system with a focus on backend development, while also coordinating with clients and collaborating with frontend and database teams."
    }
  ]
};