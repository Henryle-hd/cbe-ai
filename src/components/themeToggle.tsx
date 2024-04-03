"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [themeName, setThemeName] = useState(theme);
  const [icon, setIcon] = useState(<Sun />);

  useEffect(() => {
    setThemeName(theme);
    setIcon(theme === "dark" ? <Moon /> : <Sun />);
  }, [theme]);

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="outline"
      size={"icon"}
      color="cbeaiclr-1"
      className="flex items-center justify-center gap-2 rounded-full"
      suppressHydrationWarning={true}
    >
      {icon}
    </Button>
  );
};
