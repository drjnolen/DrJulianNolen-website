import Welcome from "../components/Welcome";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Brain, Users, BookOpen, ArrowRight } from "lucide-react";

export default function Home() {
  const quickLinks = [
    {
      title: "Clinical Services",
      description:
        "Psychotherapy services for children, adolescents, young adults, and their families.",
      icon: <Brain className="w-8 h-8" />,
      link: "/services",
    },
    {
      title: "Experiential Therapy",
      description:
        "Activity-based and outdoor modalities to facilitate learning through experience",
      icon: <Users className="w-8 h-8" />,
      link: "/services#experiential",
    },
    {
      title: "Training & Consultation",
      description:
        "Education, consulting, and public speaking related to diverse psychological concepts",
      icon: <BookOpen className="w-8 h-8" />,
      link: "/training",
    },
  ];

  return (
    <>
      {/* Welcome section on the home page */}
      <Welcome />

      {/* Quick Links Section */}
      <section className="py-24 bg-bg-light relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-accent uppercase mb-3"
            >
              How I Can Help
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6"
            >
              Explore Services
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-surface p-10 rounded-3xl group hover:-translate-y-2 transition-transform duration-300 flex flex-col items-start shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-bg-light text-primary flex items-center justify-center mb-8 shadow-sm group-hover:bg-accent group-hover:text-bg-light transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary mb-4">
                  {item.title}
                </h4>
                <p className="text-text-muted font-light leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface rounded-md px-2 py-1 -ml-2"
                >
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
