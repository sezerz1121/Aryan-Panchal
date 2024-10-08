import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate =useNavigate();
  const handleContact = () => {
    navigate("/contact");
};
const handleHome = () => {
  navigate("/");
};
  const handleRedirect = () => {
  window.open('https://www.linkedin.com/in/aayush-panchal-8a4a961b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank');
};
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
    <>
        <motion.div className='FooterParentDiv' ref={ref} variants={container} initial="hidden" animate={mainControl}>
          <div  className='ellipseI'></div>
          <div className='ellipseII'></div>
          <div className='ellipse'></div>
            <motion.div className='FooterDiv ' variants={item}>
                <motion.div className='FooterImage ' variants={item}>
                    <img  src='/Images/Sticker3.png' />
                </motion.div>
                <motion.div className='FooterText'>
                          <motion.div className='FooterTextSocials'>
                                <motion.div  variants={item} className='FooterTextSocialsText'>Professional Links</motion.div>
                               <motion.div  variants={item} className='FooterTextSocialsTextI' onClick={handleRedirect}>LinkedIn</motion.div>
                                <motion.div  variants={item} className='FooterTextSocialsTextI'>Instagram</motion.div>

                          </motion.div>
                          <motion.div className='FooterTextSocials'>
                                <motion.div  variants={item} className='FooterTextSocialsText'>Quick Menu</motion.div>
                                <motion.div  variants={item} className='FooterTextSocialsTextI' onClick={handleHome}>Home</motion.div>
                                <motion.div variants={item} className='FooterTextSocialsTextI'>About</motion.div>
                                <motion.div variants={item} className='FooterTextSocialsTextI'>Work</motion.div>
                                <motion.div variants={item} className='FooterTextSocialsTextI' onClick={handleContact}>Contact</motion.div>

                          </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    </>
  )
}

export default Footer
