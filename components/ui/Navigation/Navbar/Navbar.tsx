import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full gap-5 p-6 drop-shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/site-logo.svg" alt="DevNexus" width={23} height={23} />
        <p className="h2-bold font-space-grotesk text-dark100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Nexus</span>
        </p>
      </Link>
      <p>Global Search</p>

      <div className="flex-between gap-5">
        <p>Theme</p>
      </div>
    </nav>
  );
}

export default Navbar;
