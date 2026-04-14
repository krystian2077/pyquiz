import PremiumCard from "@/components/PremiumCard";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const dynamic = "force-dynamic";

export default async function QuizSummaryPage({ params }: { params: { sessionId: string } }) {
  const res = await fetch(`${API}/quiz/sessions/${params.sessionId}/summary/`, { cache: "no-store" });
  const data = await res.json();

  return (
    <div className="max-w-3xl space-y-4">
      <PremiumCard title="Podsumowanie sesji">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <Stat label="Poprawne" value={data.correct ?? 0} />
          <Stat label="Czesciowe" value={data.partial ?? 0} />
          <Stat label="Bledne" value={data.incorrect ?? 0} />
          <Stat label="Pominiete" value={data.skipped ?? 0} />
          <Stat label="Sr. czas" value={`${data.avg_time ?? 0}s`} />
        </div>
      </PremiumCard>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-xl font-black text-slate-900">{value}</p>
    </div>
  );
}


