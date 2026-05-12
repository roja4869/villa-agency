import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => (
  <motion.div
    className="page-wrapper"
    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
    transition={{ 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }}
    style={{ position: 'relative', width: '100%', minHeight: '100vh' }}
  >
    {children}
  </motion.div>
);


export default PageWrapper;
