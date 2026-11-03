export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "AI & Full Stack" | "Full Stack" | "IoT & Embedded";
  tags: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  imageGradient: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeLabel: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  type: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Familiar";
    iconName?: string;
  }[];
}

export const portfolioData = {
  personal: {
    name: "Bhagya Udapudi",
    role: "Python Full Stack Developer",
    tagline: "Designing, developing, and deploying scalable web applications, REST APIs & AI-powered systems.",
    location: "Bangalore",
    email: "bhagyaudapudi@gmail.com",
    phone: "+91 7019351620",
    phoneDisplay: "7019351620",
    github: "https://github.com/Bhagya5721",
    linkedin: "https://linkedin.com",
    resumeUrl: "/Bhagya_Udapudi_Resume.pdf",
    availability: "Actively seeking Python Full Stack Developer roles in Bangalore",
    statusText: "Open to opportunities",
    bio: "Electronics and Communication Engineering graduate transitioning into Python Full Stack Development, with hands-on experience in Python programming, SQL database management, and modern front-end fundamentals (HTML, CSS, JavaScript). Skilled in building end-to-end applications, writing clean and efficient code, and applying object-oriented programming concepts. Strong problem-solving ability and a quick learner, passionate about designing, developing, and deploying scalable web applications.",
  },

  stats: [
    { label: "B.E. Academic CGPA", value: "8.9" },
    { label: "Core Projects Built", value: "3+" },
    { label: "SSLC Board Score", value: "97.2%" },
    { label: "Industry Certifications", value: "4" },
  ],

  services: [
    {
      title: "Python & Backend Systems",
      description: "Developing robust backend architectures with Python, FastAPI, and Django. Applying strong OOP principles, error handling, and clean modular code.",
      icon: "Server",
    },
    {
      title: "AI & Vector Search Pipelines",
      description: "Implementing local semantic search and RAG workflows with Sentence-Transformers, FAISS vector indexing, text chunking, and embeddings without external LLM dependencies.",
      icon: "Cpu",
    },
    {
      title: "Database Management & ORM",
      description: "Designing relational schemas, writing efficient SQL queries, and utilizing SQLAlchemy ORM with MySQL for secure, ACID-compliant data storage.",
      icon: "Database",
    },
    {
      title: "Full Stack & Modern Frontend",
      description: "Building interactive, responsive interfaces using React 18, Vite, HTML5, CSS3, and JavaScript with protected routes, dynamic filtering, and REST API integration.",
      icon: "Layout",
    },
  ],

  skillCategories: [
    {
      title: "Programming & Python Core",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
        { name: "Functions & Modular Code", level: "Advanced" },
        { name: "File Handling", level: "Advanced" },
        { name: "Exception Handling", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Proficient" },
      ],
    },
    {
      title: "Web Frameworks & Databases",
      skills: [
        { name: "FastAPI", level: "Advanced" },
        { name: "Django", level: "Proficient" },
        { name: "SQL", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "SQLAlchemy ORM", level: "Proficient" },
        { name: "RESTful API Design", level: "Advanced" },
      ],
    },
    {
      title: "Frontend & Web Dev",
      skills: [
        { name: "React 18 & Vite", level: "Proficient" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3 & Styling", level: "Advanced" },
        { name: "JWT Authentication & RBAC", level: "Proficient" },
        { name: "Dynamic Filtering & State", level: "Proficient" },
        { name: "Bcrypt Hashing", level: "Proficient" },
      ],
    },
    {
      title: "AI, ML & Vector Search",
      skills: [
        { name: "FAISS Vector Search", level: "Proficient" },
        { name: "Sentence-Transformers", level: "Proficient" },
        { name: "Text Chunking & Embeddings", level: "Proficient" },
        { name: "Vector Databases", level: "Proficient" },
        { name: "NLP & Neural Network Basics", level: "Proficient" },
        { name: "Machine Learning Fundamentals", level: "Proficient" },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "PyCharm", level: "Advanced" },
        { name: "FastAPI TestClient", level: "Proficient" },
        { name: "API Integration (Razorpay)", level: "Proficient" },
        { name: "Debugging & Issue Analysis", level: "Advanced" },
      ],
    },
  ],

  projects: [
    {
      id: "ai-task-knowledge-system",
      title: "AI-Powered Task & Knowledge Management System",
      description:
        "Full stack MVP where admins create a knowledge base by uploading documents and assigning tasks, while users perform semantic search on the knowledge base and manage their task workflows.",
      category: "AI & Full Stack",
      tags: ["Python", "FastAPI", "React 18", "MySQL", "FAISS", "Sentence-Transformers", "SQLAlchemy", "JWT"],
      metrics: "Local semantic vector search pipeline with zero external LLM API cost",
      githubUrl: "https://github.com",
      liveUrl: "#",
      featured: true,
      imageGradient: "from-indigo-600/30 via-purple-600/20 to-cyan-800/30",
      highlights: [
        "Implemented a semantic search pipeline from scratch: text chunking, local embedding generation with sentence-transformers, and similarity search using a FAISS vector index.",
        "Designed relational MySQL schema with SQLAlchemy ORM and implemented secure JWT authentication with bcrypt hashing and role-based access control (RBAC).",
        "Developed a React 18 (Vite) frontend with protected routes, dynamic task CRUD filters, document upload, and an admin analytics dashboard.",
        "Added activity logging and validated end-to-end API workflows using FastAPI's TestClient.",
      ],
    },
    {
      id: "razorpay-api-integration",
      title: "Razorpay Payment Gateway API Integration",
      description:
        "Integrated the Razorpay Payment Gateway API into a web application using Python and Django to handle structured transaction data, order processing, and payment status verification.",
      category: "Full Stack",
      tags: ["Python", "Django", "Razorpay API", "REST APIs", "Payment Authentication", "Debugging"],
      metrics: "Secure payment authentication, order creation & transaction verification",
      githubUrl: "https://github.com",
      liveUrl: "#",
      featured: true,
      imageGradient: "from-blue-600/30 via-indigo-600/20 to-sky-800/30",
      highlights: [
        "Integrated Razorpay Payment Gateway API into a Django web application, processing structured transaction data.",
        "Implemented payment authentication, order creation, and callback transaction handling.",
        "Gained direct exposure to API-driven data workflows; performed issue analysis and debugging during integration testing.",
      ],
    },
    {
      id: "smart-medical-box",
      title: "Smart Medical Box for Transport",
      description:
        "Intelligent, portable medical box engineered with temperature sensing, active thermoelectric cooling, and IoT-based monitoring for sensitive medical transit.",
      category: "IoT & Embedded",
      tags: ["IoT", "Embedded Systems", "GSM", "Temperature Sensors", "Hardware-Software Logic"],
      metrics: "Real-time GSM alert triggers notifying stakeholders during emergency transit",
      githubUrl: "https://github.com",
      liveUrl: "#",
      featured: true,
      imageGradient: "from-emerald-600/30 via-teal-600/20 to-cyan-800/30",
      highlights: [
        "Engineered an intelligent, portable medical box integrating temperature sensing, active cooling, and IoT-based monitoring.",
        "Implemented a GSM-based alert system to notify stakeholders in real time, dramatically improving reliability for medical cold-chain logistics.",
        "Combined hardware sensors with software logic to create a connected, reliable monitoring solution.",
      ],
    },
  ] as Project[],

  experiences: [
    {
      id: "pentagon-space",
      role: "Python Full Stack Developer Intern",
      company: "Pentagon Space Pvt. Ltd.",
      location: "Bengaluru, India",
      period: "Feb 2026 - Present",
      description:
        "Gaining hands-on, industry-level experience across backend and frontend development using Python, SQL, and HTML/CSS/JavaScript.",
      achievements: [
        "Strengthening skills in end-to-end application development, debugging, and collaborative software development practices through real-world project tasks.",
        "Implementing clean backend logic using Python and managing relational database schemas with SQL.",
        "Developing responsive, accessible frontend interfaces with HTML5, CSS3, and JavaScript.",
        "Collaborating in version-controlled workflows utilizing Git and GitHub for team sprints.",
      ],
      technologies: ["Python", "SQL", "HTML5", "CSS3", "JavaScript", "OOP", "Git", "GitHub"],
    },
  ] as Experience[],

  education: [
    {
      id: "be-ece",
      degree: "B.E. in Electronics & Communication Engineering",
      institution: "Angadi Institute of Technology & Management",
      location: "Belagavi, Karnataka",
      period: "2022 – 2026",
      grade: "8.9",
      gradeLabel: "CGPA",
      description: "Focus on embedded systems, electronic circuits, computer programming, and full-stack software development.",
    },
    {
      id: "puc",
      degree: "Pre-University Course (PUC)",
      institution: "St. Aloysius PU College",
      location: "Mangalore, Karnataka",
      period: "Completed",
      grade: "86.6%",
      gradeLabel: "Percentage",
      description: "Science stream with strong emphasis on Mathematics, Physics, and analytical foundations.",
    },
    {
      id: "sslc",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Loyola High School",
      location: "Vijayapura, Karnataka",
      period: "Completed",
      grade: "97.2%",
      gradeLabel: "Percentage",
      description: "Graduated with top academic honors, demonstrating exceptional analytical and quantitative problem-solving skills.",
    },
  ] as EducationItem[],

  certifications: [
    {
      id: "cert-1",
      title: "Python Full Stack Development",
      issuer: "Pentagon Space Pvt. Ltd.",
      type: "Full Stack Development",
    },
    {
      id: "cert-2",
      title: "OOPs using Python",
      issuer: "Infosys Springboard",
      type: "Software Engineering & Architecture",
    },
    {
      id: "cert-3",
      title: "Wefaa Robotics Hackathon Certificate",
      issuer: "Wefaa Robotics",
      type: "Hackathon & Innovation",
    },
    {
      id: "cert-4",
      title: "Soft Skills Certificate",
      issuer: "Aspire for Her",
      type: "Professional Excellence & Communication",
    },
  ] as CertificationItem[],

  softSkills: [
    "Quick Learner",
    "Leadership Qualities",
    "Communication",
    "Enthusiastic",
    "Problem Solving",
  ],

  terminalCommands: [
    { command: "whoami", response: "Bhagya Udapudi — Python Full Stack Developer & AI Enthusiast (ECE, CGPA: 8.9)" },
    { command: "skills", response: "Python, OOP, FastAPI, Django, React 18, SQL, MySQL, FAISS, Sentence-Transformers, Git" },
    { command: "projects", response: "1. AI-Powered Task & Knowledge Management, 2. Razorpay API Integration, 3. Smart Medical Box" },
    { command: "education", response: "B.E. in ECE (CGPA 8.9) at AITM Belagavi | PUC: 86.6% | SSLC: 97.2% at Loyola High School" },
    { command: "certifications", response: "Python Full Stack (Pentagon Space), OOPs Python (Infosys Springboard), Robotics Hackathon, Soft Skills (Aspire for Her)" },
    { command: "resume", response: "📄 Resume PDF: Click 'Resume' in hero/header or open /Bhagya_Udapudi_Resume.pdf" },
    { command: "status", response: "🟢 Seeking Python Full Stack Developer roles in Bangalore to design, develop & deploy scalable web apps" },
    { command: "contact", response: "Email: bhagyaudapudi@gmail.com | Phone: 7019351620 | Location: Bangalore, India | GitHub: github.com/Bhagya5721" },
    { command: "help", response: "Available commands: whoami, skills, projects, education, certifications, resume, status, contact, clear, help" },
  ],
};
