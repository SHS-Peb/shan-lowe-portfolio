import BubbleGrid from "../../components/BubbleGrid";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-100 md:pt-0">
      <div className="text-left">
      <h1 className="text-5xl text-ink">Shannon Lowe</h1>
      <p className="opacity-80 mt-2 custom-font">Sydney, Australia - She/Her</p>
      </div>
      <BubbleGrid />
    </section>
  );
}
