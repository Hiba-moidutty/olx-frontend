import { configureStore } from "@reduxjs/toolkit";
import {userReducers} from "./usernameSlice";
import { userImageReducers } from './userImageSlice';
import cartReducer from "./cart";


const store = configureStore({
  reducer: {
    username: userReducers,
    userImage : userImageReducers,
    // cart : cartReducer,
  },
});

export default store;


