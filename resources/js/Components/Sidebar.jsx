import { Link } from "@inertiajs/react";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { GlobalContext } from "../contex/GlobalContext.js";

const Sidebar = () => {
    //   const {
    //     userData,
    //     isSidebarFull,
    //     setIsSidebarFull,
    //     selectedMenu,
    //     setSelectedMenu,
    //     " "
    //   } = useContext(GlobalContext);
    const [selectedMenu, setSelectedMenu] = useState();
    const [isSidebarFull, setIsSidebarFull] = useState();
    const dataMenu = [
        {
            name: "Dashboard",
            link: "/dashboard",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-speedometer2"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                    <path
                        fillRule="evenodd"
                        d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                    />
                </svg>
            ),
        },
        {
            name: "Workspace",
            link: "/task",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-list-task"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                    />
                    <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                    <path
                        fillRule="evenodd"
                        d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                    />
                </svg>
            ),
        },
        {
            name: "Challenge",
            link: "/Challenge",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-kanban"
                    viewBox="0 0 16 16"
                >
                    <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z" />
                    <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z" />
                </svg>
            ),
        },
        {
            name: "Profile",
            link: "/profile",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
            ),
        },
        {
            name: "Messages",
            link: "/messages",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chat-left-dots"
                    viewBox="0 0 16 16"
                >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
            ),
        },
    ];
    //   const navigate = useNavigate();

    const selectMenu = (e) => {
        setSelectedMenu(e.target.name);
        // navigate(e.target.name);
    };
    return (
        <div
            className={`bg-transparent ${
                isSidebarFull ? "sm:w-64 sm:left-0" : " sm:w-24 -left-20"
            } duration-300 fixed pointer-events-none w-full h-[100dvh] sm:p-4 z-10`}
        >
            <div
                className={`${
                    !isSidebarFull ? "items-center" : ""
                } flex sm:flex-col flex-row w-full border-y bg-white dark:border-y-slate-600 sm:border-0 pointer-events-auto justify-center sm:justify-start absolute sm:relative bottom-0 ${" "} sm:rounded-3xl h-16 sm:h-full `}
            >
                <div
                    className={`${
                        isSidebarFull ? "p-4 px-8" : "p-2 px-4"
                    } rounded-t-xl hidden w-full sm:flex flex-row h-16 sm:border-b sm:border-slate-300 items-center  `}
                >
                    {isSidebarFull ? (
                        <div className="flex flex-col flex-1 ml-4">
                            <div className="text-sm">
                                {"asep" + " " + "asep"}
                            </div>
                            <div className="text-xs">
                                {new Date().getHours() >= 0 &&
                                    new Date().getHours() <= 9 &&
                                    "Pagi"}
                                {new Date().getHours() > 9 &&
                                    new Date().getHours() < 15 &&
                                    "Siang"}
                                {new Date().getHours() >= 15 &&
                                    new Date().getHours() < 19 &&
                                    "Sore"}
                                {new Date().getHours() >= 19 &&
                                    new Date().getHours() < 24 &&
                                    "Malem"}
                                , {"Asep"}
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className=" sm:border-b sm:border-slate-300 text-sm w-full h-full sm:h-fit items-center flex flex-row sm:flex-col">
                    {dataMenu.map((data, index) => (
                        <Link
                            href={data.link}
                            key={index}
                            className={`relative flex flex-row w-full items-center h-full ${
                                selectedMenu === data.link
                                    ? "bg-transparent "
                                    : ""
                            } ${
                                selectedMenu ===
                                dataMenu[
                                    index +
                                        (index === dataMenu.length - 1 ? 0 : 1)
                                ].link
                                    ? " sm:rounded-br-xl "
                                    : null
                            }`}
                        >
                            <div
                                className={`${
                                    selectedMenu === data.link
                                        ? "hidden sm: "
                                        : "hidden"
                                } h-full w-4 relative ${" "}`}
                            ></div>
                            <div
                                className={`${
                                    selectedMenu === data.link
                                        ? " flex  "
                                        : "hidden"
                                } ${
                                    isSidebarFull ? " " : "sm:hidden"
                                } h-full w-16 sm:left-3 absolute `}
                            ></div>
                            <div
                                className={`${
                                    selectedMenu === data.link
                                        ? "sm:hidden flex "
                                        : "hidden"
                                } h-full w-full right-0 absolute ${" "}`}
                            ></div>
                            <div
                                className={` w-full relative ${
                                    selectedMenu === data.link
                                        ? " bg-slate-100 p-1 dark:bg-slate-900"
                                        : "hover:p-1"
                                } font-medium duration-300 rounded-full`}
                            >
                                <button
                                    key={index}
                                    onClick={selectMenu}
                                    name={data.link}
                                    className={` w-full relative ${
                                        selectedMenu === data.link
                                            ? " bg-blue-100 dark:bg-blue-900 "
                                            : null
                                    }  hover:bg-blue-100 dark:hover:bg-blue-900 px-4 font-medium duration-300 rounded-full`}
                                >
                                    <div
                                        className={`${
                                            !isSidebarFull
                                                ? "justify-center "
                                                : ""
                                        } pointer-events-none flex gap-4 py-3 flex-row items-center p-2`}
                                    >
                                        <div>{data.icon}</div>
                                        {isSidebarFull ? (
                                            <div className="sm:flex hidden">
                                                {data.name}
                                            </div>
                                        ) : null}
                                    </div>
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="hidden absolute -right-4 sm:flex h-full dark:bg-slate-800 items-center">
                    <button
                        onClick={() => setIsSidebarFull((prev) => !prev)}
                        className="absolute right-0 h-8 w-8 justify-center hover:scale-110 duration-300 flex rounded-full items-center p-2 bg-white dark:sm:border-slate-600 sm:border sm:border-slate-200 shadow-lg"
                    >
                        {isSidebarFull ? "<" : ">"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
