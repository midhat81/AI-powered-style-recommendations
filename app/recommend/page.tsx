'use client';

import { useState } from 'react';
import StepProgress from './_components/step-progress';
import UploadPhoto from './_components/upload-photo';
import StyleSelector from './_components/style-selector';
import ColorSelector from './_components/color-selector';
import PreviewPanel from './_components/preview-panel';
import Button from '@/components/common/button';
import { ArrowLeft } from 'lucide-react';

const STEPS = ['Upload Photo', 'Choose Style', 'Select Colors', 'Generate'];

export default function RecommendPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState<{
    file: File;
    preview: string;
  } | null>(null);
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleUpload = (file: File, previewUrl: string) => {
    setUploadedImage({ file, preview: previewUrl });
  };

  const handleStyleChange = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const handleColorToggle = (colorId: string) => {
    setSelectedColors(prev => {
      if (prev.includes(colorId)) {
        return prev.filter(id => id !== colorId);
      } else {
        return [...prev, colorId];
      }
    });
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRegenerate = () => {
    // Logic for regeneration (can be expanded)
    console.log('Regenerating outfit...');
  };

  const canProceed = () => {
    if (currentStep === 1) return uploadedImage !== null;
    if (currentStep === 2) return selectedStyle !== '';
    if (currentStep === 3) return selectedColors.length > 0;
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center mb-3">
          Create Your Perfect Outfit
        </h1>
        <p className="text-center text-gray-600">
          Follow the steps to get AI-powered style recommendations
        </p>
      </div>

      {/* Progress Bar */}
      <StepProgress currentStep={currentStep} steps={STEPS} />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-8">
        {/* Step 1: Upload Photo */}
        {currentStep === 1 && (
          <div className="animate-fadeIn">
            <UploadPhoto onUpload={handleUpload} currentImage={uploadedImage?.preview} />
          </div>
        )}

        {/* Step 2: Choose Style */}
        {currentStep === 2 && (
          <div className="animate-fadeIn">
            <StyleSelector
              selectedStyle={selectedStyle}
              onStyleChange={handleStyleChange}
            />
          </div>
        )}

        {/* Step 3: Select Colors */}
        {currentStep === 3 && (
          <div className="animate-fadeIn">
            <ColorSelector
              selectedColors={selectedColors}
              onColorToggle={handleColorToggle}
            />
          </div>
        )}

        {/* Step 4: Preview & Generate */}
        {currentStep === 4 && (
          <div className="animate-fadeIn">
            <PreviewPanel
              style={selectedStyle}
              colors={selectedColors}
              onRegenerate={handleRegenerate}
            />
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      {currentStep < 4 && (
        <div className="max-w-6xl mx-auto mt-8 flex items-center justify-between">
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <span className="text-sm text-gray-600">
            Step {currentStep} of {STEPS.length}
          </span>

          <Button onClick={handleNext} disabled={!canProceed()}>
            Next
          </Button>
        </div>
      )}

      {/* Back Button on Final Step */}
      {currentStep === 4 && (
        <div className="max-w-6xl mx-auto mt-8">
          <Button onClick={handleBack} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Colors
          </Button>
        </div>
      )}
    </div>
  );
}