import BubbleGrid from "../../components/BubbleGrid";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-ink">Shan Lowe</h1>
      <p className="opacity-80 mt-2">Developer • Creative • Advocate</p>

      <BubbleGrid />
    </section>
  );
}
