export function SectionIndex({ index, label }: { index: string; label?: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="label text-accent">{index}</span>
      <span className="h-px w-12 bg-line" aria-hidden="true" />
      {label ? <span className="label">{label}</span> : null}
    </div>
  );
}
