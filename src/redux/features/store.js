import themeReducer from "./theme/themeSlice";
import carsReducer from "./cars/carsSlices";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cars: carsReducer,
  },
});
