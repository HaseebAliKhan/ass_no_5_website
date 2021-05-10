import React from 'react';
import Common from './Common';
import web from './Image/services-7.svg';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div>
      <section id='header' className='d-flex align-items-center bg_image'>
        <div className='container-fluid  '>
          <div className='row'>
            <div className='col-10 mx-auto '>
              <div className='row'>
                <div className='col-md-4 mt-5 col-12 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column '>
                  <h1 className='colo'>
                    {' '}
                    Welcome to About Page{' '}
                    <strong className='color'>HAK'sCode</strong>{' '}
                  </h1>

                  <div className='mt-3'>
                    <NavLink to='/contact' className='primary btn'>
                      Contact Us
                    </NavLink>
                  </div>
                  <p className='my-3 colo'>
                    HAK'sCode is a web and Mobile development agency based in
                    Pakistan, Karachi. Working with both local and international
                    projects, we have over 14 years of experience and 400+
                    finished projects under our belt.<p/> 
                    
                    Our talented professionals
                    specialize in websites, webshops, design and custom digital
                    solutions. Every solution we offer is always based on our
                    customer’s needs. The end result is comparable to a
                    tailor-made suit that fits you perfectly – it’s comfortable,
                    exudes professionalism and catches the eye.
                  </p>
                </div>
                <div className='col-lg-8 order-lg-1 pt-5 order-2  '>
                  <img src={web} className='animated' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
