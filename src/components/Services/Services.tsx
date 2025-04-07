import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-primary-bg flex flex-col items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 
            data-aos="fade-up"
            className="text-[80px] md:text-[120px] font-seasons text-primary-cl mb-4"
          >
            SHOES
          </h1>
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col items-center"
          >
            <p className="text-primary-cl font-montserrat text-lg md:text-xl uppercase tracking-widest">
              RESTORE
            </p>
            <p className="text-primary-cl font-montserrat text-lg md:text-xl uppercase tracking-widest">
              THE BEAUTY
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 