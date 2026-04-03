import { motion } from 'motion/react';
import { Activity, Brain, Users, Compass, BookOpen, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Psychotherapy',
      description: 'Once/week hourly sessions for children, adolescents, young adults, and families, focusing on reducing frequency as symptoms improve.',
      icon: <Brain className="w-8 h-8" />,
      color: 'bg-blue-900/30 text-blue-300',
    },
    {
      title: 'Experiential Therapy',
      description: 'Activity-based and outdoor modalities (hiking, climbing, art) to make therapy approachable and facilitate skill practice.',
      icon: <Compass className="w-8 h-8" />,
      color: 'bg-orange-900/30 text-orange-300',
    },
    {
      title: 'Training & Consultation',
      description: 'Educational services for organizations seeking to improve knowledge of child/adolescent health and development.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'bg-yellow-900/30 text-yellow-300',
    },
    {
      title: 'Assessment',
      description: 'Psychological and neurodevelopmental assessment (currently on hold due to high demand for counseling).',
      icon: <Activity className="w-8 h-8" />,
      color: 'bg-purple-900/30 text-purple-300',
    },
    {
      title: 'Group Intervention',
      description: 'Intermittent group sessions designed to build confidence and improve social interactions among peers.',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-green-900/30 text-green-300',
    },
    {
      title: 'Inclusive Care',
      description: 'Services provided regardless of race, color, sex, national origin, disability, religion, sexual orientation, or gender identity.',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'bg-teal-900/30 text-teal-300',
    },
  ];

  return (
    <section id="clinical" className="pt-32 pb-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-accent uppercase mb-3"
          >
            Clinical Services
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6"
          >
            Specialized Psychological Services
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted font-light"
          >
            My practice focuses on providing targeted, effective interventions for youth and families, utilizing modalities that are both clinically sound and highly engaging.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-block bg-amber-900/30 border border-amber-700/50 text-amber-200 px-6 py-3 rounded-lg text-sm font-medium"
          >
            Note: I am currently waitlisted ~1 year for clinical services.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-white/10 group"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-primary mb-3">{service.title}</h4>
              <p className="text-text-muted font-light leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto text-text-muted font-light"
        >
          <p>I am credentialed to accept payment from Blue Cross/Blue Shield, Allegiance, Cigna, Aetna, PacificSource, and United Healthcare.</p>
        </motion.div>

      </div>
    </section>
  );
}
