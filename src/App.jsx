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
      subtitle: "Rural + underserved deployment",
      description:
        "Extends coverage into rural environments by coordinating distributed nodes instead of relying on new macro towers.",
      image: "/images/low-density-cropped.png",
    },
    {
      title: "Temporary Networks",
      subtitle: "Events / emergency deployment",
      description:
        "Rapidly deployable connectivity using distributed nodes for temporary high-demand environments.",
      image: "/images/temporary-cropped.png",
    },
    {
      title: "Permanent Urban Networks",
      subtitle: "Commercial city infrastructure",
      description:
        "Reduces congestion and improves reliability by coordinating dense node networks across urban environments.",
      image: "/images/urban-cropped.png",
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
        title="Three Key Use Cases That We Researched For Mobile dMIMO"

      >
        <div className="grid gap-6 lg:grid-cols-3">
          {useCaseCards.map((card) => (
            <GlassCard key={card.title} className="p-6 md:p-7">
              <div className="mb-6 flex h-56 items-center justify-center rounded-[24px] border border-slate-200 bg-white p-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="max-h-full max-w-full object-contain"
                />
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
        "Click the key parts of the diagram that help extend Mobile dMIMO coverage in a low-density or rural setting.",
      instruction:
        "Look for the main connectivity path: satellite support, macro infrastructure, and the user device being served.",
      image: "/images/low-density.png",
      hotspots: [
        { id: "LEO satellite", x: "58%", y: "14%", good: true },
        { id: "Macro tower", x: "86%", y: "33%", good: true },
        { id: "Main user device", x: "12%", y: "73%", good: true },
        { id: "Second phone", x: "52%", y: "74%", good: false },
      ],
      explanation:
        "The correct elements show how coverage can be extended through distributed links between the user, satellite, and macro infrastructure.",
    },
    {
      id: 2,
      title: "Temporary Networks",
      prompt:
        "Click the temporary deployment elements that help create fast connectivity for an event or emergency site.",
      instruction:
        "Look for deployable infrastructure like COWs and the event area they are supporting.",
      image: "/images/temporary.png",
      hotspots: [
        { id: "Left COW", x: "13%", y: "67%", good: true },
        { id: "Right COW", x: "86%", y: "67%", good: true },
        { id: "Event venue", x: "50%", y: "56%", good: true },
        { id: "Phone marker", x: "50%", y: "13%", good: false },
      ],
      explanation:
        "COWs, or Cells on Wheels, provide temporary wireless coverage for high-demand locations like events, stadiums, emergencies, or disaster response.",
    },
    {
      id: 3,
      title: "Permanent Urban Networks",
      prompt:
        "Click the distributed urban nodes that coordinate coverage across the city environment.",
      instruction:
        "Focus on smaller distributed building nodes, not only the macro tower.",
      image: "/images/urban.png",
      hotspots: [
        { id: "Rooftop node", x: "46%", y: "8%", good: true },
        { id: "Left building node", x: "12%", y: "28%", good: true },
        { id: "Right building node", x: "88%", y: "70%", good: true },
        { id: "Macro tower", x: "86%", y: "20%", good: false },
      ],
      explanation:
        "Permanent urban networks use distributed nodes across buildings and streets to improve capacity, reduce congestion, and avoid relying only on macro towers.",
    },
  ];

  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selectedHotspots, setSelectedHotspots] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [score, setScore] = useState(0);

  const scenario = networkScenarios[scenarioIndex];

  const correctIds = scenario.hotspots
    .filter((spot) => spot.good)
    .map((spot) => spot.id);

  const progress =
    ((scenarioIndex + (submitted ? 1 : 0)) / networkScenarios.length) * 100;

  const isPerfect =
    submitted &&
    selectedHotspots.length === correctIds.length &&
    correctIds.every((id) => selectedHotspots.includes(id));

  const toggleHotspot = (id) => {
    if (submitted || showSolution) return;

    setSelectedHotspots((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const submit = () => {
    if (selectedHotspots.length === 0 || submitted) return;

    setSubmitted(true);
    setShowSolution(false);

    if (isPerfect) {
      setScore((s) => s + 1);
    }
  };

  const revealSolution = () => {
    setSubmitted(true);
    setShowSolution(true);
  };

  const next = () => {
    if (scenarioIndex < networkScenarios.length - 1) {
      setScenarioIndex((s) => s + 1);
      setSelectedHotspots([]);
      setSubmitted(false);
      setShowSolution(false);
    }
  };

  const reset = () => {
    setScenarioIndex(0);
    setSelectedHotspots([]);
    setSubmitted(false);
    setShowSolution(false);
    setScore(0);
  };

  return (
    <SectionShell
      eyebrow="Interactive use-case game"
      title="Identify Mobile dMIMO elements in each use case"
      description="Click directly on the diagram. Selected areas glow blue. After checking, correct spots turn green and wrong choices turn red."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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

          <div className="mt-6 rounded-[24px] bg-slate-50 p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
              Your task
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-700">
              {scenario.prompt}
            </p>
            <p className="mt-3 rounded-2xl bg-white p-4 text-sm leading-6 text-slate-600">
              <span className="font-semibold text-slate-900">Hint:</span>{" "}
              {scenario.instruction}
            </p>
          </div>

          <div className="mt-7 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4">
            <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-[22px] bg-white">
              <img
                src={scenario.image}
                alt={scenario.title}
                className="h-full w-full object-contain"
              />

              {scenario.hotspots.map((spot) => {
                const selected = selectedHotspots.includes(spot.id);
                const checkedCorrect = submitted && selected && spot.good;
                const checkedWrong = submitted && selected && !spot.good;
                const solutionSpot = showSolution && spot.good;

                return (
                  <button
                    key={spot.id}
                    onClick={() => toggleHotspot(spot.id)}
                    className={cn(
                      "absolute z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white text-lg font-bold shadow-lg transition",
                      "hover:scale-110",
                      !selected &&
                      !checkedCorrect &&
                      !checkedWrong &&
                      !solutionSpot &&
                      "bg-white/90 text-slate-900",
                      selected &&
                      !submitted &&
                      "bg-sky-600 text-white scale-110 ring-8 ring-sky-300/40",
                      checkedCorrect &&
                      "bg-emerald-500 text-white scale-110 ring-8 ring-emerald-300/40",
                      checkedWrong &&
                      "bg-rose-500 text-white scale-110 ring-8 ring-rose-300/40",
                      solutionSpot &&
                      "bg-emerald-500 text-white scale-110 ring-8 ring-emerald-300/40"
                    )}
                    style={{ left: spot.x, top: spot.y }}
                    title={spot.id}
                  >
                    {checkedCorrect || solutionSpot
                      ? "✓"
                      : checkedWrong
                        ? "✕"
                        : selected
                          ? "✓"
                          : ""}
                  </button>
                );
              })}

              {(submitted || showSolution) &&
                scenario.hotspots.map((spot) => {
                  const selected = selectedHotspots.includes(spot.id);
                  const shouldShow =
                    (spot.good && (submitted || showSolution)) ||
                    (selected && !spot.good);

                  if (!shouldShow) return null;

                  return (
                    <div
                      key={`${spot.id}-label`}
                      className={cn(
                        "absolute z-30 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold shadow",
                        spot.good
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-rose-50 text-rose-700"
                      )}
                      style={{ left: spot.x, top: `calc(${spot.y} + 30px)` }}
                    >
                      {spot.good ? "✓ " : "✕ "}
                      {spot.id}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={submit}
              disabled={selectedHotspots.length === 0 || submitted}
              className="rounded-full bg-slate-950 text-white 
             hover:bg-slate-800 
             active:bg-slate-900 
             transition duration-200 
             disabled:opacity-50"
            >
              Check Answer
            </Button>

            <Button
              onClick={revealSolution}
              disabled={showSolution}
              className="rounded-full border border-slate-200 bg-white 
             hover:bg-slate-100 
             active:bg-slate-200 
             transition duration-200"
            >
              Show Solution
            </Button>

            {submitted && scenarioIndex < networkScenarios.length - 1 && (
              <Button
                onClick={next}
                className="rounded-full border border-slate-200 bg-white 
             hover:bg-slate-100 
             active:bg-slate-200 
             transition duration-200"
              >
                Next Scenario
              </Button>
            )}

            {submitted && scenarioIndex === networkScenarios.length - 1 && (
              <Button
                onClick={reset}
                className="rounded-full border border-slate-200 bg-white 
             hover:bg-slate-100 
             active:bg-slate-200 
             transition duration-200"
              >
                Restart Game
              </Button>
            )}
          </div>
          {(submitted || showSolution) && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "mt-6 rounded-[24px] border p-5",
                isPerfect
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-rose-200 bg-rose-50"
              )}
            >
              <p
                className={cn(
                  "text-xl font-semibold",
                  isPerfect ? "text-emerald-800" : "text-rose-800"
                )}
              >
                {isPerfect ? "✓ Overall Correct" : "✕ Overall Incorrect"}
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                {isPerfect
                  ? "You selected all of the correct Mobile dMIMO elements."
                  : "You missed at least one correct element or selected something that does not belong."}
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                {scenario.explanation}
              </p>
            </motion.div>
          )}
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="p-6">
            <h4 className="text-xl font-semibold text-slate-950">
              How to play
            </h4>
            <div className="mt-4 space-y-3 text-slate-600">
              <p>1. Read the task and hint.</p>
              <p>2. Click important parts of the diagram.</p>
              <p>3. Blue means you selected it.</p>
              <p>4. Press Check Answer.</p>
              <p>5. Green checks are correct. Red X marks are wrong.</p>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h4 className="text-xl font-semibold text-slate-950">
              Color guide
            </h4>
            <div className="mt-4 grid gap-3">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="h-5 w-5 rounded-full bg-sky-600 ring-4 ring-sky-300/40" />
                <span className="text-slate-700">Blue glow = selected</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                  ✓
                </div>
                <span className="text-slate-700">Green check = correct</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs text-white">
                  ✕
                </div>
                <span className="text-slate-700">Red X = wrong</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionShell>
  );
}
function ResearchPage() {
  return (
    <SectionShell
      eyebrow="Research"
      title="Research progress and current work"
      description="A clean research portfolio section for milestones, updates, diagrams, and current project work."
    >
      {/* current research content */}
    </SectionShell>
  );



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
                src={card.image}
                alt={card.title}
                className="h-full w-full object-contain p-4"
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