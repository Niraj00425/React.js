import Button from "./Button";

export default function Hero({ onStartTrial }) {
  return (
    <section
      className="relative bg-gray-100 py-20 text-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/40 absolute inset-0" />
      <div className="relative z-10 max-w-2xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-4">
          Build Modern Landing Pages Effortlessly
        </h1>
        <p className="text-lg mb-6">
          Responsive, fast and visually appealing pages with React + Tailwind.
        </p>
        <Button onClick={onStartTrial} variant="primary">
          Start Free Trial
        </Button>
      </div>
    </section>
  );
}
