'use client';

import React, { useEffect, useState } from 'react';
import Link from '../../../node_modules/next/link';

const Header = () => {
    const [theme, setTheme] = useState(() => {
        // Initialize the theme based on localStorage or default to 'light'
        return typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    });

    useEffect(() => {
        const html = document.querySelector('html');
        if(html){
            if (theme === 'dark') {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-woodsmoke-950 dark:border-neutral-700">
            <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex items-center justify-between">
                    <Link className="flex-none text-xl font-bold dark:text-white dark:hover:text-gold-500 text-woodsmoke-950 hover:text-gray-400" href="/" aria-label="JF 4:13 STUDIOS">Jose Fuentes</Link>
                    <div className="sm:hidden flex">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                            {theme === 'light' ? (
                                <span className="group inline-flex shrink-0 justify-center items-center size-9">
                                    <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                    </svg>
                                </span>
                            ) : (
                                <span className="group inline-flex shrink-0 justify-center items-center size-9">
                                    <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <path d="M12 2v2"></path>
                                        <path d="M12 20v2"></path>
                                        <path d="m4.93 4.93 1.41 1.41"></path>
                                        <path d="m17.66 17.66 1.41 1.41"></path>
                                        <path d="M2 12h2"></path>
                                        <path d="M20 12h2"></path>
                                        <path d="m6.34 17.66-1.41 1.41"></path>
                                        <path d="m19.07 4.93-1.41 1.41"></path>
                                    </svg>
                                </span>
                            )}
                        </button>
                        <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-woodsmoke-950 dark:border-neutral-700 dark:hover:bg-gold-500" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                        <Link className="font-medium text-woodsmoke-950 sm:py-6 dark:text-white hover:text-gray-400 dark:hover:text-gold-500" href="/" aria-current="page">Home</Link>
                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                            <button type="button" className="flex items-center w-full text-woodsmoke-950 hover:text-gray-400 font-medium dark:text-white dark:hover:text-gold-500">
                                About
                                <svg className="flex-shrink-0 ms-2 size-4 text-woodsmoke-950 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-woodsmoke-950 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-woodsmoke-950 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-white dark:hover:bg-gold-500 dark:hover:text-woodsmoke-950" href="/about">
                                    About
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-woodsmoke-950 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-white dark:hover:bg-gold-500 dark:hover:text-woodsmoke-950" href="/services">
                                    Services
                                </Link>
                                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-woodsmoke-950 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-white dark:hover:bg-gold-500 dark:hover:text-woodsmoke-950" href="/pricing">
                                    Pricing
                                </Link>
                            </div>
                        </div>
                        <Link className="font-medium text-woodsmoke-950 sm:py-6 dark:text-white dark:hover:text-gold-500 hover:text-gray-400" href="/contact">Contact</Link>
                        <div className="sm:border-s sm:ps-6">
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="hidden sm:block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            >
                                {theme === 'light' ? (
                                    <span className="group inline-flex shrink-0 justify-center items-center size-9">
                                        <svg
                                            className="shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                        </svg>
                                    </span>
                                ) : (
                                    <span className="group inline-flex shrink-0 justify-center items-center size-9">
                                        <svg
                                            className="shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="4"></circle>
                                            <path d="M12 2v2"></path>
                                            <path d="M12 20v2"></path>
                                            <path d="m4.93 4.93 1.41 1.41"></path>
                                            <path d="m17.66 17.66 1.41 1.41"></path>
                                            <path d="M2 12h2"></path>
                                            <path d="M20 12h2"></path>
                                            <path d="m6.34 17.66-1.41 1.41"></path>
                                            <path d="m19.07 4.93-1.41 1.41"></path>
                                        </svg>
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;