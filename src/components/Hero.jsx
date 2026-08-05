import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Yellow Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-primary uppercase border border-primary/30 rounded-full bg-primary/10"
        >
          Creative Graphic Design Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          We create powerful <span className="text-primary">visual identities</span> & modern branding.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-secondaryText max-w-2xl mx-auto mb-10"
        >
          Transforming ideas into high-impact visual content. We design logos, brand systems, and engaging graphics tailored to make your business stand out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="bg-primary text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 text-center"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-center"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;