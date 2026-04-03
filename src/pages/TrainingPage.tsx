import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Clock,
  Users,
  Shield,
  Brain,
  Heart,
  Activity,
  Music,
  Compass,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function TrainingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const trainings = [
    {
      title: "Trauma-Informed Care in Communities and Schools",
      description:
        "Designed to support organizations and care providers in better understanding the many impacts (emotional, neuropsychological, behavioral, etc.) of psychological trauma, as well as how to provide compassionate/effective intervention at the individual and community/organizational level.",
      duration: "2-8 hours",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title:
        "Strengths of the Adolescent Brain: Supporting Psychological Well-Being Among Teenage Populations",
      description:
        "Most research emphasizes the risks associated with adolescent brain development. This training focuses on how parents, educators, and mental health providers can harness and encourage the many potential strengths associated with this unique developmental phase to facilitate improved well-being and healthy maturation.",
      duration: "2 hours",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title:
        "Through the Looking Glass: Compassion and Case Conceptualization in Pediatric Psychology",
      description:
        "A focused, in-depth training which incorporates case examples from especially challenging youth in order to facilitate compassionate and effective case conceptualization, treatment planning, and intervention.",
      duration: "2-4 hours",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title:
        "Seeing the Strength: Identifying and Fostering Resilience in Trauma-Exposed Youth",
      description:
        "Discusses the identification, development, and implementation of trauma-focused interventions designed specifically to build upon a child/family's existing strengths and protective factors in order to support their improved well-being.",
      duration: "2-4 hours",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title:
        "Putting the Mask on First: Maintaining Self-Care in a Career of Self-Sacrifice",
      description:
        'Emphasizes the importance of effective self-care while working with difficult client populations. Discusses potential sources of burnout, strategies for identifying "compassion fatigue", and interventions for alleviating workplace stress.',
      duration: "2-4 hours",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title:
        "ACEs and Beyond: The Adverse Childhood Experiences Study, and What We Can Do About It",
      description:
        "Discusses the findings of ACEs research, how these relate to our work in mental health and educational organizations, and what we can do to appropriately support individuals/populations exposed to adverse childhood experiences.",
      duration: "2-4 hours",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Experiential Interventions for Children and Families",
      description:
        "Discusses the rationale and importance of experience-based therapies (e.g., community social skills practice, adventure therapy, music therapy), as well as how to incorporate experiential strategies to make therapeutic interventions more meaningful and effective.",
      duration: "2-8 hours",
      icon: <Compass className="w-6 h-6" />,
    },
    {
      title:
        "Therapeutic Songwriting for Trauma, Self-Esteem, and Emotional Distress",
      description:
        "Provides a step-by-step process guide for my unique therapeutic songwriting intervention program. Introduces the rationale, history, and efficacy, shares relevant case studies, and provides an adaptable protocol for utilizing this intervention.",
      duration: "2-8 hours",
      icon: <Music className="w-6 h-6" />,
    },
    {
      title:
        "Healing the Whole Child: A Multidisciplinary Approach to Healing Victims of Developmental Trauma",
      description:
        "Originally designed for occupational and physical therapists looking to incorporate trauma-related knowledge and intervention into their daily practice. Topics include the multisystemic impact of childhood trauma and strategies for incorporating trauma-informed principles into movement-based practice.",
      duration: "6-10 hours",
      icon: <Activity className="w-6 h-6" />,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-bg-light min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-widest text-accent uppercase mb-3"
          >
            Professional Education
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-10"
          >
            Training & Consultation Services
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="w-full aspect-[21/9] md:aspect-[3/1] rounded-3xl overflow-hidden shadow-xl mb-12 border border-white/10"
          >
            <img
              src="https://picsum.photos/seed/training-seminar/1200/400"
              alt="Training and Consultation Seminar"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted font-light leading-relaxed space-y-6 text-left"
          >
            <p>
              I provide education, training, and consulting services grounded in clinical best practices and current research. My most requested topics include trauma-informed care, strengths-based intervention, child/adolescent development, and creative therapeutic approaches (e.g., music therapy, experiential intervention) for especially-challenging cases.
            </p>
            <p>
              I incorporate multisensory presentation techniques, audience participation, enthusiasm, and humor in order to make nuanced topics both approachable and enjoyable. My goal is not just to share information, but to make it meaningful and to support your team in effectively implementing new skills in their daily work.
            </p>
            <p>
              A number of previously-provided seminars are outlined below. I am also happy to develop custom training and consulting packages tailored to your organization's specific needs. Fees are based on hourly commitment and travel requirements.
            </p>
            <div className="text-center pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-bg-light font-medium rounded-full hover:bg-primary-light transition-colors"
              >
                Inquire About Training
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Trainings Accordion */}
        <div className="space-y-4">
          {trainings.map((training, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                className="bg-bg-surface rounded-2xl shadow-sm border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-bg-light/50 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      {training.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-serif font-bold text-primary leading-tight">
                      {training.title}
                    </h3>
                  </div>
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-bg-light text-primary">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="text-text-muted font-light leading-relaxed mb-6">
                          {training.description}
                        </p>
                        <div className="flex items-center text-sm font-medium text-primary bg-bg-light w-fit px-4 py-2 rounded-full">
                          <Clock className="w-4 h-4 mr-2 text-accent" />
                          {training.duration}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
