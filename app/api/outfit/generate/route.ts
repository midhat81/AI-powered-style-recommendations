import { NextRequest, NextResponse } from 'next/server';
import { generateText } from 'ai';
import { geminiModel } from '@/lib/ai/gemini';
import { buildOutfitPrompt } from '@/lib/ai/prompts';
import { generateOutfitImage, createImagePrompt } from '@/lib/ai/image-generator';
import { z } from 'zod';

// Request validation schema
const GenerateOutfitSchema = z.object({
  style: z.string().min(1, 'Style is required'),
  colors: z.array(z.string()).min(1, 'At least one color is required'),
  occasion: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const validation = GenerateOutfitSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid input',
          details: validation.error.errors,
        },
        { status: 400 }
      );
    }

    const { style, colors, occasion } = validation.data;

    // Build the prompt
    const prompt = buildOutfitPrompt({
      style,
      colors,
      occasion: occasion || 'everyday wear',
    });

    // Generate outfit description using Gemini AI
    const result = await generateText({
      model: geminiModel,
      prompt: prompt,
      maxTokens: 1000,
      temperature: 0.7,
    });

    // Generate outfit image using Hugging Face
    let generatedImageUrl: string | undefined;
    
    try {
      const imagePrompt = createImagePrompt(style, colors, result.text);
      const imageBlob = await generateOutfitImage(imagePrompt);
      
      // Convert blob to base64
      const buffer = await imageBlob.arrayBuffer();
      const base64 = Buffer.from(buffer).toString('base64');
      generatedImageUrl = `data:image/jpeg;base64,${base64}`;
      
    } catch (imageError) {
      console.error('Image generation failed:', imageError);
      // Continue without image if generation fails
    }

    // Return successful response
    return NextResponse.json({
      success: true,
      outfit: result.text,
      generatedImageUrl, // NEW: Include generated image
      preferences: {
        style,
        colors,
        occasion: occasion || 'everyday wear',
      },
      generatedAt: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Outfit Generation Error:', error);

    // Handle specific error types
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to generate outfit',
          message: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      error: 'Method not allowed. Use POST request.',
    },
    { status: 405 }
  );
}