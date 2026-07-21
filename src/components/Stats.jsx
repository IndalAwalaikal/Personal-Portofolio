
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '280+', label: 'Successful Projects' },
    { value: '50+', label: 'Awards Won' },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-dark-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center md:text-left">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="pt-8 md:pt-0 md:px-12 first:md:pl-0 last:md:pr-0"
            >
              <h3 className="text-5xl font-display font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
