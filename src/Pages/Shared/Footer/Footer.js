import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='d-flex justify-content-between bg-primary p-4'>
      <div className='d-flex'>
        <h3>SpaceX Skills Ltd. | </h3>
        <p className='mx-2 mt-2'>@copyrights 2022</p>
      </div>
      <div>
        <FaFacebookSquare className='me-2'></FaFacebookSquare>
        <FaTwitterSquare className='me-2'></FaTwitterSquare>
        <FaInstagramSquare className='me-2'></FaInstagramSquare>
        <FaLinkedin></FaLinkedin>
      </div>
    </div>
  );
};

export default Footer;
