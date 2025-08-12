import { hotelJsonLd } from '@/lib/jsonld';
import BookingBar from '@/components/BookingBar';
import messages from '@/messages/fr.json';
import Link from 'next/link';

const BOOKING_PRIMARY = process.env.BOOKING_PRIMARY || 'https://app.mews.com';
const WHATSAPP_URL = process.env.WHATSAPP_URL || 'https://wa.me/49894482424';

export const dynamic = 'force-static';

export default function Page() {
  const copy: any = messages as any;
  const jsonLd = hotelJsonLd(copy);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4">
        <a href="#" className="font-semibold">MOMA1890</a>
        <nav className="hidden gap-6 md:flex" aria-label="Primary">
          <a href="#rooms" className="hover:underline">{copy.navRooms}</a>
          <a href="#location" className="hover:underline">{copy.navLocation}</a>
          <a href="#breakfast" className="hover:underline">{copy.navBreakfast}</a>
          <a href="#sustainability" className="hover:underline">{copy.navSustainability}</a>
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/en">EN</Link>
          <Link href="/de">DE</Link>
          <Link href="/es">ES</Link>
          <Link href="/fr">FR</Link>
        </div>
      </div>
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 p-6 md:grid-cols-2 md:pt-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold md:text-5xl">{copy.heroTitle}</h1>
          <p className="mt-3 text-lg text-neutral-700">{copy.heroSub}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1">#1 Munich*</span>
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1">Top‑10 Germany*</span>
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1">Travellers' Choice</span>
          </div>
          <div className="mt-6 flex gap-3">
            <a className="rounded-2xl px-5 py-3 border bg-black text-white" href={BOOKING_PRIMARY} target="_blank">{copy.ctaBook}</a>
            <a className="rounded-2xl px-5 py-3 border" href={WHATSAPP_URL} target="_blank">WhatsApp 24/7</a>
          </div>
          <p className="mt-2 text-xs text-neutral-500">{copy.tripAdvisorFootnote}</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1200&auto=format&fit=crop"
            alt="Design room at MOMA1890 with modern furnishings"
            className="h-full w-full rounded-2xl object-cover shadow-lg"
            loading="eager"
          />
        </div>
      </section>
      <section className="mx-auto max-w-6xl p-6">
        <h2 className="mb-4 text-2xl font-semibold">{copy.perksTitle}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {copy.perks.map((p: string, i: number) => (
            <div key={i} className="rounded-2xl border p-5 flex items-center gap-3">
              <span>✓</span><span>{p}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="rooms" className="mx-auto max-w-6xl p-6">
        <h2 className="mb-4 text-2xl font-semibold">{copy.roomsTitle}</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { name: "Urban Double", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop" },
            { name: "Grand Double", img: "https://images.unsplash.com/photo-1522706604294-57ea68a7c225?q=80&w=1200&auto=format&fit=crop" },
            { name: "Junior Suite", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop" },
          ].map((r) => (
            <div key={r.name} className="rounded-2xl overflow-hidden border">
              <img src={r.img} alt={`${r.name} room`} className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{r.name}</h3>
                  <span className="text-sm text-neutral-600">from €201</span>
                </div>
                <a className="rounded-2xl w-full block text-center px-4 py-2 border bg-black text-white" href={BOOKING_PRIMARY} target="_blank">
                  {copy.ctaBook}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="location" className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-semibold">{copy.locationTitle}</h2>
          <p className="text-neutral-700">{copy.locationCopy}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>📍 Orleansplatz 6a, 81667 München</li>
            <li>⚡ EV charger opposite the hotel</li>
            <li>📶 High‑speed Wi‑Fi</li>
            <li>☕ Regional breakfast</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="rounded-2xl px-4 py-2 border" href="https://maps.google.com/?q=MOMA1890+Boutique+Hotel+Munich" target="_blank">Open in Maps</a>
            <a className="rounded-2xl px-4 py-2 border bg-black text-white" href="tel:+49894482424">Call</a>
          </div>
        </div>
        <iframe title="Map" className="h-64 w-full rounded-2xl border" loading="lazy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=11.586%2C48.129%2C11.601%2C48.135&layer=mapnik&marker=48.132%2C11.594" />
      </section>
      <section id="breakfast" className="mx-auto max-w-6xl p-6">
        <h2 className="mb-3 text-2xl font-semibold">{copy.breakfastTitle}</h2>
        <p className="text-neutral-700">{copy.breakfastCopy}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
          ].map((src, i) => (
            <img key={i} src={src} alt="Breakfast and lounge" className="h-48 w-full rounded-2xl object-cover" loading="lazy" />
          ))}
        </div>
      </section>
      <section id="sustainability" className="mx-auto max-w-6xl p-6">
        <h2 className="mb-3 text-2xl font-semibold">{copy.sustainabilityTitle}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <p className="text-neutral-700">{copy.sustainabilityCopy}</p>
          <div className="grid grid-cols-3 gap-3 text-center">
            {["Solar","Local","Durable"].map((k) => (
              <div key={k} className="rounded-2xl border p-5"><div className="text-sm">{k}</div></div>
            ))}
          </div>
        </div>
      </section>
      <footer className="mt-10 border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl p-6 text-sm text-neutral-600">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>+49 (0) 89 / 448 24 24</div>
            <div>{copy.langName}</div>
            <div><a className="underline" href="https://www.moma1890.com/en/">moma1890.com</a></div>
          </div>
          <p className="mt-3 text-xs">© {new Date().getFullYear()} MOMA1890 Boutique Hotel – Demo layout. Images are placeholders.</p>
        </div>
      </footer>
      <BookingBar t={copy} bookingUrl={BOOKING_PRIMARY} />
    </main>
  );
}
