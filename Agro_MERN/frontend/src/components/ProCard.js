import './Pro.css'
import React from 'react'
import {NavLink} from "react-router-dom";

const ProCard = (props) => {
  return (
    <div className='project-card'>
            <img src={props.img} alt="img"></img>
            <h2 className='project-title'>{props.name}</h2>
            <div className='pro-details'>
                <p>{props.price}</p>
                <div className='pro-btns'>
                   <NavLink to={props.seller} className="btn">Add To Cart</NavLink>
                </div>
          </div>
    </div>
  )
}
//Title - name, 
//text - price
//view - seller

export default ProCard;
