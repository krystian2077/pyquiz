import Link from "next/link";

import PremiumCard from "@/components/PremiumCard";
import { fetchLessons } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function LessonsPage() {
  const lessonsData = await fetchLessons().catch(() => []);
  const lessons = Array.isArray(lessonsData) ? lessonsData : [];

  return (
    <div className="space-y-4">
      <PremiumCard title="Lekcje">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {lessons.map((lesson: any) => (
            <Link key={lesson.id} href={`/lessons/${lesson.id}`} className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
              <p className="text-sm text-slate-500">Lekcja {lesson.number}</p>
              <p className="font-semibold text-slate-900">{lesson.title}</p>
              <p className="text-xs text-slate-500">Pytania: {lesson.question_count}</p>
            </Link>
          ))}
        </div>
      </PremiumCard>
    </div>
  );
}


