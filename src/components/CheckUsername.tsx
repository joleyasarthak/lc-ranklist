"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "./ui/button";
// import { Label } from "@/components/ui/label";
// import { Input } from "./ui/input";
// import OrgSearch from "./OrgSearch";
// import { toast } from "react-toastify";

// type Props = {
//   _open: boolean;
//   session: Session | null;
// };

// export default function CheckUsername({ session, _open }: Props) {
//   if (!session) return <></>;
//   const [open, setOpen] = useState(_open);
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
//       if (res.status !== 201) {
//         toast.error("User Already Exists", {
//           position: "bottom-right",
//           theme: "dark",
//         });
//         return;
//       }
//     } catch (e) {
//       console.log(e);
//     }
//     toast.success("User details added successfully", {
//       position: "bottom-right",
//       theme: "dark",
//     });
//     setOpen(false);
//   };
//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [user, setUser] = useState({
//     user_id: session.user.id,
//     username: "",
//     org: "",
//   });
//   useEffect(() => {
//     if (user.username.length > 0 && user.org.length > 0)
//       setButtonDisabled(false);
//     else setButtonDisabled(true);
//   }, [user]);
//   console.log(open);
//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild></DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Edit profile</DialogTitle>
//           <DialogDescription>
//             Make changes to your profile here. Click save when you're done.
//           </DialogDescription>
//         </DialogHeader>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleSubmit();
//           }}
//         >
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Username
//               </Label>
//               <Input
//                 id="username"
//                 value={user.username}
//                 onChange={(e) => setUser({ ...user, username: e.target.value })}
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="org" className="text-right">
//                 Organization
//               </Label>
//               <Input
//                 id="org"
//                 value={user.org}
//                 role="combobox"
//                 onChange={(e) => setUser({ ...user, org: e.target.value })}
//                 className="col-span-3 bg-background"
//                 name="orglist"
//                 list="orglist"
//                 // will need to change this, but if it works, dont touch it
//               />
//               <datalist id="orglist" role="listbox">
//                 <OrgSearch text={user.org} />
//               </datalist>
//             </div>
//           </div>
//           <DialogFooter>
//             <Button type="submit" disabled={buttonDisabled}>
//               Save changes
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
import React, { useEffect, useState } from "react";

type Props = {};

export default function CheckUsername({}: Props) {
  const session = useSession();
  return (
    <>
      {!session.data?.user.lc_username && (
        <Link
          className="inline-flex items-center justify-center text-lg font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 w-full rounded-none bg-gradient-to-r from-[#7775D6] to-[#E935C1] text-center text-white px-5 py-2 hover:from-[#7775D6] hover:to-[#E935C1] hover:shadow-md hover:opacity-75 transition-all"
          href={"/profile"}
          prefetch={false}
        >
          Add Leetcode Account
        </Link>
      )}
    </>
  );
}
