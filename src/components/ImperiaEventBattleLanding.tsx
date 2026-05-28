'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  ['Корпоративные мероприятия', 'Новый год, тимбилдинг, юбилеи компаний и статусные вечеринки'],
  ['Конференции и бизнес-события', 'Форумы, презентации, семинары, деловые завтраки'],
  ['Частные события', 'Дни рождения, юбилеи, private party и family celebrations'],
  ['Свадьбы и торжества', 'Камерные свадьбы, выездные церемонии, семейные события'],
  ['Техническое обеспечение', 'Свет, звук, LED экраны, сцена, прямые трансляции'],
  ['Кейтеринг и персонал', 'Меню, бар, обслуживание, координация на площадке'],
];

const stats = ['10+ лет опыта', '1000+ мероприятий', '100 000+ гостей', '50+ площадок-партнёров'];
const clients = ['РОСТЕХ', 'РОСАТОМ', 'ТИНЬКОФФ', 'СБЕР', 'Hettich Рус'];
const cases = [
  ['Корпоративный вечер РОСТЕХ', '300 гостей, Москва-Сити'],
  ['Бизнес-форум РОСАТОМ', '500+ гостей, конференция'],
  ['Юбилей компании ТИНЬКОФФ', '250 гостей, gala-ужин'],
  ['Новогодний корпоратив СБЕР', '400 гостей, шоу-программа'],
  ['Презентация продукции Hettich Рус', '150 гостей, бренд-презентация'],
];

const HERO_BG =
  'https://u-stena.ru/upload/iblock/b42/b4244c413810b2ad07a553f9553b924a.webp';

export default function ImperiaEventBattleLanding() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-amber-500/10 px-8 md:px-20 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Imperia Sky Event"
            width={200}
            height={72}
            className="h-[72px] w-auto object-contain"
            priority
          />
        </div>
        <div className="hidden md:flex gap-8 text-sm text-zinc-300">
          <span>Услуги</span>
          <span>Кейсы</span>
          <span>О нас</span>
          <span>Отзывы</span>
          <span>Контакты</span>
        </div>
        <div className="text-right text-sm">
          <div className="text-white font-semibold">+7 999 797-22-17</div>
          <div className="text-amber-300">WhatsApp / Telegram</div>
        </div>
      </header>

      <section className="min-h-screen px-8 md:px-20 pt-40 pb-24 flex flex-col justify-center relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            filter: 'brightness(0.82) contrast(1.08) saturate(1.05)',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,180,80,0.18),transparent_30%)]" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl pt-10"
          >
            <h1 className="text-6xl md:text-8xl font-light leading-[0.95] mb-8 text-white max-w-4xl">
              ПРЕМИАЛЬНЫЕ
              <br />
              МЕРОПРИЯТИЯ
              <br />
              <span className="text-amber-300">В МОСКВА-СИТИ</span>
            </h1>
            <p className="text-2xl text-zinc-200 max-w-2xl mb-12 leading-relaxed">
              Организация корпоративных и частных мероприятий под ключ на высоте вашего статуса.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-14 max-w-5xl">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="backdrop-blur-md bg-black/30 border border-amber-300/20 rounded-2xl p-6 text-center text-zinc-100 shadow-2xl"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="rounded-none shadow-2xl">
                ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-none border-white/40 text-white bg-black/20 backdrop-blur-sm"
              >
                СМОТРЕТЬ ВИДЕО
              </Button>
            </div>
          </motion.div>
          <div className="mt-20 text-center text-zinc-300 text-3xl animate-bounce">⌄</div>
        </div>
      </section>

      <section className="px-8 md:px-20 py-12 border-y border-zinc-900 grid md:grid-cols-5 gap-6 text-center text-2xl text-zinc-400">
        {clients.map((c, i) => (
          <div key={i}>{c}</div>
        ))}
      </section>

      <section className="px-8 md:px-20 py-24">
        <h2 className="text-4xl mb-12 font-light text-amber-100">Наши услуги</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              className="bg-zinc-950 border-amber-500/10 rounded-3xl hover:scale-[1.02] transition-all"
            >
              <CardContent className="p-8">
                <div className="text-2xl mb-4">{service[0]}</div>
                <div className="text-zinc-400">{service[1]}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-20 py-24 bg-zinc-950">
        <h2 className="text-4xl mb-12 font-light text-amber-100">Кейсы</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {cases.map((c, i) => (
            <Card key={i} className="bg-black border-amber-500/10 rounded-3xl">
              <CardContent className="p-8">
                <div className="text-xl mb-3">{c[0]}</div>
                <div className="text-zinc-500">{c[1]}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-20 py-24">
        <h2 className="text-4xl mb-12 font-light text-amber-100">Почему выбирают нас</h2>
        <div className="grid md:grid-cols-4 gap-6 text-zinc-300">
          <div>Полный цикл event production от идеи до финального банкета</div>
          <div>10+ лет опыта и тысячи успешно реализованных мероприятий</div>
          <div>Проверенные площадки Москва Сити и по всей Москве</div>
          <div>Команда координаторов, продакшн, логистика и менеджмент</div>
        </div>
      </section>

      <section className="px-8 md:px-20 py-28 bg-gradient-to-b from-zinc-950 to-black text-center">
        <h2 className="text-5xl font-light mb-8">Обсудим ваше мероприятие?</h2>
        <p className="text-zinc-400 text-xl mb-10">
          Свяжемся с вами в течение 30 минут и подготовим персональное предложение
        </p>
        <div className="text-2xl mb-6 text-amber-200">+7 999 797-22-17</div>
        <Button className="rounded-2xl px-10 py-6 text-lg bg-amber-200 text-black hover:bg-amber-300">
          Получить предложение
        </Button>
      </section>
    </div>
  );
}

console.assert(Array.isArray(services) && services.length === 6, 'services dataset should contain 6 items');
console.assert(Array.isArray(stats) && stats.length === 4, 'stats dataset should contain 4 items');
console.assert(Array.isArray(clients) && clients.length === 5, 'clients dataset should contain 5 items');
console.assert(Array.isArray(cases) && cases.length === 5, 'cases dataset should contain 5 items');
