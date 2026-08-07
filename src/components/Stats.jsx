import React from 'react';

const statsData = [
  { id: 1, count: "150+", label: "Completed Projects", icon: "🎨" },
  { id: 2, count: "80+", label: "Happy Clients", icon: "⭐" },
  { id: 3, count: "3+", label: "Years Experience", icon: "🚀" },
  { id: 4, count: "99%", label: "Satisfaction Rate", icon: "💎" },
];

const Stats = () => {
  return (
    <section className="py-12 bg-gray-900/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700/40 hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-tight">
                {stat.count}
              </h3>
              <p className="text-gray-400 text-sm font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;