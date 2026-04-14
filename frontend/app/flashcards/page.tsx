import PremiumCard from "@/components/PremiumCard";

export default function FlashcardsPage() {
  return (
    <div className="space-y-4">
      <PremiumCard title="Flashcards" subtitle="Tryb szybkiej powtorki">
        <p className="text-sm text-slate-600">
          W tym MVP flashcards korzystaja z istniejacych sesji quizowych. W kolejnym kroku dodamy dedykowany flow odslaniania odpowiedzi.
        </p>
      </PremiumCard>
    </div>
  );
}

