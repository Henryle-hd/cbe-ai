import React from 'react'
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';

export default function LogOutBtn() {
    const isAdmnPage =
      typeof window !== "undefined" &&
        window.location.pathname.includes("/admn");
  return (
    <div className="flex flex-col gap-1">
      {isAdmnPage && (
        <Button className=" space-x-3">
          <LogOut />
          <span>Logout</span>
        </Button>
      )}
    </div>
  );
}
