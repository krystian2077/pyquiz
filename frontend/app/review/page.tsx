"use client";

import { useEffect, useState } from "react";

import PremiumCard from "@/components/PremiumCard";
import { fetchPendingQuestions } from "@/lib/api";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export default function ReviewPage() {
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    fetchPendingQuestions().then(setQuestions).catch(() => setQuestions([]));
  }, []);

  const approve = async (id: number) => {
    await fetch(`${API}/questions/${id}/approve/`, { method: "POST" });
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <div className="space-y-4">
      <PremiumCard title="Panel Review" subtitle="Zatwierdzanie importowanych pytan">
        <div className="space-y-3">
          {questions.map((question) => (
            <article key={question.id} className="rounded-xl border border-slate-200 p-3">
              <p className="text-sm text-slate-500">{question.type} • {question.difficulty}</p>
              <p className="mb-3 font-medium text-slate-900">{question.question_text}</p>
              <button onClick={() => approve(question.id)} className="rounded-lg bg-emerald-600 px-3 py-1 text-sm font-semibold text-white">
                Zatwierdz
              </button>
            </article>
          ))}
          {questions.length === 0 && <p className="text-sm text-slate-500">Brak pytan w kolejce review.</p>}
        </div>
      </PremiumCard>
    </div>
  );
}

