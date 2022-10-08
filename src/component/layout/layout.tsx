import { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { BurgerBuilder } from "../../container/burger_builder/burger_builder";
import { Checkout } from "../../container/checkout/checkout";
import { SideDrawer } from "../navigation/side_drawer/side_drawer";
import { ToolbarComponent } from "../navigation/toolbar/toolbar";

export const Layout = () => {
  const [getSideDrawer, setSideDrawer] = useState(false);

  // set sideDrawer to false when screen width > 500
  const handleSideDrawerUponWindowResize = () =>
    window.innerWidth > 500 ? setSideDrawer(false) : null;

  useEffect(() =>
    window.addEventListener("resize", handleSideDrawerUponWindowResize)
  );
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Outlet />
              <ToolbarComponent toggleFunction={setSideDrawer} />
              <SideDrawer
                getSideDrawer={getSideDrawer}
                toggleFunction={setSideDrawer}
              />
            </>
          }
        >
          <Route index element={<BurgerBuilder />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};
