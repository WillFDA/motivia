import ToggleTheme from "../custom/ToggleTheme";
export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <h1 className="font-bold text-2xl">Motivia</h1>
      <ToggleTheme />
    </header>
  );
}
