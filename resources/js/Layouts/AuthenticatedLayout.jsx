import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [selectedMenu, setSelectedMenu] = useState();
    const [isSidebarFull, setIsSidebarFull] = useState(true);
    const dataMenu = [
        {
            name: "Anggota",
            link: "/anggota",
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
            name: "Buku",
            link: "/buku",
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
            name: "Transaksi",
            link: "/transaksi",
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
    ];

    const selectMenu = (e) => {
        setSelectedMenu(e.target.name);
    };
    return (
        <div className="min-h-screen bg-slate-200">
            {/* <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav> */}
            {/* Top Bar */}
            <div
                className={`block fixed bg-slate-200 duration-300 w-full ${
                    isSidebarFull ? "sm:pl-64" : ""
                }
                pl-4
       `}
            >
                <div
                    className={
                        "flex flex-row bg-white m-4 ml-0 text-xs rounded-2xl justify-between items-center px-2 sm:px-8 shadow-sm h-auto p-2 sm:h-16 "
                    }
                >
                    <div className="flex-1 text-base">
                        <div className="">Dashboard</div>
                    </div>
                    <div
                        className="w-3/12 flex flex-row-reverse
        "
                    >
                        {/* {"Dito" + " " + "Bayu"} */}
                    </div>
                </div>
            </div>
            {/* Sidebar */}
            <div
                className={`bg-transparent ${
                    isSidebarFull ? "sm:w-64 sm:left-0" : " sm:w-64 -left-60"
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
                                    {/* {user.nama + " " + user.nama} */}
                                </div>
                                <div className="text-xs">
                                    {/* {new Date().getHours() >= 0 &&
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
                                    , {user.nama} */}
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="p-4 sm:border-b sm:border-slate-300 text-sm w-full h-full sm:h-fit items-center flex gap-4 flex-row sm:flex-col">
                        {dataMenu.map((data, index) => (
                            <Link
                                href={data.link}
                                key={index}
                                className={`relative flex flex-row w-full items-center h-full bg-slate-200 justify-center py-2 shadow-md duration-200 hover:scale-105 rounded-md`}
                            >
                                {data.name}
                            </Link>
                        ))}
                        <Link
                            href={route("logout")}
                            method="post"
                            className={`relative flex flex-row w-full items-center h-full bg-slate-200 justify-center py-2 shadow-md duration-200 hover:scale-105 rounded-md`}
                        >
                            Log Out
                        </Link>

                        {/* <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink> */}
                    </div>
                    <div className="hidden absolute -right-4 sm:flex h-full dark:bg-slate-800 items-center">
                        <button
                            onClick={() => setIsSidebarFull((prev) => !prev)}
                            className="absolute right-0 h-8 w-8 justify-center hover:scale-110 duration-300 flex rounded-full items-center p-2 bg-white border-slate-500 sm:border-2 sm:border-slate-200 shadow-lg"
                        >
                            {isSidebarFull ? "<" : ">"}
                        </button>
                    </div>
                </div>
            </div>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            <main
                className={`flex duration-300 flex-col bg-slate-200 pt-24 pb-4
        ${isSidebarFull ? "sm:pl-64" : "sm:pl-40 sm:pr-40"}
        pr-4
          `}
            >
                {children}
            </main>
        </div>
    );
}
