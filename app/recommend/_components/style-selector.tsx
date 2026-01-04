'use client';

import { useState } from 'react';
import { Card } from '@/components/common/card';
import { Check } from 'lucide-react';

interface StyleOption {
  id: string;
  name: string;
  description: string;
  emoji: string;
}

const STYLE_OPTIONS: StyleOption[] = [
  {
    id: 'casual',
    name: 'Casual',
    description: 'Relaxed and comfortable everyday wear',
    emoji: '👕',
  },
  {
    id: 'formal',
    name: 'Formal',
    description: 'Professional and elegant business attire',
    emoji: '👔',
  },
  {
    id: 'streetwear',
    name: 'Streetwear',
    description: 'Urban and trendy street fashion',
    emoji: '🧢',
  },
  {
    id: 'bohemian',
    name: 'Bohemian',
    description: 'Free-spirited and artistic style',
    emoji: '🌸',
  },
  {
    id: 'athletic',
    name: 'Athletic',
    description: 'Sporty and active lifestyle wear',
    emoji: '👟',
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Sophisticated and refined fashion',
    emoji: '👗',
  },
];

interface StyleSelectorProps {
  selectedStyle: string;
  onStyleChange: (styleId: string) => void;
}

export default function StyleSelector({ selectedStyle, onStyleChange }: StyleSelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold">Choose Your Style</h2>
        <p className="text-gray-600">
          Select the style that best represents your fashion preference
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {STYLE_OPTIONS.map((style) => {
          const isSelected = selectedStyle === style.id;

          return (
            <Card
              key={style.id}
              hover
              onClick={() => onStyleChange(style.id)}
              className={`
                cursor-pointer transition-all duration-300 p-6 relative
                ${isSelected ? 'ring-2 ring-primary border-primary bg-primary/5' : ''}
              `}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
              )}

              <div className="text-center space-y-3">
                <div className="text-5xl mb-2">{style.emoji}</div>
                <h3 className="text-xl font-semibold">{style.name}</h3>
                <p className="text-sm text-gray-600">{style.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {selectedStyle && (
        <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            ✓ Style selected: <span className="font-semibold">
              {STYLE_OPTIONS.find(s => s.id === selectedStyle)?.name}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}