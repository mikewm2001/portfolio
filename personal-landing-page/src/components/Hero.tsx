export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Layer 1 — video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/hero-m.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Layer 2 — dark base + violet radial bloom */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(167,139,250,0.15) 0%, transparent 70%), rgba(13,13,13,0.70)',
        }}
      />

      {/* Layer 3 — text */}
      <div className="relative z-20 flex flex-col items-center gap-6 px-6 text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-white/70">
          Software Engineer
        </p>

        <h1 className="text-6xl font-semibold tracking-tight text-white sm:text-7xl">
          Michael Mei
        </h1>

        <p className="max-w-md text-base leading-relaxed text-white/70">
          Backend-focused engineer building scalable systems and end-to-end applications.
        </p>
      </div>
    </section>
  );
}
