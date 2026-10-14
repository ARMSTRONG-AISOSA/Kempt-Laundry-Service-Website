import { NextResponse } from 'next/server';

// TODO: forward to email (e.g. Resend, Nodemailer) or a Google Sheet / CRM.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || !body.name || !body.phone) {
    return NextResponse.json({ ok: false, error: 'Name and phone are required.' }, { status: 400 });
  }
  console.log('[quote request]', body);
  return NextResponse.json({ ok: true });
}
