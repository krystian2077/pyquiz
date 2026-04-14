import PremiumCard from "@/components/PremiumCard";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const dynamic = "force-dynamic";

export default async function ProgressPage() {
  const progress = await fetch(`${API}/analytics/progress/?days=30`, { cache: "no-store" }).then((r) => r.json()).catch(() => null);
  const lessons = await fetch(`${API}/analytics/lessons/`, { cache: "no-store" }).then((r) => r.json()).catch(() => []);

  return (
    <div className="space-y-4">
      <PremiumCard title="Analityka postepu">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat label="Sesje" value={progress?.sessions ?? 0} />
          <Stat label="Odpowiedzi" value={progress?.answers ?? 0} />
          <Stat label="Poprawne" value={progress?.correct ?? 0} />
          <Stat label="Accuracy" value={`${progress?.accuracy ?? 0}%`} />
        </div>
      </PremiumCard>
      <PremiumCard title="Per lekcja">
        <div className="space-y-2">
          {lessons.map((lesson: any) => (
            <article key={lesson.lesson_id} className="rounded-xl border border-slate-200 p-3">
              <p className="font-medium text-slate-900">{lesson.lesson_title}</p>
              <p className="text-sm text-slate-500">{lesson.correct}/{lesson.total} • {lesson.accuracy}%</p>
            </article>
          ))}
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


