import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.png"
        alt="Discord Clone"
        width={100}
        height={100}
        className="animate-pulse"
      />
    </div>
  );
};

export default Loading;
