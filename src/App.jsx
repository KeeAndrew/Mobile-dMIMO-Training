import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Radio,
  Users,
  BarChart3,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  Progress,
} from "./ui";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionShell({ eyebrow, title, description, children }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-10 max-w-3xl">
        {eyebrow && (
          <Badge className="mb-4 rounded-full border border-white/60 bg-white/70 px-4 py-1 text-xs tracking-[0.18em] text-slate-700 backdrop-blur">
            {eyebrow}
          </Badge>
        )}
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

function GlassCard({ className = "", children }) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/60 bg-white/70 shadow-[0_20px_80px_-30px_rgba(15,23,42,0.25)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

function Navbar({ page, setPage }) {
  const navItems = [
    { label: "Home", key: "home" },
    { label: "Learn", key: "learn" },
    { label: "Research", key: "research" },
    { label: "Team", key: "team" },
  ];

  return (
    <div className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/75 px-4 py-3 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.25)] backdrop-blur-xl md:px-6">
        <button onClick={() => setPage("home")} className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg">
            <Radio className="h-4 w-4" />
          </div>
          <span>Commercializing Mobile dMIMO</span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setPage(item.key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition",
                page === item.key
                  ? "bg-slate-950 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <Button
          onClick={() => setPage("learn")}
          className="rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800"
        >
          Start Learning
        </Button>
      </div>
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-12 pt-16 md:px-10 md:pb-24 md:pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.85),transparent_30%),linear-gradient(to_bottom,#f8fafc,#eff6ff_35%,#ffffff_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-5 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-sky-700 shadow-sm backdrop-blur">
              FutureG Research • Interactive Learning
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl md:leading-[1.04]">
              Learn and explore <span className="text-sky-600">Mobile dMIMO</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              A polished research site for understanding distributed wireless systems through visuals, education, and interactive training.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => setPage("learn")} className="rounded-full bg-slate-950 px-6 py-3 text-base text-white hover:bg-slate-800">
                Start Learning
                <ArrowRight className="ml-2 inline h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <GlassCard className="p-4 md:p-5">
            <div className="rounded-[24px] bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.88),rgba(14,116,144,0.82))] p-6 text-white md:p-8">
              <p className="text-sm text-sky-100">Concept Snapshot</p>
              <p className="mt-3 text-3xl font-semibold">Distributed coverage</p>
              <p className="mt-3 text-slate-300">
                Mobile dMIMO spreads antennas across the environment and coordinates them as one system.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      <SectionShell
        eyebrow="Site overview"
        title="Navigating This Website"
        description="Use this navigation to open the dedicated Learn, Research, and Team pages."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: "Learn/Train", text: "Read the intro and try the interactive demo.", icon: BookOpen, page: "learn" },
            { title: "Research", text: "Show milestones, visuals, and project updates.", icon: BarChart3, page: "research" },
            { title: "Team", text: "Display affiliation, advisor, and team information.", icon: Users, page: "team" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title} className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                <div className="mt-6">
                  <Button onClick={() => setPage(item.page)} className="rounded-full border border-slate-200 bg-white">
                    Open {item.title}
                  </Button>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </SectionShell>
    </>
  );
}
function VideoSection() {
  const videoConfig = {
    title: "Mobile dMIMO overview",
    description:
      "text",
    youtubeId: "yUI-PmdJiVY",
  };

  return (
    <SectionShell
      eyebrow="Embedded learning"
      title="Watch a clean video overview"
      description="text"
    >
      <GlassCard className="overflow-hidden">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="aspect-video w-full bg-slate-100">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoConfig.youtubeId}`}
              title={videoConfig.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="p-8 md:p-10">
            <Badge className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              Editable video card
            </Badge>
            <h3 className="mt-5 text-2xl font-semibold text-slate-950">
              {videoConfig.title}
            </h3>
            <p className="mt-4 leading-7 text-slate-600">
              {videoConfig.description}
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-500">
              <div className="rounded-2xl bg-slate-50 p-4">
                <span className="font-medium text-slate-800">Quick edit note:</span>{" "}
                text
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                text
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </SectionShell>
  );
}
function LearnPage() {
  const learningCards = [
    {
      title: "What it is",
      text: "Mobile dMIMO uses antennas that are distributed across an environment instead of packed into a single base station panel.",
    },
    {
      title: "Why it matters",
      text: "By spreading antennas out, the system can improve coverage, reliability, and flexibility in more complex spaces.",
    },
    {
      title: "How it differs",
      text: "Traditional co-located MIMO keeps antennas together. Mobile dMIMO coordinates separated nodes as one larger wireless system.",
    },
    {
      title: "Future impact",
      text: "The idea fits FutureG and 6G goals where scalable, resilient, high-performance wireless systems are increasingly important.",
    },
  ];

  const learnSections = [
    {
      title: "A simple definition",
      text: "Mobile dMIMO stands for Mobile Distributed Multiple-Input, Multiple-Output. Instead of relying on one tightly packed antenna array, it uses multiple separated antenna points that work together in a coordinated way.",
    },
    {
      title: "Why distribution changes the system",
      text: "When antennas are spread through the environment, users can be closer to at least some of the nodes. That can help coverage, reduce weak zones, and make the wireless experience more reliable.",
    },
    {
      title: "How it compares to traditional MIMO",
      text: "In traditional co-located MIMO, antennas usually sit together at one site. In Mobile dMIMO, the nodes are placed in different locations and coordinated so they behave more like one intelligent network.",
    },
    {
      title: "Why researchers care",
      text: "For FutureG and 6G research, Mobile dMIMO is exciting because it connects to problems like scalability, interference management, reliability, mobility, and advanced coverage design.",
    },
  ];

  const useCaseCards = [
    {
      title: "Low Density Connectivity",
      subtitle: "Mobile d-MIMO + LEO links",
      description:
        "Extends connectivity to rural and underserved areas by coordinating distributed nodes without needing new macro cell towers.",
      type: "rural",
    },
    {
      title: "Temporary Networks",
      subtitle: "Mobile dMIMO + COWs",
      description:
        "Supports rapid, deployable connectivity for events, emergencies, and temporary coverage needs without permanent infrastructure.",
      type: "temporary",
    },
    {
      title: "Permanent Urban Networks",
      subtitle: "Dense coordinated node coverage",
      description:
        "Improves service in dense city environments by coordinating distributed nodes instead of only adding more macro towers.",
      type: "urban",
    },
  ];

  const quickFacts = [
    "Distributed antennas instead of one central cluster",
    "Coordinated nodes acting like one system",
    "Potential for stronger coverage in difficult environments",
    "Relevant to FutureG and 6G experimentation",
  ];

  return (
    <>
      <SectionShell
        eyebrow="Beginner explainer"
        title="What is Mobile dMIMO?"
        description="A simple, visually clean introduction to the idea behind distributed antennas and why the concept matters for FutureG and 6G research."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {learningCards.map((item) => (
            <GlassCard key={item.title} className="h-full p-6 transition duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Traditional co-located MIMO",
              points: [
                "Antennas grouped at one site",
                "More centralized physical layout",
                "Works well but has placement limits",
              ],
            },
            {
              title: "Why distributed antennas help",
              points: [
                "Serve wider areas more effectively",
                "Reduce some location bottlenecks",
                "Create multiple useful signal paths",
              ],
            },
            {
              title: "Why it fits FutureG / 6G",
              points: [
                "Supports next-generation coverage goals",
                "Promotes scalability and resilience",
                "Opens new research directions for advanced wireless systems",
              ],
            },
          ].map((block) => (
            <Card
              key={block.title}
              className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_80px_-35px_rgba(15,23,42,0.22)] backdrop-blur"
            >
              <CardHeader className="p-0">
                <CardTitle className="text-xl">{block.title}</CardTitle>
              </CardHeader>
              <CardContent className="mt-4 space-y-3 p-0">
                {block.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                    <p className="text-slate-600">{point}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Reading and introduction"
        title="Learn the idea before the interaction"
        description="The Learn page now gives more reading, more structure, and a clearer introduction before the interactive training begins."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            {learnSections.map((section) => (
              <GlassCard key={section.title} className="p-6 md:p-7">
                <h3 className="text-2xl font-semibold text-slate-950">{section.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{section.text}</p>
              </GlassCard>
            ))}
          </div>

          <div className="space-y-6">
            <GlassCard className="p-6 md:p-7">
              <h3 className="text-xl font-semibold text-slate-950">Quick facts</h3>
              <div className="mt-5 space-y-3">
                {quickFacts.map((fact) => (
                  <div key={fact} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                    <div className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                    <p className="text-slate-700">{fact}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-7">
              <h3 className="text-xl font-semibold text-slate-950">Simple idea flow</h3>
              <div className="mt-6 space-y-5">
                {[
                  ["1", "Antennas are placed in multiple locations"],
                  ["2", "The nodes coordinate instead of acting alone"],
                  ["3", "The user can benefit from nearby distributed support"],
                  ["4", "The network adapts as the environment or user changes"],
                ].map(([num, text]) => (
                  <div key={num} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 font-semibold text-sky-700">
                      {num}
                    </div>
                    <p className="text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-7">
              <h3 className="text-xl font-semibold text-slate-950">Why this matters for research</h3>
              <p className="mt-4 leading-8 text-slate-600">
                This idea is not just about bigger antenna systems. It is about smarter placement, coordinated service, and new ways to think about wireless performance in future environments.
              </p>
            </GlassCard>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Use cases"
        title="Three ways to think about Mobile dMIMO in practice"
        description="This section brings the same visual themes from your reference graphic into the site so the learning experience feels tied to real deployment scenarios."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {useCaseCards.map((card) => (
            <GlassCard key={card.title} className="p-6 md:p-7">
              <div className="mb-6 flex min-h-[120px] items-center justify-center rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fbff)] p-4">
                {card.type === "rural" && (
                  <div className="relative h-28 w-full">
                    <div className="absolute left-[10%] top-[35%] h-8 w-8 rounded-full border-2 border-slate-700" />
                    <div className="absolute left-[42%] top-[18%] h-8 w-8 rounded-full border-2 border-slate-700" />
                    <div className="absolute right-[10%] top-[40%] h-8 w-8 rounded-full border-2 border-slate-700" />
                    <div className="absolute left-[18%] top-[40%] h-px w-[24%] bg-orange-400" />
                    <div className="absolute left-[48%] top-[28%] h-px w-[24%] rotate-[24deg] bg-orange-400" />
                    <div className="absolute bottom-1 left-[10%] h-10 w-8 rounded-sm border-2 border-slate-700" />
                    <div className="absolute bottom-1 left-[40%] h-10 w-8 rounded-sm border-2 border-slate-700" />
                    <div className="absolute left-[62%] top-[18%] text-3xl text-slate-700">📡</div>
                  </div>
                )}
                {card.type === "temporary" && (
                  <div className="relative h-28 w-full">
                    <div className="absolute left-[12%] bottom-[18%] h-10 w-14 rounded-xl border-2 border-slate-700" />
                    <div className="absolute right-[12%] bottom-[18%] h-10 w-14 rounded-xl border-2 border-slate-700" />
                    <div className="absolute left-1/2 top-[18%] h-12 w-20 -translate-x-1/2 rounded-[999px] border-2 border-slate-700" />
                    <div className="absolute left-1/2 top-[6%] -translate-x-1/2 text-2xl">📱</div>
                    <div className="absolute left-[28%] top-[34%] h-px w-[18%] -rotate-[24deg] bg-orange-400" />
                    <div className="absolute right-[28%] top-[34%] h-px w-[18%] rotate-[24deg] bg-orange-400" />
                  </div>
                )}
                {card.type === "urban" && (
                  <div className="relative h-28 w-full">
                    <div className="absolute left-[12%] bottom-3 h-16 w-10 border-2 border-slate-700" />
                    <div className="absolute left-[28%] bottom-3 h-20 w-12 border-2 border-slate-700" />
                    <div className="absolute left-[48%] bottom-3 h-24 w-14 border-2 border-slate-700" />
                    <div className="absolute left-[70%] bottom-3 h-18 w-10 border-2 border-slate-700" />
                    <div className="absolute right-[6%] top-[8%] text-3xl text-slate-700">📶</div>
                    <div className="absolute left-[30%] top-[10%] h-px w-[46%] bg-orange-400" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                {card.subtitle}
              </p>
              <p className="mt-4 leading-7 text-slate-600">{card.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionShell>
      <VideoSection />
      <NodeSignalGame />

    </>
  );
}
function NodeSignalGame() {
  const networkScenarios = [
    {
      id: 1,
      title: "Low Density Connectivity",
      prompt:
        "A rural user needs connectivity across a sparse area. Select the distributed nodes that best extend coverage toward the user.",
      theme: "rural",
      nodes: [
        { id: "A", x: "18%", y: "26%", good: true },
        { id: "B", x: "46%", y: "18%", good: false },
        { id: "C", x: "74%", y: "26%", good: true },
        { id: "D", x: "28%", y: "68%", good: false },
        { id: "E", x: "68%", y: "72%", good: true },
      ],
      user: { x: "52%", y: "52%" },
      explanation:
        "In a low-density setting, distributed support can help extend service where fixed large infrastructure is limited.",
    },
    {
      id: 2,
      title: "Temporary Networks",
      prompt:
        "An event site needs temporary connectivity. Choose the nodes that would most naturally support fast deployable service around the user area.",
      theme: "temporary",
      nodes: [
        { id: "A", x: "20%", y: "22%", good: false },
        { id: "B", x: "48%", y: "18%", good: true },
        { id: "C", x: "76%", y: "26%", good: false },
        { id: "D", x: "26%", y: "64%", good: true },
        { id: "E", x: "70%", y: "66%", good: true },
      ],
      user: { x: "49%", y: "48%" },
      explanation:
        "Temporary networks benefit from smart placement and coordination, especially when coverage must be deployed quickly.",
    },
    {
      id: 3,
      title: "Permanent Urban Networks",
      prompt:
        "A dense urban environment needs coordinated service. Select the nodes that best support the user while fitting a distributed urban deployment.",
      theme: "urban",
      nodes: [
        { id: "A", x: "17%", y: "24%", good: false },
        { id: "B", x: "46%", y: "22%", good: true },
        { id: "C", x: "79%", y: "24%", good: true },
        { id: "D", x: "24%", y: "70%", good: false },
        { id: "E", x: "69%", y: "69%", good: true },
      ],
      user: { x: "58%", y: "50%" },
      explanation:
        "In urban settings, Mobile dMIMO can coordinate distributed nodes across buildings and streets to improve service and reduce congestion pressure.",
    },
  ];

  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const scenario = networkScenarios[scenarioIndex];
  const correctIds = scenario.nodes.filter((node) => node.good).map((node) => node.id);
  const progress = ((scenarioIndex + (submitted ? 1 : 0)) / networkScenarios.length) * 100;

  const isPerfect =
    submitted &&
    selectedNodes.length === correctIds.length &&
    correctIds.every((id) => selectedNodes.includes(id));

  const toggleNode = (id) => {
    if (submitted) return;
    setSelectedNodes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const submit = () => {
    if (submitted || selectedNodes.length === 0) return;
    setSubmitted(true);
    if (
      selectedNodes.length === correctIds.length &&
      correctIds.every((id) => selectedNodes.includes(id))
    ) {
      setScore((s) => s + 1);
    }
  };

  const next = () => {
    if (scenarioIndex < networkScenarios.length - 1) {
      setScenarioIndex((s) => s + 1);
      setSelectedNodes([]);
      setSubmitted(false);
    }
  };

  const reset = () => {
    setScenarioIndex(0);
    setSelectedNodes([]);
    setSubmitted(false);
    setScore(0);
  };

  return (
    <SectionShell
      eyebrow="Visual interactive training"
      title="Explore use-case-based node selection"
      description="Pick the distributed nodes that best support the user in each scenario."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <GlassCard className="p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Scenario {scenarioIndex + 1} of {networkScenarios.length}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-slate-950">
                {scenario.title}
              </h3>
            </div>
            <Badge className="rounded-full bg-sky-50 px-4 py-1 text-sky-700">
              Score {score}
            </Badge>
          </div>

          <div className="mt-5">
            <Progress value={progress} className="h-2 rounded-full" />
          </div>

          <div className="mt-7 rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#fbfdff,#f4f8ff)] p-4 md:p-5">
            <div className="mb-4 text-sm text-slate-500">Interactive network field</div>

            <div className="relative h-[430px] overflow-hidden rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fbff)]">
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />

              {scenario.theme === "rural" && (
                <>
                  <div className="absolute left-0 right-0 bottom-0 h-[45%] bg-[linear-gradient(180deg,#eef6eb,#dbead5)]" />
                  <div className="absolute left-[70%] top-[16%] text-5xl">📡</div>
                  <div className="absolute left-[34%] bottom-[24%] text-3xl">🌲</div>
                  <div className="absolute left-[58%] bottom-[18%] text-3xl">🌲</div>
                </>
              )}

              {scenario.theme === "temporary" && (
                <>
                  <div className="absolute left-0 right-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,#f5f5f5,#e7e7e7)]" />
                  <div className="absolute left-1/2 top-[10%] -translate-x-1/2 text-3xl">📱</div>
                </>
              )}

              {scenario.theme === "urban" && (
                <>
                  <div className="absolute left-0 right-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,#f6f7f9,#eceff3)]" />
                  <div className="absolute left-[12%] bottom-[22%] h-28 w-16 border border-slate-300 bg-white/80" />
                  <div className="absolute left-[30%] bottom-[20%] h-36 w-20 border border-slate-300 bg-white/80" />
                  <div className="absolute left-[55%] bottom-[20%] h-40 w-24 border border-slate-300 bg-white/80" />
                  <div className="absolute right-[6%] top-[10%] text-4xl">📶</div>
                </>
              )}

              <div
                className="absolute z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-slate-950 text-white shadow-xl"
                style={{ left: scenario.user.x, top: scenario.user.y }}
              >
                U
              </div>

              {scenario.nodes.map((node) => {
                const selected = selectedNodes.includes(node.id);
                const isCorrectNode = submitted && node.good;
                const isWrongNode = submitted && selected && !node.good;

                return (
                  <button
                    key={node.id}
                    onClick={() => toggleNode(node.id)}
                    className={cn(
                      "absolute z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white font-semibold shadow-lg transition",
                      selected
                        ? "bg-sky-600 text-white scale-105"
                        : "bg-white text-slate-900 hover:bg-slate-50",
                      isCorrectNode && "bg-emerald-500 text-white",
                      isWrongNode && "bg-rose-400 text-white"
                    )}
                    style={{ left: node.x, top: node.y }}
                  >
                    {node.id}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 rounded-[24px] bg-slate-50 p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
              Prompt
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-700">
              {scenario.prompt}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={submit}
              disabled={selectedNodes.length === 0 || submitted}
              className="rounded-full bg-slate-950 text-white hover:bg-slate-800 disabled:opacity-50"
            >
              Check Node Choices
            </Button>

            {submitted && scenarioIndex < networkScenarios.length - 1 && (
              <Button
                onClick={next}
                className="rounded-full border border-slate-200 bg-white"
              >
                Next Scenario
              </Button>
            )}

            {submitted && scenarioIndex === networkScenarios.length - 1 && (
              <Button
                onClick={reset}
                className="rounded-full border border-slate-200 bg-white"
              >
                Restart Demo
              </Button>
            )}
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "mt-6 rounded-[24px] border p-5",
                isPerfect
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-amber-200 bg-amber-50"
              )}
            >
              <p className="font-semibold text-slate-950">
                {isPerfect ? "Strong selection" : "Good attempt"}
              </p>
              <p className="mt-2 leading-7 text-slate-700">
                {scenario.explanation}
              </p>
            </motion.div>
          )}
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="p-6">
            <h4 className="text-xl font-semibold text-slate-950">
              How this visual game works
            </h4>
            <div className="mt-4 space-y-3 text-slate-600">
              <p>Look at the scenario environment.</p>
              <p>Find the distributed nodes that best support the user.</p>
              <p>Use the use-case context to think about why certain nodes make more sense.</p>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h4 className="text-xl font-semibold text-slate-950">
              What it teaches
            </h4>
            <div className="mt-4 grid gap-3">
              {[
                "Scenarios match real use-case themes",
                "Visuals reflect rural, temporary, and urban settings",
                "Users learn by selecting nodes directly",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                  <div className="h-2 w-2 rounded-full bg-sky-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionShell>
  );
}
function ResearchPage() {
  const milestones = [
    {
      title: "text",
      subtitle: "text",
      description:
        "text",
      tag: "text",
    },
    {
      title: "text",
      subtitle: "text",
      description:
        "text",
      tag: "text",
    },
    {
      title: "text",
      subtitle: "text",
      description:
        "text",
      tag: "text",
    },
  ];

  const updateBlocks = [
    {
      title: "Prototype visualization",
      subtitle: "text",
      image: "",
      body:
        "texttexttexttexttexttext",
      caption: "texttexttexttext",
    },
    {
      title: "Deployment scenario mapping",
      subtitle: "texttexttexttexttext",
      image: "",
      body:
        "texttexttexttexttext.",
      caption: "texttexttexttexttext",
    },
  ];

  return (
    <>
      <SectionShell
        eyebrow="Project showcase"
        title="Research progress and current work"
        description="texttexttexttexttexttexttext."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {milestones.map((item) => (
            <GlassCard key={item.title} className="p-6">
              <Badge className="rounded-full bg-slate-100 text-slate-700">
                {item.tag}
              </Badge>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                {item.subtitle}
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {updateBlocks.map((block) => (
            <GlassCard key={block.title} className="overflow-hidden">
              <img
                src={block.image}
                alt={block.title}
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                  {block.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                  {block.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {block.body}
                </p>
                <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">
                  {block.caption}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Research structure"
        title="Project timeline"
        description="text text description."
      >
        <div className="max-w-3xl space-y-8">
          {[
            ["Phase 1", "text"],
            ["Phase 2", "text"],
            ["Phase 3", "text"],
          ].map(([phase, text], index) => (
            <div key={phase} className="relative pl-8">
              <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-sky-500" />
              {index < 2 && (
                <div className="absolute left-[5px] top-5 h-16 w-px bg-slate-200" />
              )}
              <p className="font-semibold text-slate-900">{phase}</p>
              <p className="mt-1 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
function TeamPage() {
  return (
    <SectionShell
      eyebrow="Team"
      title="Team and contact"
      description="texttexttexttexttext."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {["Project Manager", "Student Researcher", "Research Advisor"].map((role) => (
          <GlassCard key={role} className="p-6">
            <h3 className="text-xl font-semibold text-slate-950">{role}</h3>
            <p className="mt-3 leading-7 text-slate-600">texttexttext</p>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#f0f7ff_30%,#ffffff_100%)] text-slate-900">
      <Navbar page={page} setPage={setPage} />
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "learn" && <LearnPage />}
      {page === "research" && <ResearchPage />}
      {page === "team" && <TeamPage />}
    </div>
  );
}