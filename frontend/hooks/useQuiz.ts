"use client";

import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export function useQuiz(sessionId?: string) {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sessionId) return;
    setLoading(true);
    fetch(`${API}/quiz/sessions/${sessionId}/`)
      .then((r) => r.json())
      .then(setSession)
      .finally(() => setLoading(false));
  }, [sessionId]);

  return { session, loading, setSession };
}

