import ToggleTheme from "../custom/ToggleTheme";
import { LoginButton } from "../auth/login-button";
import { Button } from "../ui/button";
export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <h1>Hello</h1>
      <nav className="flex items-center gap-4">
        <LoginButton>
          <Button>Login</Button>
        </LoginButton>
        <ToggleTheme />
      </nav>
    </header>
  );
}
