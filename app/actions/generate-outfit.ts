'use server';

import { generateText } from 'ai';
import { geminiModel } from '@/lib/ai/gemini';
import { buildOutfitPrompt } from '@/lib/ai/prompts';

export interface GenerateOutfitParams {
  style: string;
  colors: string[];
  occasion?: string;
}

export interface GenerateOutfitResult {
  success: boolean;
  outfit?: string;
  error?: string;
}

export async function generateOutfit({
  style,
  colors,
  occasion,
}: GenerateOutfitParams): Promise<GenerateOutfitResult> {
  try {
    // Validate inputs
    if (!style || !colors || colors.length === 0) {
      return {
        success: false,
        error: 'Style and colors are required',
      };
    }

    // Build prompt
    const prompt = buildOutfitPrompt({
      style,
      colors,
      occasion: occasion || 'everyday wear',
    });

    // Generate outfit (removed maxTokens - not supported in this version)
    const result = await generateText({
      model: geminiModel,
      prompt: prompt,
      temperature: 0.7,
    });

    return {
      success: true,
      outfit: result.text,
    };
  } catch (error) {
    console.error('Generate Outfit Error:', error);

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate outfit',
    };
  }
}