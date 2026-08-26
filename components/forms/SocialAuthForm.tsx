"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { toast } from "@/components/ui/toast";
import ROUTES from "@/constants/routes";
import { signIn } from "next-auth/react";

function SocialAuthForm() {
  const pathname = usePathname();
  const isSignUpPage = pathname === "/sign-up";
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME });
    } catch (error) {
      console.log(error);

      toast.add({
        title: `${isSignUpPage ? "Sign up" : "Log in"} failed`,
        description: error instanceof Error ? error.message : "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  const ButtonClass =
    "background-dark400_light900 body-medium text-dark00_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={ButtonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="icons/github.svg"
          alt="GitHub Icon"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>{isSignUpPage ? "Sign up" : "Log in"} with GitHub</span>
      </Button>
      <Button className={ButtonClass} onClick={() => handleSignIn("google")}>
        <Image src="icons/google.svg" alt="Google Icon" width={20} height={20} className="mr-2.5 object-contain" />
        <span>{isSignUpPage ? "Sign up" : "Log in"} with Google</span>
      </Button>
    </div>
  );
}

export default SocialAuthForm;
