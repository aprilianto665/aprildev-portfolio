import { NextResponse } from 'next/server';

export const revalidate = 60; // Revalidate data every 60 seconds

export async function GET() {
  const apiKey = process.env.MEM_API_KEY || 'mem_live_a957992c-a9ee-4fdf-9fdc-3621c9261670_282cffb9e63de6de473c7276';

  try {
    const res = await fetch('https://run-mem.vercel.app/api/v1/public/daily-missions', {
      headers: {
        'x-api-key': apiKey,
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: 'Failed to fetch live activity' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
