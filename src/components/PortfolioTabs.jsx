import React, { useState } from 'react';

const PortfolioTabs = () => {
  // Tabs Category List
  const [activeTab, setActiveTab] = useState('All');

  // Design Items Data
  const projects = [
    {
      id: 1,
      title: "Gaming Thumbnail",
      category: "Thumbnails",
      image: "https://via.placeholder.com/400x250/1e293b/facc15?text=Gaming+Thumbnail",
    },
    {
      id: 2,
      title: "Business Logo",
      category: "Logos",
      image: "https://via.placeholder.com/400x250/1e293b/facc15?text=Business+Logo",
    },
    {
      id: 3,
      title: "Music Concert Poster",
      category: "Posters",
      image: "https://via.placeholder.com/400x250/1e293b/facc15?text=Music+Poster",
    },
    {
      id: 4,
      title: "Vlog Thumbnail",
      category: "Thumbnails",
      image: "https://via.placeholder.com/400x250/1e293b/facc15?text=Vlog+Thumbnail",
    },
    {
      id: 5,
      title: "Minimalist Brand Logo",
      category: "Logos",
      image: "https://via.placeholder.com/400x250/1e293b/facc15?text=Minimal+Logo",
    },
  ];

  const categories = ['All', 'Thumbnails', 'Logos', 'Posters'];

  // Filter projects according to tab
  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(item => item.category === activeTab);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
          My Design Portfolio
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-yellow-400 text-black shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl hover:border-yellow-400/50 transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioTabs;