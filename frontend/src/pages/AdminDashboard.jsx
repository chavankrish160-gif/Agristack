import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import KPIStat from '../components/KPIStat';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Crops Sold', 'Farmer Earnings', 'Demand Trend'],
  datasets: [
    {
      data: [540, 210, 150],
      backgroundColor: ['#22c55e', '#3b82f6', '#f59e0b']
    }
  ]
};

export default function AdminDashboard() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid gap-4 md:grid-cols-4">
        <KPIStat title="Users" value="1,240" />
        <KPIStat title="Transactions" value="4,320" />
        <KPIStat title="Fraud Alerts" value="12" hint="Requires review" />
        <KPIStat title="Net Revenue" value="₹45L" />
      </div>
      <section className="mt-4 rounded-xl bg-white p-4 shadow-sm md:w-2/3">
        <h2 className="mb-3 text-xl font-bold">Platform Analytics</h2>
        <Doughnut data={data} />
      </section>
    </main>
  );
}
