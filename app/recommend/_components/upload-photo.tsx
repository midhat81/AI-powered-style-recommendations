'use client';

import { useState, useRef, ChangeEvent, DragEvent } from 'react';
import { Upload, X, AlertCircle } from 'lucide-react';
import Button from '@/components/common/button';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface UploadPhotoProps {
  onUpload: (file: File, previewUrl: string) => void;
  currentImage?: string;
}

export default function UploadPhoto({ onUpload, currentImage }: UploadPhotoProps) {
  const [preview, setPreview] = useState(currentImage || '');
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    // Check file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      const errorMsg = 'Please upload a valid image (JPG, PNG, or WEBP)';
      setError(errorMsg);
      toast.error(errorMsg);
      return false;
    }

    // Check file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      const errorMsg = 'Image size must be less than 5MB';
      setError(errorMsg);
      toast.error(errorMsg);
      return false;
    }

    setError('');
    return true;
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onUpload(file, result);
        toast.success('Image uploaded successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleRemove = () => {
    setPreview('');
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.success('Image removed');
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Upload Area */}
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-lg overflow-hidden transition-all cursor-pointer ${
          isDragging
            ? 'border-purple-500 bg-purple-50'
            : preview
            ? 'border-gray-300'
            : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50/50'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={handleFileChange}
          className="hidden"
        />

        {preview ? (
          // Preview Image
          <div className="relative aspect-video w-full">
            <Image
              src={preview}
              alt="Uploaded preview"
              fill
              className="object-contain"
            />
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 shadow-lg"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          // Upload Placeholder
          <div className="p-12 text-center">
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-semibold mb-2">Upload Your Photo</h3>
            <p className="text-sm text-gray-600 mb-4">
              Drag and drop your image here, or click to browse
            </p>
            <p className="text-xs text-gray-500">
              Supported formats: JPG, PNG, WEBP (Max 5MB)
            </p>
            <Button
              onClick={(e) => e.stopPropagation()}
              variant="outline"
              className="mt-4"
            >
              Choose File
            </Button>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Info */}
      {preview && (
        <div className="text-center p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700 font-medium">
            ✓ Looking good! Click "Next" to continue
          </p>
        </div>
      )}
    </div>
  );
}