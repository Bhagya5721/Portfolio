export const portfolioData = {
  personal: {
    name: "Bhagya Udapudi",
    greeting: "Hi, I'm Bhagya",
    titles: ["Python Full Stack Developer"],
    tagline:
      "Passionate Electronics and Communication Engineering graduate transitioning into Python Full Stack Development. Experienced in building end-to-end web applications with clean OOP, robust REST APIs, SQL databases, and modern responsive frontends.",
    location: "Bengaluru, India",
    email: "bhagyaudapudi@gmail.com",
    phone: "+91 7019351620",
    phoneDisplay: "7019351620",
    whatsappNumber: "917019351620",
    whatsappUrl:
      "https://wa.me/917019351620?text=Hi%20Bhagya,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!",
    github: "https://github.com/Bhagya5721",
    linkedin: "https://linkedin.com",
    resumeUrl: "/Bhagya_Udapudi_Resume.pdf",
    availability:
      "Actively seeking Python Full Stack / Software Developer roles in Bengaluru",
    statusText: "Available for full-time roles in Bengaluru",
    bio: "Electronics and Communication Engineering graduate (2022–2026) transitioning into Python Full Stack and Software Developer roles, with hands-on experience in Python programming, SQL database management, and modern front-end fundamentals (HTML, CSS, JavaScript). Strong problem-solving ability, enthusiastic learner, and dedicated to writing clean, maintainable, object-oriented code.",
  },

  keyFacts: [
    {
      label: "Education",
      value: "B.E. in Electronics & Communication (CGPA: 8.9)",
      subtext: "Angadi Institute of Technology & Management",
    },
    {
      label: "Internship",
      value: "Python Full Stack Developer Intern",
      subtext: "Pentagon Space Pvt. Ltd. (Feb 2026 – Present)",
    },
    {
      label: "Location",
      value: "Bengaluru, India",
      subtext: "Available for immediate onboarding",
    },
    {
      label: "Core Specialization",
      value: "Python, Django, FastAPI & SQL",
      subtext: "With AI Vector Search & React 18 integration",
    },
  ],

  skillGroups: [
    {
      title: "Backend Development",
      icon: "Server",
      skills: [
        { name: "Python",  },
        { name: "Django",  },
        { name: "FastAPI",  },
        { name: "OOP & Modular Architecture", },
        { name: "RESTful API Design", },
        { name: "File & Exception Handling", },
      ],
    },
    {
      title: "Frontend Engineering",
      icon: "Layout",
      skills: [
        { name: "React 18 & Vite",  },
        { name: "JavaScript (ES6+)", },
        { name: "HTML5 & Semantic Markup",  },
        { name: "CSS3 & Modern Styling",  },
        { name: "Tailwind CSS",  },
        { name: "Responsive UI Design",  },
      ],
    },
    {
      title: "Databases & Storage",
      icon: "Database",
      skills: [
        { name: "SQL", },
        { name: "MySQL",  },
        { name: "SQLite", },
        { name: "SQLAlchemy ORM", },
        { name: "Relational Schema Design",  },
      ],
    },
    {
      title: "AI & ML Concepts",
      icon: "Cpu",
      skills: [
        { name: "Embeddings & Vector Databases", },
        { name: "Semantic Search (FAISS)", },
        { name: "Sentence-Transformers",  },
        { name: "NLP & Neural Network Basics", },
        { name: "Machine Learning Fundamentals",  },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub",  },
        { name: "VS Code & PyCharm",  },
        { name: "FastAPI TestClient / Postman", },
        { name: "Payment Gateway APIs (Razorpay)",  },
        { name: "Debugging & Problem Solving", },
      ],
    },
  ],

  projects: [
    {
      id: "ai-knowledge-system",
      title: "AI-Powered Task & Knowledge Management",
      category: "AI",
      categories: ["Python", "AI", "Web"],
      description:
        "Full-stack MVP allowing admins to upload documents and assign tasks while users semantically search the knowledge base using local vector embeddings without external LLM API costs.",
      image: "ai-search",
      tags: [
        "Python",
        "FastAPI",
        "React 18",
        "MySQL",
        "FAISS",
        "Sentence-Transformers",
        "JWT",
      ],
      metrics: "Sub-second semantic similarity search using local FAISS index",
      githubUrl: "https://github.com/Bhagya5721/Portfolio",
      liveUrl: "#",
      highlights: [
        "Built local semantic search from scratch: text chunking, local sentence-transformers, and FAISS indexing.",
        "Implemented JWT authentication with bcrypt hashing and role-based access control (RBAC).",
        "Created React 18 (Vite) frontend with protected routes and dynamic task filtering.",
      ],
    },
    {
      id: "razorpay-integration",
      title: "Razorpay Payment Gateway API Integration",
      category: "Web",
      categories: ["Python", "Web"],
      description:
        "Secure e-commerce payment pipeline integrating Razorpay Payment Gateway with Python and Django, handling order creation, payment signatures, and transaction status verification.",
      image: "payment",
      tags: [
        "Python",
        "Django",
        "Razorpay API",
        "REST APIs",
        "Signature Verification",
      ],
      metrics:
        "End-to-end payment authentication with webhook signature validation",
      githubUrl: "https://github.com/Bhagya5721/Portfolio",
      liveUrl: "#",
      highlights: [
        "Integrated Razorpay Payment Gateway API for secure order creation and transaction handling.",
        "Implemented cryptographic signature verification to prevent payment tampering.",
        "Performed issue analysis, debugging, and comprehensive edge-case testing.",
      ],
    },
    {
      id: "smart-medical-box",
      title: "Smart Medical Box for Transport",
      category: "Python",
      categories: ["Python", "Web"],
      description:
        "Intelligent IoT medical transit container with temperature sensing, active thermoelectric cooling, and GSM-based alert system for emergency cold-chain logistics.",
      image: "iot",
      tags: [
        "IoT",
        "Python / C",
        "Embedded Systems",
        "GSM",
        "Temperature Sensors",
      ],
      metrics:
        "Automated real-time SMS alerts during critical temperature thresholds",
      githubUrl: "https://github.com/Bhagya5721/Portfolio",
      liveUrl: "#",
      highlights: [
        "Engineered portable medical container with real-time temperature sensing and active cooling.",
        "Integrated GSM module to immediately alert medical personnel when temperature thresholds breach.",
        "Combined embedded hardware sensors with software monitoring logic.",
      ],
    },
  ],

  experience: [
    {
      id: "pentagon-space",
      role: "Python Full Stack Developer Intern",
      company: "Pentagon Space Pvt. Ltd.",
      location: "Bengaluru, India",
      period: "Feb 2026 – Present",
      type: "Internship",
      points: [
        "Working as a Python Full Stack Developer Intern, gaining hands-on, industry-level experience across backend and frontend development using Python, SQL, and HTML/CSS/JavaScript.",
        "Strengthening skills in end-to-end application development, debugging, and collaborative software development practices through real-world project tasks.",
        "Designing relational database schemas, writing optimized SQL queries, and integrating them with dynamic responsive frontend interfaces.",
      ],
      technologies: [
        "Python",
        "Django",
        "SQL",
        "SQLite",
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
      ],
    },
  ],

  education: [
    {
      id: "be-ece",
      degree: "B.E. in Electronics & Communication Engineering",
      institution: "Angadi Institute of Technology & Management",
      location: "Belagavi, Karnataka",
      period: "2022 – 2026",
      grade: "CGPA: 8.9 / 10",
      description:
        "Strong foundation in analytical mathematics, logic design, programming, and software engineering.",
    },
    {
      id: "puc",
      degree: "Pre-University Course (PUC)",
      institution: "St. Aloysius PU College",
      location: "Mangalore, Karnataka",
      period: "Completed",
      grade: "86.6%",
      description:
        "Science stream with Physics, Chemistry, and Mathematics focus.",
    },
    {
      id: "sslc",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Loyola High School",
      location: "Vijayapura, Karnataka",
      period: "Completed",
      grade: "97.2%",
      description:
        "Graduated with top academic distinction and analytical honors.",
    },
  ],

  certifications: [
    "Python Full Stack Development — Pentagon Space Pvt. Ltd.",
    "OOPs using Python — Infosys Springboard",
    "Wefaa Robotics Hackathon Certificate",
    "Soft Skills Certificate — Aspire for Her",
  ],
};
