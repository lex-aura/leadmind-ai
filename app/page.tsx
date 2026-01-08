export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Turn Website Visitors <br /> Into Sales-Ready Leads
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          LeadMind AI chats with your visitors, asks the right questions,
          qualifies them automatically, and sends you a sales summary —
          so you only talk to serious prospects.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition">
            Try Live Demo
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 transition">
            How It Works
          </button>
        </div>
      </section>
            {/* How It Works */}
      <section className="px-6 py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            How LeadMind AI Works
          </h2>

          <p className="mt-4 text-gray-400">
            From first message to sales-ready lead — fully automated.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-blue-500 text-3xl font-bold">01</div>
              <h3 className="text-xl font-semibold">
                AI Chats With Visitors
              </h3>
              <p className="text-gray-400">
                Visitors interact with an AI assistant that understands
                their intent and asks smart questions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-blue-500 text-3xl font-bold">02</div>
              <h3 className="text-xl font-semibold">
                Lead Qualification
              </h3>
              <p className="text-gray-400">
                The AI qualifies leads based on problem, budget, timeline,
                and decision authority.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-blue-500 text-3xl font-bold">03</div>
              <h3 className="text-xl font-semibold">
                Sales Summary Delivered
              </h3>
              <p className="text-gray-400">
                You receive a clear summary and lead score so your sales
                team knows exactly who to follow up with.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Features */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">
            Built for Sales Teams
          </h2>

          <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">
            LeadMind AI is more than a chatbot — it’s a full lead
            qualification system designed to increase conversion rates.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-xl font-semibold mb-2">
                Smart Lead Qualification
              </h3>
              <p className="text-gray-400">
                AI asks the right questions to understand intent, budget,
                and readiness before passing leads to your team.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-xl font-semibold mb-2">
                Automatic Lead Scoring
              </h3>
              <p className="text-gray-400">
                Each visitor is scored as Cold, Warm, or Hot so you know
                exactly where to focus your efforts.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-xl font-semibold mb-2">
                Sales-Ready Summaries
              </h3>
              <p className="text-gray-400">
                Receive concise AI-generated summaries with key insights
                and next steps for faster follow-ups.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Final CTA */}
      <section className="px-6 py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Ready to See LeadMind AI in Action?
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Experience how AI can qualify leads and deliver
            sales-ready insights — automatically.
          </p>

          <div className="mt-10">
            <a
              href="/demo"
              className="inline-block px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 transition text-lg font-medium"
            >
              Launch Live Demo
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
