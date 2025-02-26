import Head from 'next/head';

const projects = [
    {
      company: "PHOENIX Pharma Conseil",
      client: "",
      period: "June 2024 – January 2025",
      projects: [
        {
          name: "E-Commerce Platform",
          description:
            "Developed an e-commerce platform for selling parapharmaceutical products.",
          tech: {
            Backend: "Shopify",
            Frontend: "Shopify",
            Plugins: "Stocky, Stripe, meta Pixel",
          },
          link: "", // No public link
        },
      ],
    },
    {
      company: "NOWADEV",
      client: "WEBMD",
      period: "July 2021 – December 2023",
      projects: [
        {
          name: "Univadis Migration",
          description:
            "Migration of the Univadis application from Symfony and ReactJS to VueJS (v2) for AptusHealth (asubsidiary of WebMD), designed for healthcare professionals in Europe.",
          tech: {
            Backend: "GraphQL, ExpressJS",
            Frontend: "VueJS (v2), Vuex, Axios, Bootstrap, SCSS",
            DevOps: "Git (GitLab), Docker, Kubernetes, Nginx, AWS",
            OS: "Linux (Ubuntu)",
            Methodology: "Agile Scrum",
          },
          link: "https://www.univadis.fr",
        },
        {
          name: "E-learning Platform (Mediquality)",
          description:
            "Developed an online learning platform with an LMS for students and a CMS for content creators.",
          tech: {
            Backend: "NodeJS, ExpressJS",
            Frontend: "ReactJS, NextJS, Redux, Axios, Bootstrap, SCSS",
            Database: "MongoDB",
            DevOps: "Git (GitLab), Docker, Kubernetes",
            OS: "Linux (Ubuntu)",
            Methodology: "Agile Scrum",
          },
          link: "https://education.mediquality.net/",
        },
        {
          name: "Univadis Web Application",
          description:
            "Created new modules, maintained, and enhanced the performance of the Univadis web applications (FR, DE, IT, ES) for AptusHealth (a subsidiary of WebMD), dedicated to healthcare professionals in Europe.",
          tech: {
            Backend: "Symfony, NodeJS",
            Frontend: "ReactJS, Symfony (Twig), SCSS",
            Database: "MongoDB, MySQL",
            DevOps: "GitLab, Docker, Kubernetes, Helm",
            Other: "Adobe Launch, Adobe Target",
          },
          link: "https://www.univadis.fr",
        },
      ],
    },
    {
      company: "VENARI Security",
      client: "",
      period: "November 2019 – June 2021",
      projects: [
        {
          name: "SaaS ETA (Encrypted Traffic Analysis)",
          description: "Development and deployment of a B2B SaaS solution for Encrypted Trafc Analysis (ETA) to detect malwares hidden within encrypted traffic for organizations with highly sensitive data, such as banks, the public sector, and industries.",
          tech: {
            Backend: "NodeJS, GraphQL, Express, Apollo Server, Mongoose, JWT",
            Frontend: "ReactJS, Redux, Bootstrap, Axios, Apollo Client",
            Database: "Phoenix & HBase, MongoDB",
            DevOps: "Git (Bitbucket), Jenkins, Docker, Kubernetes, Redis, Nginx",
            Architecture: "REST, WebSocket (socket.io)",
            OS: "Windows, Linux",
          },
          link: "", // No public link
        },
        {
          name: "Back Office - User Management",
          description:
            "Developed a back-office system and created APIs for user management based on roles and privileges.",
          tech: {
            Backend: "NodeJS, Express, Mongoose",
            Frontend: "ReactJS, React Admin, Redux, MaterialUI, Axios, Apollo Client",
            Database: "MongoDB",
            DevOps: "Git (Bitbucket), Jenkins, Nginx, Asana",
          },
          link: "", // No public link
        },
      ],
    },
  ];
  
  export default function Projects() {
    return (
        <>
        <Head>
          <title>My projects</title>
        </Head>  
        <div className="min-h-screen px-6 sm:px-12 lg:px-24 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            My Projects
            </h1>
            <div className="mt-10 space-y-10">
            {projects.map((company, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-lg shadow-lg"
              >
                <h2 className="text-2xl font-semibold text-blue-400">
                    {company.company} ({company.period})
                </h2>
                {company.client && (
                    <h3 className="text-lg font-semibold text-blue-300">Client: {company.client}</h3>
                )}
                <div className="mt-4 space-y-6">
                    {company.projects.map((project, idx) => (
                    <div key={idx} className="p-4 border border-gray-700 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-semibold text-white">{project.name}</h3>
                        <p className="text-gray-300">{project.description}</p>
                        <div className="mt-3 sm:grid sm:grid-cols-1 sm:grid-cols-2 gap-1">
                        {Object.entries(project.tech).map(([key, value]) => (
                            <p key={key} className="text-sm text-gray-400">
                            <span className="font-bold text-blue-300">{key}:</span> {value}
                            </p>
                        ))}
                        </div>
                        {project.link ? (
                        <a href={project.link} target="_blank" className="inline-block mt-5 text-s text-blue-500 hover:underline">
                            View Project
                        </a>
                        ) : (
                        <p className="text-gray-500 text-sm mt-5">🔒 Private Project</p>
                        )}
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
        </>
    );
  }
  