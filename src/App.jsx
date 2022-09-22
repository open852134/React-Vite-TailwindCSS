import React, { useState } from "react";
import classnames from "classnames";
import "./App.css";

const NAVBAR_ITEMS = [
  {
    label: "Features",
    icon: "./assets/icon-arrow-down.svg",
    children: [
      { label: "Todo List", icon: "./assets/icon-todo.svg" },
      { label: "Calendar", icon: "./assets/icon-calendar.svg" },
      { label: "Reminders", icon: "./assets/icon-reminders.svg" },
      { label: "Planning", icon: "./assets/icon-planning.svg" },
    ],
  },
  {
    label: "Company",
    icon: "./assets/icon-arrow-down.svg",
    children: [{ label: "History" }, { label: "Our Team" }, { label: "Blog" }],
  },
  { label: "Careers" },
  { label: "About" },
];

function App() {
  const [isMemnuOpened, setIsMemnuOpened] = useState(false);

  const handleMenuTrigger = () => {
    setIsMemnuOpened((preState) => !preState);
  };

  return (
    <div className="app bg-almostWhite h-screen w-screen">
      <nav className="relative mx-auto px-3 py-3 mb-10">
        <div className="flex items-center justify-between">
          <div className="flex">
            <img src="./assets/logo.svg" className="inline-block" />

            {/* Menu Item Desktop */}
            <div className="hidden xl:flex space-x-4 ml-6">
              {NAVBAR_ITEMS.map((navItem) => (
                <a className="dropdown relative flex items-center text-mediumGray hover:text-almostBlack cursor-pointer">
                  <p className="text-mediumGray hover:text-almostBlack">
                    {navItem.label}
                  </p>
                  {navItem.icon && (
                    <img
                      className="dropdown-icon ml-1 transition-all duration-300"
                      src={navItem.icon}
                    />
                  )}

                  {Array.isArray(navItem.children) && (
                    <ul className="dropdown-menu opacity-0 invisible absolute top-8 bg-almostWhite shadow-navBar p-5 space-y-3 rounded-md w-[140px] transition-all duration-300">
                      {navItem.children.map((childItem) => (
                        <li className="text-mediumGray hover:text-almostBlack flex items-center w-auto">
                          {childItem.icon && (
                            <img
                              src={childItem.icon}
                              className="inline-block mr-2"
                            />
                          )}
                          {childItem.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="auxiliary-actions hidden xl:flex space-x-4">
            <button
              type="button"
              className="text-mediumGray hover:text-almostBlack"
            >
              Login
            </button>
            <button
              type="button"
              className="text-mediumGray rounded-xl border-mediumGray border p-2 hover:border-almostBlack hover:text-almostBlack"
            >
              Register
            </button>
          </div>
          <button
            id="menu-button"
            className="hamburger focus:outline-none xl:hidden w-[32px] h-[28px] flex flex-col justify-around"
            onClick={handleMenuTrigger}
          >
            <img src="./assets/icon-menu.svg" />
          </button>
        </div>

        {/* Menu Item Mobile */}
        <div
          className={classnames(
            "xl:hidden fixed right-0 top-0 bg-almostBlack/70 w-full h-full",
            {
              "opacity-0 invisible": !isMemnuOpened,
            }
          )}
        >
          <div
            className={classnames(
              "w-72 bg-almostWhite p-5 h-full ml-auto transition",
              {
                "translate-x-0": isMemnuOpened,
                "translate-x-full": !isMemnuOpened,
              }
            )}
          >
            <button className="ml-auto block" onClick={handleMenuTrigger}>
              <img src="./assets/icon-close-menu.svg" />
            </button>

            <ul className="space-y-6 text-lg mb-8">
              {NAVBAR_ITEMS.map((navItem) => (
                <li className="dropdown">
                  <a className="flex items-center text-mediumGray hover:text-almostBlack cursor-pointer">
                    {navItem.label}
                    {navItem.icon && (
                      <img
                        className="dropdown-icon ml-1 transition-all duration-300"
                        src={navItem.icon}
                      />
                    )}
                  </a>

                  {Array.isArray(navItem.children) && (
                    <ul className="dropdown-menu h-0 opacity-0 invisible ml-5 mt-3 space-y-3">
                      {navItem.children.map((childItem) => (
                        <li className="text-mediumGray hover:text-almostBlack flex items-center w-auto">
                          {childItem.icon && (
                            <img src={childItem.icon} className="mr-2" />
                          )}
                          {childItem.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="text-lg block w-full mb-8 text-center text-mediumGray hover:text-almostBlack"
            >
              Login
            </button>
            <button
              type="button"
              className="text-lg block w-full text-mediumGray rounded-xl border-mediumGray border p-2 hover:border-almostBlack hover:text-almostBlack"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      <section
        className={[
          "flex-col-reverse",
          "w-screen",
          "justify-center",
          "flex",
          "xl:flex-row",
          "mx-auto",
          "xl:w-9/12",
        ].join(" ")}
      >
        <div className="flex flex-col container mx-auto items-start justify-center text-center mt-5 xl:mt-0 xl:w-1/2 xl:text-left xl:justify-between xl:p-5">
          <h1 className="text-almostBlack text-4xl font-bold w-full mb-5 xl:text-8xl xl:mb-0">
            Make remote work
          </h1>
          <p className=" text-mediumGray mb-10 xl:mb-0 xl:text-xl">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="mx-auto bg-almostBlack text-almostWhite hover:bg-almostWhite hover:text-almostBlack hover:border-almostBlack hover:border border px-6 py-3 rounded-2xl mb-10 transition-all xl:m-0">
            Learn more
          </button>

          <ol className="sponsor flex space-x-6">
            <li>
              <img src="./assets/client-audiophile.svg" />
            </li>
            <li>
              <img src="./assets/client-databiz.svg" />
            </li>
            <li>
              <img src="./assets/client-maker.svg" />
            </li>
            <li>
              <img src="./assets/client-meet.svg" />
            </li>
          </ol>
        </div>

        <div className="xl:w-1/2">
          <img
            src="./assets/image-hero-desktop.png"
            className="hidden xl:block"
          />
          <img
            src="./assets/image-hero-mobile.png"
            className="xl:hidden w-full"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
