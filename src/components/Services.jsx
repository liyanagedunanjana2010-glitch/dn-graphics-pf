import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { Palette, Sparkles, Share2, Video, Image as ImageIcon, Box } from 'lucide-react';

const iconMap = {
  Palette: Palette,
  Sparkles: Sparkles,
  Share2: Share2,
  Video: Video,
  Image: ImageIcon,
  Box: Box,
};

const Services = () => {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-secondaryText max-w-xl mx-auto">
          High-end design solutions crafted to elevate your brand presence across all media.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-cardBg p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                {IconComponent && <IconComponent size={28} />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-secondaryText leading-relaxed">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;