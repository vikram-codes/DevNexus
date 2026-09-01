"use client";

import { Button } from "./button";
import { signOut } from "next-auth/react";
import { TbLogout } from "react-icons/tb";

function SignOutButton() {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <div>
      <Button
        className="small-medium btn-secondary hover:bg-dark-100 dark:hover:bg-light-900 mb-10 min-h-10.25 w-full cursor-pointer rounded-lg px-2 py-3 shadow-none lg:px-4"
        onClick={() => handleSignOut()}
      >
        <span className="hidden items-center gap-2 lg:flex">
          <TbLogout size={16} className="text-primary-500" />
          <span className="primary-text-gradient pb-1">Sign Out</span>
        </span>
        <span className="hidden md:inline lg:hidden">
          <TbLogout size={20} className="text-primary-500" />
        </span>
      </Button>
    </div>
  );
}

export default SignOutButton;
