"use client"
import React, { useEffect, useState } from "react";

interface Props {}

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
  <>
    {isClient ? <div>{children}</div> : null}
  </>
  );
};

export default ClientOnly;
