function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#141420,_#0A0A0F_45%)] text-[#f5f5f5] font-sans">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-4 border-b border-[#9D4BFF] bg-black/80 backdrop-blur-md sticky top-0 z-10">
        <div className="font-extrabold tracking-[0.15em] text-xs uppercase text-[#00F6FF] drop-shadow-[0_0_8px_#00F6FF]">
          CYBER•CLASS
        </div>

        <nav className="flex gap-6 text-sm">
          {["Dashboard", "Schedule", "Access"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-[#ccccdd] hover:after:w-full after:w-0 after:h-[2px] after:absolute after:left-0 after:-bottom-1 after:bg-gradient-to-r after:from-[#FF2EC4] after:to-[#E2FF1A] after:transition-all after:duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* MAIN */}
      <main className="grid lg:grid-cols-[1.4fr_1fr] gap-8 px-10 py-16 max-w-[1100px] mx-auto">
        {/* LEFT */}
        <section className="space-y-6">
          {/* BADGES */}
          <div className="flex gap-3 flex-wrap">
            <span className="px-3 py-1 text-[11px] uppercase tracking-wider rounded-full border border-[#E2FF1A] text-[#E2FF1A]">
              neon interface
            </span>
            <span className="px-3 py-1 text-[11px] uppercase tracking-wider rounded-full border border-[#00F6FF] text-[#00F6FF]">
              cyberpunk theme
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl leading-tight font-bold">
            Manage your{" "}
            <span className="bg-gradient-to-r from-[#FF2EC4] to-[#00F6FF] text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(255,46,196,0.6)]">
              Night City
            </span>{" "}
            classroom like a console.
          </h1>

          {/* SUBTEXT */}
          <p className="text-[#b6b6c6] text-sm max-w-md">
            Sistem reservasi kelas dengan nuansa neon futuristik. Pantau jadwal,
            akses ruang, dan status penggunaan dalam satu dashboard bergaya
            cyberpunk.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-2 rounded-xl font-semibold text-sm bg-gradient-to-br from-[#E2FF1A] to-[#FF2EC4] text-[#0A0A0F] shadow-[0_0_12px_rgba(226,255,26,0.8),0_0_26px_rgba(255,46,196,0.7)] hover:shadow-[0_0_20px_rgba(226,255,26,1),0_0_40px_rgba(255,46,196,1)] transition">
              Launch Console
            </button>

            <button className="px-5 py-2 rounded-xl text-sm font-medium border border-[#00F6FF] text-[#00F6FF] drop-shadow-[0_0_6px_#00F6FF]">
              View Demo
            </button>
          </div>

          <p className="text-[11px] uppercase tracking-[0.15em] text-[#8888aa]">
            powered by 00F6FF, E2FF1A, 9D4BFF, FF2EC4, 0A0A0F.
          </p>
        </section>

        {/* RIGHT PANEL */}
        <aside
          className="p-5 rounded-2xl border border-[#9D4BFF]/60 bg-[rgba(9,9,14,0.95)] shadow-[0_0_22px_rgba(0,0,0,0.9),0_0_30px_rgba(157,75,255,0.5)] 
          bg-gradient-to-br from-[rgba(255,46,196,0.15)] via-transparent to-transparent"
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-3 text-xs">
            <div className="flex items-center text-[#bbbbdd] uppercase tracking-[0.12em]">
              <span className="w-2 h-2 rounded-full bg-[#E2FF1A] shadow-[0_0_8px_#E2FF1A] mr-2" />
              SYSTEM ONLINE
            </div>
            <span className="text-[#FF2EC4] text-[11px]">
              v2.07 • NIGHT MODE
            </span>
          </div>

          {/* CHIPS */}
          <div className="flex gap-2 flex-wrap mb-4">
            <span className="chip px-2 py-1 text-[11px] rounded-full border border-[#00F6FF] text-[#00F6FF]">
              Room A-12 · Neon Lab
            </span>
            <span className="chip px-2 py-1 text-[11px] rounded-full border border-[#9D4BFF] text-[#9D4BFF]">
              Access Level: 03
            </span>
            <span className="chip px-2 py-1 text-[11px] rounded-full border border-[#FF2EC4] text-[#FF2EC4]">
              Status: Reserved
            </span>
          </div>

          {/* METERS */}
          <div>
            <p className="text-[11px] uppercase tracking-widest mb-1 text-[#b0b0c4]">
              Occupancy Load
            </p>
            <div className="w-full h-2 bg-[#14141E] border border-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[78%] bg-gradient-to-r from-[#00F6FF] via-[#E2FF1A] to-[#FF2EC4] shadow-[0_0_18px_#00F6FF]" />
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[11px] uppercase tracking-widest mb-1 text-[#b0b0c4]">
              Energy Usage
            </p>
            <div className="w-full h-2 bg-[#14141E] border border-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[52%] bg-gradient-to-r from-[#9D4BFF] to-[#FF2EC4] shadow-[0_0_18px_#9D4BFF]" />
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex justify-between mt-4 text-[11px] text-[#9999bb]">
            <div>
              Active Users <br />
              <span className="text-2xl font-bold text-[#E2FF1A] drop-shadow-[0_0_10px_#E2FF1A]">
                27
              </span>
            </div>

            <div>
              Free Rooms <br />
              <span className="text-[#00F6FF] font-semibold">4 / 16</span>
            </div>

            <div>
              Alert Level <br />
              <span className="text-[#FF2EC4] font-semibold">LOW</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
