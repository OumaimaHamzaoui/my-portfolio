import Image from 'next/image';

const categories = [
  {
    title: 'Languages',
    techs: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frameworks/Libraries',
    techs: [
      'ReactJS', 'VueJS', 'NextJS', 'Redux','tailwind','bootstrap', 'Axios', 'jQuery',
      'Jest', 'Enzyme', 'React Testing Library','NestJS',
      'GraphQL', 'ExpressJS', 'API Rest',
    ],
  },
  {
    title: 'Tools',
    techs: ['Postman','Adobe Tag Manager', 'Zeplin', 'Figma', 'Shopify'],
  },
  {
    title: 'DevOps',
    techs: ['Git', 'GitLab', 'GitHub', 'Bitbucket', 'Jira', 'Jenkins', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Databases',
    techs: ['MongoDB', 'MySQL', 'Phoenix', 'Redis'],
  },
];

export default function TechStack() {
  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto">
      {categories.map((category) => (
        <div key={category.title} className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold border-b pb-2 mb-4 text-white">{category.title}</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {category.techs.map((tech) => (
              <div key={tech} className="relative flex flex-col items-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                  <Image
                    src={`/logos/${tech.toLowerCase().replace(/\s/g, '-')}.png`}
                    alt={tech}
                    layout="fill" 
                    objectFit="contain"  
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-black text-s px-2 py-1 rounded-lg shadow-md">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
