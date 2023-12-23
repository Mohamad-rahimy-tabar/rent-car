"use client";
import "../../globals.css";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import { jakarta } from "../../../../public/fonts/jakartaFont";
import { useSelector } from "react-redux";



export default function RootLayout({ children }) {
  const { darkmode } = useSelector((state) => state.theme);
  return (
    <html lang="en" className={`${jakarta.variable} font-sans`}>
      <body className={`${darkmode?"bg-secondinary-dark-900":"bg-[#F6F7F9]"} `}>
        <Header />
        <div className="w-full flex container mx-auto  max-w-screen-xl flex-col items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
