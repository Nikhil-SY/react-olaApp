import React, { useState } from "react";
import RentalVehicle from "./rentalVehicle";
import { current,dest } from '../Redux/dataSlice'
import { useDispatch } from 'react-redux'
export default function Rental() {
  const [ride, setRide] = useState(false);
  const handleClick = () => {
    setRide(true);
  };
  const dispatch = useDispatch()
  const currentLoc = (e) =>{
    let cur = e.target.value
    dispatch(current(cur))
  }

  return (
    <div class="row mx-auto">
      <div class="col-md-4 mx-auto my-5">
        <input
          class="form-control me-auto"
          type="text"
          placeholder="Current location"
          onChange={currentLoc}
        />
      </div>
      <div class="col-md-4 mx-auto my-5">
        <select
          style={{
            padding: "8px",
            border: "2px solid black",
            boxShadow: "5px grey",
          }}
        >
          <option>Select package</option>
          <option>1hr 10km</option>
          <option>1hr 15km</option>
          <option>2hr 20km</option>
          <option>2hr 25km</option>
          <option>3hr 30km</option>
          <option>4hr 40km</option>
          <option>6hr 60km</option>
          <option>8hr 80km</option>
          <option>10hr 100km</option>
        </select>
      </div>
      <div class="col-md-2 mx-auto my-5">
        <button type="click" class="btn btn-secondary" onClick={handleClick}>
          Search for vehicle
        </button>
      </div>
      {ride ? (
        <div>
          <RentalVehicle />
        </div>
      ) : null}
    </div>
  );
}
