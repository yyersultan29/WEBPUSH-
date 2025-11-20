export type Props = {
  className?: string;
  width?: string; // e.g. "w-48" or "w-full"
  height?: string; // e.g. "h-6" or "h-40"
  rounded?: string; // e.g. "rounded", "rounded-lg", "rounded-full"
  count?: number; // how many boxes (for lists)
  as?: 'div' | 'span';
};
