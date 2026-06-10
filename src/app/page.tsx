"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  ['Корпоративные мероприятия','Новый год, тимбилдинг, юбилеи компаний и статусные вечеринки'],
  ['Конференции и бизнес-события','Форумы, презентации, семинары, деловые завтраки'],
  ['Частные события','Дни рождения, юбилеи, private party и family celebrations'],
  ['Свадьбы и торжества','Камерные свадьбы, выездные церемонии, семейные события'],
  ['Техническое обеспечение','Свет, звук, LED экраны, сцена, прямые трансляции'],
  ['Кейтеринг и персонал','Меню, бар, обслуживание, координация на площадке']
];

const stats = ['8 лет опыта','800+ мероприятий','10 000+ гостей','5 площадок-партнёров'];
const cases = [
  ['Корпоративный вечер РОСТЕХ','120 гостей, Москва-Сити'],
  ['Бизнес-форум РОСАТОМ','150 гостей, конференция'],
  ['Новогодний корпоратив банка ВТБ','250 гостей, gala-ужин'],
  ['Тренинг компании Московская биржа','80 гостей, шоу-программа'],
  ['Презентация продукции Hettich  RUS','500+ гостей, бренд-презентация']
];

const eventTypes = ['Бизнес формат', 'Вечеринка', 'Свадьба', 'Корпоратив'];
const extraServices = ['Бармен', 'Диджей', 'Кейтеринг', 'Ведущий', 'Кальяны', 'Артисты', 'Фотозона', 'Декор'];

export default function ImperiaEventBattleLanding() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [eventType, setEventType] = useState('Бизнес формат');
  const [guests, setGuests] = useState(80);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [eventDate, setEventDate] = useState('');
  const [hours, setHours] = useState(8);

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  };

  return (
    <div className="scroll-smooth min-h-screen bg-[#DDD4C6] font-[system-ui,-apple-system,BlinkMacSystemFont,'SF_Pro_Display','SF_Pro_Text','Helvetica_Neue',Arial,sans-serif] antialiased tracking-[-0.02em]">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
  <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/85 px-5 md:px-7 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
    
    <div className="flex items-center gap-4">
      <img
        src="/logo-new.png"
        alt="Imperia Sky Event"
        className="h-[104px] w-auto object-contain brightness-[1.18] contrast-[1.08] saturate-[1.08] drop-shadow-[0_0_18px_rgba(255,220,140,0.18)]"
      />
    </div>

    <nav className="hidden md:flex min-w-[720px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[21px] font-light tracking-[-0.025em] text-zinc-300">
      {[
        ['Услуги', '#services'],
        ['Кейсы', '#cases'],
        ['О нас', '#about'],
        ['Партнёры', '#partners'],
        ['Контакты', '#contacts'],
      ].map(([item, href]) => (
        <a
          key={item}
          href={href}
          className="rounded-full px-5 py-[10px] transition hover:bg-white/10 hover:text-white"
        >
          {item}
        </a>
      ))}
    </nav>

    <div className="hidden md:flex items-center">
      <Button onClick={() => setIsQuizOpen(true)} className="h-[72px] shrink-0 whitespace-nowrap rounded-full border border-amber-200/20 bg-amber-300/90 px-8 py-0 text-black hover:bg-amber-200 transition-all shadow-[0_8px_40px_rgba(255,210,120,0.18)]">
        <span className="flex flex-col items-center justify-center text-center leading-[1.02] tracking-[-0.03em]">
          <span className="text-[20px] font-normal">+7 995 634-44-04</span>
          <span className="mt-0.5 text-[15px] font-light text-black/55">MAX / Telegram</span>
        </span>
      </Button>
    </div>

  </div>
</header>

      <main className="relative z-10 bg-black text-white shadow-[0_48px_120px_rgba(0,0,0,0.38)]">
      <section className="min-h-screen px-8 md:px-20 pt-40 pb-0 flex flex-col justify-center relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url(https://u-stena.ru/upload/iblock/b42/b4244c413810b2ad07a553f9553b924a.webp)",
            filter: 'brightness(0.82) contrast(1.08) saturate(1.05)'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,180,80,0.18),transparent_30%)]"></div>
        <div className="absolute left-[-10%] top-[18%] h-[420px] w-[420px] rounded-full bg-amber-300/10 blur-[140px]"></div>
        <div className="absolute right-[-8%] bottom-[10%] h-[380px] w-[380px] rounded-full bg-white/5 blur-[120px]"></div>

        <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-5xl pt-10">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[15px] font-light tracking-[0.18em] text-zinc-300 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(255,210,120,0.9)]"></div>
            EVENT CONCIERGE
          </div>
          <h1 className="text-6xl md:text-8xl font-extralight leading-[0.95] mb-8 text-white max-w-4xl tracking-[-0.055em]">МЕРОПРИЯТИЯ<br/><span className="text-amber-300">В МОСКВА-СИТИ</span></h1>
          <p className="text-[32px] md:text-[38px] font-light text-zinc-200 max-w-3xl mb-12 leading-[1.2] tracking-[-0.03em]">Организация корпоративных и частных мероприятий под ключ на высоте вашего статуса.</p>
          <div className="flex items-center gap-8 md:gap-12 mb-14">
            {stats.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-[1px] w-10 bg-amber-300/70"></div>
                <div className="whitespace-nowrap text-[24px] font-extralight tracking-[-0.04em] text-white/90">
                  {item}
                </div>
              </div>
            ))}
          </div>
          
        </motion.div>
        </div>
      </section>

      

      <section id="services" className="scroll-mt-28 px-8 py-28 md:px-20 md:py-32">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[15px] font-light tracking-[0.18em] text-zinc-300 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(255,210,120,0.9)]"></div>
          НАШИ УСЛУГИ
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 perspective-[1200px]">
          {services.map((service, i) => (
            <Card key={i} className="group bg-zinc-950/90 border border-white/5 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/30 hover:bg-zinc-900/95 hover:shadow-[0_20px_80px_rgba(255,190,110,0.08)]">
              <CardContent className="relative overflow-hidden p-8">
                <div className="absolute right-[-40px] top-[-40px] h-[120px] w-[120px] rounded-full bg-amber-300/5 blur-3xl transition-all duration-500 group-hover:bg-amber-300/10"></div>
                <div className="text-2xl mb-4">{service[0]}</div>
                <div className="text-zinc-400">{service[1]}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="cases" className="relative overflow-hidden bg-zinc-950 px-8 py-24 scroll-mt-28 md:px-20">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 z-0 h-full w-full object-cover"
  >
    <source src="/cases-bg.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 z-[1] bg-black/62" />
  <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top_right,rgba(255,210,120,0.14),transparent_34%)]" />

  <div className="relative z-10">
    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[15px] font-light tracking-[0.18em] text-zinc-300 backdrop-blur-md">
      <div className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(255,210,120,0.9)]"></div>
      НАШИ КЕЙСЫ
    </div>

    <div className="-mx-8 flex snap-x snap-mandatory gap-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-8 pt-4 pb-8 md:-mx-20 md:px-20">
      {cases.map((c, i) => (
        <Card
          key={i}
          className="group min-w-[72vw] snap-center overflow-hidden rounded-[34px] border border-white/10 bg-black/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-200/35 hover:bg-black/15 sm:min-w-[500px] md:min-w-540px] lg:min-w-[590px]"
        >
          <CardContent className="p-0">
            <div className="p-4">
              <div
                className="aspect-[16/7] w-full rounded-[24px] border border-white/10 bg-zinc-900 bg-cover bg-center shadow-[inset_0_0_0_1px_rgba(255,235,190,0.12)]"
                style={{ backgroundImage: `url(/cases/case-${i + 1}.jpg)` }}
              />
            </div>

            <div className="px-7 pb-8 pt-3 md:px-8">
              <div className="text-2xl font-extralight tracking-[-0.045em] text-white md:text-3xl">
                {c[0]}
              </div>
              <div className="mt-3 text-lg font-light tracking-[-0.03em] text-zinc-300">
                {c[1]}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      <section id="about" className="scroll-mt-28 relative overflow-hidden bg-black px-8 py-28 md:px-20 md:py-32">
        <div className="absolute right-[-12%] top-[12%] h-[360px] w-[360px] rounded-full bg-amber-300/5 blur-[130px]"></div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[15px] font-light tracking-[0.18em] text-zinc-300 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(255,210,120,0.9)]"></div>
            О НАС
          </div>

          <div className="max-w-5xl">
            <p className="text-[28px] font-light leading-[1.3] tracking-[-0.045em] text-zinc-200 md:text-[40px]">
              Imperia Sky Event — проект Дмитрия Владимировича Молева и Оксаны Александровны Карташовой.
            </p>

            <p className="mt-7 max-w-4xl text-[20px] font-light leading-[1.65] tracking-[-0.03em] text-zinc-500 md:text-[22px]">
              На протяжении 8 лет мы организуем корпоративные и частные мероприятия в Москве, объединяя стратегический подход, продюсирование и полный контроль реализации на каждом этапе.
            </p>

            <p className="mt-6 max-w-4xl text-[20px] font-light leading-[1.65] tracking-[-0.03em] text-zinc-400 md:text-[22px]">
              Никаких роботов, чат-ботов и автоответчиков. Только личное общение — в чате и по телефону напрямую с основателями проекта.
            </p>
          </div>

          <div className="mt-20 grid gap-16 lg:grid-cols-2">
            <div className="grid gap-8 md:grid-cols-[300px_1fr] md:items-start">
              <div className="h-[400px] w-full overflow-hidden rounded-[32px] bg-zinc-950 md:w-[300px]">
                <img
                  src="/dmitry.jpg"
                  alt="Дмитрий Владимирович Молев"
                  className="h-full w-full object-cover object-center grayscale"
                />
              </div>

              <div className="pt-3">
                <div className="mb-4 text-[14px] font-light uppercase tracking-[0.22em] text-amber-300/80">
                  Сооснователь
                </div>

                <h3 className="text-[34px] font-extralight leading-[1.05] tracking-[-0.05em] text-white">
                  Дмитрий Владимирович Молев
                </h3>

                <p className="mt-7 text-[19px] font-light leading-[1.8] tracking-[-0.03em] text-zinc-400">
                  Продажи, реклама, коммуникация с клиентами, подготовка и согласование договоров, контроль оплат и сопровождение проектов.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-[300px_1fr] md:items-start">
              <div className="h-[400px] w-full overflow-hidden rounded-[32px] bg-zinc-950 md:w-[300px]">
                <img
                  src="/oksana.jpg"
                  alt="Оксана Александровна Карташова"
                  className="h-full w-full object-cover object-[center_35%]"
                />
              </div>

              <div className="pt-3">
                <div className="mb-4 text-[14px] font-light uppercase tracking-[0.22em] text-amber-300/80">
                  Сооснователь
                </div>

                <h3 className="text-[34px] font-extralight leading-[1.05] tracking-[-0.05em] text-white">
                  Оксана Александровна Карташова
                </h3>

                <p className="mt-7 text-[19px] font-light leading-[1.8] tracking-[-0.03em] text-zinc-400">
                  Офлайн-продажи, разработка концепций мероприятий, подбор подрядчиков, проведение мероприятий и контроль реализации проекта на площадке.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-28 relative overflow-hidden bg-black px-8 py-28 md:px-20 md:py-32">
        <div className="absolute right-[-10%] top-[10%] h-[360px] w-[360px] rounded-full bg-amber-300/5 blur-[130px]"></div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[15px] font-light tracking-[0.18em] text-zinc-300 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(255,210,120,0.9)]"></div>
            НАШИ ПАРТНЁРЫ
          </div>

          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <div className="text-[18px] font-light uppercase tracking-[0.24em] text-amber-300/80">
                10 лет сотрудничества
              </div>

              <h2 className="mt-5 text-5xl md:text-6xl font-extralight leading-[0.95] tracking-[-0.055em] text-white">
                Rest Кейтеринг
              </h2>
            </div>

            <div className="rounded-[36px] border border-white/10 bg-zinc-950/70 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:border-amber-300/20 hover:bg-zinc-900/80">
              <p className="text-[28px] font-extralight leading-[1.2] tracking-[-0.045em] text-white">
                «Рест-Кейтеринг» — качественный выездной ресторан для мероприятий любого формата.
              </p>

              <p className="mt-7 text-[19px] font-light leading-[1.75] tracking-[-0.03em] text-zinc-400">
                Компания организует банкеты, свадьбы, фуршеты и частные торжества с выездом непосредственно к заказчику.
              </p>

              <p className="mt-5 text-[19px] font-light leading-[1.75] tracking-[-0.03em] text-zinc-500">
                Кейтеринг особенно удобен для площадок, где невозможно полноценное приготовление блюд на месте.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-8 py-28 md:px-20 md:py-32">
        <div className="absolute left-[-10%] top-[15%] h-[360px] w-[360px] rounded-full bg-amber-300/5 blur-[130px]"></div>

        <div className="mx-auto max-w-7xl rounded-[44px] border border-white/10 bg-zinc-950/70 p-8 md:p-12 backdrop-blur-md shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-[15px] font-light tracking-[0.18em] text-zinc-300 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(255,210,120,0.9)]"></div>
            РАССЧИТАТЬ СТОИМОСТЬ
          </div>

          <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="max-w-3xl text-[32px] md:text-[46px] font-extralight leading-[1.05] tracking-[-0.055em] text-white">
                Ответьте на несколько вопросов — подготовим персональное предложение под ваш формат мероприятия.
              </p>
              <p className="mt-6 max-w-2xl text-[20px] font-light leading-[1.6] tracking-[-0.03em] text-zinc-500">
                Тип мероприятия, количество гостей, дата, длительность и дополнительные услуги — всё в одном коротком квизе.
              </p>
            </div>

            <div className="md:text-right">
              <Button onClick={() => setIsQuizOpen(true)} className="rounded-full bg-amber-300 px-10 py-7 text-[20px] font-normal tracking-[-0.03em] leading-[1.05] text-black hover:bg-amber-200 transition-all">
                Получить предложение
              </Button>
            </div>
          </div>
        </div>
      </section>
      </main>

      <div id="contacts" className="relative h-[82vh] scroll-mt-28 bg-[#DDD4C6]">
        <footer className="fixed inset-x-0 bottom-0 z-0 h-[82vh] overflow-y-auto bg-[#DDD4C6] px-8 py-20 text-[#151515] md:px-20 md:py-24">
          <div className="pointer-events-none absolute left-[-8%] top-[20%] h-[320px] w-[320px] rounded-full bg-amber-300/5 opacity-0"></div>
          <div className="pointer-events-none absolute right-[-10%] bottom-[-20%] h-[360px] w-[360px] rounded-full bg-white/5 opacity-0"></div>

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-14 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/[0.035] px-5 py-2 text-[15px] font-light tracking-[0.18em] text-black/65">
              <div className="h-2 w-2 rounded-full bg-amber-600"></div>
              КОНТАКТЫ
            </div>

            <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
              <div className="rounded-[40px] border border-black/10 bg-white/[0.20] p-8 md:p-10">
                <p className="max-w-2xl text-[28px] md:text-[34px] font-extralight leading-[1.15] tracking-[-0.05em] text-[#151515]">
                  Личное общение в чате и по телефону — без роботов, чат-ботов и автоответчиков.
                </p>

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="mb-3 text-[14px] font-light uppercase tracking-[0.22em] text-amber-700/80">Телефон</div>
                    <a href="tel:+79956344404" className="text-[28px] md:text-[30px] font-extralight tracking-[-0.04em] text-[#151515] transition hover:text-amber-700">
                      +7 995 634-44-04
                    </a>
                    <div className="mt-3 text-[18px] font-light tracking-[-0.03em] text-black/55">Telegram / WhatsApp / Max</div>
                  </div>

                  <div>
                    <div className="mb-3 text-[14px] font-light uppercase tracking-[0.22em] text-amber-700/80">E-mail</div>
                    <a href="mailto:info@impereskyevent.ru" className="text-[28px] md:text-[30px] font-extralight tracking-[-0.04em] text-[#151515] transition hover:text-amber-700 break-all">
                      info@impereskyevent.ru
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[40px] border border-black/10 bg-black/[0.035] p-8 md:p-10">
                <div className="mb-7 text-[14px] font-light uppercase tracking-[0.22em] text-amber-700/80">Документы</div>
                <div className="flex flex-col gap-4 text-[18px] font-light tracking-[-0.03em] text-black/60">
                  <a href="/requisites.pdf" target="_blank" rel="noopener noreferrer" className="border-b border-black/10 pb-4 transition hover:text-black">Реквизиты ООО «Империя Скай Ивент»</a>
                  <a href="/privacy.pdf" target="_blank" rel="noopener noreferrer" className="border-b border-black/10 pb-4 transition hover:text-black">Конфиденциальность</a>
                  <a href="/user-agreement.pdf" target="_blank" rel="noopener noreferrer" className="border-b border-black/10 pb-4 transition hover:text-black">Согласие пользователя</a>
                  <a href="/personal-data-consent.pdf" target="_blank" rel="noopener noreferrer" className="transition hover:text-black">Согласие пользователя на обработку персональных данных</a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-8 text-[16px] font-light tracking-[-0.03em] text-black/45 md:flex-row md:items-center md:justify-between">
              <div>Imperia Sky Event</div>
              <div>©2026 Empireskyevent</div>
            </div>
          </div>
        </footer>
      </div>

      

      {isQuizOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 px-4 py-6 md:py-10 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="relative my-auto w-full max-w-4xl rounded-[36px] border border-white/10 bg-zinc-950/95 p-6 md:p-8 shadow-[0_30px_120px_rgba(0,0,0,0.7)]"
          >
            <button
              onClick={() => setIsQuizOpen(false)}
              className="absolute right-6 top-6 text-3xl font-light text-zinc-500 transition hover:text-white"
              aria-label="Закрыть квиз"
            >
              ×
            </button>

            <div className="mb-6">
              
              <h2 className="text-4xl md:text-5xl font-extralight tracking-[-0.05em] text-white">Рассчитать мероприятие</h2>
              <p className="mt-4 max-w-2xl text-xl font-light leading-relaxed tracking-[-0.03em] text-zinc-400">
                Ответьте на несколько вопросов — подготовим персональное предложение под ваш формат.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="mb-4 text-[18px] font-light tracking-[-0.03em] text-white">Тип мероприятия</div>
                <div className="grid grid-cols-2 gap-3">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setEventType(type)}
                      className={`rounded-2xl border px-5 py-4 text-left text-[17px] font-light tracking-[-0.03em] transition ${
                        eventType === type
                          ? 'border-amber-300/70 bg-amber-300/15 text-amber-100'
                          : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/25 hover:bg-white/[0.06]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between text-[18px] font-light tracking-[-0.03em] text-white">
                  <span>Количество гостей</span>
                  <span className="text-amber-300">{guests}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={guests}
                  onChange={(event) => setGuests(Number(event.target.value))}
                  className="w-full accent-amber-300"
                />
                <div className="mt-3 flex justify-between text-sm font-light text-zinc-500">
                  <span>10</span>
                  <span>200</span>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="mb-4 text-[18px] font-light tracking-[-0.03em] text-white">Дополнительные услуги</div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {extraServices.map((service) => {
                    const active = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`rounded-2xl border px-4 py-3 text-[16px] font-light tracking-[-0.025em] transition ${
                          active
                            ? 'border-amber-300/70 bg-amber-300/15 text-amber-100'
                            : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/25 hover:bg-white/[0.06]'
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="mb-4 text-[18px] font-light tracking-[-0.03em] text-white">Дата мероприятия</div>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(event) => setEventDate(event.target.value)}
                  className="h-[58px] w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-[17px] font-light text-white outline-none transition focus:border-amber-300/60"
                />
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between text-[18px] font-light tracking-[-0.03em] text-white">
                  <span>Количество часов</span>
                  <span className="text-amber-300">{hours}</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="24"
                  value={hours}
                  onChange={(event) => setHours(Number(event.target.value))}
                  className="w-full accent-amber-300"
                />
                <div className="mt-3 flex justify-between text-sm font-light text-zinc-500">
                  <span>4</span>
                  <span>24</span>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
              <div className="text-[17px] font-light leading-relaxed tracking-[-0.03em] text-zinc-400">
                {eventType}, {guests} гостей, {hours} ч.{eventDate && ` Дата: ${eventDate}.`}
                {selectedServices.length > 0 && ` Дополнительно: ${selectedServices.join(', ')}.`}
              </div>
              <Button className="rounded-full bg-amber-300 px-8 py-6 text-[20px] font-normal tracking-[-0.03em] leading-[1.05] text-black hover:bg-amber-200 transition-all">
                Получить предложение
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
