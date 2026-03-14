import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';
import KPIStat from '../components/KPIStat';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ['Tomato', 'Onion', 'Wheat', 'Rice'],
  datasets: [
    {
      label: 'Predicted Demand Index',
      data: [92, 75, 63, 58],
      backgroundColor: '#22c55e'
    }
  ]
};

export default function FarmerDashboard() {
  return (
    <main className="mx-auto grid max-w-7xl gap-4 px-4 py-6 md:grid-cols-3">
      <KPIStat title="Today Orders" value="24" hint="+12% from yesterday" />
      <KPIStat title="Wallet Balance" value="₹54,200" hint="Payout every Friday" />
      <KPIStat title="Voice Search" value="Hindi/Marathi/English" />

      <section className="rounded-xl bg-white p-4 shadow-sm md:col-span-2">
        <h3 className="mb-4 text-lg font-semibold">Market Demand Analytics</h3>
        <Bar data={data} />
      </section>

      <section className="rounded-xl bg-white p-4 shadow-sm">
        <h3 className="mb-3 text-lg font-semibold">Upload Crop</h3>
        <form className="space-y-2 text-sm">
          <input className="w-full rounded border px-3 py-2" placeholder="Crop Name" />
          <input className="w-full rounded border px-3 py-2" placeholder="Quantity (kg)" />
          <input className="w-full rounded border px-3 py-2" placeholder="Price per kg" />
          <input type="file" className="w-full rounded border px-3 py-2" />
          <button type="button" className="w-full rounded bg-mandi-green px-3 py-2 text-white">Upload</button>
        </form>
      </section>
    </main>
  );
}
