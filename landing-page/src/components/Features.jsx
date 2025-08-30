const features = [
  { title: "Responsive Design", desc: "Optimized for desktop, tablet, and mobile." },
  { title: "Modern UI", desc: "Built with Tailwind CSS and React components." },
  { title: "Fast Performance", desc: "Lightweight and blazing fast load times." },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
