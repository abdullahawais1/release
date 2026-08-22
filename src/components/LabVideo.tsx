type LabVideoProps = {
  title: string;
  videoSrc?: string;
  poster?: string;
};

export function LabVideo({ title, videoSrc, poster }: LabVideoProps) {
  if (videoSrc) {
    return (
      <div className="panel-dark relative aspect-video overflow-hidden rounded-xl border border-(--panel-border) bg-(--panel-bg)">
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          poster={poster}
          aria-label={`${title} — automation demo video`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div
      className="panel-dark relative flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-(--panel-border) bg-(--panel-bg) text-center"
      role="img"
      aria-label={`${title} — automation demo video coming soon`}
    >
      <div className="pointer-events-none absolute inset-0 panel-grid opacity-30" aria-hidden="true" />
      <span
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-(--panel-border-strong) text-(--panel-muted)"
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <path d="M4 3L11 7L4 11V3Z" />
        </svg>
      </span>
      <span className="relative font-mono text-[11px] uppercase tracking-wide text-(--panel-muted)">
        Demo Video Coming Soon
      </span>
    </div>
  );
}
