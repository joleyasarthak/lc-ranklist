import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  name?: string | null;
  img?: string | null;
};

export default function UserAvatar({ img, name }: Props) {
  return (
    <Avatar>
      <AvatarImage src={img!} alt={name || "User name"} />
      <AvatarFallback delayMs={1000}>
        {(name || "User Name")
          .split(" ")
          .map((n) => {
            return n[0];
          })
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}
