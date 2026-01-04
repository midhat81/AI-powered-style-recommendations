import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Test the generate endpoint
    const response = await fetch('http://localhost:3000/api/outfit/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        style: 'casual',
        colors: ['blue', 'white'],
        occasion: 'weekend brunch',
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      testSuccessful: true,
      apiResponse: data,
    });
  } catch (error) {
    return NextResponse.json({
      testSuccessful: false,
      error: error instanceof Error ? error.message : 'Test failed',
    });
  }
}