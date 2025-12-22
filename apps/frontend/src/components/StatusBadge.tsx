import { statusClass } from '@/lib/status';

type StatusBadgeProps = {
  status: string;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`px-2 py-1 rounded text-sm font-medium ${statusClass(status)}`}
    >
      {status}
    </span>
  );
}
