"use client";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

type Props = {};
function handleSubmit() {}
export default function UsernameForm({}: Props) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [user, setUser] = useState({
    username: "",
    org: "",
  });
  useEffect(() => {
    if (user.username.length > 0 && user.org.length > 0)
      setButtonDisabled(false);
    else setButtonDisabled(true);
  }, [user]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="org" className="text-right">
              Organization
            </Label>
            <Input
              id="org"
              value={user.org}
              onChange={(e) => setUser({ ...user, org: e.target.value })}
              className="col-span-3"
            />
          </div>
        </div>
      </form>
    </>
  );
}
