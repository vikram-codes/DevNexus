"use client";

import { sidebarLinks } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks({ isMobileNav = false }: { isMobileNav?: boolean }) {
  const pathname = usePathname();
  const userId = "123";
  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

        if (item.route === "/profile") {
          if (userId) item.route = `/profile/${userId}`;
          else return null;
        }

        const LinkComponent = (
          <Link
            key={item.label}
            href={item.route}
            className={`flex items-center justify-start gap-4 bg-transparent p-4 md:justify-center lg:justify-start ${isActive ? "primary-gradient rounded-lg" : "text-dark300_light900"}`}
          >
            <Image
              className="invert-colors"
              src={item.imgURL}
              key={item.label}
              alt={item.label}
              width={20}
              height={20}
            />
            <span className={`paragraph-medium text-dark400_light700 ${!isMobileNav ? "max-lg:hidden" : ""}`}>
              <p className={isActive ? "base-bold" : "base-medium"}>{item.label}</p>
            </span>
          </Link>
        );

        return LinkComponent;
      })}
    </>
  );
}

export default NavLinks;
