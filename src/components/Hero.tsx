import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-bg-surface"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/montana-mountains/1920/1080?blur=2"
          alt="Montana Mountains"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-surface/80 via-bg-surface/60 to-bg-surface"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent-light text-sm font-medium tracking-wider uppercase mb-6 border border-accent/30">
            Licensed Psychologist in Helena, MT
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Strengths-focused, evidence-based, <span className="text-accent-light italic">caring</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
            I provide counseling, consultation, and education dedicated to improving the lives of children and families everywhere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/getting-started"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-bg-light font-semibold rounded-full hover:bg-accent-light transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://picsum.photos/seed/mountain-landscape/800/1000"
              alt="Mountainous Outdoor Environment"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-serif text-2xl italic">
                "Combining cutting-edge techniques with compassion, warmth, and a strengths-based perspective."
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-light/50 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
