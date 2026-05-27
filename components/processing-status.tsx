'use client'

import { CheckCircle2, Loader2, AlertCircle, Sparkles } from 'lucide-react'

interface ProcessingStatusProps {
  status: 'processing' | 'success' | 'error'
  message: string
  progress?: number
}

export function ProcessingStatus({
  status,
  message,
  progress = 0,
}: ProcessingStatusProps) {
  return (
    <div className="w-full animate-bounce-in">
      <div className="rounded-3xl glass border border-white/20 p-12 space-y-8 relative overflow-hidden">
        {/* Background gradient accent */}
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse ${
          status === 'error' ? 'bg-destructive' : 'bg-primary'
        }`} />
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse ${
          status === 'error' ? 'bg-destructive' : 'bg-secondary'
        }`} />

        {/* Icon Animation */}
        <div className="flex items-center justify-center relative z-10">
          {status === 'processing' && (
            <div className="relative w-40 h-40">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-secondary opacity-40 animate-rotate-slow" />
              
              {/* Middle ring */}
              <div className="absolute inset-3 rounded-full border-2 border-transparent border-b-secondary opacity-30" style={{ animation: 'rotate-slow 6s linear reverse infinite' }} />

              {/* Center gradient circle */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10 backdrop-blur-sm flex items-center justify-center animate-pulse">
                <Loader2 className="text-primary animate-spin" size={56} />
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-2 left-1/2 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-8 right-4 w-2 h-2 bg-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
          )}

          {status === 'success' && (
            <div className="relative w-40 h-40">
              {/* Success ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/40 animate-pulse" />
              
              {/* Inner rotating accent */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-secondary border-r-primary opacity-50 animate-rotate-slow" />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <CheckCircle2 className="text-primary animate-bounce-in" size={80} />
                  <Sparkles className="absolute -top-2 -right-2 text-secondary animate-pulse" size={32} />
                </div>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="relative w-40 h-40">
              {/* Error ring */}
              <div className="absolute inset-0 rounded-full border-4 border-destructive/40 animate-pulse" />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AlertCircle className="text-destructive animate-bounce" size={80} />
              </div>
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="text-center space-y-3 relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold ${
            status === 'error'
              ? 'text-destructive'
              : 'bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-shift'
          }`}>
            {status === 'processing' && 'Procesando tu archivo...'}
            {status === 'success' && '¡Completado con éxito!'}
            {status === 'error' && 'Error en el procesamiento'}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {message}
          </p>
        </div>

        {/* Progress Bar */}
        {status === 'processing' && (
          <div className="space-y-4 relative z-10">
            <div className="relative w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">
              {/* Animated gradient bar */}
              <div
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary animate-shimmer transition-all duration-700 ease-out rounded-full"
                style={{ 
                  width: `${Math.min(progress, 95)}%`,
                  backgroundSize: '1000px 100%',
                }}
              />
              
              {/* Glow effect */}
              <div
                className="absolute h-full w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md transition-all duration-700"
                style={{ 
                  left: `${Math.min(progress, 95)}%`,
                  transform: 'translateX(-50%)',
                }}
              />
            </div>

            {/* Progress text */}
            <div className="flex justify-between items-center text-sm">
              <p className="text-muted-foreground">
                Procesando archivos...
              </p>
              <p className="font-bold text-primary">
                {Math.min(Math.round(progress), 95)}%
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
