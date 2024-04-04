import type { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full flex items-center justify-center bg-slate-100 dark:bg-[#313338]">
      {children}
    </div>
  );
};

export default AuthLayout;
