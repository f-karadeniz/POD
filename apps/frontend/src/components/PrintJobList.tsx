'use client';

import { useEffect, useState } from 'react';
import { StatusBadge } from '@/components/StatusBadge';

type Job = {
  id: string;
  filename: string;
  status: string;
};

export function PrintJobList({ initialJobs }: { initialJobs: Job[] }) {
  const [jobs, setJobs] = useState(initialJobs);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch('http://localhost:3000/api/print-jobs');
      const data = await res.json();
      setJobs(data);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ul className="space-y-2">
      {jobs.map((job) => (
        <li key={job.id} className="flex gap-4 items-center">
          <span>{job.filename}</span>
          <StatusBadge status={job.status} />
        </li>
      ))}
    </ul>
  );
}
