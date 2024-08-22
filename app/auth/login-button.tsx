"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild: boolean;
}

export const LogginButton = ({ children, mode, asChild }: LoginButtonProps) => {
  const handleButtonClick = () => {
    console.log("Login Button clicked");
  };
  return (
    <span onClick={handleButtonClick} className="cursor-pointer">
      {children}
    </span>
  );
};
