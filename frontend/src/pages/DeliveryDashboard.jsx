import KPIStat from '../components/KPIStat';

export default function DeliveryDashboard() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid gap-4 md:grid-cols-3">
        <KPIStat title="Active Deliveries" value="6" />
        <KPIStat title="Completed This Week" value="43" />
        <KPIStat title="Earnings" value="₹18,250" />
      </div>
      <section className="mt-4 rounded-xl bg-white p-4 shadow-sm">
        <h2 className="text-xl font-bold">Live GPS Tracking (Google Maps API Ready)</h2>
        <p className="mt-2 text-slate-600">
          Integrate Google Maps JS SDK to display pickup and drop markers with route updates.
        </p>
      </section>
    </main>
  );
}
