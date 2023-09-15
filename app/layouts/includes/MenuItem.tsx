"use client";
import { MenuItemsTypes } from "@/app/types";
import React from "react";

const MenuItem = ({ iconString, colorString, sizeString }: MenuItemsTypes) => {
  return (
    <>
      <div className="w-full flex items-center hover:bg-gray-100 p-2.5  rounded-md">
        <div className="flex items-center lg:mx-0 mx-auto"></div>
      </div>
    </>
  );
};

export default MenuItem;
