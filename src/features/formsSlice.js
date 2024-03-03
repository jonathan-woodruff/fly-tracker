import {createSlice} from '@reduxjs/toolkit';

const options = {
    name: 'counter', //name of slice
    initialState: { //initial state of slice
        bodyTouches: 0,
        faceTouches: 0,
        kills: 0
    },
    reducers: {
        addNums: (state, action) => {
            const {type, amount} = action.payload;
            state[type] += amount;
        },
        resetNums: (state) => {
            state.bodyTouches = 0;
            state.faceTouches = 0;
            state.kills = 0;
        }
    }
};

const formsSlice = createSlice(options);

export const selectBodyTouches = (state) => state.bodyTouches;
export const selectFaceTouches = (state) => state.faceTouches;
export const selectKills = (state) => state.kills;

export const {addNums, resetNums} = formsSlice.actions;

export default formsSlice.reducer;