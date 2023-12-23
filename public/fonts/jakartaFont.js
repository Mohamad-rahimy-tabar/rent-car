import localFont from "next/font/local";

export const jakarta = localFont({
  src: [
    {
      path: "./PlusJakartaSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-jakarta",
});
