
import React, { useState } from 'react';

const allProjects = [
  {
    id: 1,
    title: 'پروژه برج ررزت تهران',
    category: 'ساختمانی',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop',
    layout: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    title: 'پروژه اطلس مال',
    category: 'ساختمانی',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2574&auto=format&fit=crop',
    layout: 'md:col-span-2',
  },
  {
    id: 3,
    title: 'مجتمع تجاری کوروش',
    category: 'ساختمانی',
    image: 'https://images.unsplash.com/photo-1613946328456-986b8656156e?q=80&w=2670&auto=format&fit=crop',
    layout: '',
  },
  {
    id: 4,
    title: 'برج مسکونی الهیه',
    category: 'ساختمانی',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
    layout: '',
  },
  {
    id: 5,
    title: 'پروژه آبرسانی شهری',
    category: 'آبرسانی',
    image: 'https://images.unsplash.com/photo-1549925243-910950339396?q=80&w=2670&auto=format&fit=crop',
    layout: 'md:col-span-2',
  },
  {
    id: 6,
    title: 'خط انتقال آب',
    category: 'آبرسانی',
    image: 'https://images.unsplash.com/photo-1505672537424-94035693b438?q=80&w=2670&auto=format&fit=crop',
    layout: 'md:col-span-2',
  },
  {
    id: 7,
    title: 'سیستم آبیاری مدرن',
    category: 'کشاورزی',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2670&auto=format&fit=crop',
    layout: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 8,
    title: 'آبیاری قطره‌ای',
    category: 'کشاورزی',
    image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=2574&auto=format&fit=crop',
    layout: 'md:col-span-2',
  }
];

const ProjectCard: React.FC<{ project: typeof allProjects[0] }> = ({ project }) => (
  <div
    className={`relative rounded-2xl overflow-hidden group shadow-lg ${project.layout}`}
  >
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
    <div className="relative h-full p-6 flex flex-col justify-end text-right">
      <h3 className="text-white text-xl md:text-2xl font-bold">{project.title}</h3>
      {project.id === 1 && (
        <button className="mt-4 bg-gray-100/80 text-gray-800 backdrop-blur-sm px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white transition-colors w-fit shadow">
          مشاهده جزئیات
        </button>
      )}
    </div>
  </div>
);


const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ساختمانی');

  const categories = ['ساختمانی', 'آبرسانی', 'کشاورزی'];
  
  const filteredProjects = allProjects.filter(p => p.category === activeCategory);

  return (
    <section dir="rtl" className="bg-[#FAFCFF] py-24 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            پروژه‌ها
          </h2>
        </div>
        
        <div className="mb-12 flex justify-center items-center gap-2 md:gap-4 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                activeCategory === category
                  ? 'bg-[#0044A3] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
           {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
