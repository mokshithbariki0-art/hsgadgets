export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="aurora absolute -inset-[20%]" />
      <div className="absolute inset-0 grid-bg opacity-60" />
    </div>
  );
}
