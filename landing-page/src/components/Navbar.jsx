import Button from "./Button";

export default function Navbar({ onStartTrial }) {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">MyApp</span>
      </div>
      <Button onClick={onStartTrial}>Start Free Trial</Button>
    </nav>
  );
}
