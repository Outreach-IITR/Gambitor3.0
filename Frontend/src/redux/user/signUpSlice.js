import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  phoneNumber: null,
  userId: null,
  isVerified: false,
  phoneIsVerified: false,
  loading : false,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    startIsVerified:(state) =>{
      state.loading=true;
    },

    setIsVerified: (state, action) => {
      state.isVerified = action.payload;
      state.loading = false;
    },
    startPhoneIsVerified:(state) =>{
      state.loading=true;
    },
    endVerify:(state)=>{
      state.loading=false;
    },
    setPhoneIsVerified: (state, action) => {
      state.phoneIsVerified = action.payload;
      state.loading=false;
    },
    resetSignUpState: (state) => {
      state.email = null;
      state.phoneNumber = null;
      state.userId = null;
      state.isVerified = false;
      state.phoneIsVerified = false;
    },
  },
});

export const {
  setEmail,
  setPhoneNumber,
  setUserId,
  setIsVerified,
  startIsVerified,
  startPhoneIsVerified,
  setPhoneIsVerified,
  resetSignUpState,
  endVerify,
} = signUpSlice.actions;

export default signUpSlice.reducer;
