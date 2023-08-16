import { createSlice } from '@reduxjs/toolkit';
import { getPost } from './postApi';

// create a post slice
const postSlice = createSlice({
  name: 'post',
  initialState: {
    postData: null,
    message: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // register user start
      .addCase(getPost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.message = action.payload.message;
      });
  },
});

// selectors export
export const getPostData = (state) => state.postStore;

// actions export
export const { setMsgEmpty } = postSlice.actions;

// defaultly export reducers
export default postSlice.reducer;
