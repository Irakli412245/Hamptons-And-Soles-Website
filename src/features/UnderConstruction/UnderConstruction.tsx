import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <h1 className="font-seasons text-[28px] leading-[150%] tracking-[0.1em] uppercase text-center text-[#fc9] font-normal mb-6">
          Under Construction
        </h1>
        <p className="font-montserrat text-[14px] leading-[150%] tracking-[0.1em] uppercase text-center text-[#fc9] font-light mb-8 max-w-[600px]">
          We're working hard to bring you something amazing. Please check back soon.
        </p>
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          className="w-16 h-16 mx-auto mb-8"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-full h-full"
          >
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        </motion.div>
        <p className="font-montserrat text-[14px] leading-[150%] tracking-[0.1em] uppercase text-center text-[#fc9] font-light opacity-70 mb-8">
          Coming Soon
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/"
            className="inline-block px-8 py-4 border border-current tracking-[0.1em] uppercase hover:opacity-50 transition-opacity duration-300 font-montserrat text-[14px] leading-[150%] text-[#fc9] font-light"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;
