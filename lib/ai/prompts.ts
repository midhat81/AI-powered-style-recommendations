export interface OutfitPromptParams {
    style: string;
    colors: string[];
    occasion?: string;
  }
  
  export function buildOutfitPrompt({
    style,
    colors,
    occasion = 'everyday wear',
  }: OutfitPromptParams): string {
    const colorList = colors.join(', ');
  
    return `You are a professional fashion stylist and outfit designer. Create a detailed, personalized outfit recommendation based on the following preferences:
  
  Style: ${style}
  Preferred Colors: ${colorList}
  Occasion: ${occasion}
  
  Please provide:
  
  1. **OUTFIT DESCRIPTION**: A complete outfit with specific clothing items (top, bottom, shoes, accessories)
  
  2. **STYLING TIPS**: 3-4 practical tips on how to wear and style this outfit
  
  3. **COLOR COORDINATION**: How the chosen colors work together and complement each other
  
  4. **OCCASION FIT**: Why this outfit works well for ${occasion}
  
  5. **ALTERNATIVE OPTIONS**: 2-3 alternative pieces that could be swapped in
  
  Format your response in a clear, enthusiastic, and friendly tone. Be specific about clothing items (e.g., "light blue denim jacket" not just "jacket"). Make it feel personal and exciting!
  
  Keep the response well-structured with clear sections and easy to read.`;
  }
  
  export function buildQuickOutfitPrompt({
    style,
    colors,
  }: OutfitPromptParams): string {
    const colorList = colors.join(', ');
  
    return `As a fashion expert, create a ${style} outfit using these colors: ${colorList}.
  
  Provide:
  - Complete outfit (top, bottom, shoes)
  - 2 styling tips
  - Why these colors work together
  
  Keep it concise and exciting! Maximum 150 words.`;
  }