import React, { useState } from 'react'
import OutstationVehicle from './outstationVehicle'
import { current,dest } from '../Redux/dataSlice'
import { useDispatch } from 'react-redux'
export default function Outstation() {
  const[ride,setRide] = useState(false)
  const handleClickMain = () => {
    setRide(true)
  }
  const dispatch = useDispatch()
  const currentLoc = (e) =>{
    let cur = e.target.value
    dispatch(current(cur))
  }
  const destLoc = (e) =>{
    let des = e.target.value
    dispatch(dest(des))
  }
  return (
    <div class='row mx-auto'>
    <div class="col-md-3 mx-auto my-5">
    <input class="form-control me-auto" type="text"  placeholder="Current location" onChange={currentLoc}/></div>
    <div class="col-md-3 mx-auto my-5">
    <input class="form-control me-auto" type="text" placeholder="Destination" onChange={destLoc}/></div>
    <div class="col-md-2 mx-auto my-5"><button type="click" class="btn btn-secondary" onClick={handleClickMain}>Search for vehicle</button>
    
    
  </div>
  {ride?<div><OutstationVehicle/></div>:null}
  </div>
  )
}
