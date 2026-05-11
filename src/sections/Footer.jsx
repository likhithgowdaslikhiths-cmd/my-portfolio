export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950/95 px-6 py-14 text-slate-300">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] xl:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-white">Likhith Gowda</p>
            <p className="max-w-xl text-slate-400 leading-7">
              Building premium web experiences with polished UI, fast performance, and thoughtful UX. Ready to collaborate on websites that stand out and convert.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-cyan-400/10 bg-slate-900/80 p-6 shadow-premium">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Contact</p>
              <p className="mt-4 text-base text-white">likhithgowdaslikhiths@gmail.com</p>
              <p className="mt-2 text-sm text-slate-400">Bangalore, India</p>
            </div>
            <div className="rounded-[1.5rem] border border-cyan-400/10 bg-slate-900/80 p-6 shadow-premium">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Quick Links</p>
              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <p>Home</p>
                <p>About</p>
                <p>Experience</p>
                <p>Projects</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Likhith Gowda. Crafted with React, Tailwind CSS & premium interactions.</p>
        </div>
      </div>
    </footer>
  );
}
