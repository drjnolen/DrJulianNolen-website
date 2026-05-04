import { motion } from 'motion/react';
import { Mountain, Music, BrainCircuit, Activity } from 'lucide-react';

export default function ExperientialTherapy() {
  const examples = [
    {
      title: 'In-vivo Exposure Therapy',
      description: 'For phobia, anxiety, and OCD. For example, joining a client with cynophobia (fear of dogs) as they learn to face their fears and walk around their neighborhood comfortably.',
      icon: <BrainCircuit className="w-6 h-6" />,
    },
    {
      title: 'Outdoor Modalities',
      description: 'Hiking, mountain biking, rock climbing, disc golf, etc. – both as facilitators of therapeutic conversations and as forms of behavioral activation.',
      icon: <Mountain className="w-6 h-6" />,
    },
    {
      title: 'Narrative Reprocessing',
      description: 'Songwriting as a form of narrative reprocessing for trauma-focused CBT.',
      icon: <Music className="w-6 h-6" />,
    },
    {
      title: 'In-office Activities',
      description: 'For example playing chess while challenging depressive thoughts during each move.',
      icon: <Activity className="w-6 h-6" />,
    },
  ];

  return (
    <section id="experiential" className="py-24 bg-bg-surface text-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent-light uppercase mb-3">Specialty</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
              Experiential Therapy
            </h3>
            
            <div className="space-y-6 text-lg text-text-muted font-light leading-relaxed mb-10">
              <p>
                While much of my practice is delivered via typical in-office therapy, I also specialize in experiential therapy – with a focus on activity-based and outdoor modalities.
              </p>
              <p>
                These interventions draw from the clinical evidence base, while also integrating healthy activity and client interests in order to make therapy approachable and facilitate key skill practice in-session. Experiential therapy may not be the correct fit for everyone, but does offer unique opportunities for clients who have struggled with traditional therapy, need supported practice of behavioral activation, or benefit from real-world practice of key skills.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {examples.map((example, index) => (
              <div
                key={index}
                className="bg-bg-light/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-bg-light transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent-light flex items-center justify-center mb-4">
                  {example.icon}
                </div>
                <h4 className="text-xl font-serif font-bold mb-2">{example.title}</h4>
                <p className="text-sm text-text-muted font-light leading-relaxed">{example.description}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
