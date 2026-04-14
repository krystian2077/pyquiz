import Link from "next/link";
import { ArrowRight, Flame, Target, Trophy, Zap } from "lucide-react";

import PremiumCard from "@/components/PremiumCard";
import WeeklyChart from "@/components/dashboard/WeeklyChart";
import { fetchDashboard } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const data = await fetchDashboard().catch(() => null);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-500 p-8 text-white shadow-xl">
        <p className="text-sm text-blue-100">Plan dnia</p>
        <h1 className="mt-1 text-3xl font-black">Premium Learning Dashboard</h1>
        <p className="mt-2 max-w-2xl text-sm text-blue-100">
          Masz {data?.due_today ?? 0} pytan do powtorki. Skupmy sie dzisiaj na regularnosci i slabszych obszarach.
        </p>
        <Link href="/srs" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-indigo-700">
          Start SRS <ArrowRight size={16} />
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <PremiumCard title="Streak">
          <p className="flex items-center gap-2 text-3xl font-black"><Flame className="text-orange-500" /> {data?.streak ?? 0}</p>
        </PremiumCard>
        <PremiumCard title="Do powtorki dzisiaj">
          <p className="flex items-center gap-2 text-3xl font-black"><Zap className="text-blue-500" /> {data?.due_today ?? 0}</p>
        </PremiumCard>
        <PremiumCard title="Opanowane">
          <p className="flex items-center gap-2 text-3xl font-black"><Trophy className="text-amber-500" /> {data?.total_mastered ?? 0}</p>
        </PremiumCard>
        <PremiumCard title="Skutecznosc 7 dni">
          <p className="flex items-center gap-2 text-3xl font-black"><Target className="text-emerald-500" /> {data?.weekly_accuracy ?? 0}%</p>
        </PremiumCard>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <PremiumCard title="Aktywnosc tygodnia" className="xl:col-span-2">
          <WeeklyChart points={data?.weekly_activity ?? []} />
        </PremiumCard>
        <PremiumCard title="Rekomendacje">
          <div className="space-y-3">
            {(data?.recommendations ?? []).length === 0 && <p className="text-sm text-slate-500">Brak rekomendacji na teraz.</p>}
            {(data?.recommendations ?? []).map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 p-3">
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-500">{item.reason}</p>
              </article>
            ))}
          </div>
        </PremiumCard>
      </section>
    </div>
  );
}


