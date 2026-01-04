'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import * as React from 'react';

interface ScaleProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export default function Scale({
  children,
  delay = 0,
  duration = 0.4,
  ...props
}: ScaleProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0.9 
      }}
      animate={{ 
        opacity: 1, 
        scale: 1 
      }}
      transition={{ 
        duration, 
        delay,
        ease: 'easeOut'
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}