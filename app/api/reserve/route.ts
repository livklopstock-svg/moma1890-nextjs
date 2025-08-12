import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { roomCode, checkIn, checkOut, guests, email, phone } = body || {};

  if (!roomCode || !checkIn || !checkOut || !guests || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

  // TODO: Call MEWS reservation hold endpoint with credentials
  // This is a mocked response for demo.
  const holdId = `HOLD-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
  return NextResponse.json({ holdId, expiresInMinutes: 15 });
}
