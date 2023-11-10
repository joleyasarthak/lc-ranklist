"use client";
import { useDialogStore } from "@/states/DialogStore";
import { useSession } from "next-auth/react";
import React from "react";
import UsernameForm from "./UsernameForm";
import Image from "next/image";

type Props = {};

function Profile({}: Props) {
  const session = useSession();
  const { open, setOpen } = useDialogStore();
  return (
    <>
      <div className="bg-white p-10 rounded-lg shadow-md max-w-lg w-full dark:bg-gray-900">
        <div className="flex items-center justify-start mb-4">
          <Image
            src={session.data?.user.image || ""}
            alt="User Image"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-xl font-semibold">{session.data?.user.name}</h1>
            <p className="text-gray-300 dark:text-gray-500">
              {session.data?.user.email}
            </p>
            <h2 className="text-gray-500 dark:text-gray-300">
              {session.data?.user.lc_username ||
                "Edit Profile to add username and org"}
            </h2>
            <h2 className="text-gray-500 dark:text-gray-300">
              {session.data?.user.org}
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => setOpen(true)}
          >
            Edit Profile
          </button>
        </div>
        <UsernameForm />
      </div>
    </>
  );
}

export default Profile;
