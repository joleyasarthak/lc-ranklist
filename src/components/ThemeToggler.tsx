"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

export function ThemeToggler(props: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size={"sm"}
      onClick={() => {
        if (theme === "light") setTheme("dark");
        else setTheme("light");
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
