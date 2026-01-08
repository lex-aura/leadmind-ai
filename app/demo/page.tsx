"use client";

import { useState } from "react";

type Message = {
  sender: "user" | "ai";
  text: string;
};

export default function DemoPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [leadScore, setLeadScore] = useState(2);
  const [stage, setStage] = useState("Discovery");
  const [status, setStatus] = useState("Cold");

  function handleSend() {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };

    const aiReply: Message = {
      sender: "ai",
      text:
        "Thanks for sharing! Can you tell me more about your business needs?",
    };

    setMessages((prev) => [...prev, userMessage, aiReply]);
    setInput("");

    // Fake lead qualification logic
    setLeadScore((prev) => Math.min(prev + 2, 10));
    setStage("Consideration");
    setStatus("Warm");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Chat Panel */}
        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">
            AI Sales Assistant
          </h2>

          <div className="flex-1 bg-black rounded-lg p-4 space-y-3 overflow-y-auto">
            {messages.length === 0 && (
              <p className="text-gray-500 text-center">
                Start the conversation 👇
              </p>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-600"
                    : "mr-auto bg-zinc-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSend}
              className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
            >
              Send
            </button>
          </div>
        </div>

        {/* Lead Status Panel */}
        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
          <h2 className="text-xl font-semibold mb-6">
            Lead Qualification Status
          </h2>

          <ul className="space-y-4 text-gray-400">
            <li>
              <strong className="text-white">Stage:</strong> {stage}
            </li>
            <li>
              <strong className="text-white">Lead Score:</strong> {leadScore} / 10
            </li>
            <li>
              <strong className="text-white">Status:</strong> {status}
            </li>
          </ul>
        </div>

      </div>
    </main>
  );
}
