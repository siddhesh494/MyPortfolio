import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";


const appStore = configureStore(
  {
    reducer: {
      language: languageSlice
    }
  }
)

export default appStore