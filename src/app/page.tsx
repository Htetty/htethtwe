"use client";

import { useEffect, useState } from "react";
import { IoClose, IoRemove, IoResize } from "react-icons/io5";

const techStack = [
  "python",
  "c++",
  "typescript",
  "react",
  "next.js",
  "tensorflow",
  "opencv",
  "linux",
  "git/github",
];

type TerminalStage = "idle" | "creating" | "installing" | "complete";

function TerminalLoader() {
  return (
    <span
      className="terminal-loader relative inline-block h-7 w-5 align-bottom"
      aria-label="Loading"
    >
      <span />
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  const [terminalStage, setTerminalStage] = useState<TerminalStage>("idle");

  const hasStarted = terminalStage !== "idle";
  const hasDependencyOutput =
    terminalStage === "installing" || terminalStage === "complete";
  const showInstallComplete = terminalStage === "complete";

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Enter" || hasStarted) return;

      setTerminalStage("creating");

      window.setTimeout(() => {
        setTerminalStage("installing");
      }, 1400);

      window.setTimeout(() => {
        setTerminalStage("complete");
      }, 4600);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasStarted]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="relative h-[min(620px,calc(100vh-2rem))] w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-[#181818] text-white shadow-2xl">
        <div className="group absolute top-0 left-0 flex h-8 w-full items-center rounded-t-xl bg-[#303030] px-4">
          <div className="flex gap-2.5">
            {/* Red */}
            <span className="flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-red-500">
              <IoClose className="h-3 w-3 text-red-950 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>

            {/* Yellow */}
            <span className="flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-yellow-500">
              <IoRemove className="h-3 w-3 text-yellow-950 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>

            {/* Green */}
            <span className="flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-green-500">
              <IoResize className="h-2.5 w-2.5 text-green-950 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </div>

          <div className="absolute left-1/2 max-w-[52%] -translate-x-1/2 truncate text-xs text-white/50">
            htet — npm install portfolio
          </div>
        </div>

        <div className="h-full space-y-1 overflow-x-auto overflow-y-auto p-4 pt-12 font-mono text-sm sm:text-base">
          {/* TODO: Replace placeholder with dynamic terminal login metadata */}
          <div className="text-white/45">
            Last login: x y z 00:00:00 on ttys000
          </div>

          {/* Initial command */}
          <div className="flex min-w-max items-center gap-1.5">
            <span className="text-green-400">htet@macbook</span>

            <span className="text-white/50">~ %</span>

            <span className="text-white">npx create-htet-portfolio</span>

            {!hasStarted && (
              <>
                <span className="inline-block h-4 w-2 animate-pulse bg-white" />

                <span className="ml-auto animate-pulse text-white/50">
                  Click Enter
                </span>
              </>
            )}
          </div>

          {/* Terminal output */}
          {hasStarted && (
            <div className="space-y-1 text-white">
              {terminalStage === "creating" && (
                <div className="py-1 text-white/70">
                  <TerminalLoader />
                </div>
              )}

              {hasDependencyOutput && (
                <>
                  <div>
                    Creating a new Next.js app in{" "}
                    <span className="text-green-400">
                      /Users/htet/portfolio
                    </span>
                    .
                  </div>

                  <br />

                  <div>Initializing project with template: app-tw</div>

                  <br />

                  <div>Loading my tech stack:</div>

                  <ul>
                    {techStack.map((skill) => (
                      <li key={skill}>
                        - <span className="text-cyan-400">{skill}</span>
                      </li>
                    ))}
                  </ul>

                  <br />
                </>
              )}

              {terminalStage === "installing" && (
                <div className="py-1 text-white/70">
                  <TerminalLoader />
                </div>
              )}

              {showInstallComplete && (
                <div className="space-y-1">
                  <div>added 9 modules in 8s</div>

                  <br />

                  <div>initialized git repository</div>

                  <br />

                  <div>
                    <span className="text-green-400">Success!</span> Welcome to
                    my portfolio!
                  </div>

                  <br />

                  <div className="flex items-center gap-1.5">
                    <span className="text-green-400">
                      htet@Htets-MacBook-Air-2
                    </span>

                    <span className="text-white/50">portfolio %</span>

                    <span className="inline-block h-4 w-2 animate-pulse bg-white" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
