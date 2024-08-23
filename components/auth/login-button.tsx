"use client";
import { useRouter } from "next/navigation";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({ children, mode, asChild }: LoginButtonProps) => {
  const handleButtonClick = () => {
    router.push("/auth/login");
  };

  const router = useRouter();

  if (mode === "modal") {
    return <span>TODO Implement Modal</span>;
  }

  return (
    <span onClick={handleButtonClick} className="cursor-pointer">
      {children}
    </span>
  );
};
