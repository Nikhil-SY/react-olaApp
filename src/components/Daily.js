import React, { useState } from "react";
import DailyVehicle from "./dailyVehicle";
import { useDispatch } from "react-redux";
import { current, dest } from "../Redux/dataSlice";

export default function Daily() {
  const [curLoc, setCurLoc] = useState("");
  const [desLoc, setDesLoc] = useState("");
  const [ride, setRide] = useState(false);
  const handleClickMain = () => {
    console.log("called");
    setRide(true);
  };
  const dispatch = useDispatch();
  const currentLoc = (e) => {
    setCurLoc(e.target.value);
    console.log(curLoc);
    dispatch(current(curLoc));
  };
  const destLoc = (e) => {
    setDesLoc(e.target.value);
    console.log(desLoc);
    dispatch(dest(desLoc));
  };
  return (
    <div>
      <div className="row mx-auto">
        <div className="col-md-3 mx-auto my-5">
          <input
            className="form-control me-auto"
            type="text"
            value={curLoc}
            placeholder="Current location"
            onChange={currentLoc}
          />
        </div>
        <div className="col-md-3 mx-auto my-5">
          <input
            className="form-control me-auto"
            type="text"
            value={desLoc}
            placeholder="Destination"
            onChange={destLoc}
          />
        </div>
        <div className="col-md-2 mx-auto my-5">
          <button
            type="click"
            class="btn btn-secondary"
            onClick={handleClickMain}
          >
            Search for vehicle
          </button>
        </div>
      </div>
      {ride ? (
        <div>
          <DailyVehicle />
        </div>
      ) : null}
    </div>
  );
}
