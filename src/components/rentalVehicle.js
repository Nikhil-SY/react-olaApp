import React from 'react'
import auto from '../Assests/auto.png'
import sedan from '../Assests/sedan.png'
import suv from '../Assests/Prime_suv.jpg'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ongo } from '../Redux/dataSlice'
export default function RentalVehicle() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClickSub=(vehicle,image)=>{
      alert('Ride Accepted')
      dispatch(ongo({name:vehicle,img:image}))
      navigate('/ongoing')
  }
  return (
    <div className='row' style={{marginBottom:'30px'}}>
    <h3 style={{marginBottom:'40px'}}>Available rides</h3>
  
    <div className='col-md-3 sm-3'>
        <div className='row'>
            <div className='col-md-6 sm-6'>
            <img src={sedan} width={80} height={80} alt='auto'/>
            </div>
            <div className='col-md-6 sm-6'>
            <p><b>Prime Sedan</b></p>
            <p>Rs 12 per km</p>
            <Button type='click'  onClick={()=>handleClickSub('Prime Sedan',sedan)}>Book</Button>
            </div>
        </div>
    </div>
    <div className='col-md-3 sm-3'>
    <div className='row'>
    <div className='col-md-6 sm-6'>
    <img src={suv} width={80} height={80} alt='auto'/>
    </div>
    <div className='col-md-6 sm-6'>
    <p><b>Prime SUV</b></p>
    <p>Rs 16 per km</p>
    <Button type='click'  onClick={()=>handleClickSub('Prime SUV',suv)}>Book</Button>
    </div>
</div>
    </div>
      
    </div>
  )
}
