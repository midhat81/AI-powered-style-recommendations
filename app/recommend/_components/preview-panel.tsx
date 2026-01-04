'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/common/card';
import Button from '@/components/common/button';
import LoadingSpinner from '@/components/common/loading-spinner';
import { Sparkles, RefreshCw, Download, Share2, AlertCircle, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';

interface PreviewPanelProps {
  style: string;
  colors: string[];
  onRegenerate: () => void;
}

export default function PreviewPanel({ style, colors, onRegenerate }: PreviewPanelProps) {
  const [outfit, setOutfit] = useState<string>('');
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string>(''); // NEW
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError('');
    setIsGenerated(false);
    setGeneratedImageUrl(''); // Reset image

    const loadingToast = toast.loading('Generating your perfect outfit...');

    try {
      const response = await fetch('/api/outfit/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          style,
          colors,
          occasion: 'everyday wear',
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to generate outfit');
      }

      setOutfit(data.outfit);
      setGeneratedImageUrl(data.generatedImageUrl || ''); // NEW: Set generated image
      setIsGenerated(true);
      toast.success('Outfit generated successfully!', { id: loadingToast });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate outfit';
      setError(errorMessage);
      toast.error(errorMessage, { id: loadingToast });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerateClick = () => {
    setIsGenerated(false);
    onRegenerate();
    handleGenerate();
  };

  const handleDownload = () => {
    try {
      const blob = new Blob([outfit], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `outfit-${style}-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('Outfit downloaded successfully!');
    } catch (err) {
      toast.error('Failed to download outfit');
    }
  };

  const handleDownloadImage = () => {
    if (!generatedImageUrl) return;
    
    try {
      const a = document.createElement('a');
      a.href = generatedImageUrl;
      a.download = `outfit-image-${style}-${Date.now()}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast.success('Image downloaded successfully!');
    } catch (err) {
      toast.error('Failed to download image');
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My AI-Generated Outfit',
          text: outfit,
        });
        toast.success('Outfit shared successfully!');
      } else {
        await navigator.clipboard.writeText(outfit);
        toast.success('Outfit copied to clipboard!');
      }
    } catch (err) {
      toast.error('Failed to share outfit');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Generate Button */}
      {!isGenerated && !isLoading && (
        <Card className="text-center p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Generate!</h3>
              <p className="text-gray-600 mb-6">
                Click the button below to let AI create your perfect {style} outfit with {colors.join(', ')} colors.
              </p>
              <Button onClick={handleGenerate} size="lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Generate My Outfit
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Loading State */}
      {isLoading && (
        <Card className="p-8">
          <div className="flex flex-col items-center gap-4">
            <LoadingSpinner size="lg" />
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Creating Your Perfect Outfit...</h3>
              <p className="text-gray-600">Our AI stylist is working its magic! ✨</p>
              <p className="text-sm text-gray-500 mt-2">Generating description and image...</p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <Card className="p-6 border-red-200 bg-red-50">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-semibold text-red-900 mb-1">Generation Failed</h4>
              <p className="text-red-700 text-sm mb-3">{error}</p>
              <Button onClick={handleGenerate} size="sm" variant="outline">
                Try Again
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Generated Outfit */}
      {isGenerated && outfit && (
        <div className="space-y-4 animate-fadeIn">
          {/* NEW: Image Display */}
          {generatedImageUrl && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-purple-600" />
                  AI-Generated Outfit Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={generatedImageUrl}
                    alt="AI Generated Outfit"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <Button onClick={handleDownloadImage} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Text Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Your AI-Generated Outfit
                </span>
                <Button
                  onClick={handleRegenerateClick}
                  variant="outline"
                  size="sm"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-slate max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {outfit}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center flex-wrap">
            <Button onClick={handleDownload} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Text
            </Button>
            <Button onClick={handleShare} variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Success Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Outfit generated successfully!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}