'use client'

import Image from 'next/image'
import { FileStack, FolderOpen, Package, Zap, Shield, Rocket } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="w-full space-y-12 pb-8">
      {/* Hero Banner with Image */}
      <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 group">
        <Image
          src="/images/hero-banner.jpg"
          alt="PDF Organizer Hero"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        
        <div className="absolute inset-0 flex items-end p-8">
          <div className="space-y-2 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Organizador de PDFs
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Transforma tus PDFs de forma instantánea y automática
            </p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="inline-block">
          <div className="flex items-center justify-center gap-3 px-4 py-2 rounded-full glass text-sm font-medium text-primary hover:shadow-lg transition-all duration-300">
            <Zap size={16} className="animate-pulse" />
            Procesa archivos al instante
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
          Organiza tus PDFs automáticamente
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Carga un archivo ZIP con múltiples PDFs y recibe instantáneamente un nuevo ZIP perfectamente organizado con cada PDF en su propia carpeta
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {[
          {
            icon: FileStack,
            title: 'Múltiples PDFs',
            description: 'Procesa cualquier cantidad de PDFs en un solo ZIP',
            delay: '0.2s',
            color: 'from-primary to-secondary',
          },
          {
            icon: FolderOpen,
            title: 'Carpetas Organizadas',
            description: 'Cada PDF se organiza en su propia carpeta automáticamente',
            delay: '0.3s',
            color: 'from-secondary to-accent',
          },
          {
            icon: Rocket,
            title: 'Procesamiento Rápido',
            description: 'Obtén el ZIP reorganizado listo para descargar al instante',
            delay: '0.4s',
            color: 'from-accent to-primary',
          },
        ].map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="group relative rounded-2xl glass p-8 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: feature.delay }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

              <div className={`relative space-y-3 z-10`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
