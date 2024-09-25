import ToggleTheme from "../custom/ToggleTheme";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <Link href="/">
        <h1 className="font-bold text-2xl">Motivia</h1>
      </Link>
      <ToggleTheme />
    </header>
  );
}
