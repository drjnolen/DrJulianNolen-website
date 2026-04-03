import { motion } from "motion/react";
import {
  PhoneCall,
  ClipboardList,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function GettingStartedPage() {
  const steps = [
    {
      title: "Learn More & Connect",
      description:
        "If you feel my services align with your needs, please contact me to discuss scheduling. You can reach me at (406) 459-2931. If you reach my confidential voicemail, please leave your name, number, and the best times to reach you. There is no need to detail your clinical concerns in the message. I typically return calls within 48 business hours.",
      icon: <PhoneCall className="w-8 h-8" />,
    },
    {
      title: "Initial Consultation",
      description:
        "During our initial phone consultation, we will discuss your primary concerns and determine if my expertise is the right fit for your goals. If we decide to move forward, we will schedule an intake session. If another provider would better serve your needs, I will gladly offer appropriate referrals.",
      icon: <ArrowRight className="w-8 h-8" />,
    },
    {
      title: "Initial Assessment",
      description:
        "Prior to your first appointment, you will receive access to a secure client portal to complete necessary paperwork. Our initial one-hour session focuses on understanding your background, current challenges, and goals. This helps me tailor a treatment plan specific to your needs and provides an opportunity for you to ask any questions about the therapeutic process.",
      icon: <ClipboardList className="w-8 h-8" />,
    },
    {
      title: "Continued Therapy",
      description:
        "Therapy typically begins with weekly sessions, adjusting frequency as symptoms improve. My ultimate goal is to help clients and families develop practical, evidence-based tools so they can confidently graduate from therapy and move forward.",
      icon: <CalendarCheck className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-bg-light min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-widest text-accent uppercase mb-3"
          >
            Process
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6"
          >
            Getting Started
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted font-light leading-relaxed max-w-2xl mx-auto"
          >
            A step-by-step guide on what to expect when reaching out, scheduling
            your first appointment, and beginning the therapeutic process.
          </motion.p>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-8 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/30 before:to-transparent">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-center"
            >
              {/* Mobile: Icon left, Card right */}
              {/* Desktop: Alternating left/right */}
              
              {/* Desktop Left Space */}
              <div className="hidden md:block md:w-5/12">
                {index % 2 !== 0 && (
                  <div className="bg-bg-surface p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-md transition-shadow text-right">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-text-muted font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Center Icon */}
              <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-bg-surface bg-primary text-accent shadow shrink-0 absolute left-0 md:relative md:left-auto">
                {step.icon}
              </div>

              {/* Desktop Right Space / Mobile Card */}
              <div className="w-[calc(100%-5rem)] md:w-5/12 pl-0 md:pl-0">
                {(index % 2 === 0 || typeof window !== 'undefined' && window.innerWidth < 768) && (
                  <div className={`bg-bg-surface p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-left' : ''} md:hidden`}>
                     <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-text-muted font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}
                {index % 2 === 0 && (
                  <div className="hidden md:block bg-bg-surface p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-md transition-shadow text-left">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-text-muted font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-bg-light font-semibold rounded-full hover:bg-accent-light transition-all duration-300"
          >
            Contact Me Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
