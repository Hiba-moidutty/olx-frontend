import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const name = 'username'

const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions()

const slice = createSlice({
  name,
  initialState,
  reducers
})

function createInitialState(){
  return {
    value: null
  }
}

function createReducers(){
  return {
    setUsername,
  }

  function setUsername(state, action){
    state.value = action.payload;
  }
}

function createExtraActions(){
  return {
    logOut: logOut()
  }
  function logOut(){
      return createAsyncThunk(
        `${name}/logout`,
        async function (arg,{dispatch}){
          try{
            Cookies.remove('jwt')
            dispatch(userAction.setUsername(null));
            let navgiate = useNavigate()
            const nav = ()=>navgiate('/')
            nav()
            
          } catch (error) {
              console.log(error)
          }
        }
      )
  }
}

export const userAction = {...slice.actions,...extraActions}
export const userReducers = slice.reducer


export default userReducers