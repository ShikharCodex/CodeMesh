import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const cards = [
    {
      title: "Instant Code Sharing",
      desc: "Generate a unique secure link and share your code with anyone in milliseconds.",
      gradient: "from-violet-500/20 to-fuchsia-500/20",
      border: "group-hover:border-violet-500/50",
    },
    {
      title: "Multi-File Projects",
      desc: "Organize complex architectures across multiple files with an intuitive file tree.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "group-hover:border-blue-500/50",
    },
    {
      title: "Developer-First UI",
      desc: "Distraction-free, minimalist interface focused entirely on writing and reading code.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "group-hover:border-emerald-500/50",
    },
    {
      title: "Debug Faster",
      desc: "Send your snippet to teammates, collaborate, and squash bugs instantly.",
      gradient: "from-orange-500/20 to-red-500/20",
      border: "group-hover:border-orange-500/50",
    },
    {
      title: "Teaching Friendly",
      desc: "The perfect lightweight tool for educators and students to demonstrate examples.",
      gradient: "from-pink-500/20 to-rose-500/20",
      border: "group-hover:border-pink-500/50",
    },
    {
      title: "Team Collaboration",
      desc: "Maintain a shared repository of snippets across your team for fast access.",
      gradient: "from-indigo-500/20 to-blue-500/20",
      border: "group-hover:border-indigo-500/50",
    },
  ];

  return (
    <div className="bg-[#09090b] text-zinc-100 min-h-screen overflow-x-hidden font-sans selection:bg-violet-500/30">
      {/* Refined Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
            <span className="font-bold text-white text-xl">C</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">CodeMesh</h1>
        </div>

        <button
          onClick={() => navigate("/editor")}
          className="px-5 py-2.5 bg-white text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-95"
        >
          Launch Editor
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-20 md:pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-violet-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            No Signup Required
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            The Fastest Way To: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              <TypeAnimation
                sequence={[
                  "Share Code.",
                  3000,
                  "Debug Code.",
                  3000,
                  "Review Code.",
                  3000,
                ]}
                speed={30}
                repeat={Infinity}
                wrapper="span"
              />
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            CodeMesh is a developer-first platform for instant code sharing.
            Compare your snippets with AI-optimized versions for cleaner, more
            efficient architecture.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate("/editor")}
              className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] active:scale-95 flex items-center justify-center gap-2"
            >
              Start Sharing Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
            <a
              href="#features"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all duration-300 w-full sm:w-auto border border-white/10 flex items-center justify-center"
            >
              View Features
            </a>
          </div>
        </motion.div>

        {/* Floating Code IDE */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-blue-500/20 blur-3xl rounded-full" />
          <div className="relative bg-[#18181b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500/80 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500/80 rounded-full" />
                <div className="w-3 h-3 bg-green-500/80 rounded-full" />
              </div>
              <div className="text-xs text-zinc-500 font-mono">greet.js</div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm text-zinc-300 font-mono leading-relaxed">
                <span className="text-pink-400">function</span>{" "}
                <span className="text-blue-400">greet</span>(name) {"{\n"}
                {"  "} <span className="text-pink-400">return</span>{" "}
                <span className="text-green-400">"Hello "</span> + name;{"\n"}
                {"}\n\n"}
                <span className="text-blue-300">console</span>.
                <span className="text-blue-400">log</span>(
                <span className="text-blue-400">greet</span>(
                <span className="text-green-400">"Developer"</span>));
              </pre>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section
        id="features"
        className="relative max-w-7xl mx-auto px-6 py-24 z-10"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Built for velocity.
          </h2>
          <p className="text-zinc-400 text-lg">
            Everything you need to share and review code, wrapped in a
            beautiful, minimalist interface.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] ${card.border}`}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${card.gradient} rounded-2xl pointer-events-none blur-xl`}
              />
              <h3 className="text-xl font-semibold mb-3 text-zinc-100 relative z-10">
                {card.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed relative z-10">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LIVE PREVIEW / SPLIT SECTION */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Crystal clear readability.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              No cluttered sidebars or distracting popups. CodeMesh provides a
              zen-like environment where your code takes center stage. Focus on
              the logic, not the UI.
            </p>
            <ul className="space-y-4">
              {[
                "Syntax highlighting for 50+ languages",
                "Side-by-side AI optimization diffs",
                "One-click copy to clipboard",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-zinc-300">
                  <svg
                    className="w-5 h-5 text-violet-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#18181b] border border-white/10 rounded-2xl p-6 md:p-8 font-mono text-sm shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 bg-violet-500 h-full"></div>
            <pre className="text-zinc-300 whitespace-pre-wrap">
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-400">optimizeData</span> = (
              <span className="text-orange-300">payload</span>) {`=>`} {"{\n"}
              {"  "} <span className="text-pink-400">if</span> (!payload){" "}
              <span className="text-pink-400">return</span>{" "}
              <span className="text-orange-300">null</span>;{"\n"}
              {"  "}{" "}
              <span className="text-zinc-500">
                // AI optimized sorting algorithm
              </span>
              {"\n"}
              {"  "} <span className="text-pink-400">return</span> payload.
              <span className="text-blue-400">sort</span>((
              <span className="text-orange-300">a</span>,{" "}
              <span className="text-orange-300">b</span>) {`=>`} a.id - b.id);
              {"\n"}
              {"}\n"}
            </pre>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/10 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to share your code?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Join thousands of developers sharing and optimizing code instantly.
          </p>
          <button
            onClick={() => navigate("/editor")}
            className="px-10 py-5 bg-white text-zinc-950 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95"
          >
            Launch CodeMesh Editor
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
              C
            </div>
            <span>CodeMesh</span>
          </div>
          <p>© {new Date().getFullYear()} CodeMesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
