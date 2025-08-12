import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const adults = Number(searchParams.get('adults') || '2');

  // TODO: Forward to MEWS Availability with your credentials (env)
  // This is a mocked response for demo.
  const rooms = [
    { code: 'URB', name: 'Urban Double', price: 201, currency: 'EUR', bookUrl: (process.env.BOOKING_PRIMARY||'https://app.mews.com') },
    { code: 'GRD', name: 'Grand Double', price: 239, currency: 'EUR', bookUrl: (process.env.BOOKING_PRIMARY||'https://app.mews.com') },
    { code: 'JSU', name: 'Junior Suite', price: 299, currency: 'EUR', bookUrl: (process.env.BOOKING_PRIMARY||'https://app.mews.com') }
  ];

  return NextResponse.json({ checkIn, checkOut, adults, rooms });
}
