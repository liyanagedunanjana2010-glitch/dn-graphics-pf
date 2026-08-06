import React, { useState } from 'react';

// 📸 1. Image Files Import කරගන්න
import bannerImg from '../assets/thumbnail-1.jpg';
import thumb1 from '../assets/thumbnail-1.jpg';
import myThumbnail from '../assets/thumbnail-1.jpg';
import poster1Img from '../assets/poster1.jpg';
import logo1Img from '../assets/logo1.jpg';

const portfolioData = [
  // Graphics Section Thumbnail
  {
    id: 1,
    title: "YouTube Thumbnail Design",
    category: "Graphics",
    image: thumb1, // 👈 Import කරගත් Variable එක මෙතැනට යොදන්න
    description: "Engaging video thumbnail designs for YouTube channels."
  },
  // Thumbnail Section Thumbnail
  {
    id: 2,
    title: "Social Media Banner",
    category: "Graphics",
    image: myThumbnail, // 👈 මෙතැනට 'myThumbnail' ලෙස ලබා දෙන්න
    description: "High CTR video thumbnail designs for YouTube channels."
  },
  // Poster Section Thumbnail
  {
    id: 3,
    title: "Event Flyer Poster",
    category: "Posters",
    image: poster1Img,
    description: "Creative flyer design for music concert."
  },
  // Logo Section Thumbnail
  {
    id: 4,
    title: "Modern Brand Logo",
    category: "Logo",
    image: logo1Img,
    description: "Minimalist and modern identity design."
  }
];

// ... (ඉතිරි Code එක එලෙසම තබන්න)

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