import {createSlice} from '@reduxjs/toolkit';


export const unClose = createSlice({
    name: 'close',
    initialState:{we:null},
    reducers:{
        change :(state)=>{
            state.we = true
        },
        unchange:(state)=>{
            state.we = false
        }
    }
});


export const {change,unchange} = unClose.actions;
export default unClose.reducer;
