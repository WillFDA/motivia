import ToggleTheme from "../custom/ToggleTheme";
export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <h1>Hello</h1>
      <ToggleTheme />
    </header>
  );
}
