"use client";
import React from "react";

type Props = {
  text: string;
};

export default function NavButton(props: Props) {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-4 mr-4"
    >
      {props.text}
    </button>
  );
}
