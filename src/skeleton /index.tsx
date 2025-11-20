// SkeletonBox.tsx

import type { Props } from './types';

export default function SkeletonBox(props: Props) {
  const {
    className = '',
    width = 'w-full',
    height = 'h-6',
    rounded = 'rounded',
    count = 1,
    as: Comp = 'div',
  } = props;

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
