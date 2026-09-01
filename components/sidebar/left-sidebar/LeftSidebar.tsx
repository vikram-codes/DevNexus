import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import NavLinks from "../../navigation/navbar/NavLinks";
import { auth } from "@/auth";
import SignOutButton from "@/components/ui/SignOutButton";

async function LeftSidebar() {
  const session = await auth();
  return (
    <aside className="background-light900_dark200 font-inter sticky top-0 hidden h-full overflow-clip p-6 pt-25 drop-shadow-none transition-all duration-300 md:flex md:w-28 lg:w-auto">
      <div className="no-scrollbar flex h-[calc(100vh-80px)] w-full flex-col justify-between overflow-y-auto">
        <section className="flex h-full flex-col gap-6 pt-16">
          <NavLinks />
        </section>

        {!session ? (
          <div className="mb-10 flex flex-col gap-3">
            <Link href={ROUTES.SIGN_IN}>
              <Button className="small-medium btn-secondary min-h-10.25 w-full rounded-lg px-2 py-3 shadow-none lg:px-4">
                <span className="hidden items-center gap-2 lg:flex">
                  <FaRegUserCircle size={16} className="text-primary-500" />
                  <span className="primary-text-gradient pb-1">Log In</span>
                </span>
                <span className="hidden md:inline lg:hidden">
                  <FaRegUserCircle size={20} className="text-primary-500" />
                </span>
              </Button>
            </Link>
            <Link href={ROUTES.SIGN_UP}>
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-10.25 w-full rounded-lg border px-2 py-3 shadow-none lg:px-4">
                <span className="hidden items-center gap-2 lg:flex">
                  <FaUserPlus size={16} className="text-primary-500" />
                  <span className="primary-text-gradient pb-1">Sign Up</span>
                </span>
                <span className="hidden md:inline lg:hidden">
                  <FaUserPlus size={20} className="text-primary-500" />
                </span>
              </Button>
            </Link>
          </div>
        ) : (
          <SignOutButton />
        )}
      </div>
    </aside>
  );
}

export default LeftSidebar;
