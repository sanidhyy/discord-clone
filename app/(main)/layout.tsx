import type { PropsWithChildren } from "react";

import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full">
      <aside className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </aside>

      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
