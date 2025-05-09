import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, note, recaptchaToken } = await req.json();
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    if (!secret) {
      return NextResponse.json({ error: 'reCAPTCHA secret not configured' }, { status: 500 });
    }
    if (!recaptchaToken) {
      return NextResponse.json({ error: 'Missing reCAPTCHA token' }, { status: 400 });
    }

    // Verify reCAPTCHA with Google
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(recaptchaToken)}`,
    });
    const verifyData = await verifyRes.json();

    if (!verifyData.success || (verifyData.score !== undefined && verifyData.score < 0.5)) {
      return NextResponse.json({ error: 'reCAPTCHA failed', details: verifyData }, { status: 400 });
    }

    // TODO: Handle the form data (send email, save to DB, etc)
    // For now, just return success
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
} 