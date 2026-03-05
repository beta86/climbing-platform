type FrostedPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FrostedPanel({
  children,
  className = "",
}: FrostedPanelProps) {
  return (
    <div
      className={`w-full rounded-xl bg-white/18 px-6 backdrop-blur-sm border border-white/25 [box-shadow:-10px_12px_24px_rgba(0,0,0,0.2)] ${className}`}
    >
      {children}
    </div>
  );
}
