export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 max-w-6xl mx-auto">
      {children}
    </main>
  );
}
