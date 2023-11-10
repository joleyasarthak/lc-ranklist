import React from "react";
import Logo from "@/components/NavBar/Logo";
import NavTitles from "./NavTitles";
import { ThemeToggler } from "../ThemeToggler";
import Link from "next/link";
import UserButton from "../UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function NavBar() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <nav className="bg-white mb-4  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center" prefetch={false}>
            <Logo />
            <span className="self-center ml-4 text-2xl font-semibold whitespace-nowrap dark:text-white">
              LC Ranklist
            </span>
          </Link>
          <div className="flex md:order-2 space-x-4">
            <UserButton session={session} />
            <ThemeToggler />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href={"/"} prefetch={false}>
                  <NavTitles title="Home" />
                </Link>
              </li>
              <li>
                <NavTitles title="About" />
              </li>
              <li>
                <NavTitles title="Services" />
              </li>
              <li>
                <NavTitles title="Contact" />
              </li>
            </ul>
          </div>
        </div>
        {/* <CheckUsername session={session} /> */}
      </nav>
    </>
  );
}
