import { motion } from "framer-motion";

export default function TrialModal({ isOpen, close }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md relative"
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Start Free Trial</h2>
        <form className="space-y-3">
          <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <input type="tel" placeholder="Phone Number" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Class" className="w-full border p-2 rounded" />
          <textarea placeholder="Message" className="w-full border p-2 rounded"></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}
