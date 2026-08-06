import React, { useState } from 'react';

// 📸 Images import කරගැනීම
import thumb1 from '../assets/thumbnail-1.jpg';
import thumb2 from '../assets/thumbnail-2.jpg';
import thumb3 from '../assets/thumbnail-3.jpg';

const portfolioData = [
  {
    id: 1,
    title: "YouTube Thumbnail Design",
    category: "Graphics",
    image: thumb1,
    description: "High CTR video thumbnail designs for YouTube channels."
  },
  {
    id: 2,
    title: "Social Media Banner",
    category: "Graphics",
    image: thumb2,
    description: "Engaging post designs for business pages."
  },
  {
    id: 3,
    title: "Brand Poster Design",
    category: "Posters",
    image: thumb3,
    description: "Creative promotional poster design for events."
  },
  // ➕ Logo Filter එක සඳහා එකතු කළ project එක
  {
    id: 4,
    title: "Modern Brand Logo",
    category: "Logo",
    image: thumb1, // වෙනත් Logo Image එකක් ඇති විට එය import කර මෙතැනට යොදන්න
    description: "Minimalist logo design for business branding."
  }
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