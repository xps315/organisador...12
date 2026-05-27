# PDF Organizer

Aplicación web moderna para procesar y reorganizar archivos ZIP con PDFs de forma automática. Cada PDF se organiza en su propia carpeta dentro del archivo comprimido resultante.

## Características

✨ **Interfaz Moderna**
- Diseño minimalista con gradientes púrpura y azul
- Animaciones suaves y transiciones visuales
- Glassmorphism effects y efectos de partículas Canvas

🚀 **Procesamiento Rápido**
- Carga de archivos ZIP drag-and-drop
- API backend que procesa PDFs automáticamente
- Barras de progreso animadas en tiempo real

📦 **Organización Automática**
- Extrae cada PDF del archivo
- Crea una carpeta individual para cada PDF con su nombre
- Recomprime todo en un nuevo ZIP

⚡ **Código Limpio**
- TypeScript para type-safety
- Componentes React reutilizables
- Animaciones CSS avanzadas
- Sin console.logs de debug

## Tecnologías

- **Frontend**: Next.js 16, React 19, Tailwind CSS v4
- **UI**: shadcn/ui components, Lucide icons
- **Animaciones**: CSS keyframes, Canvas particles
- **API**: Node.js route handlers
- **Compresión**: jszip library

## Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# La aplicación estará disponible en http://localhost:3000
```

## Uso

1. **Abre la aplicación** en tu navegador
2. **Carga un archivo ZIP** que contenga PDFs (arrastra o haz clic)
3. **Espera** a que se procese (verás una barra de progreso)
4. **Descarga** el ZIP reorganizado con estructura de carpetas

## Estructura del Proyecto

```
/
├── app/
│   ├── page.tsx              # Página principal con lógica
│   ├── layout.tsx            # Layout base
│   ├── globals.css           # Estilos globales + animaciones
│   └── api/
│       └── process-zip/      # API para procesar archivos
├── components/
│   ├── particle-background.tsx    # Canvas con partículas
│   ├── hero-section.tsx           # Sección hero con imagen
│   ├── file-upload.tsx            # Componente drag-and-drop
│   ├── processing-status.tsx      # Indicador de progreso
│   ├── result-display.tsx         # Pantalla de resultado
│   └── ui/                        # shadcn/ui components
├── public/
│   └── images/                # Imágenes generadas
├── package.json               # Dependencias
└── tsconfig.json             # Configuración TypeScript
```

## Componentes Principales

### ParticleBackground
Canvas animado con partículas flotantes que se conectan entre sí. Crea un efecto de red dinámica en el fondo.

### FileUpload
Zona de carga con drag-and-drop interactiva. Valida archivos ZIP y tamaño máximo (100MB).

### ProcessingStatus
Indicador visual del progreso con anillo rotatorio, icono pulsante y barra de progreso animada.

### ResultDisplay
Muestra resultados con animaciones de éxito, estadísticas y botón de descarga.

### HeroSection
Sección principal con imagen hero, título con gradiente animado y tarjetas de características.

## Animaciones CSS

La aplicación incluye múltiples animaciones:

- `animate-float`: Elemento flotante suave
- `animate-pulse-glow`: Efecto brillo pulsante
- `animate-shimmer`: Efecto brillante deslizante
- `animate-slide-up`: Entrada desde abajo
- `animate-bounce-in`: Entrada con rebote
- `animate-rotate-slow`: Rotación lenta continua
- `animate-gradient-shift`: Gradiente que cambia

## API Endpoint

### POST /api/process-zip

Procesa un archivo ZIP con PDFs.

**Request:**
- `Content-Type: multipart/form-data`
- `file`: Archivo ZIP

**Response:**
- `X-PDF-Count`: Número de PDFs procesados
- `X-File-Size`: Tamaño del archivo resultante
- `Content-Disposition`: Nombre del archivo descargable
- Body: ZIP con estructura de carpetas

## Desarrollo

### Variables de Entorno

No requiere variables de entorno adicionales.

### Construir para Producción

```bash
pnpm build
pnpm start
```

### Linting

```bash
pnpm lint
```

## Mejoras Futuras

- Soporte para otros formatos de compresión
- Preview de PDFs antes de procesar
- Historial de descargas
- Procesamiento de múltiples archivos simultáneos
- Estadísticas detalladas de procesamiento

## Licencia

Proyecto de código abierto. Siéntete libre de usar y modificar.

## Autor

Creado con v0.app

---

**Nota**: El código está optimizado para Git con estructura limpia, sin archivos de debug y componentes bien documentados.
# organizador...12
