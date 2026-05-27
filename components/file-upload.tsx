'use client'

import { useState, useRef } from 'react'
import { Upload, AlertCircle } from 'lucide-react'
import { Button } from './ui/button'

interface FileUploadProps {
  onFileSelect: (file: File) => void
  isLoading: boolean
}

export function FileUpload({ onFileSelect, isLoading }: FileUploadProps) {
  const [isDragActive, setIsDragActive] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isLoading) {
      setIsDragActive(e.type === 'dragenter' || e.type === 'dragover')
    }
  }

  const validateFile = (file: File): boolean => {
    if (file.type !== 'application/zip' && !file.name.endsWith('.zip')) {
      setError('Por favor, sube un archivo ZIP válido')
      return false
    }
    if (file.size > 100 * 1024 * 1024) {
      setError('El archivo es demasiado grande (máximo 100MB)')
      return false
    }
    setError(null)
    return true
  }

  const handleDrop = (e: React.DragEvent) => {
    handleDrag(e)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (validateFile(file)) {
        onFileSelect(file)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (validateFile(file)) {
        onFileSelect(file)
      }
    }
  }

  const handleClick = () => {
    if (!isLoading) {
      fileInputRef.current?.click()
    }
  }

  return (
    <div className="w-full">
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
        className={`relative rounded-2xl border-2 border-dashed p-12 transition-all duration-500 cursor-pointer group ${
          isDragActive
            ? 'border-primary bg-gradient-to-br from-primary/15 to-secondary/15 scale-105 shadow-2xl shadow-primary/25'
            : 'border-border/50 bg-card/50 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10'
        } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'animate-slide-up'}`}
      >
        {/* Background gradient accent */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 pointer-events-none group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500" />

        <div className="relative flex flex-col items-center justify-center gap-4">
          <div
            className={`rounded-full p-4 transition-all duration-500 ${
              isDragActive
                ? 'bg-gradient-to-br from-primary to-secondary text-primary-foreground scale-125 animate-pulse-glow'
                : 'bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:scale-110 group-hover:from-primary/30 group-hover:to-secondary/30'
            }`}
          >
            <Upload size={40} className="transition-transform duration-500" />
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-shift">
              Arrastra tu archivo ZIP aquí
            </h3>
            <p className="text-muted-foreground text-sm group-hover:text-foreground/60 transition-colors duration-300">
              o haz clic para seleccionar un archivo (máx 100MB)
            </p>
          </div>

          <Button
            disabled={isLoading}
            className="mt-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-8 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Seleccionar archivo ZIP
          </Button>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".zip,application/zip"
        onChange={handleChange}
        className="hidden"
        disabled={isLoading}
      />

      {error && (
        <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-center gap-3 animate-in fade-in slide-in-from-top">
          <AlertCircle className="text-destructive" size={20} />
          <p className="text-destructive text-sm">{error}</p>
        </div>
      )}
    </div>
  )
}
