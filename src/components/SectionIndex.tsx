export function SectionIndex({ index, label }: { index: string; label?: string }) {
  return (
    <div className="flex items-center gap-4 md:gap-5">
      <span className="label text-accent">{index}</span>
      <span className="h-px w-10 bg-accent/30 md:w-16" aria-hidden="true" />
      {label ? <span className="label">{label}</span> : null}
    </div>
  );
}
