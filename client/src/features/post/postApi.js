import { createAsyncThunk } from '@reduxjs/toolkit';

// register a single user
export const getPost = createAsyncThunk('auth/getPost', async (data) => {
  try {
    const response = await axios.get(`http://localhost:5050/api/v1/post`);
    console.log(response);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
