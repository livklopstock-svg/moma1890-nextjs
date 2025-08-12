'use client';
import { useState } from 'react';

export default function BookingBar({ t, bookingUrl }: { t: any, bookingUrl: string }) {
  const [ci, setCi] = useState('');
  const [co, setCo] = useState('');
  const [gu, setGu] = useState(2);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white/90 backdrop-blur shadow-lg">
      <form className="mx-auto flex max-w-5xl items-center gap-2 p-3" aria-label="Quick booking"
        onSubmit={(e)=>{e.preventDefault(); const url = `${bookingUrl}?checkIn=${ci}&checkOut=${co}&adults=${gu}`; window.open(url, '_blank');}}>
        <label className="text-xs" htmlFor="ci">{t.stickyCheckIn}</label>
        <input id="ci" className="w-36 rounded-xl border px-3 py-2" type="date" value={ci} onChange={e=>setCi(e.target.value)} />
        <label className="text-xs" htmlFor="co">{t.stickyCheckOut}</label>
        <input id="co" className="w-36 rounded-xl border px-3 py-2" type="date" value={co} onChange={e=>setCo(e.target.value)} />
        <label className="text-xs" htmlFor="gu">{t.stickyGuests}</label>
        <input id="gu" className="w-24 rounded-xl border px-3 py-2" type="number" min={1} value={gu} onChange={e=>setGu(parseInt(e.target.value||'1'))} />
        <button className="rounded-2xl px-4 py-2 border bg-black text-white" type="submit">{t.stickyBook}</button>
      </form>
    </div>
  );
}
