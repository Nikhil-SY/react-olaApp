import React from 'react'
import auto from '../Assests/auto.png'
import sedan from '../Assests/sedan.png'
import suv from '../Assests/Prime_suv.jpg'
import { useSelector } from 'react-redux'
export default function Ongoing() {
    const {vehicle}=useSelector(state=>state.info)
  return (
    <div className='row '  style={{marginBottom:'30px',textAlign:'center',justifyContent:'center'}}>
    <h3 style={{marginBottom:'40px'}}>Get ready for your ride</h3>
    
    <div className='col-md-3 sm-3'>
        <div className='row' style={{border:'2px solid black',padding:'20px'}}>
            <div className='col-md-6 sm-6'>
            <img src={vehicle.image} width={80} height={80} alt='auto'/>
            </div>
            <div className='col-md-6 sm-6'>
            <p><b>{vehicle.name}</b></p>
            <p>2 km away</p>
           
            </div>
        </div>
    </div>
    </div>
  )
}
