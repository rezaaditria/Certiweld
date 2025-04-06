export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full overflow-x-hidden items-center justify-center gap-4 py-8 md:py-10">
      <main className="container mx-auto max-w-7xl ">
        <div className="relative flex flex-col">{children}</div>
      </main>
    </section>
  );
}
