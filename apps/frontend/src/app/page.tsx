import { StatusBadge } from '@/components/StatusBadge';
import { revalidatePath } from 'next/cache';
import { PrintJobList } from '@/components/PrintJobList';



async function getJobs() {
  const res = await fetch('http://localhost:3000/api/print-jobs', {
    next: { revalidate: 2 },
  });
  return res.json();
}

async function createJob(filename: string) {
  await fetch('http://localhost:3000/api/print-jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ filename }),
  });
}

export default async function HomePage() {
  const jobs = await getJobs();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl">Print Jobs</h1>

      {/* CREATE FORM */}
        <form
          action={async (formData) => {
            'use server';
            const filename = formData.get('filename') as string;

            await createJob(filename);

            revalidatePath('/');
          }}
        >

        <input
          name="filename"
          placeholder="filename.pdf"
          className="border px-2 py-1"
        />
        <button className="border px-3 py-1">Create</button>
      </form>

      <PrintJobList initialJobs={jobs} />

    </div>
  );
}
