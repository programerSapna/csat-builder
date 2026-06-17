export function IconStar({ filled, color, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2.5l2.09 4.23 4.67.68-3.38 3.29.8 4.65L10 13.27l-4.18 2.18.8-4.65L3.24 7.41l4.67-.68L10 2.5z"
        fill={filled ? color : 'none'}
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconTrash({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 4h12M5 4V2.5h6V4M6 7v5M10 7v5M3 4l1 9.5h8L13 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconPlus({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export function IconUpload({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 16V8M8 12l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 16.8A4 4 0 015.6 9a6 6 0 0110.8 0A4 4 0 0120 16.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export function IconCheck({ size = 32, color = '#3F7A57' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="2"/>
      <path d="M9 16.5l5 5 9-9" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconChevron({ direction = 'right', size = 12 }) {
  const rot = { right: 0, down: 90, left: 180, up: 270 }[direction];
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={{ transform: `rotate(${rot}deg)` }}>
      <path d="M4.5 2.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconImage({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="7" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M2 13l5-4 3 3 2-2 6 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
