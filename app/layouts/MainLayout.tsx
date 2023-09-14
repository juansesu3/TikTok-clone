
import React from "react";
import { usePathname } from "next/navigation";

interface Props {}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`flex justify-between mx-auto w-full lg:px2.5 px-0 ${
          pathname == "/" ? "max-w-[1140px]" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default MainLayout;
