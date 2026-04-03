import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="pt-32 pb-24 bg-bg-surface relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:self-start"
          >
            <div className="relative w-3/4 md:w-4/5 lg:w-3/4">
              <div className="aspect-[4/5] w-full md:aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://github.com/user-attachments/assets/93815d81-2309-485b-b94e-865d716c3a83"
                  alt="Dr. Julian Nolen"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-bg-surface text-primary p-6 rounded-2xl shadow-2xl max-w-xs border border-white/10">
                <p className="font-serif italic text-lg mb-2">
                  I look forward to working with you!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent-light text-sm font-medium tracking-wider uppercase mb-6 border border-accent/30">
              Licensed Psychologist in Helena, MT
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
              Welcome
            </h3>

            <div className="space-y-6 text-lg text-text-muted font-light leading-relaxed mb-10">
              <p>
                My name is Dr. Julian Nolen, and I am a licensed psychologist located in Helena, Montana. My therapeutic approach combines cutting-edge and evidence-based techniques with compassion, warmth, and a strengths-based perspective. I specialize in providing sensitive and effective psychological services to children, adolescents, young adults, and families. I also provide educational and training services to organizations seeking to improve their knowledge of pediatric health and development.
              </p>
              <p>
                To learn more about me, my experience, or what to expect when working together, please visit the{" "}
                <Link to="/about" className="inline-flex items-center justify-center px-3 py-1 mx-1 bg-accent/10 text-accent hover:bg-accent hover:text-bg-light rounded-md transition-colors text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  About Me
                </Link>{" "}
                section of this website. If you have any questions, or may be interested in working together, please don't hesitate to{" "}
                <Link to="/contact" className="inline-flex items-center justify-center px-3 py-1 mx-1 bg-accent/10 text-accent hover:bg-accent hover:text-bg-light rounded-md transition-colors text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  contact me
                </Link>{" "}
                directly. I look forward to speaking with you!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
