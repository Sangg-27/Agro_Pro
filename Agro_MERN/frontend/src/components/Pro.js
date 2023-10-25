import './Pro.css'
import React from 'react'
import ProCard from './ProCard';
import ProData from './ProData';

const Pro = () => {
  return (
      <div className='work-container'>
         <h1 className='project-heading'> Our Products </h1>
         <div className='project-container'>
            {ProData.map((val,ind)=>{
                return (
                    <ProCard 
                    Key={ind}
                    img={val.img}
                    name={val.name}
                    price={val.price}
                    seller={val.seller}
                    />
                )
            })}
      </div>
      </div>
  );
}

export default Pro
