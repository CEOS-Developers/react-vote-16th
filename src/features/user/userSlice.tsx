import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { AppState } from "../../store";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        isLogged : false,
        useremail : '',
        password : '',
    },
    reducers: {
        login:(state,action) => {
            state.isLogged = true;
            state.useremail = action.payload.useremail;
            state.password = action.payload.password;
        }
    }
})

export const selectUser = (state : AppState) => state.user;

export default userSlice;

export const {login} = userSlice.actions;