import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default HomePage;
