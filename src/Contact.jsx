import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ar from './Image/contact-img.svg';

function Contact() {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
e.preventDefault();
alert(`${data.fullname}`);
  };

  return (
    <>
      <div>
        <section id='header'  data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className='d-flex align-items-center bg_image '>
          <div className='container-fluid pt-5 '>
            <div className='row'>
              <div className='col-10 mx-auto pt-5 '>
                <div className='row '>
                  <div className='col-lg-5 order-lg-2 order-1 pt-5  mt-5 gy-5'>
                    <form onSubmit={formSubmit}>
                      <div className='mb-3'>
                        <label
                          for='exampleFormControlInput1'
                          className='form-label colum'
                        >
                          Full Name
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          name='fullname'
                          value={data.fullname}
                          onChange={InputEvent}
                          id='exampleFormControlInput1'
                          placeholder='Enter your name'
                        />
                      </div>
                      <div className='mb-3'>
                        <label
                          for='exampleFormControlInput1'
                          className='form-label colum'
                        >
                          Phone
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          name='phone'
                          value={data.phone}
                          onChange={InputEvent}
                          id='exampleFormControlInput1'
                          placeholder='Enter mobile no'
                        />
                      </div>
                      <div className='mb-3'>
                        <label
                          for='exampleFormControlInput1'
                          className='form-label colum'
                        >
                          Email address
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          name='email'
                          value={data.email}
                          onChange={InputEvent}
                          id='exampleFormControlInput1'
                          placeholder='name@example.com'
                        />
                      </div>
                      <div className='mb-3'>
                        <label
                          for='exampleFormControlTextarea1'
                          className='form-label colum'
                        >
                          Message
                        </label>
                        <textarea
                          name=''
                          value={data.msg}
                          onChange={InputEvent}
                          className='form-control'
                          id='exampleFormControlTextarea1'
                          rows='3'
                        ></textarea>
                      </div>
                      <div className='col-12'>
                        <button className='btn primary' type='submit'>
                          Submit form
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className='col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column siz pt-5 mt-5 gy-5'>
                    <img src={ar} className='animated mt-5 pt-5 mt-5 gy-5' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
