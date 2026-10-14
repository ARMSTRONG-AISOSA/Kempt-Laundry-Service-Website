export function WaveBottom({ fill = '#fff' }: { fill?: string }) {
  return (
    <svg className="wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
      <path d="M0 45 C 240 95 480 5 720 35 S 1200 85 1440 25 L1440 80 L0 80Z" fill={fill} />
    </svg>
  );
}
export function WaveTop({ fill = '#fff' }: { fill?: string }) {
  return (
    <svg className="wave wave--top" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden>
      <path d="M0 0 L1440 0 L1440 30 C 1200 75 960 10 720 35 S 240 70 0 25Z" fill={fill} />
    </svg>
  );
}
