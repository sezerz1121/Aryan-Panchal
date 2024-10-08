import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
function HeroSection() {
  const navigate =useNavigate();
  const handleContact = () => {
    navigate("/contact");
};
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.20,
        staggerChildren: 0.19
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const mainControl = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
  if (inView) {
  mainControl.start({
  x: ['100%', '-100%'],
  transition: { repeat: Infinity, duration: 6, ease: 'linear' }
  });
  }
  }, [inView, mainControl]);

  return (
    <div className='HeroSectionParentDiv'>
      <div className='ellipse'></div>
      <Navbar />
      <div className='HeroSectionTextParent'>
        <div className='HeroSectionIntro' ref={ref}>
          <motion.div className='HeroSectionIntroText' variants={container} initial="hidden" animate="visible">
            <div className='HeroSectionIntroTopText'>
            <motion.span variants={item} className="small-text">I'm</motion.span>
              <motion.div className="large-text" variants={item}>
                <span>Aryan</span><br />
                <span>Panchal</span>
              </motion.div>
              
            </div>
            <motion.div className='HeroSectionIntroBottomText'  variants={item}>
              Passionate Data Analyst and Developer,
              <br /> merging technical skills with creative
              <br /> problem-solving to drive efficiency and
              <br /> innovation.
            </motion.div>
            <div>
              <motion.div className='gradient-button' variants={item} onClick={handleContact}>
                Contact me
                <motion.div className='gradient-button-emoji' variants={item}>
                  📩
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className='ImageDiv' variants={container} initial="hidden" animate="visible">
            <motion.img  variants={item} className="Image" src='/Images/Sticker.png' alt='sticker' />
            <div  className='ellipseI'></div>
            <div className='ellipseII'></div>
          </motion.div>
        </div>
      </div>

      <div className='HeroSectionEndPartition'>
        <motion.div
        className='HeroSectionEndPartitionContent'
        initial={{ x: '100%' }}
        animate={mainControl}
        ref={ref}
        >
          <div className='HeroSectionEndPartitionText'>
            Microsoft Power BI
          </div>
          <div className='HeroSectionEndPartitionStar'>
            <img src='/Images/Soft Star.png' alt='star' />
          </div>
          <div className='HeroSectionEndPartitionText'>
            MySQL & NoSQL
          </div>
          <div className='HeroSectionEndPartitionStar'>
            <img src='/Images/Soft Star.png' alt='star' />
          </div>
          <div className='HeroSectionEndPartitionText'>
            AI & ML Algorithms
          </div>
          <div className='HeroSectionEndPartitionStar'>
            <img src='/Images/Soft Star.png' alt='star' />
          </div>
          <div className='HeroSectionEndPartitionText'>
            AWS Service
          </div>
          <div className='HeroSectionEndPartitionStar'>
            <img src='/Images/Soft Star.png' alt='star' />
          </div>
          <div className='HeroSectionEndPartitionText'>
            Hadoop & MongoDB
          </div>
          <div className='HeroSectionEndPartitionStar'>
            <img src='/Images/Soft Star.png' alt='star' />
          </div>
          <div className='HeroSectionEndPartitionText'>
            Django & Flask
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
