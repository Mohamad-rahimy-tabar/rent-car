import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAysincCars = createAsyncThunk(
  "cars/getAsyncCars",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/api/cars");
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getAysincSingleCar = createAsyncThunk(
  "cars/getAsyncSingleCar",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/cars/${payload.tittle}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  singleCar: [],
  cars: [],
  loading: false,
  error: "",
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: {
    [getAysincCars.pending]: (state, action) => {
      return { ...state, cars: [], loading: true, error: "" };
    },
    [getAysincCars.fulfilled]: (state, action) => {
      return { ...state, cars: action.payload, loading: false, error: "" };
    },
    [getAysincCars.rejected]: (state, action) => {
      return { ...state, cars: [], loading: false, error: action.payload };
    },
    [getAysincSingleCar.fulfilled]: (state, action) => {
      return { ...state, singleCar: action.payload, loading: false, error: "" };
    },
  },
});

export default carSlice.reducer;
