import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  alt: string;
  src?: string;
  className?: string;
};

export const UserAvatar = ({ alt, src, className }: UserAvatarProps) => {
  return (
    <Avatar className={cn("h-7 w-7 md:h-10 md:w-10", className)}>
      <AvatarImage src={src} alt={alt} />
    </Avatar>
  );
};
