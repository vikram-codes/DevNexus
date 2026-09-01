import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/sidebar/left-sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/right-sidebar/RightSidebar";
import { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen flex-row justify-between">
      <Navbar />
      <LeftSidebar />
      {children}
      <RightSidebar />
    </main>
  );
}

export default RootLayout;
