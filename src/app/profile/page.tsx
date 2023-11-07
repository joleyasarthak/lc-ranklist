"use client";
import React from "react";
import { useSession } from "next-auth/react";

type Props = {};

export default function Profile({}: Props) {
  const session = useSession();
  console.log(session);
  if (!session.data)
    return (
      <div className="text-3xl text-center">
        Please Login to access this page
      </div>
    );
  return (
    <h1 className="text-center text-2xl">Hi {session.data?.user.name}!</h1>
  );
}
