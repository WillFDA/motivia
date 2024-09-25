import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <h1 className="font-bold text-foreground">
        Crée ta lettre de motivation de 0 ?
      </h1>

      <Link href="/create">
        <Button variant="secondary" size="lg">
          C&apos;est parti !
        </Button>
      </Link>
    </div>
  );
}
