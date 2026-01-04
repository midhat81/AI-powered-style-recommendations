export interface OutfitPreferences {
  style: string;
  colors: string[];
  imageUrl?: string;
  occasion?: string;
}

export interface GeneratedOutfit {
  id: string;
  description: string;
  generatedImageUrl?: string; // NEW: AI-generated outfit image
  preferences: OutfitPreferences;
  createdAt: Date;
}

export interface OutfitGenerationRequest {
  style: string;
  colors: string[];
  imageUrl?: string;
}

export interface OutfitGenerationResponse {
  success: boolean;
  outfit?: string;
  generatedImageUrl?: string; 
  error?: string;
}