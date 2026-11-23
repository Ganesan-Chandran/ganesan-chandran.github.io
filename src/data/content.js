export const profile = {
  name: "Ganesan Chandran",
  roles: [
    "Software Engineer",
    "Solution Architect",
    "Full Stack Developer",
    "Open Source Author",
    "Tech Blogger",
  ],
  location: "Chennai, Tamil Nadu, India",
  email: "ganesanchandran@hotmail.com",
  careerStartYear: 2013,
  links: {
    linkedin: "https://www.linkedin.com/in/ganesan-chandran-677a15133/",
    github: "https://github.com/Ganesan-Chandran",
    twitter: "https://twitter.com/GanesanChandran",
  },
  rssUrl: "https://www.c-sharpcorner.com/members/ganesan-c5/rss",
};

export const navItems = [
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["awards", "Awards"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export const skillGroups = [
  {
    title: "Cloud & DevOps",
    icon: "fa-cloud",
    items: ["AWS", "Terraform", "CI/CD", "Docker"],
  },
  {
    title: "Backend",
    icon: "fa-server",
    items: ["C#", ".NET", "Go", "Microservices", "REST APIs"],
  },
  {
    title: "Frontend",
    icon: "fa-code",
    items: ["React", "TypeScript", "JavaScript", "Micro-Frontends", "HTML/CSS"],
  },
  {
    title: "Data",
    icon: "fa-database",
    items: ["MS SQL Server", "PostgreSQL"],
  },
  {
    title: "Architecture & Practice",
    icon: "fa-sitemap",
    items: ["Solution Design", "Cloud Migration", "Agile", "Team Leadership"],
  },
];

export const skillIcons = {
  AWS: "devicon-amazonwebservices-plain-wordmark colored",
  Terraform: "devicon-terraform-plain colored",
  Docker: "devicon-docker-plain colored",
  "C#": "devicon-csharp-plain colored",
  ".NET": "devicon-dotnetcore-plain colored",
  Go: "devicon-go-original-wordmark colored",
  React: "devicon-react-original colored",
  TypeScript: "devicon-typescript-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  "HTML/CSS": "devicon-html5-plain colored",
  "MS SQL Server": "devicon-microsoftsqlserver-plain colored",
  PostgreSQL: "devicon-postgresql-plain colored",
};

export const experience = [
  {
    company: "Enlivio Health India Pvt. Ltd",
    note: "formerly EMIS Health",
    url: "https://www.enliviohealth.com/",
    period: "Jan 2018 - Present",
    roles: [
      ["Solution Architect", "Mar 2025 - Present"],
      ["Senior Consultant (Technical Architect)", "Jul 2021 - Mar 2025"],
      ["Consultant", "Jan 2020 - Jun 2021"],
      ["Senior Associate", "Jan 2018 - Dec 2019"],
    ],
    highlights: [
      "[Achievement 1 - what you built or led, with a measurable outcome]",
      "[Achievement 2 - architecture or migration decision and its impact]",
      "[Achievement 3 - team, mentoring or delivery result]",
    ],
    current: true,
  },
  {
    company: "Tata Consultancy Services",
    url: "https://www.tcs.com/",
    period: "Dec 2012 - Jan 2018",
    roles: [
      ["IT Analyst", "Dec 2016 - Jan 2018"],
      ["System Engineer", "Dec 2014 - Dec 2016"],
      ["Assistant System Engineer", "Dec 2013 - Dec 2014"],
      ["Assistant System Engineer Trainee", "Dec 2012 - Dec 2013"],
    ],
    highlights: [
      "[Achievement 1 - what you built or delivered, with a measurable outcome]",
      "[Achievement 2 - technical improvement or client impact]",
      "[Achievement 3 - leadership or recognition]",
    ],
  },
];

export const projects = [
  {
    title: "Fetch Client",
    featured: true,
    tagline:
      "Free, open-source REST API testing, automation and performance testing tool for VS Code",
    screenshot: "/assets/images/projects/fetch-client.webp",
    description:
      "A free REST and GraphQL client with collections, environments, mock server, performance and data-driven testing. The CLI runs the same collections in CI/CD pipelines and produces HTML, JSON, XML and NUnit reports.",
    stats: [
      ["18k+", "installs"],
      ["4.8", "rating"],
    ],
    tags: ["TypeScript", "React", "Node.js", "VS Code API"],
    links: [
      [
        "Marketplace",
        "https://marketplace.visualstudio.com/items?itemName=GanesanChandran.fetch-client",
      ],
      ["GitHub", "https://github.com/fetchclient/vscode-fetch-client"],
      ["CLI", "https://www.npmjs.com/package/@fetch-client/cli"],
      ["Docs", "https://fetchclient.github.io/docs/extension/introduction"],
    ],
    features: [
      "Code-free API testing",
      "Mock server",
      "Performance testing",
      "Data-driven tests",
      "API quality gate",
      "Scheduled requests",
      "Pre-run requests",
      "CLI for CI/CD",
    ],
  },
  {
    title: "[Project 2]",
    tagline: "[One-line summary]",
    description: "[Problem, your role and the outcome]",
    tags: ["[Tech]"],
    links: [],
  },
  {
    title: "[Project 3]",
    tagline: "[One-line summary]",
    description: "[Problem, your role and the outcome]",
    tags: ["[Tech]"],
    links: [],
  },
];

export const community = [
  {
    label: "Articles on C# Corner",
    url: "https://www.c-sharpcorner.com/members/ganesan-c5/articles",
    icon: "fa-pencil",
  },
  {
    label: "C# Corner Forums",
    url: "https://www.c-sharpcorner.com/members/ganesan-c5/forums",
    icon: "fa-comments",
  },
  {
    label: "Stack Overflow",
    url: "https://stackoverflow.com/users/6046499/ganesan-c",
    icon: "fa-stack-overflow",
  },
  {
    label: "MSDN",
    url: "https://social.msdn.microsoft.com/profile/ganesan%20c/",
    icon: "fa-windows",
  },
];

export const awards = [
  {
    org: "C# Corner",
    url: "https://www.c-sharpcorner.com/members/ganesan-c5/awards",
    items: [
      "MVP - Sep 2021",
      "MVP - Sep 2022",
      "MVP - Dec 2024",
      "Member of the Month - Aug 2021",
    ],
  },
  { org: "EMIS Health", items: ["Sprint Champion - 2018 Q3"] },
  {
    org: "Tata Consultancy Services",
    items: [
      "On The Spot Award (Best Performer): 2017 (Jun, Oct), 2016 (Jan, Feb), 2015 (Apr, May)",
    ],
  },
  {
    org: "Academics",
    items: ["44th rank among 3,932 graduates in B.Tech (IT), 2008-2012"],
  },
];

export const education = [
  {
    title: "B.Tech (Information Technology)",
    school: "Sri Krishna College of Engineering and Technology, Coimbatore",
    url: "http://www.skcet.ac.in/",
    period: "Aug 2008 - Mar 2012",
    score: "CGPA 8.99 (89.9%)",
  },
  {
    title: "HSC",
    school: "Kadri Mills Hr.Sec School, Coimbatore",
    period: "Jun 2007 - Mar 2008",
    score: "91.25%",
  },
  {
    title: "SSLC",
    school: "Govt. High School, Coimbatore",
    period: "Jun 2005 - Apr 2006",
    score: "84.8%",
  },
];
