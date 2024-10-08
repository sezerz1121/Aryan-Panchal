import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ProjectsRender from './ProjectsRender.jsx';
import Footer from './Footer.jsx';

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.19,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const underlineControls = useAnimation();
  const titleControls = useAnimation();
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const underlineInView = useInView(underlineRef, { once: true });

  useEffect(() => {
    if (underlineInView) {
      underlineControls.start({
        width: '100%',
        transition: {
          duration: 0.6,
          delay: 0.9,
        },
      });
    }
  }, [underlineInView, underlineControls]);

  useEffect(() => {
    if (titleInView) {
      titleControls.start('visible');
    }
  }, [titleInView, titleControls]);

  return (
    <div className='ProjectParentDiv'>
                    
      <motion.div
        className='AboutMeTitle'
        ref={titleRef}
        variants={textVariants}
        initial='hidden'
        animate={titleControls}
      >
        <div className='AboutMeTitleText'>
          Projects
          <motion.div
            className='Underline'
            ref={underlineRef}
            initial={{ width: 0 }}
            animate={underlineControls}
          />
        </div>
      </motion.div>
      <ProjectsRender />
      <Footer /> 
    </div>
  );
}

export default Projects;
