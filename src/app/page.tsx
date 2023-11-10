"use client";
import CheckUsername from "@/components/CheckUsername";
import RankTable from "@/components/RankTable/RankTable";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <>
      <div className="">
        {session.data && <CheckUsername />}
        <RankTable />
      </div>
    </>
  );
}
