import { useMemo, useState } from 'react';
import ChatPanel from '../components/ChatPanel';

const crops = [
  { id: 1, name: 'Tomato', price: 22, location: 'Nashik', type: 'Vegetable' },
  { id: 2, name: 'Onion', price: 19, location: 'Pune', type: 'Vegetable' },
  { id: 3, name: 'Wheat', price: 28, location: 'Nagpur', type: 'Grain' }
];

export default function BuyerDashboard() {
  const [maxPrice, setMaxPrice] = useState(30);
  const [filterLocation, setFilterLocation] = useState('All');

  const filtered = useMemo(
    () =>
      crops.filter(
        (crop) => crop.price <= maxPrice && (filterLocation === 'All' || crop.location === filterLocation)
      ),
    [maxPrice, filterLocation]
  );

  return (
    <main className="mx-auto grid max-w-7xl gap-4 px-4 py-6 lg:grid-cols-3">
      <section className="rounded-xl bg-white p-4 shadow-sm lg:col-span-2">
        <h2 className="text-xl font-bold">Crop Marketplace</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <input
            type="range"
            min="10"
            max="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <select
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="rounded border px-3 py-2"
          >
            <option>All</option>
            <option>Nashik</option>
            <option>Pune</option>
            <option>Nagpur</option>
          </select>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {filtered.map((crop) => (
            <article key={crop.id} className="rounded-lg border p-3">
              <h3 className="font-semibold">{crop.name}</h3>
              <p className="text-sm text-slate-500">{crop.location}</p>
              <p className="mt-2 font-medium">₹{crop.price}/kg</p>
              <button className="mt-3 rounded bg-mandi-green px-3 py-2 text-sm text-white">Place Bulk Order</button>
            </article>
          ))}
        </div>
      </section>

      <ChatPanel />
    </main>
  );
}
