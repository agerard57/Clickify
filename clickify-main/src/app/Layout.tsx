import React, { FC } from "react";

import { Navbar } from "../core/components/Navbar";

interface Props {
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
    </>
  );
};
