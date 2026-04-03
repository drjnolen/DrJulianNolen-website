import { motion } from "motion/react";
import { FileText, Award, Heart, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About({ short = false }: { short?: boolean }) {
  const stats = [
    {
      icon: <Award className="w-6 h-6" />,
      label: "Years Experience",
      value: "20+",
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Fun & Engaging",
      value: "Approach",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: "Perspective",
      value: "Strengths-Focused",
    },
  ];

  return (
    <section
      id="about"
      className={`pt-32 pb-24 ${short ? "bg-bg-surface" : "bg-bg-light"} relative`}
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
            {short && (
              <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent-light text-sm font-medium tracking-wider uppercase mb-6 border border-accent/30">
                Licensed Psychologist in Helena, MT
              </span>
            )}
            {!short && (
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
                About Me
              </h2>
            )}
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
              20 years of experience
            </h3>

            <div className="space-y-6 text-lg text-text-muted font-light leading-relaxed mb-10">
              <p>
                I am a licensed psychologist, owner of Montana
                Counseling and Assessment, PLLC, and Chair of Psychology at Carroll
                College. I have worked with children and 
                families for over 20 years, in settings 
                ranging from maximum security corrections to community private practice.
              </p>
              <p>
                My practice is characterized by warmth, genuineness,
                and strengths-based intervention. I recognize that many may be hesitant to 
                engage in counseling, so I provide a collaborative environment where 
                clients can feel comfortable and encouraged in facing their challenges. 
                When possible, I also incorporate a client's personal interests
                (e.g., art, music, sports) into our work, making
                counseling an experience worth looking forward to. I
                frequently work with individuals and families affected by
                trauma, emotional challenges, behavioral concerns, and
                neurodivergence.
              </p>
              {!short && (
                <p>
                  On a personal note, I grew up in Helena, and have returned
                  here after years away because of my love for the community
                  and its people. I spend most
                  of my free time outdoors with my wife and two
                  children, who constantly remind me how important it is to
                  ensure a positive future for our kids.
                </p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-bg-light flex items-center justify-center text-primary mb-4">
                    {stat.icon}
                  </div>
                  <span className="text-2xl font-serif font-bold text-primary mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-text-muted font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {short && (
                <Link
                  to="/getting-started"
                  className="inline-flex items-center justify-center px-8 py-3 bg-accent text-bg-light font-semibold rounded-full hover:bg-accent-light transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {short ? (
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-bg-light transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Read Full Bio
                </Link>
              ) : (
                <a
                  href="http://drjuliannolen.com/wp-content/uploads/2023/04/Jnolen-CV-4.10.2023-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-bg-light transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Full CV
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
