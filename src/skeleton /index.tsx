// SkeletonBox.tsx

type Props = {
  className?: string;
  width?: string; // e.g. "w-48" or "w-full"
  height?: string; // e.g. "h-6" or "h-40"
  rounded?: string; // e.g. "rounded", "rounded-lg", "rounded-full"
  count?: number; // how many boxes (for lists)
  as?: 'div' | 'span';
};

export default function SkeletonBox({
  className = '',
  width = 'w-full',
  height = 'h-6',
  rounded = 'rounded',
  count = 1,
  as: Comp = 'div',
}: Props) {
  const items = Array.from({ length: count });
  return (
    <div
      aria-busy='true'
      aria-live='polite'
      role='status'
      className='space-y-2'
    >
      {items.map((_, i) => (
        <Comp
          key={i}
          className={`${width} ${height} ${rounded} bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
          aria-hidden='true'
        />
      ))}
    </div>
  );
}
