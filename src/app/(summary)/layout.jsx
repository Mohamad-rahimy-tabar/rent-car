import "../globals.css";
import Footer from "../../../components/Footer";
import HeaderWithoutSearchbox from "../../../components/HeaderWithoutSearchbox";
import { jakarta } from "../../../public/fonts/jakartaFont";



export const metadata = {
  title: "Rent Car App",
  description: "Generated by Mohamad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} font-sans`}>
      <body className="bg-[#F6F7F9]">
        <HeaderWithoutSearchbox />
        <div className="w-full flex container mx-auto  max-w-screen-xl flex-col items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
