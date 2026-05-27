'use client'

import { useState } from 'react'
import { ParticleBackground } from '@/components/particle-background'
import { HeroSection } from '@/components/hero-section'
import { FileUpload } from '@/components/file-upload'
import { ProcessingStatus } from '@/components/processing-status'
import { ResultDisplay } from '@/components/result-display'

type Status = 'idle' | 'processing' | 'success' | 'error'

interface ProcessingResult {
  downloadUrl: string
  fileName: string
  fileSize: string
  pdfCount: number
}

export default function Home() {
  const [status, setStatus] = useState<Status>('idle')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string>('')
  const [result, setResult] = useState<ProcessingResult | null>(null)

  const handleFileSelect = async (file: File) => {
    setStatus('processing')
    setProgress(0)
    setError('')

    try {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.random() * 25
          return next > 90 ? 90 : next
        })
      }, 500)

      const formData = new FormData()
      formData.append('file', file)
      const response = await fetch('/api/process-zip', {
        method: 'POST',
        body: formData,
      })

      clearInterval(progressInterval)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Error processing file')
      }

      const pdfCount = parseInt(
        response.headers.get('X-PDF-Count') || '0',
        10
      )
      const fileSize = parseInt(
        response.headers.get('X-File-Size') || '0',
        10
      )

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      // Get filename from headers or default
      const contentDisposition = response.headers.get('content-disposition')
      let fileName = 'pdfs-organizados.zip'
      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(/filename="?([^"]+)"?/)
        if (fileNameMatch) {
          fileName = fileNameMatch[1]
        }
      }

      const fileSizeKB = (fileSize / 1024).toFixed(2)
      const fileSizeMB = fileSize > 1024 * 1024 ? (fileSize / (1024 * 1024)).toFixed(2) + ' MB' : fileSizeKB + ' KB'

      setProgress(100)
      setResult({
        downloadUrl: url,
        fileName,
        fileSize: fileSizeMB,
        pdfCount,
      })

      setStatus('success')
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Error processing file'
      )
      setStatus('error')
    }
  }

  const handleReset = () => {
    setStatus('idle')
    setProgress(0)
    setError('')
    setResult(null)
    if (result?.downloadUrl) {
      URL.revokeObjectURL(result.downloadUrl)
    }
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Particle Canvas Background */}
      <ParticleBackground />

      {/* Gradient Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                PO
              </div>
              <span className="font-bold text-lg text-foreground">PDF Organizer</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Organiza tus PDFs en segundos
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
          {status === 'idle' && (
            <div className="space-y-12">
              <HeroSection />

              <div className="mt-16">
                <FileUpload onFileSelect={handleFileSelect} isLoading={false} />
              </div>

              {/* Additional info section */}
              <div className="grid md:grid-cols-2 gap-6 mt-16 pt-12 border-t border-border/50">
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">¿Cómo funciona?</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <span className="font-medium text-foreground">1.</span> Carga
                      tu archivo ZIP
                    </li>
                    <li>
                      <span className="font-medium text-foreground">2.</span> El
                      sistema procesa todos los PDFs
                    </li>
                    <li>
                      <span className="font-medium text-foreground">3.</span>{' '}
                      Descarga tu ZIP reorganizado
                    </li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">
                    Características
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Procesa archivos de hasta 100MB</li>
                    <li>✓ Organiza PDFs automáticamente</li>
                    <li>✓ Descarga segura e instantánea</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {status === 'processing' && (
            <ProcessingStatus
              status="processing"
              message="Estamos analizando tu archivo y reorganizando los PDFs..."
              progress={progress}
            />
          )}

          {status === 'success' && result && (
            <ResultDisplay
              downloadUrl={result.downloadUrl}
              fileName={result.fileName}
              fileSize={result.fileSize}
              pdfCount={result.pdfCount}
              onReset={handleReset}
            />
          )}

          {status === 'error' && (
            <ProcessingStatus
              status="error"
              message={error || 'Hubo un error al procesar tu archivo. Por favor, intenta de nuevo.'}
            />
          )}
        </div>

        {/* Footer */}
        <footer className="border-t border-border/50 mt-16 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 text-center text-sm text-muted-foreground">
            <p>
              © 2024 PDF Organizer. Procesa tus PDFs con facilidad y rapidez.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
