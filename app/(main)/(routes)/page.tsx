import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <p className="text-7xl font-bold text-indigo-500">Home Page</p>
      <Button variant="destructive" size="lg">
        Click me
      </Button>
    </div>
  );
};

export default HomePage;
