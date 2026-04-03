import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Printer } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: 'Carroll College campus, St. Charles building room 043',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'jnolen@montanaca.com',
      href: 'mailto:jnolen@montanaca.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '(406) 459-2931',
      href: 'tel:4064592931',
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: 'Fax',
      details: '(406) 430-0171',
    },
  ];

  return (
    <section id="contact" className="pt-32 pb-24 bg-bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
              Schedule a Consultation
            </h3>
            
            <p className="text-lg text-text-muted font-light leading-relaxed mb-10 max-w-lg">
              If you have questions about my services or would like to discuss scheduling, please reach out. I look forward to connecting with you.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-bg-light flex items-center justify-center text-primary mr-6 group-hover:bg-accent group-hover:text-bg-light transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-primary mb-1">{info.title}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-text-muted font-light hover:text-accent transition-colors">
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-text-muted font-light">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://picsum.photos/seed/helena-montana/800/600"
                alt="Helena, Montana"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-bg-surface p-6 rounded-2xl shadow-2xl border border-white/10 max-w-xs">
              <p className="font-serif italic text-lg text-primary mb-2">Not all therapy happens on a couch</p>
              <p className="text-sm text-text-muted font-medium uppercase tracking-wider">Let's go where you benefit the most</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
