import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function Project({ CoverImage, projectName, Features, Link }) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const mainControl = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      mainControl.start("visible");
    }
  }, [inView]);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div ref={ref} className='ProjectCard' variants={container} initial="hidden" animate={mainControl}>


      <motion.div variants={item}>
        <img className="ProjectCardImage" src={CoverImage} alt={projectName} />
      </motion.div>
      <motion.div className='ProjectCardTextDiv' variants={item}>
        <motion.div>
          <p className='ProjectCardName'>{projectName}</p>
        </motion.div>
        <motion.div className='ProjectCardFeatureDiv'>
          {Features.map((feature, index) => (
            <p key={index} className="ProjectCardFeature">{feature.feature}<br /></p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Project;
