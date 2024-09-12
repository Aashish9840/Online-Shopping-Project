import React from "react";
import { MainDisplay } from "../components/MainDisplay";
import { PopularWomen } from "../components/PopularWomen";
import { ShopBanner } from "../components/ShopBanner";
import { NewCollection } from "../components/NewCollection";

export const Shop = () => {
  return (
    <>
      <MainDisplay />
      <PopularWomen />
      <ShopBanner />
      <NewCollection />
    </>
  );
};
