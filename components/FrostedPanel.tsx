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
      className={`w-full rounded-xl bg-white/8 px-6 backdrop-blur-sm border border-white/12 [box-shadow:-8px_10px_20px_rgba(0,0,0,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}
