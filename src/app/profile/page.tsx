"use client";
import React from "react";
import { useSession } from "next-auth/react";
import ProfileComponent from "@/components/ProfileComponent";
import Spinner from "@/components/Spinner";

type Props = {};

export default function Profile({}: Props) {
  const session = useSession();
  if (session.status === "loading") {
    return (
      <div className="flex justify-center max-h-screen">
        <Spinner />
      </div>
    );
  }
  if (!session.data) {
    return (
      <div className="text-3xl text-center">
        Please Login to access this page
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-center">
        <ProfileComponent />
      </div>
    </>
  );
}
