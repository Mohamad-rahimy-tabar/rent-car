"use client";
import { store } from "@/redux/features/store";
import { Provider } from "react-redux";

function RootLayout({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default RootLayout;
