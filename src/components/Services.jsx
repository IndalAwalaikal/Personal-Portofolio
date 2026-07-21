import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const stages = [
  {
    title: 'REQUIREMENTS',
    content: 'Understanding the project scope, business logic, and data flow. Defining clear API contracts, database requirements, and system boundaries before writing a single line of code.'
  },
  {
    title: 'ARCHITECTURE',
    content: 'Designing the system architecture — choosing the right database schema (relational or non-relational), microservice vs monolith approach, and selecting the right tech stack (Golang, Python/FastAPI, Node.js).'
  },
  {
    title: 'API DEVELOPMENT',
    content: 'Building RESTful APIs with Golang (Gin/Fiber) or Python (FastAPI). Writing clean, well-documented endpoints with proper authentication, validation, and error handling.'
  },
  {
    title: 'DATABASE DESIGN',
    content: 'Designing optimized schemas in MySQL or PostgreSQL — indexes, relations, and queries tuned for performance. Ensuring data integrity with proper constraints and migrations.'
  },
  {
    title: 'TESTING & DEPLOYMENT',
    content: 'Running unit and integration tests, setting up CI/CD pipelines, containerizing with Docker, and deploying to production environments including cloud platforms (AWS).'
  },
  {
    title: 'MONITORING & MAINTENANCE',
    content: 'Setting up logging, performance monitoring, and server automation. Ensuring the system stays stable, scalable, and secure post-launch with proactive maintenance.'
  }
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-32 bg-dark-surface/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm text-dark-accent font-medium tracking-widest uppercase mb-2">Process</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">MY DEVELOPMENT<br className="hidden sm:block"/><span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>PROCESS</span></h3>
        </motion.div>

        <div className="border-t border-white/10">
          {stages.map((stage, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border-b border-white/10"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-8 flex items-center justify-between group text-left"
              >
                <div className="flex items-center gap-12">
                  <span className="text-sm text-gray-500 font-mono hidden md:block">0{index + 1}</span>
                  <span className={`text-2xl font-display font-bold transition-colors ${openIndex === index ? 'text-dark-accent' : 'text-white group-hover:text-gray-300'}`}>
                    {stage.title}
                  </span>
                </div>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-dark-accent text-white' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-0 md:pl-[4.5rem] pr-12 text-gray-400 leading-relaxed max-w-2xl">
                      {stage.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
