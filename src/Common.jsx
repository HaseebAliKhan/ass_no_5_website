import React from 'react';
import Brain from './Image/Intro_Brain.svg'
import Front from './Image/Intro_Front_Layer.svg'
import Factroy from './Image/Intro_Featured_Image_Empty.svg'
import { NavLink } from 'react-router-dom';

function Common() {
  return (
    <div >
      <section className='d-flex align-items-center bg_image'>
        <div className='container-fluid  '>
          <div className='row'>
            <div className='col-10 mx-auto '>
              <div className='row'>
                <div className='col-md-4 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column siz'>
                  <h1 className="colo"> Grow Your Business With <strong className="color">HAK'sCode</strong> </h1>
                  
                  <p className='my-3 colo'>
                  We are the team of talented developers making websites and mobile apps
                  </p>
                  <div className='mt-3'>
                    <NavLink to='/service' className='primary btn'>
                    Get Started
                    </NavLink>
                  </div>
                </div>
                <div className='col-lg-8 order-lg-2 order-1 header-img header-container-image'>
                  <img src={Front} className="header-front" alt=''/>
                  <img src={Factroy}  alt=''/>
                  <img src={Brain} className="header-brain" alt=''/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;
