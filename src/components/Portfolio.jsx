import React, { useState } from 'react';

// 💡 1. ඔබගේ Designs වල Images මෙතැනට Import කරගන්න
// import project1 from '../assets/project1.jpg';
// import project2 from '../assets/project2.jpg';

const portfolioData = [
  {
    id: 1,
    title: "Modern Brand Logo",
    category: "Logo",
    image: "https://via.placeholder.com/400x300?text=Logo+Design", // Image එක එකතු කළ පසු 'project1' වැනි නම යොදන්න
    description: "Minimalist and modern identity design."
  },
  {
    id: 2,
    title: "Event Promotion Poster",
    category: "Posters",
    image: "https://via.placeholder.com/400x300?text=Poster+Design",
    description: "Creative flyer design for music concert."
  },
  {
    id: 3,
    title: "Social Media Banner",
    category: "Graphics",
    image: "https://via.placeholder.com/400x300?text=Social+Media",
    description: "Engaging post designs for business pages."
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Logo', 'Posters', 'Graphics'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-2">My Portfolio</h2>
          <p className="text-gray-400">Check out some of my recent graphic design works</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === category
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-yellow-400 transition transform hover:-translate-y-2"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;