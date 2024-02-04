import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name:'info',
    initialState:{
        show:false,
        mobile:0,
        password:'',
        currentLocation:'',
        destination:'',
        vehicle:{
            name:"",
            image:{}
        }
    },
    reducers:{
        log:(state,action)=>{
             state.show= true
        },
        username:(state,action)=>{
             state.mobile = parseInt(action.payload)
        },
        password:(state,action)=>{
            state.password = action.payload
        },
        current:(state,action)=>{
            state.currentLocation = action.payload
        },
        dest:(state,action)=>{
            state.destination=action.payload
        },
        ongo:(state,action)=>{
            state.vehicle.name =action.payload.name
            state.vehicle.image=action.payload.img
        }
    }
})
export const {log,username,password,current,dest,ongo} = dataSlice.actions
export default dataSlice.reducer