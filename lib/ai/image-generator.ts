import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function generateOutfitImage(prompt: string): Promise<Blob> {
  try {
    const response = await hf.textToImage({
      model: 'stabilityai/stable-diffusion-xl-base-1.0',
      inputs: prompt,
      parameters: {
        negative_prompt: 'blurry, low quality, distorted, deformed, ugly, bad anatomy',
        num_inference_steps: 30,
      }
    });

    // Cast through unknown to Blob
    return response as unknown as Blob;
    
  } catch (error) {
    console.error('Image generation error:', error);
    throw new Error('Failed to generate outfit image');
  }
}

export function createImagePrompt(
  style: string,
  colors: string[],
  textDescription: string
): string {
  const colorList = colors.join(' and ');
  
  const simplifiedPrompt = `Professional fashion photography of a ${style} style outfit, 
featuring ${colorList} colors, high quality fashion photography, clean white background, 
studio lighting, detailed clothing, fashionable, stylish, 4k, ultra detailed`;
  
  return simplifiedPrompt;
}