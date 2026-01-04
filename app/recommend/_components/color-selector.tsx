'use client';

import { Check } from 'lucide-react';

interface ColorOption {
  id: string;
  name: string;
  hex: string;
  textColor: string;
}

const COLOR_OPTIONS: ColorOption[] = [
  { id: 'black', name: 'Black', hex: '#000000', textColor: 'text-white' },
  { id: 'white', name: 'White', hex: '#FFFFFF', textColor: 'text-black' },
  { id: 'red', name: 'Red', hex: '#EF4444', textColor: 'text-white' },
  { id: 'blue', name: 'Blue', hex: '#3B82F6', textColor: 'text-white' },
  { id: 'green', name: 'Green', hex: '#10B981', textColor: 'text-white' },
  { id: 'yellow', name: 'Yellow', hex: '#F59E0B', textColor: 'text-black' },
  { id: 'purple', name: 'Purple', hex: '#8B5CF6', textColor: 'text-white' },
  { id: 'pink', name: 'Pink', hex: '#EC4899', textColor: 'text-white' },
  { id: 'orange', name: 'Orange', hex: '#F97316', textColor: 'text-white' },
  { id: 'brown', name: 'Brown', hex: '#92400E', textColor: 'text-white' },
  { id: 'gray', name: 'Gray', hex: '#6B7280', textColor: 'text-white' },
  { id: 'navy', name: 'Navy', hex: '#1E3A8A', textColor: 'text-white' },
];

interface ColorSelectorProps {
  selectedColors: string[];
  onColorToggle: (colorId: string) => void;
}

export default function ColorSelector({ selectedColors, onColorToggle }: ColorSelectorProps) {
  const handleColorClick = (colorId: string) => {
    if (selectedColors.includes(colorId)) {
      // Remove if already selected
      onColorToggle(colorId);
    } else if (selectedColors.length < 3) {
      // Add if less than 3 colors selected
      onColorToggle(colorId);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold">Select Your Colors</h2>
        <p className="text-gray-600">
          Choose up to 3 colors for your outfit palette
        </p>
        <p className="text-sm text-gray-500">
          {selectedColors.length} of 3 colors selected
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {COLOR_OPTIONS.map((color) => {
          const isSelected = selectedColors.includes(color.id);
          const isDisabled = !isSelected && selectedColors.length >= 3;

          return (
            <button
              key={color.id}
              onClick={() => handleColorClick(color.id)}
              disabled={isDisabled}
              className={`
                relative aspect-square rounded-lg border-2 transition-all duration-300
                flex flex-col items-center justify-center p-4
                ${isSelected ? 'border-black ring-4 ring-primary/30 scale-105' : 'border-gray-300'}
                ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}
              `}
              style={{ backgroundColor: color.hex }}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                  <Check className="h-4 w-4 text-black" />
                </div>
              )}

              <span className={`text-xs font-semibold mt-auto ${color.textColor}`}>
                {color.name}
              </span>
            </button>
          );
        })}
      </div>

      {selectedColors.length > 0 && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-900">Selected Colors:</p>
              <p className="text-sm text-blue-700">
                {selectedColors.map(id => 
                  COLOR_OPTIONS.find(c => c.id === id)?.name
                ).join(', ')}
              </p>
            </div>
            <div className="flex gap-2">
              {selectedColors.map(id => {
                const color = COLOR_OPTIONS.find(c => c.id === id);
                return (
                  <div
                    key={id}
                    className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                    style={{ backgroundColor: color?.hex }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}

      {selectedColors.length === 0 && (
        <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-600">
            Please select at least one color to continue
          </p>
        </div>
      )}
    </div>
  );
}