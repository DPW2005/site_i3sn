import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route — POST /api/submit-form
 *
 * Proxy sécurisé entre le client et Google Apps Script.
 * La variable GOOGLE_SCRIPT_URL reste côté serveur (non exposée au navigateur).
 */
export async function POST(request: NextRequest) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.error('[submit-form] GOOGLE_SCRIPT_URL non définie dans .env.local');
    return NextResponse.json(
      { success: false, error: 'Configuration serveur manquante.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    // Transmettre les données à Google Apps Script
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(body).toString(),
    });

    if (!response.ok) {
      throw new Error(`Google Script a répondu avec le statut ${response.status}`);
    }

    const result = await response.json().catch(() => ({ status: 'success' }));

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('[submit-form] Erreur lors de la transmission :', error);
    return NextResponse.json(
      { success: false, error: 'Impossible de soumettre le formulaire.' },
      { status: 500 }
    );
  }
}
