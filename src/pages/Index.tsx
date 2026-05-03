import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/190f87c1-2bd1-4c13-b5a9-eb3a77869a47/bucket/eda8002c-cdb1-4bd6-a4e1-9a9e855fa815.jpg";
const LOGO_IMG = "https://cdn.poehali.dev/projects/190f87c1-2bd1-4c13-b5a9-eb3a77869a47/bucket/7ba0c08e-35ba-43e0-9c00-988a8d3a5ffa.png";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/190f87c1-2bd1-4c13-b5a9-eb3a77869a47/files/b836645c-96c6-4e24-bd84-91d88b0850c5.jpg";

/* ── QUIZ CONFIG ───────────────────────────────────────── */
const QUIZ_STEPS = [
  {
    question: "Что вас интересует?",
    options: ["Купить квартиру", "Продать квартиру", "Обмен недвижимости", "Юридическое сопровождение"],
  },
  {
    question: "Какой бюджет вас интересует?",
    options: ["До 5 млн ₽", "5–10 млн ₽", "10–20 млн ₽", "Более 20 млн ₽"],
  },
  {
    question: "Когда планируете сделку?",
    options: ["В течение месяца", "1–3 месяца", "3–6 месяцев", "Пока думаю"],
  },
];

/* ── SERVICES ──────────────────────────────────────────── */
const SERVICES = [
  { icon: "Home", title: "Покупка квартиры", desc: "Новостройки и вторичный рынок. Подбор по вашим параметрам, юридическая проверка, сопровождение сделки." },
  { icon: "TrendingUp", title: "Продажа недвижимости", desc: "Профессиональная оценка, маркетинговое продвижение, максимальная цена за минимальный срок." },
  { icon: "RefreshCw", title: "Обмен и альтернатива", desc: "Одновременная продажа и покупка с безопасным проведением расчётов и минимальными рисками." },
  { icon: "FileText", title: "Юридическое сопровождение", desc: "Проверка объекта, подготовка документов, контроль на каждом этапе сделки." },
  { icon: "CreditCard", title: "Ипотека и финансирование", desc: "30+ банков-партнёров. Подберу оптимальные условия, помогу с одобрением и оформлением." },
  { icon: "Globe", title: "Межрегиональные сделки", desc: "Покупка и продажа в 35 регионах России. Полное дистанционное сопровождение." },
];

/* ── EXTRAS ────────────────────────────────────────────── */
const EXTRAS = [
  { emoji: "🏗️", text: "1200+ застройщиков-партнёров" },
  { emoji: "🏦", text: "30+ банков — лучшие ставки" },
  { emoji: "📋", text: "Страхование всех видов" },
  { emoji: "📐", text: "Оценка недвижимости" },
  { emoji: "📏", text: "Кадастровые работы" },
  { emoji: "🔧", text: "Согласование перепланировок" },
  { emoji: "🎨", text: "Дизайн-проекты" },
  { emoji: "🛠️", text: "Ремонт и отделка" },
  { emoji: "✨", text: "Клининг и хоумстейджинг" },
  { emoji: "🚛", text: "Организация переездов" },
];

/* ── REVIEWS ───────────────────────────────────────────── */
const REVIEWS = [
  { name: "Анна Петрова", text: "Сергей помог нам купить прекрасную квартиру в новостройке. Всё оформил быстро, с ипотекой помог — ставку нашли на 1,5% ниже, чем в нашем банке!", stars: 5, deal: "Покупка новостройки" },
  { name: "Михаил Козлов", text: "Продавали «трёшку» через Сергея. Квартира ушла за 2 недели по цене выше рыночной. Работает профессионально, всегда на связи.", stars: 5, deal: "Продажа квартиры" },
  { name: "Елена Захарова", text: "Делали обмен — это сложная схема. Сергей провёл всё без нервов. Никаких проблем с документами, всё чисто и прозрачно.", stars: 5, deal: "Обмен недвижимости" },
  { name: "Дмитрий Волков", text: "Покупал дачу в Подмосковье, живя в Екатеринбурге. Сергей решил всё дистанционно! Очень доволен результатом.", stars: 5, deal: "Межрегиональная сделка" },
];

/* ── STATS ─────────────────────────────────────────────── */
const STATS = [
  { value: "10+", label: "лет опыта" },
  { value: "500+", label: "сделок закрыто" },
  { value: "35", label: "регионов России" },
  { value: "1200+", label: "застройщиков" },
];

/* ── NAV LINKS ─────────────────────────────────────────── */
const NAV_LINKS = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

/* ── ADVANTAGES LIST ───────────────────────────────────── */
const ADVANTAGES = [
  { icon: "Shield", title: "Юридическая чистота", desc: "Полная проверка объекта и истории сделок. Никаких неожиданностей после покупки." },
  { icon: "Clock", title: "Скорость и эффективность", desc: "Среднее время продажи — 18 дней. Всегда на связи, отвечаю в течение часа." },
  { icon: "Award", title: "10+ лет экспертизы", desc: "С 2015 года в недвижимости Екатеринбурга. Знаю каждый район и его особенности." },
  { icon: "Users", title: "Партнёрская экосистема", desc: "30+ банков, 1200+ застройщиков, страховые, оценщики — всё в одном месте." },
  { icon: "MapPin", title: "35 регионов России", desc: "Межрегиональные сделки дистанционно. Помогу купить или продать в любом регионе." },
  { icon: "Heart", title: "Работаю на вас", desc: "Гонорар только при успешном закрытии сделки. Ваши интересы — мой приоритет." },
];

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizDone, setQuizDone] = useState(false);
  const [quizName, setQuizName] = useState("");
  const [quizPhone, setQuizPhone] = useState("");
  const [quizSent, setQuizSent] = useState(false);

  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadSent, setLeadSent] = useState(false);

  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el: HTMLElement | null, idx: number) => {
    revealRefs.current[idx] = el;
  };

  const handleQuizAnswer = (answer: string) => {
    const next = [...quizAnswers, answer];
    setQuizAnswers(next);
    if (quizStep + 1 < QUIZ_STEPS.length) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizDone(true);
    }
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuizSent(true);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSent(true);
  };

  return (
    <div className="min-h-screen font-montserrat" style={{ background: "var(--gold-100)" }}>

      {/* ── NAVBAR ─────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass shadow-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="flex items-center">
            <img src={LOGO_IMG} alt="Сергей Смирнов — Надёжный риелтор" className="h-16 md:h-20 w-auto object-contain" style={{ mixBlendMode: "screen" }} />
          </a>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-medium text-foreground/80 hover:text-gold-500 transition-colors duration-200 relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="tel:+79000000000"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 pulse-gold"
              style={{ background: "linear-gradient(135deg, #daa520, #f0c040)" }}>
              <Icon name="Phone" size={15} />
              Позвонить
            </a>
            <button
              className="md:hidden p-2 rounded-lg text-gold-600 hover:bg-gold-200 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden nav-glass border-t border-gold-200 px-4 pb-4 pt-2">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium text-foreground/80 hover:text-gold-500 border-b border-gold-200/50 last:border-0">
                {l.label}
              </a>
            ))}
            <a href="tel:+79000000000"
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #daa520, #f0c040)" }}>
              <Icon name="Phone" size={15} /> Позвонить сейчас
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={INTERIOR_IMG} alt="Недвижимость" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(253,248,238,0.97) 0%, rgba(247,233,195,0.90) 40%, rgba(253,248,238,0.72) 100%)" }} />
          <div className="absolute inset-0 pattern-overlay" />
        </div>

        <div className="absolute right-[-8%] top-[-8%] w-[500px] h-[500px] rounded-full opacity-10 spin-slow"
          style={{ background: "conic-gradient(from 0deg, #daa520, #f0c040, #a07810, #daa520)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 fade-in-up"
              style={{ background: "rgba(218,165,32,0.12)", border: "1px solid rgba(218,165,32,0.35)" }}>
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase">Риелтор · Екатеринбург · с 2015 года</span>
            </div>

            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 fade-in-up-delay-1">
              Ваша идеальная<br />
              <span className="shimmer">сделка с</span><br />
              недвижимостью
            </h1>

            <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-8 max-w-md fade-in-up-delay-2">
              Профессиональное сопровождение покупки, продажи и обмена недвижимости в Екатеринбурге и 35 регионах России.
            </p>

            <div className="flex flex-wrap gap-3 fade-in-up-delay-3">
              <a href="#quiz"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm shadow-lg hover:scale-105 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, #daa520, #f0c040, #daa520)" }}>
                <Icon name="ChevronRight" size={18} />
                Подобрать объект
              </a>
              <a href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-gold-700 text-sm border-2 border-gold-400 hover:bg-gold-200 transition-all duration-300"
                style={{ background: "rgba(253,248,238,0.8)" }}>
                Узнать об услугах
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 fade-in-up-delay-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-cormorant text-3xl font-bold gold-text">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end fade-in-up-delay-2">
            <div className="relative">
              {/* Decorative gold glow under photo */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl opacity-40"
                style={{ background: "radial-gradient(ellipse, #daa520 0%, #f0c040 40%, transparent 70%)" }} />
              <div className="relative w-72 md:w-96" style={{ filter: "drop-shadow(0 20px 40px rgba(218,165,32,0.35))" }}>
                <img src={HERO_IMG} alt="Сергей Смирнов — риелтор" className="w-full h-auto object-contain" style={{ maxHeight: "500px", mixBlendMode: "multiply" }} />
              </div>

              <div className="absolute -right-4 -top-4 float-anim">
                <div className="rounded-2xl px-4 py-3 shadow-xl text-center"
                  style={{ background: "linear-gradient(135deg, #daa520, #f0c040)", color: "#fff" }}>
                  <div className="font-cormorant text-2xl font-bold">10+</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider">лет опыта</div>
                </div>
              </div>

              <div className="absolute -left-6 -bottom-4 float-anim" style={{ animationDelay: "1.5s" }}>
                <div className="rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2"
                  style={{ background: "rgba(253,248,238,0.97)", border: "1px solid rgba(218,165,32,0.4)" }}>
                  <span className="text-2xl">🏅</span>
                  <div>
                    <div className="font-bold text-sm text-gold-600">500+ сделок</div>
                    <div className="text-[10px] text-muted-foreground">успешно закрыто</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs tracking-widest text-gold-600 uppercase">Листайте</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-400 to-transparent" />
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-28"
        style={{ background: "linear-gradient(180deg, var(--gold-100) 0%, #fff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div ref={(el) => addReveal(el, 0)} className="reveal">
            <div className="text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase mb-3 ornament">Обо мне</div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold leading-tight mb-6">
              Эксперт по недвижимости<br />
              <span className="gold-text">с 2015 года</span>
            </h2>
            <p className="text-base text-foreground/70 leading-relaxed mb-5">
              Я — Сергей Смирнов, частный риелтор в Екатеринбурге. За 10+ лет работы я помог сотням семей решить жилищный вопрос: купить первую квартиру, улучшить жилищные условия, грамотно продать объект или безопасно провести обмен.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-8">
              Работаю с новостройками и вторичным рынком — городской и загородной недвижимостью. Благодаря партнёрской сети в 35 регионах России предоставляю услуги в режиме <strong className="text-gold-600">«одного окна»</strong> — от подбора объекта до ключей в руках.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Новостройки", "Вторичный рынок", "Загородная", "Ипотека", "Обмен"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-medium text-gold-700"
                  style={{ background: "rgba(218,165,32,0.12)", border: "1px solid rgba(218,165,32,0.3)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div ref={(el) => addReveal(el, 1)} className="reveal">
            <div className="rounded-2xl p-6 md:p-8"
              style={{ background: "#fff", border: "1px solid rgba(218,165,32,0.25)", boxShadow: "0 8px 32px rgba(218,165,32,0.12)" }}>
              <div className="font-cormorant text-2xl font-bold text-center mb-2">Режим «одного окна»</div>
              <div className="section-divider mb-4" />
              <p className="text-sm text-muted-foreground text-center mb-6">Через партнёрскую сеть организую всё необходимое</p>
              <div className="grid grid-cols-2 gap-3">
                {EXTRAS.map((e) => (
                  <div key={e.text} className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "var(--gold-100)", border: "1px solid rgba(218,165,32,0.15)" }}>
                    <span className="text-2xl">{e.emoji}</span>
                    <span className="text-xs font-medium text-foreground/80 leading-tight">{e.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────── */}
      <section id="services" className="py-20 md:py-28 pattern-overlay"
        style={{ background: "linear-gradient(135deg, var(--gold-200) 0%, var(--gold-100) 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div ref={(el) => addReveal(el, 2)} className="reveal text-center mb-14">
            <div className="text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase mb-3 ornament">Услуги</div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
              Полный спектр услуг<br />
              <span className="gold-text">в сфере недвижимости</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Работаю на результат — ваш комфорт и безопасная сделка.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={s.title} ref={(el) => addReveal(el, 10 + i)} className="reveal card-hover rounded-2xl p-6 md:p-8 cursor-pointer"
                style={{ background: "#fff", border: "1px solid rgba(218,165,32,0.2)", boxShadow: "0 4px 16px rgba(218,165,32,0.08)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, rgba(218,165,32,0.15), rgba(240,192,64,0.2))" }}>
                  <Icon name={s.icon} size={22} className="text-gold-500" />
                </div>
                <h3 className="font-cormorant text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a href="#contacts"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors">
                  Узнать подробнее <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIZ / ВОРОНКА ─────────────────────────────────── */}
      <section id="quiz" className="py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #1a1209 0%, #2d1f08 100%)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-8 text-center">
          <div ref={(el) => addReveal(el, 20)} className="reveal">
            <div className="text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase mb-3 ornament">Квиз</div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
              Подберём лучший вариант<br />
              <span className="gold-text">именно для вас</span>
            </h2>
            <p className="text-white/60 mb-10">3 вопроса — и я свяжусь с вами с готовыми предложениями</p>

            {!quizDone ? (
              <div className="rounded-2xl p-6 md:p-8" style={{ background: "rgba(253,248,238,0.06)", border: "1px solid rgba(218,165,32,0.25)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(218,165,32,0.2)" }}>
                    <div className="quiz-progress h-full rounded-full"
                      style={{ width: `${(quizStep / QUIZ_STEPS.length) * 100}%` }} />
                  </div>
                  <span className="text-xs text-gold-400 font-medium">{quizStep + 1} / {QUIZ_STEPS.length}</span>
                </div>

                <h3 className="font-cormorant text-2xl font-bold text-white mb-6">
                  {QUIZ_STEPS[quizStep].question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {QUIZ_STEPS[quizStep].options.map((opt) => (
                    <button key={opt} onClick={() => handleQuizAnswer(opt)}
                      className="px-5 py-3.5 rounded-xl text-sm font-medium text-left transition-all duration-200 hover:scale-[1.02]"
                      style={{ background: "rgba(218,165,32,0.12)", border: "1px solid rgba(218,165,32,0.3)", color: "#fdf8ee" }}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : !quizSent ? (
              <div className="rounded-2xl p-6 md:p-8" style={{ background: "rgba(253,248,238,0.06)", border: "1px solid rgba(218,165,32,0.25)" }}>
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-cormorant text-2xl font-bold text-white mb-2">Отлично! Подбираю варианты</h3>
                <p className="text-white/60 text-sm mb-6">Оставьте контакт — свяжусь в течение 30 минут</p>
                <form onSubmit={handleQuizSubmit} className="flex flex-col gap-3">
                  <input
                    type="text" placeholder="Ваше имя" value={quizName} onChange={e => setQuizName(e.target.value)} required
                    className="px-5 py-3.5 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(218,165,32,0.35)", color: "#fdf8ee" }} />
                  <input
                    type="tel" placeholder="+7 (___) ___-__-__" value={quizPhone} onChange={e => setQuizPhone(e.target.value)} required
                    className="px-5 py-3.5 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(218,165,32,0.35)", color: "#fdf8ee" }} />
                  <button type="submit"
                    className="px-7 py-3.5 rounded-xl font-semibold text-white text-sm hover:scale-105 transition-transform duration-300"
                    style={{ background: "linear-gradient(135deg, #daa520, #f0c040)", color: "#1a1209" }}>
                    Получить подборку бесплатно
                  </button>
                </form>
              </div>
            ) : (
              <div className="rounded-2xl p-10" style={{ background: "rgba(253,248,238,0.06)", border: "1px solid rgba(218,165,32,0.25)" }}>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-cormorant text-2xl font-bold text-white mb-2">Заявка принята!</h3>
                <p className="text-white/60">Свяжусь с вами в ближайшее время с готовыми предложениями.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ─────────────────────────────────────── */}
      <section id="advantages" className="py-20 md:py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div ref={(el) => addReveal(el, 30)} className="reveal text-center mb-14">
            <div className="text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase mb-3 ornament">Преимущества</div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают <span className="gold-text">Сергея Смирнова</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4" ref={(el) => addReveal(el, 31)} >
              {ADVANTAGES.map((a, i) => (
                <div key={a.title} ref={(el) => addReveal(el, 40 + i)} className="reveal flex gap-4 p-5 rounded-2xl card-hover"
                  style={{ border: "1px solid rgba(218,165,32,0.2)", background: "var(--gold-100)" }}>
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #daa520, #f0c040)" }}>
                    <Icon name={a.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1">{a.title}</h4>
                    <p className="text-sm text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div ref={(el) => addReveal(el, 32)} className="reveal">
              <div className="rounded-3xl p-8 md:p-10 text-center"
                style={{ background: "linear-gradient(135deg, #1a1209, #2d1f08)", border: "1px solid rgba(218,165,32,0.3)" }}>
                <div className="text-5xl mb-4">🏆</div>
                <div className="font-cormorant text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-gold-400 font-medium mb-6">успешных сделок</div>
                <div className="section-divider mb-6" />
                <div className="grid grid-cols-2 gap-4">
                  {STATS.map((s) => (
                    <div key={s.label} className="rounded-2xl p-4"
                      style={{ background: "rgba(218,165,32,0.1)", border: "1px solid rgba(218,165,32,0.2)" }}>
                      <div className="font-cormorant text-3xl font-bold gold-text">{s.value}</div>
                      <div className="text-xs text-white/60 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <a href="#quiz"
                  className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #daa520, #f0c040)", color: "#1a1209" }}>
                  <Icon name="ChevronRight" size={16} />
                  Начать сотрудничество
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────── */}
      <section id="reviews" className="py-20 md:py-28 pattern-overlay"
        style={{ background: "linear-gradient(135deg, var(--gold-100) 0%, var(--gold-200) 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div ref={(el) => addReveal(el, 50)} className="reveal text-center mb-14">
            <div className="text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase mb-3 ornament">Отзывы</div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
              Что говорят мои <span className="gold-text">клиенты</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={r.name} ref={(el) => addReveal(el, 55 + i)} className="reveal card-hover rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid rgba(218,165,32,0.2)", boxShadow: "0 4px 16px rgba(218,165,32,0.08)" }}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-gold-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed mb-4 italic">«{r.text}»</p>
                <div className="border-t border-gold-100 pt-4">
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-gold-500 mt-0.5">{r.deal}</div>
                </div>
              </div>
            ))}
          </div>

          <div ref={(el) => addReveal(el, 60)} className="reveal text-center mt-12">
            <a href="#contacts"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-lg"
              style={{ background: "linear-gradient(135deg, #daa520, #f0c040, #daa520)", color: "#1a1209" }}>
              <Icon name="MessageCircle" size={18} />
              Стать следующим довольным клиентом
            </a>
          </div>
        </div>
      </section>

      {/* ── LEAD FORM BAND ─────────────────────────────────── */}
      <section className="py-16"
        style={{ background: "linear-gradient(135deg, #daa520 0%, #f0c040 50%, #daa520 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div ref={(el) => addReveal(el, 61)} className="reveal text-center mb-8">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1a1209" }}>
              Получите бесплатную консультацию
            </h2>
            <p className="text-sm" style={{ color: "rgba(26,18,9,0.7)" }}>Оставьте заявку — перезвоню в удобное время</p>
          </div>

          {!leadSent ? (
            <form onSubmit={handleLeadSubmit}
              ref={(el) => addReveal(el, 62)}
              className="reveal flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="text" placeholder="Ваше имя" value={leadName} onChange={e => setLeadName(e.target.value)} required
                className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none font-medium"
                style={{ background: "rgba(255,255,255,0.95)", color: "#1a1209" }} />
              <input
                type="tel" placeholder="+7 (___) ___-__-__" value={leadPhone} onChange={e => setLeadPhone(e.target.value)} required
                className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none font-medium"
                style={{ background: "rgba(255,255,255,0.95)", color: "#1a1209" }} />
              <button type="submit"
                className="px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap"
                style={{ background: "#1a1209", color: "#f0c040" }}>
                Отправить →
              </button>
            </form>
          ) : (
            <div className="text-center" style={{ color: "#1a1209" }}>
              <div className="text-4xl mb-2">✅</div>
              <div className="font-cormorant text-2xl font-bold">Заявка принята! Скоро позвоню.</div>
            </div>
          )}
        </div>
      </section>

      {/* ── CONTACTS ───────────────────────────────────────── */}
      <section id="contacts" className="py-20 md:py-28" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-16 items-start">
          <div ref={(el) => addReveal(el, 70)} className="reveal">
            <div className="text-xs font-semibold tracking-[0.2em] text-gold-500 uppercase mb-3 ornament">Контакты</div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-6">
              Давайте <span className="gold-text">обсудим</span><br />ваш вопрос
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Готов ответить на все вопросы о покупке, продаже или аренде недвижимости. Работаю без выходных.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (900) 000-00-00", href: "tel:+79000000000" },
                { icon: "Mail", label: "Email", value: "smirnov@realty.ru", href: "mailto:smirnov@realty.ru" },
                { icon: "MapPin", label: "Город", value: "Екатеринбург, Россия", href: undefined },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: "var(--gold-100)", border: "1px solid rgba(218,165,32,0.2)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #daa520, #f0c040)" }}>
                    <Icon name={c.icon} size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="font-semibold text-foreground hover:text-gold-600 transition-colors">{c.value}</a>
                    ) : (
                      <span className="font-semibold">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white hover:scale-105 transition-transform"
                style={{ background: "#25D366" }}>
                <Icon name="MessageCircle" size={16} /> WhatsApp
              </a>
              <a href="https://t.me/smirnov_realtor" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white hover:scale-105 transition-transform"
                style={{ background: "#229ED9" }}>
                <Icon name="Send" size={16} /> Telegram
              </a>
              <a href="viber://chat?number=79000000000" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white hover:scale-105 transition-transform"
                style={{ background: "#7360F2" }}>
                <Icon name="Phone" size={16} /> Viber
              </a>
            </div>
          </div>

          <div ref={(el) => addReveal(el, 71)} className="reveal">
            <div className="rounded-2xl p-6 md:p-8"
              style={{ background: "var(--gold-100)", border: "1px solid rgba(218,165,32,0.25)", boxShadow: "0 8px 32px rgba(218,165,32,0.12)" }}>
              <h3 className="font-cormorant text-2xl font-bold mb-6">Оставить заявку</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="py-8" style={{ background: "#1a1209", borderTop: "1px solid rgba(218,165,32,0.2)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <img src={LOGO_IMG} alt="Сергей Смирнов" className="h-14 w-auto object-contain hover:opacity-100 transition-opacity" style={{ mixBlendMode: "screen", opacity: 0.9 }} />
          </div>
          <div className="text-xs text-center" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Сергей Смирнов. Все права защищены.
          </div>
          <div className="flex gap-4">
            {[
              { href: "https://wa.me/79000000000", icon: "MessageCircle" },
              { href: "https://t.me/smirnov_realtor", icon: "Send" },
              { href: "tel:+79000000000", icon: "Phone" },
            ].map((m) => (
              <a key={m.href} href={m.href} target="_blank" rel="noopener noreferrer"
                className="hover:scale-110 transition-transform" style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#daa520")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                <Icon name={m.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── FLOATING CTA ───────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          style={{ background: "#25D366" }} title="WhatsApp">
          <Icon name="MessageCircle" size={22} />
        </a>
        <a href="https://t.me/smirnov_realtor" target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          style={{ background: "#229ED9" }} title="Telegram">
          <Icon name="Send" size={22} />
        </a>
        <a href="tel:+79000000000"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform pulse-gold"
          style={{ background: "linear-gradient(135deg, #daa520, #f0c040)" }} title="Позвонить">
          <Icon name="Phone" size={22} />
        </a>
      </div>
    </div>
  );
}

/* ── CONTACT FORM ──────────────────────────────────────── */
function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-3">✅</div>
        <h4 className="font-cormorant text-2xl font-bold mb-2">Заявка отправлена!</h4>
        <p className="text-muted-foreground text-sm">Свяжусь с вами в течение 30 минут.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1.5 block">Ваше имя *</label>
        <input type="text" placeholder="Иван Иванов" value={name} onChange={e => setName(e.target.value)} required
          className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-gold-400 transition-all"
          style={{ background: "#fff", border: "1px solid rgba(218,165,32,0.3)", color: "#1a1209" }} />
      </div>
      <div>
        <label className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1.5 block">Телефон *</label>
        <input type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={e => setPhone(e.target.value)} required
          className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-gold-400 transition-all"
          style={{ background: "#fff", border: "1px solid rgba(218,165,32,0.3)", color: "#1a1209" }} />
      </div>
      <div>
        <label className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-1.5 block">Вопрос или пожелание</label>
        <textarea placeholder="Расскажите, что вас интересует..." value={message} onChange={e => setMessage(e.target.value)} rows={3}
          className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none focus:ring-2 focus:ring-gold-400 transition-all"
          style={{ background: "#fff", border: "1px solid rgba(218,165,32,0.3)", color: "#1a1209" }} />
      </div>
      <button type="submit"
        className="w-full py-3.5 rounded-xl font-semibold text-sm hover:scale-[1.02] transition-transform duration-300 shadow-md"
        style={{ background: "linear-gradient(135deg, #daa520, #f0c040)", color: "#1a1209" }}>
        Отправить заявку →
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  );
}