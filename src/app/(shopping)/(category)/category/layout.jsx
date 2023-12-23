"use client";
import { useSelector } from "react-redux";
import SideBar from "../../../../../components/SideBar";

export default function CategoryLayout({ children }) {
  const { darkmode } = useSelector((state) => state.theme);
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      <div className={`${darkmode ? "bg-secondinary-Default" : "bg-primary-white"} hidden lg:block col-span-1 `}>
        <SideBar />
      </div>
      <section className="col-span-4 lg:col-span-3">{children}</section>
    </div>
  );
}
