"use client";

import { useEffect, useState } from "react";

import PremiumCard from "@/components/PremiumCard";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API}/bookmarks/`).then((r) => r.json()).then(setBookmarks).catch(() => setBookmarks([]));
  }, []);

  return (
    <div className="space-y-4">
      <PremiumCard title="Zakladki">
        <div className="space-y-2">
          {bookmarks.map((bookmark) => (
            <article key={bookmark.id} className="rounded-xl border border-slate-200 p-3">
              <p className="font-medium text-slate-900">{bookmark.question.question_text}</p>
            </article>
          ))}
          {bookmarks.length === 0 && <p className="text-sm text-slate-500">Brak zakladek.</p>}
        </div>
      </PremiumCard>
    </div>
  );
}

