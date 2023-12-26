import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../services/authService";
import { clearToken } from "../../services/tokenService";

// Create the login async thunk
export const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const token = await login(email, password);
      return token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Create the registration async thunk
export const registerAsync = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const response = await register(username, email, password);
      // Extract the serializable data from the response and return it
      const responseData = response.data; // Modify this to access the appropriate data in your response
      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  loading: false,
  isLoggedIn: false,
  isRegistered: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      clearToken(); // Clear the token
    },
    registerSuccess: (state) => {
      state.isRegistered = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        // Do not store non-serializable data like Axios headers in the state
        state.isRegistered = true;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registerSuccess,
} = authSlice.actions;

export default authSlice.reducer;
