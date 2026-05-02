<div align="center">

# PyQuiz 🧠

### Platforma quizów i powtórek SRS do nauki Pythona, Django i programowania

PyQuiz to rozwijana aplikacja full-stack do nauki programowania poprzez lekcje, quizy, powtórki, analizę postępów i systematyczne utrwalanie wiedzy.

Projekt powstaje jako aplikacja edukacyjna oraz portfolio project pokazujący praktyczne wykorzystanie **Django, Django REST Framework, PostgreSQL, Next.js, Tailwind CSS i Dockera**.

<br />

<img src="https://img.shields.io/badge/Status-W%20trakcie%20rozwoju-0ea5e9?style=for-the-badge" />
<img src="https://img.shields.io/badge/Backend-Django%20%2B%20DRF-092E20?style=for-the-badge&logo=django&logoColor=white" />
<img src="https://img.shields.io/badge/Frontend-Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Database-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" />

</div>

---

## 📌 O projekcie

**PyQuiz** to aplikacja edukacyjna tworzona z myślą o osobach uczących się Pythona, Django i szeroko rozumianego programowania.

Celem projektu jest stworzenie nowoczesnej platformy, która pomaga użytkownikowi uczyć się regularnie, rozwiązywać pytania quizowe, wracać do słabszych tematów i śledzić swoje postępy w czasie.

Projekt jest obecnie w trakcie rozwoju i pełni również rolę praktycznego case study w mojej ścieżce jako **Junior Python / Django Developer**.

---

## 🎯 Główna idea

PyQuiz nie ma być zwykłą aplikacją z pytaniami.

Docelowo projekt ma działać jako kompletna platforma nauki, która łączy:

- moduły tematyczne,
- lekcje,
- pytania quizowe,
- odpowiedzi jednokrotnego i wielokrotnego wyboru,
- sesje quizowe,
- powtórki SRS,
- analizę wyników,
- dashboard postępów,
- rekomendacje tematów do nauki,
- import materiałów i pytań zewnętrznych.

---

## 🚀 Aktualne i planowane funkcjonalności

### Premium Learning Dashboard

Aplikacja posiada koncepcję dashboardu, który pokazuje użytkownikowi najważniejsze informacje dotyczące nauki.

Elementy dashboardu:

- plan dnia,
- liczba pytań do powtórki,
- streak nauki,
- liczba opanowanych pytań,
- skuteczność z ostatnich 7 dni,
- wykres aktywności tygodniowej,
- rekomendacje tematów do powtórki.

---

### System quizów

Projekt jest oparty na strukturze quizowej:

- moduły,
- lekcje,
- pytania,
- odpowiedzi,
- sesje quizowe,
- sprawdzanie odpowiedzi,
- wynik sesji,
- zapisywanie postępów użytkownika.

---

### Powtórki SRS

Docelowo aplikacja będzie wspierać mechanizm **spaced repetition**, czyli powtórek w odpowiednich odstępach czasu.

Celem SRS jest pomoc użytkownikowi w utrwalaniu wiedzy i skupianiu się na pytaniach, które sprawiają największą trudność.

---

### Backend API

Backend jest budowany w oparciu o **Django** i **Django REST Framework**.

Założeniem projektu jest podejście API-first, gdzie backend odpowiada za:

- logikę quizów,
- modele danych,
- sesje nauki,
- wyniki użytkowników,
- powtórki,
- dane do dashboardu,
- komunikację z frontendem.

---

### Frontend

Frontend tworzony jest w **Next.js** z wykorzystaniem **TypeScript** i **Tailwind CSS**.

Interfejs aplikacji ma być nowoczesny, czytelny i skoncentrowany na wygodnej nauce.

---

### Docker

Projekt zawiera konfigurację Dockera, dzięki czemu aplikację można uruchomić lokalnie jako zestaw usług:

- backend Django,
- frontend Next.js,
- baza danych PostgreSQL.

---

## 🛠️ Stack technologiczny

<div align="center">

### Backend

<img src="https://skillicons.dev/icons?i=python,django" />

<br />
<br />

<img src="https://img.shields.io/badge/Django%20REST%20Framework-A30000?style=for-the-badge&logo=django&logoColor=white" />

<br />
<br />

### Frontend

<img src="https://skillicons.dev/icons?i=nextjs,react,typescript,javascript,tailwind" />

<br />
<br />

### Baza danych i narzędzia

<img src="https://skillicons.dev/icons?i=postgres,docker,git,github" />

</div>

---

## ⚙️ Technologie użyte w projekcie

| Obszar | Technologie |
|---|---|
| Backend | Python, Django, Django REST Framework |
| Frontend | Next.js, React, TypeScript |
| Stylowanie | Tailwind CSS |
| Baza danych | PostgreSQL |
| API | REST API |
| Środowisko lokalne | Docker, Docker Compose |
| Narzędzia | Git, GitHub, PyCharm / IDE |

---

## 🧩 Struktura projektu

```txt
pyquiz/
├── core/                  # Główna aplikacja Django z logiką quizów i nauki
├── frontend/              # Aplikacja frontendowa Next.js
├── imports/               # Pliki importu / dane edukacyjne
├── pyquiz/                # Konfiguracja projektu Django
├── Dockerfile             # Obraz Dockera dla backendu
├── docker-compose.yml     # Konfiguracja środowiska lokalnego
└── PyQuiz_Documentation.pdf
```

🖥️ Uruchomienie lokalne

Projekt jest w trakcie rozwoju, więc instrukcja uruchomienia może zmieniać się wraz z rozbudową aplikacji.

1. Sklonuj repozytorium
git clone https://github.com/krystian2077/pyquiz.git
cd pyquiz
2. Uruchom projekt przez Docker Compose
docker compose up --build
3. Otwórz aplikację

Backend:

http://localhost:8000

Frontend:

http://localhost:3000
🔌 Konfiguracja środowiska

Docelowo aplikacja działa w takim układzie:

Backend:  http://localhost:8000
Frontend: http://localhost:3000
Database: PostgreSQL

Przykładowa zmienna środowiskowa dla frontendu:

NEXT_PUBLIC_API_URL=http://localhost:8000/api
📊 Koncepcja dashboardu

Dashboard ma pomagać użytkownikowi szybko zrozumieć, co powinien dziś powtórzyć i jak wygląda jego aktualny postęp.

Metryka	Opis
Streak	Aktualna seria dni nauki
Do powtórki dzisiaj	Liczba pytań zaplanowanych do powtórki
Opanowane	Liczba pytań uznanych za opanowane
Skuteczność 7 dni	Skuteczność odpowiedzi z ostatniego tygodnia
Aktywność tygodnia	Wykres aktywności użytkownika
Rekomendacje	Sugestie tematów do dalszej nauki
🧠 Model nauki

Docelowo PyQuiz ma wspierać proces nauki w kilku krokach:

1. Wybór modułu lub lekcji
2. Rozwiązanie quizu
3. Sprawdzenie odpowiedzi
4. Zapisanie wyniku
5. Analiza słabszych obszarów
6. Zaplanowanie powtórki
7. Powrót do pytań w systemie SRS
🎯 Cele projektu

Projekt tworzę, aby przećwiczyć i pokazać w praktyce:

projektowanie aplikacji edukacyjnej,
tworzenie backendu w Django i Django REST Framework,
modelowanie danych dla systemu nauki,
tworzenie REST API,
integrację backendu z frontendem,
pracę z PostgreSQL,
budowę nowoczesnego dashboardu,
konfigurację środowiska Docker,
projektowanie aplikacji z realną wartością dla użytkownika.
📚 Czego uczę się przy tym projekcie

Podczas pracy nad PyQuiz rozwijam umiejętności związane z:

projektowaniem modeli Django,
budową API w Django REST Framework,
obsługą sesji quizowych,
walidacją odpowiedzi,
śledzeniem postępów użytkownika,
łączeniem backendu Django z frontendem Next.js,
pracą z PostgreSQL,
tworzeniem dashboardów,
organizacją większego projektu full-stack,
przygotowaniem projektu pod dalszy rozwój i deployment.
🗺️ Roadmap

Planowane usprawnienia:

dokończenie modeli backendowych,
rozbudowa endpointów API,
dopracowanie logiki sesji quizowych,
dodanie pełnego systemu kont użytkowników,
implementacja kompletnego algorytmu SRS,
panel administracyjny do zarządzania pytaniami,
import pytań z plików JSON,
rozbudowanie dashboardu użytkownika,
dodanie testów backendu,
uporządkowanie konfiguracji środowiskowej,
przygotowanie wersji produkcyjnej,
dodanie screenów aplikacji,
wdrożenie live demo.
🚧 Status projektu

Projekt jest obecnie w aktywnej fazie rozwoju.

Repozytorium pokazuje wczesny etap budowy aplikacji i będzie stopniowo rozwijane o:

lepszą strukturę kodu,
pełniejszą dokumentację,
rozbudowane API,
poprawiony frontend,
testy,
deployment,
live demo,
screeny aplikacji.
🧪 Planowane testy

W kolejnych etapach projektu planuję dodać i rozbudować testy obejmujące:

modele Django,
endpointy API,
tworzenie sesji quizowych,
sprawdzanie odpowiedzi,
naliczanie wyników,
logikę powtórek,
podstawowe scenariusze użytkownika.
🔐 Planowane bezpieczeństwo i jakość

Docelowo projekt będzie uwzględniał:

autoryzację użytkowników,
walidację danych wejściowych,
bezpieczną konfigurację środowiskową,
zmienne środowiskowe zamiast danych w kodzie,
osobne ustawienia dla developmentu i produkcji,
uporządkowany .gitignore,
testy backendu,
czytelną dokumentację uruchomienia.
📄 Dokumentacja

W repozytorium znajduje się również plik:

PyQuiz_Documentation.pdf

Dokumentacja opisuje założenia projektu, jego funkcjonalności oraz kierunek dalszego rozwoju.

📫 Kontakt
<div align="center"> <a href="https://github.com/krystian2077"> <img src="https://img.shields.io/badge/GitHub-krystian2077-181717?style=for-the-badge&logo=github&logoColor=white" /> </a> <a href="https://www.linkedin.com/in/krystian-potaczek-952968257/"> <img src="https://img.shields.io/badge/LinkedIn-Krystian%20Potaczek-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /> </a> <a href="mailto:krystian.potaczek07@gmail.com"> <img src="https://img.shields.io/badge/Email-Contact%20me-EA4335?style=for-the-badge&logo=gmail&logoColor=white" /> </a> </div>
<div align="center">
Projekt tworzony jako część mojej ścieżki rozwoju w kierunku Junior Python / Django Developer.
</div> ```
