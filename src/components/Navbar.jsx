import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { CiMenuBurger } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
 const navigate =useNavigate();
  const handleDownload = () => {
    const resumePath = '/resume.pdf'; // Path to your resume file
    const link = document.createElement('a');
    link.href = resumePath;
    link.setAttribute('download', true);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
      navigate("/contact");
  };
  const handleHome = () => {
    navigate("/");
};

  return (
    <>
      <div className='NavbarParentDiv'>
        <div className='NavbarDiv'>
          <div>
            <img src='/Images/Logo.png' alt='Logo' />
          </div>
          <div className='NavbarPagesDiv'>
            <div className='NavbarPages' onClick={handleHome}>Home</div>
            <div className='NavbarPages'>About</div>
            <div className='NavbarPages'>Work</div>
            <div className='NavbarPages' onClick={handleContact}>Contact</div>
          </div>
          <div className='NavbarResume' onClick={handleDownload}>
            Resume <FiDownload />
          </div>
          <div className='NavbarBurger' onClick={() => setMenuOpen(!menuOpen)}>
            <CiMenuBurger />
          </div>
        </div>
        {menuOpen && (
          <div className='MobileMenu'>
            <div className='NavbarPages' onClick={handleHome}>Home</div>
            <div className='NavbarPages'>About</div>
            <div className='NavbarPages'>Work</div>
            <div className='NavbarPages' onClick={handleContact}>Contact</div>
            <div className='NavbarPages'  onClick={handleDownload}> Resume <FiDownload /></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
