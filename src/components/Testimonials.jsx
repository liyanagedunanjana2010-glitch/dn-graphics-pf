import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Sahan Perera",
    role: "Content Creator",
    review: "DN Graphics made my YouTube thumbnails! CTR went up by 15% in just two weeks. Highly recommended for graphics!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sahan"
  },
  {
    id: 2,
    name: "Nipuni Silva",
    role: "Small Business Owner",
    review: "Amazing logo design! Understood my brand vision clearly and delivered within 2 days. Very professional service.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nipuni"
  },
  {
    id: 3,
    name: "Kasun Jayawardena",
    role: "Event Organizer",
    review: "The poster design for our music event was top-notch. Everyone loved the visual identity. Great communication too!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kasun"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-2">Client Testimonials</h2>
          <p className="text-gray-400">What my clients say about working with me</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800/80 p-6 rounded-2xl border border-gray-700/50 shadow-xl flex flex-col justify-between hover:border-yellow-400/50 transition duration-300 transform hover:-translate-y-2"
            >
              <div>
                {/* ⭐ Stars Rating */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(item.rating)].map((_, index) => (
                    <span key={index} className="text-lg">★</span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full bg-gray-700 p-1 border border-yellow-400/30"
                />
                <div>
                  <h4 className="font-bold text-white text-base">{item.name}</h4>
                  <p className="text-xs text-yellow-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;