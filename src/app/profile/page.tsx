"use client";
import React from "react";
import { useSession } from "next-auth/react";

type Props = {};

export default function Profile({}: Props) {
  const session = useSession();
  return <h1>Hi {session.data?.user.name}!</h1>;
}
