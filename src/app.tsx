import {
  Archive,
  ArrowRight,
  Blocks,
  BrainCircuit,
  Check,
  ChevronRight,
  Compass,
  FileImage,
  FolderKanban,
  Grid3X3,
  ImagePlus,
  LayoutDashboard,
  Library,
  Lightbulb,
  Maximize2,
  MonitorSmartphone,
  PanelsTopLeft,
  PencilLine,
  Presentation,
  Search,
  Share2,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const projects = [
  { name: "Wetland Museum", stage: "Concept Design", assets: 32, directions: 3, status: "AI analyzed" },
  { name: "Urban Pocket Park", stage: "Research", assets: 18, directions: 2, status: "Pattern draft" },
  { name: "Future Learning Hub", stage: "Strategy", assets: 45, directions: 5, status: "Ready to present" },
];

const inspirations = [
  { title: "Low roof line", tag: "Form", color: "from-stone-300 to-zinc-500" },
  { title: "Boardwalk sequence", tag: "Space", color: "from-emerald-200 to-teal-600" },
  { title: "Mist garden", tag: "Emotion", color: "from-sky-200 to-slate-500" },
  { title: "Timber skin", tag: "Material", color: "from-amber-200 to-orange-700" },
];

const patterns = [
  { name: "建筑与自然融合", source: "12/20 案例", confidence: "92%", text: "案例普遍降低建筑体量，通过环境、植被与路径弱化建筑存在。" },
  { name: "连续体验路径", source: "9/20 案例", confidence: "86%", text: "通过缓慢转折、观察节点和材质变化组织空间叙事。" },
  { name: "轻量结构语言", source: "7/20 案例", confidence: "78%", text: "细柱、悬挑、半透明围护共同构成低干预视觉印象。" },
];

const directions = [
  { title: "Natural Integration", desc: "建筑融入环境，以低影响策略组织体量、边界与材料。", keywords: ["Low Impact", "Landscape Integration", "Natural Material"] },
  { title: "Experience Journey", desc: "通过路径形成空间体验，把观察、停留和学习转化为序列。", keywords: ["Sequence", "Movement", "Observation"] },
  { title: "Ecological Education", desc: "把场地生态过程可视化，形成可参与、可理解的公共教育界面。", keywords: ["Open Experience", "Ecology", "Learning"] },
];

function StatCard({ label, value, helper }: { label: string; value: string; helper: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-xs text-zinc-500">{helper}</p>
    </div>
  );
}

function SectionTitle({ icon: Icon, eyebrow, title }: { icon: typeof Sparkles; eyebrow: string; title: string }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div>
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          <Icon className="size-4" /> {eyebrow}
        </div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-300/50 hover:text-white">
        View all
      </button>
    </div>
  );
}

function CanvasNode({ className, title, meta }: { className: string; title: string; meta: string }) {
  return (
    <div className={`absolute rounded-2xl border border-white/10 bg-zinc-950/85 p-3 shadow-2xl shadow-black/40 ${className}`}>
      <div className="h-24 rounded-xl bg-gradient-to-br from-zinc-700 via-zinc-800 to-black" />
      <p className="mt-3 text-sm font-medium text-white">{title}</p>
      <p className="text-xs text-zinc-500">{meta}</p>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-zinc-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_85%_8%,rgba(168,85,247,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-300 text-zinc-950 shadow-lg shadow-cyan-300/30">
                <Blocks className="size-6" />
              </div>
              <div>
                <p className="text-lg font-bold">DesignHub</p>
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">AI Design Thinking Workbench</p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
              {['Dashboard', 'Projects', 'Canvas', 'Library', 'AI Insight', 'Design DNA'].map((item) => <a className="transition hover:text-white" href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>)}
            </nav>
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-950">Open Studio</button>
          </header>

          <div className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <Sparkles className="size-4" /> 从视觉输入到设计方法
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
                AI 增强型<br />设计思维工作台
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                DesignHub 理解设计灵感中的视觉规律、空间逻辑和设计语言，帮助设计师发现灵感、整理素材、提炼规律、生成方向并沉淀个人设计资产。
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-zinc-950 shadow-xl shadow-cyan-300/20">Start AI Canvas <ArrowRight className="size-4" /></button>
                <button className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white">Watch workflow <MonitorSmartphone className="size-4" /></button>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-4 shadow-2xl shadow-black/50 backdrop-blur">
              <div className="mb-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <Search className="size-4 text-zinc-500" />
                <span className="text-sm text-zinc-400">Search project, inspiration, design patterns...</span>
                <span className="ml-auto rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">AI Assistant</span>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <StatCard label="Active projects" value="12" helper="4 in concept design" />
                <StatCard label="Inspiration assets" value="1,284" helper="AI tagged by form / space" />
                <StatCard label="Design directions" value="38" helper="Accepted into strategy" />
              </div>
              <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-semibold text-white">Wetland Museum</p>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">AI analyzed</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {inspirations.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900 p-2">
                      <div className={`h-28 rounded-xl bg-gradient-to-br ${item.color}`} />
                      <p className="mt-2 text-xs font-medium text-white">{item.title}</p>
                      <p className="text-[11px] text-cyan-300">{item.tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle icon={LayoutDashboard} eyebrow="Page 01" title="Dashboard 首页工作台" />
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.2fr_0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="mb-4 flex items-center gap-2 font-semibold"><FolderKanban className="size-5 text-cyan-300" /> Projects</p>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.name} className="rounded-2xl border border-white/10 bg-zinc-950 p-4">
                  <div className="flex items-center justify-between"><p className="font-semibold">{project.name}</p><ChevronRight className="size-4 text-zinc-500" /></div>
                  <p className="mt-1 text-sm text-zinc-500">{project.stage}</p>
                  <div className="mt-4 flex gap-2 text-xs text-zinc-400"><span>{project.assets} assets</span><span>•</span><span>{project.directions} directions</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="mb-4 flex items-center gap-2 font-semibold"><Library className="size-5 text-cyan-300" /> Recent Inspiration</p>
            <div className="grid grid-cols-2 gap-4">
              {inspirations.map((item) => <div key={item.title} className={`h-48 rounded-3xl bg-gradient-to-br ${item.color} p-4 flex items-end`}><span className="rounded-full bg-black/40 px-3 py-1 text-sm backdrop-blur">{item.title}</span></div>)}
            </div>
          </div>
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-5">
            <p className="mb-4 flex items-center gap-2 font-semibold"><BrainCircuit className="size-5 text-cyan-300" /> AI Insight</p>
            <div className="space-y-4">
              {patterns.slice(0, 2).map((pattern) => (
                <div key={pattern.name} className="rounded-2xl bg-zinc-950/80 p-4">
                  <div className="flex justify-between"><p className="font-semibold">{pattern.name}</p><span className="text-cyan-300">{pattern.confidence}</span></div>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{pattern.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="canvas" className="border-y border-white/10 bg-[#121212] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle icon={Maximize2} eyebrow="Page 03" title="AI Infinite Canvas · Studio Mode" />
          <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] shadow-2xl shadow-black/40">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px]" />
            <div className="absolute left-6 top-6 flex gap-2 rounded-full border border-white/10 bg-black/40 p-2 backdrop-blur">
              {[ImagePlus, FileImage, PencilLine, Grid3X3, WandSparkles].map((Icon, index) => <button key={index} className="rounded-full p-3 text-zinc-300 hover:bg-white/10 hover:text-white"><Icon className="size-5" /></button>)}
            </div>
            <CanvasNode className="left-[8%] top-[20%] w-48" title="Water edge roof" meta="Form · Low profile" />
            <CanvasNode className="left-[14%] top-[58%] w-56" title="Observation deck" meta="Space · Sequence" />
            <CanvasNode className="right-[12%] top-[16%] w-56" title="Hidden volume" meta="Strategy · Camouflage" />
            <CanvasNode className="right-[22%] bottom-[10%] w-48" title="Warm timber" meta="Material · Natural" />
            <div className="absolute left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-6 shadow-2xl shadow-cyan-300/10 backdrop-blur">
              <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-cyan-300 text-zinc-950"><BrainCircuit className="size-6" /></div>
              <h3 className="text-xl font-semibold text-white">AI Node: Pattern Recognition</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">20 张参考图已完成视觉理解，正在提取 Form、Space、Material、Color、Emotion 与 Strategy。</p>
              <div className="mt-5 flex flex-wrap gap-2">{["Form", "Space", "Material", "Color", "Emotion", "Strategy"].map((tag) => <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-100">{tag}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-insight" className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <SectionTitle icon={Lightbulb} eyebrow="AI Insight" title="从素材到设计规律" />
          <div className="space-y-4">
            {patterns.map((pattern, index) => (
              <div key={pattern.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="text-sm text-zinc-500">Pattern 0{index + 1} · 来源 {pattern.source}</p><h3 className="mt-1 text-xl font-semibold text-white">{pattern.name}</h3></div>
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm text-cyan-300">{pattern.confidence}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{pattern.text}</p>
                <div className="mt-4 flex gap-2"><button className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">Accept</button><button className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">Edit</button><button className="rounded-full bg-rose-400/10 px-3 py-1 text-xs text-rose-300">Reject</button></div>
              </div>
            ))}
          </div>
        </div>
        <div id="projects" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <SectionTitle icon={Compass} eyebrow="Direction" title="生成设计方向与策略" />
          <div className="space-y-4">
            {directions.map((direction) => (
              <div key={direction.title} className="rounded-3xl border border-white/10 bg-zinc-950 p-5">
                <h3 className="text-xl font-semibold text-white">{direction.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{direction.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">{direction.keywords.map((keyword) => <span key={keyword} className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">{keyword}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="design-dna" className="bg-white py-16 text-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500"><Archive className="size-4" /> Personal Design DNA</div>
              <h2 className="text-4xl font-semibold tracking-tight">把每次修改沉淀为个人设计资产</h2>
              <p className="mt-5 leading-7 text-zinc-600">系统记录用户从“自然融合、低干预、隐藏建筑”到“自然共生、生态教育、开放体验”的修改偏好，逐步形成可复用的空间语言、材料倾向与常用策略。</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {["连续体验", "自然质感", "简洁几何", "人与自然关系"].map((dna, index) => <div key={dna} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6"><Check className="mb-6 size-6 text-emerald-600" /><p className="text-sm text-zinc-500">DNA 0{index + 1}</p><h3 className="mt-2 text-2xl font-semibold">{dna}</h3></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><Presentation className="mb-5 size-8 text-cyan-300" /><h3 className="text-2xl font-semibold">Presentation Mode</h3><p className="mt-3 text-zinc-400">自动生成 Project Title、Inspiration、AI Analysis、Design Pattern、Direction 与 Strategy，支持 PDF / PNG / Share Link。</p></div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><MonitorSmartphone className="mb-5 size-8 text-cyan-300" /><h3 className="text-2xl font-semibold">Mobile Capture</h3><p className="mt-3 text-zinc-400">移动端用于 Discover、Saved、Projects 和 Profile，快速保存灵感并同步到 Desktop Canvas。</p></div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><PanelsTopLeft className="mb-5 size-8 text-cyan-300" /><h3 className="text-2xl font-semibold">MVP Priority</h3><p className="mt-3 text-zinc-400">Phase 1 聚焦 Dashboard、Infinite Board、Asset Management、AI Insight Panel 与 Direction Card。</p></div>
        </div>
        <footer className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
          <span>DesignHub · AI Native Design Thinking Workbench</span>
          <span className="flex items-center gap-2"><Share2 className="size-4" /> Figma + PureRef + Notion + AI</span>
        </footer>
      </section>
    </main>
  );
}
