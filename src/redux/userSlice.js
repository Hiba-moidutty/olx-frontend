import { createSlice , combineReducers} from "@reduxjs/toolkit";

// const rootReducers = combineReducers({
//   change : changeUsername,
//   image: changeUserImage
// })

const userSlice = createSlice({
  name: "username",
  initialState: "",
    // userImage:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

  reducers: {
    setUsername: (state, action)=>{
      return action.payload
    }
  },
  extraReducers:{
    logout:(state,action)=>{
      state.username = null;
      state.userImage ="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    },
  },
})

const rootReducer = combineReducers({
  username: userSlice.reducers,
 
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducers ;

