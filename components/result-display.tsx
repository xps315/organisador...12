'use client'

import Image from 'next/image'
import { Download, RotateCw, CheckCircle2 } from 'lucide-react'
import { Button } from './ui/button'

interface ResultDisplayProps {
  downloadUrl: string
  fileName: string
  fileSize: string
  pdfCount: number
  onReset: () => void
}

export function ResultDisplay({
  downloadUrl,
  fileName,
  fileSize,
  pdfCount,
  onReset,
}: ResultDisplayProps) {
  return (
    <div className="w-full animate-bounce-in">
      <div className="rounded-3xl glass border border-white/20 p-10 space-y-8 relative overflow-hidden">
        {/* Success animation background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse opacity-30 pointer-events-none" />

        {/* Icon with animation */}
        <div className="flex items-center justify-center relative z-10">
          <div className="relative w-32 h-32">
            {/* Outer rotating rings */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-secondary opacity-30 animate-rotate-slow" />
            <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-primary opacity-20 animate-rotate-slow" style={{ animationDirection: 'reverse' }} />

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="text-primary animate-bounce-in" size={64} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 relative z-10">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-shift">
              ¡Éxito! 🎉
            </h2>
            <p className="text-lg text-muted-foreground">
              Tu archivo ha sido procesado y organizado correctamente
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="group relative rounded-2xl glass p-6 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 space-y-2">
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground/60">
                  PDFs Procesados
                </p>
                <p className="text-3xl font-bold text-primary">{pdfCount}</p>
              </div>
            </div>

            <div className="group relative rounded-2xl glass p-6 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 space-y-2">
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground/60">
                  Tamaño del Archivo
                </p>
                <p className="text-3xl font-bold text-secondary">{fileSize}</p>
              </div>
            </div>
          </div>

          {/* File info */}
          <div className="rounded-2xl glass p-6 border border-white/10 backdrop-blur-sm space-y-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Archivo generado
            </p>
            <p className="text-sm font-mono text-foreground/80 break-all bg-white/5 rounded-lg p-3 border border-white/5">
              {fileName}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 relative z-10">
          <a href={downloadUrl} download className="w-full group">
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground text-base py-7 font-semibold gap-2 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group-hover:scale-105">
              <Download size={22} className="group-hover:animate-bounce" />
              <span>Descargar archivo ZIP</span>
            </Button>
          </a>

          <Button
            onClick={onReset}
            variant="outline"
            className="w-full text-base py-7 font-semibold gap-2 rounded-2xl border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <RotateCw size={22} />
            Procesar otro archivo
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center opacity-60">
          El archivo se elimina automáticamente después de 24 horas por seguridad
        </p>
      </div>
    </div>
  )
}
