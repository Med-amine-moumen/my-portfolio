/**
 * Static, server-rendered ambient background: subtle grid + two floating
 * glow orbs. Ported 1:1 from the original Vite App.tsx (dark-mode
 * conditionals replaced by Tailwind `dark:` variants — same colors).
 */
export function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* grid */}
      <div className="absolute inset-0 bg-[size:28px_28px] bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
      {/* subtle corner glows */}
      <div className="float-glow absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] bg-accent-subtle opacity-50 dark:bg-accent-base dark:opacity-[0.05]" />
      <div
        className="float-glow absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full blur-[120px] bg-accent-subtle opacity-30 dark:bg-accent-base dark:opacity-[0.03]"
        style={{ animationDelay: '2.5s' }}
      />
    </div>
  );
}
