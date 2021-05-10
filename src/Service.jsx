import React from 'react';
import Card from './Card';
import Sdata from './Sdata'

function Service() {
  return (
      <div className="bg_image my-0">
    <div >
      <div className=' mb-5'>
        <h1 className='text-center colum'>Our Service</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4 '>
             {
                 Sdata.map((val,ind)=>{
                     return <Card key={ind}  imagesrc={val.imgsrc} title={val.title} className="colum"/>

                 })
             }
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
