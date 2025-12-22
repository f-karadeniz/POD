'use client';

import { useEffect, useState } from 'react';
import { createPrintJob, fetchPrintJobs, PrintJob } from '@/lib/api';

export default function PrintJobsPage() {
  const [filename, setFilename] = useState('');
  const [jobs, setJobs] = useState<PrintJob[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadJobs() {
    const data = await fetchPrintJobs();
    setJobs(data);
  }

async function handleCreate() {
  if (!filename) return;

  try {
    setLoading(true);
    await createPrintJob(filename);
    setFilename('');
    await loadJobs();
  } catch (err) {
    console.error('Create print job failed', err);
    alert('Failed to create print job. Check console.');
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Print Jobs</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="filename.pdf"
        />
        <button onClick={handleCreate} disabled={loading}>
          Create
        </button>
      </div>

      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            #{job.id} — {job.filename} ({job.status})
          </li>
        ))}
      </ul>
    </main>
  );
}
