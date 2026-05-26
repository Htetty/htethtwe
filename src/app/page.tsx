import { IoClose, IoRemove, IoResize } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="relative w-full max-w-2xl min-h-[400px] overflow-hidden rounded-xl border border-white/10 bg-[#181818] text-white shadow-2xl">
        <div className="absolute top-0 left-0 flex h-8 w-full items-center rounded-t-xl bg-[#303030] px-4 group">
          <div className="flex gap-2.5">
            <span className="flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-red-500">
              <IoClose className="h-3 w-3 text-red-950 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>

            <span className="flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-yellow-500">
              <IoRemove className="h-3 w-3 text-yellow-950 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>

            <span className="flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-green-500">
              <IoResize className="h-2.5 w-2.5 text-green-950 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 text-xs text-white/50">
            htethtwe — zsh
          </div>
        </div>

        <div className="space-y-2 overflow-x-auto p-4 pt-12 font-mono text-sm">
          {/* TODO: Replace placeholder with dynamic terminal login metadata. */}
          <div className="text-white/45">
            Last login: x y z 00:00:00 on ttys000
          </div>

          <div className="flex min-w-max items-center gap-1.5">
            <span className="text-green-400">htet@Htets-MacBook-Air-2</span>
            <span className="text-white/50">~ %</span>
            <span className="text-white">
              npx create-next-app@latest htethtwe
            </span>
            <span className="h-4 w-2 animate-pulse bg-white" />
          </div>
        </div>
      </div>
    </main>
  );
}
