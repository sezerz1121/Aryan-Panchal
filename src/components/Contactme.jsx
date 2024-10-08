import React, { useState, useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion,useAnimation,useInView} from 'framer-motion';
import axios from 'axios';


function Contactme() {
    const[name,setName]=useState(null);
    const[email,setEmail]=useState(null);
    const[message,setMessage]=useState(null);
    const buttonVariants = {
        rest: { scale: 1, backgroundColor: "black", color: "white" },
        hover: { scale: 1.05, backgroundColor: "white", color: "black" },
        pressed: { scale: 1.1 },
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
      }
      const mainControl =useAnimation();
      const ref =useRef(null);
      const inView = useInView(ref,{once:true});
      useEffect(()=>{
        if(inView)
        {
          mainControl.start("visible");
        }
      },[inView])
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }

    const handleChange=(e)=>
    {
        const{name,value}= e.target;
        if(name==='yourName')
        {
            setName(value);
        }
        else if(name==='yourEmail')
        {
            setEmail(value);
        }
        else
        {
            setMessage(value);
        }
    }
    const handleSubmit = async () => {
        try {
           
            
            const response = await axios.post(`${import.meta.env.VITE_URL}/project/message`, {name,email,message});
            console.log('message sent:', response.data);
            setName("");
            setMessage("");
            setEmail("");
            
        } catch (error) {
            console.error('Error creating User:', error);
            
            
        }
    };
  return (
    <>  <motion.div className='contactmeDIvParent' ref={ref} variants={container} initial="hidden" animate={mainControl}>

        <motion.div className='ContactmeDiv'>
          <div className='ellipse'></div>
          <div className='ellipseIV'></div>
          <div className='ellipseV'></div>
        <motion.div variants={item}><input className='InputField' name='yourName' type='text' onChange={handleChange} placeholder='Your name' value={name}/></motion.div> 
        <motion.div variants={item}><input className='InputField' name='yourEmail' type='mail' onChange={handleChange} placeholder='Email' value={email}/></motion.div> 
        <motion.div variants={item}><input className='InputField'name='yourMessage' type='text' onChange={handleChange} placeholder='Message' value={message}/></motion.div> 
        </motion.div>
        <motion.div variants={item} className='ContactmeDiv'>
            <motion.div
                className='ContactmeSubmitButton'
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="pressed"
                style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  width: '150px', 
                  height: '50px', 
                  backgroundColor: 'black', 
                  color: 'white', 
                  fontSize: '24px', 
                  borderRadius: '24px', 
                  cursor: 'pointer'
                }}
                onClick={handleSubmit}
            >
                Submit
            </motion.div>
        </motion.div>
        </motion.div>
    </>
  )
}

export default Contactme
