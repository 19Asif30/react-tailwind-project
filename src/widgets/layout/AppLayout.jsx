import { Drawer } from "@material-tailwind/react";
import React, { useState } from "react";
import { Navbar, Sidebar } from ".";
import classNames from "classnames";

export const AppLayout = ({ children, routes }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sidebarLayout, setSidebarLayout] = useState(true);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth <= 1140 && setSidebarOpen(false),
    );
  }, []);
  return (
    <>
      <div
        className={`${"container flex max-w-full"} ${
          sidebarOpen ? " fixed" : ""
        }`}
      >
        {sidebarOpen && (
          <Drawer
            className="drawer"
            open={sidebarOpen}
            onClose={setSidebarOpen}
          >
            <Sidebar />
          </Drawer>
        )}
        {sidebarLayout && (
          <div className="hidden xl:block">
            <Sidebar />
          </div>
        )}

        <div
          className={classNames(
            "container-fluid l py-2 px-2 lg:px-4 ml-0 w-full",
            {
              "xl:ml-[17rem]": sidebarLayout,
            },
          )}
        >
          <Navbar
            routes={routes}
            openSidebar={sidebarOpen}
            setOpenSidebar={setSidebarOpen}
            setSidebarLayout={setSidebarLayout}
            sidebarLayout={sidebarLayout}
          />
          <div className="container-fluid pt-2 px-2 shadow-2xl ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
