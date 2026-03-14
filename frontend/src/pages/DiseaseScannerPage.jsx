import { useState } from 'react';

export default function DiseaseScannerPage() {
  const [result, setResult] = useState(null);

  return (
    <main className="mx-auto max-w-3xl px-4 py-6">
      <section className="rounded-xl bg-white p-4 shadow-sm">
        <h2 className="text-xl font-bold">AI Disease Scanner</h2>
        <p className="mb-4 mt-1 text-sm text-slate-600">Upload leaf image to detect disease and treatment advice.</p>
        <input type="file" className="w-full rounded border px-3 py-2" />
        <button
          className="mt-3 rounded bg-mandi-green px-4 py-2 text-white"
          onClick={() => setResult({ disease: 'Early Blight', treatment: 'Use copper fungicide and prune leaves.' })}
        >
          Analyze
        </button>
        {result ? (
          <div className="mt-4 rounded border border-emerald-200 bg-emerald-50 p-3 text-sm">
            <p><strong>Disease:</strong> {result.disease}</p>
            <p><strong>Treatment:</strong> {result.treatment}</p>
          </div>
        ) : null}
      </section>
    </main>
  );
}
