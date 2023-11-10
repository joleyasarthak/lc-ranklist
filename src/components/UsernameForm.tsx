// "use client";
// import React, { useState, useEffect } from "react";
// import { Label } from "@/components/ui/label";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { DialogFooter } from "./ui/dialog";
// import OrgSearch from "./OrgSearch";
// import { useSession } from "next-auth/react";

// type Props = {};
// export default function UsernameForm({}: Props) {
//   const session = useSession();
//   const handleSubmit = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/addDetails", {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: {
//           "content-type": "application/json",
//         },
//       });
//       const response = await res.json();
//       if (res.status !== 200) {
//         alert(response.message);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [user, setUser] = useState({
//     user_id: session.data?.user.id,
//     username: "",
//     org: "",
//   });
//   useEffect(() => {
//     if (user.username.length > 0 && user.org.length > 0)
//       setButtonDisabled(false);
//     else setButtonDisabled(true);
//   }, [user]);
//   return (
//     <>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSubmit();
//         }}
//       >
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input
//               id="username"
//               value={user.username}
//               onChange={(e) => setUser({ ...user, username: e.target.value })}
//               className="col-span-3"
//             />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="org" className="text-right">
//               Organization
//             </Label>
//             <Input
//               id="org"
//               value={user.org}
//               onChange={(e) => setUser({ ...user, org: e.target.value })}
//               className="col-span-3"
//               list="mylist"
//               // will need to change this
//             />
//             <datalist id="mylist">
//               <OrgSearch text={user.org} />
//             </datalist>
//           </div>
//         </div>
//         <DialogFooter>
//           <Button type="submit" disabled={buttonDisabled}>
//             Save changes
//           </Button>
//         </DialogFooter>
//       </form>
//     </>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import { Session } from "next-auth";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import OrgSearch from "./OrgSearch";
import { toast } from "react-toastify";
import { useDialogStore } from "@/states/DialogStore";
import { useSession } from "next-auth/react";

type Props = {};

export default function CheckUsername({}: Props) {
  const { data, update } = useSession();
  if (!data) return <></>;
  const { open, setOpen } = useDialogStore();
  const handleSessionUpdate = () => {
    update({ lc_username: user.username, org: user.org });
  };
  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/addDetails", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.status !== 201) {
        toast.error("User Already Exists", {
          position: "bottom-right",
          theme: "dark",
        });
        return;
      }
    } catch (e) {
      console.log(e);
    }
    handleSessionUpdate();
    toast.success("User details updated successfully", {
      position: "bottom-right",
      theme: "dark",
    });
    setOpen(false);
  };
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [user, setUser] = useState({
    user_id: data?.user.id,
    username: data.user.lc_username || "",
    org: data.user.org || "",
  });
  useEffect(() => {
    if (user.username.length > 0 && user.org.length > 0)
      setButtonDisabled(false);
    else setButtonDisabled(true);
  }, [user]);
  console.log(open);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
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
                role="combobox"
                onChange={(e) => setUser({ ...user, org: e.target.value })}
                className="col-span-3 bg-background"
                name="orglist"
                list="orglist"
                // will need to change this, but if it works, dont touch it
              />
              <datalist id="orglist" role="listbox">
                <OrgSearch text={user.org} />
              </datalist>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={buttonDisabled}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
