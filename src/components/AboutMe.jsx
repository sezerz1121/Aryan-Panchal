import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function AboutMe() {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
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
  const infoControls = useAnimation();
  const infoDataControls = useAnimation();

  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const infoDataRef = useRef(null);
  const underlineRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true });
  const infoInView = useInView(infoRef, { once: true });
  const infoDataInView = useInView(infoDataRef, { once: true });
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

  useEffect(() => {
    if (infoInView) {
      infoControls.start('visible');
    }
  }, [infoInView, infoControls]);

  useEffect(() => {
    if (infoDataInView) {
      infoDataControls.start('visible');
    }
  }, [infoDataInView, infoDataControls]);

  return (
    <div className='AboutMeParentDiv'>
      <motion.div
        className='AboutMeTitle'
        ref={titleRef}
        variants={textVariants}
        initial='hidden'
        animate={titleControls}
      >
        <div className='AboutMeTitleText'>
          About me
          <motion.div
            className='Underline'
            ref={underlineRef}
            initial={{ width: 0 }}
            animate={underlineControls}
          />
        </div>
      </motion.div>
      <motion.div
        className='AboutMeInfo'
        ref={infoRef}
        variants={containerVariants}
        initial='hidden'
        animate={infoControls}
      >
        <motion.div className='AboutmeInfoImageDiv' variants={itemVariants}>
          <img src='/Images/Sticker2.png' alt='Sticker' />
          <div  className='ellipseI'></div>
          <div className='ellipseII'></div>
          <div className='ellipse'></div>

        </motion.div>
        <div className='AboutMeInfoText'>
          <motion.div variants={itemVariants}>Passionate Data Analyst and</motion.div>
          <motion.div variants={itemVariants}>Developer blending technical</motion.div>
          <motion.div variants={itemVariants}>expertise with creative</motion.div>
          <motion.div variants={itemVariants}>problem-solving to drive</motion.div>
          <motion.div variants={itemVariants}>insightful decision-making and</motion.div>
          <motion.div variants={itemVariants}>
            innovative solutions, optimizing efficiency and user experience.
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
