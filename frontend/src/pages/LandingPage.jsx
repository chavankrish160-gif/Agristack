import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
        <p className="mb-2 text-sm font-semibold text-mandi-green">Smart Agriculture Marketplace</p>
        <h2 className="text-4xl font-bold text-mandi-dark">Sell crops directly. Buy fairly. Deliver transparently.</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          eMandi connects farmers, buyers, and delivery partners with AI-powered demand forecasts,
          disease detection, and multilingual voice commands.
        </p>
        <div className="mt-8 flex gap-3">
          <Link to="/farmer" className="rounded-lg bg-mandi-green px-6 py-3 font-medium text-white">Farmer Dashboard</Link>
          <Link to="/buyer" className="rounded-lg border border-mandi-green px-6 py-3 font-medium text-mandi-green">Buyer Marketplace</Link>
        </div>
      </motion.div>
    </main>
  );
}
