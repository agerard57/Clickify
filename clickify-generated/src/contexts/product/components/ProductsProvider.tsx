import React, { FC, ReactNode } from "react";
import { appProducts } from "../assets";
import { ProductsContext } from "../contexts";

interface Props {
  children: ReactNode;
}

export const ProductsProvider: FC<Props> = ({ children }) => {
  return <ProductsContext.Provider value={appProducts}>{children}</ProductsContext.Provider>;
};
