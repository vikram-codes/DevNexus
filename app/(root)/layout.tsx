import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/sidebar/left-sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/right-sidebar/RightSidebar";
import { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen flex-row justify-between">
      <Navbar />
      <LeftSidebar />
      <span className="smm:px-14 flex min-h-screen flex-1 flex-col px-6 pt-36 pb-6 max-md:pb-14">{children}</span>
      <RightSidebar />
    </main>
  );
}

export default RootLayout;
