# ⚡ Quick Start - PDF Organizer

## Iniciar la Aplicación en 30 Segundos

### 1️⃣ Instalar Dependencias
```bash
pnpm install
```

### 2️⃣ Iniciar Servidor de Desarrollo
```bash
pnpm dev
```

### 3️⃣ Abrir en el Navegador
```
http://localhost:3000
```

**¡Listo!** La aplicación estará ejecutándose 🎉

---

## Principales Características

### 🎨 Interfaz Moderna
- Gradientes púrpura/azul animados
- Efecto de partículas Canvas en el fondo
- Animaciones suaves en componentes
- Tema claro/oscuro automático

### 📦 Funcionalidad
- Drag-and-drop para cargar archivos ZIP
- Procesa múltiples PDFs simultáneamente
- Organiza cada PDF en su propia carpeta
- Barra de progreso animada
- Descarga instantánea del ZIP reorganizado

### 🚀 Rendimiento
- Next.js 16 con Turbopack
- React 19 con mejor rendimiento
- Animaciones CSS puro (sin overhead)
- Canvas particles renderizadas eficientemente

---

## Estructura de Archivos Principales

```
📁 Componentes
  ├── particle-background.tsx    ✨ Partículas flotantes
  ├── hero-section.tsx           🎯 Sección principal
  ├── file-upload.tsx            📤 Upload drag-and-drop
  ├── processing-status.tsx      ⏳ Indicador de progreso
  └── result-display.tsx         ✅ Pantalla de éxito

📁 Estilos
  └── globals.css               🎨 Animaciones CSS avanzadas

📁 API
  └── api/process-zip/route.ts   🔄 Procesador de archivos

📁 Imágenes
  ├── hero-banner.jpg           (Gradiente moderno)
  ├── download-icon.jpg         (Icono 3D)
  └── geometric-pattern.jpg     (Patrón fondo)
```

---

## Animaciones Disponibles

| Animación | Efecto |
|-----------|--------|
| `animate-float` | Flotación suave (3s) |
| `animate-pulse-glow` | Brillo pulsante (2s) |
| `animate-shimmer` | Destello deslizante (3s) |
| `animate-slide-up` | Entrada desde abajo (0.6s) |
| `animate-bounce-in` | Rebote al entrar (0.6s) |
| `animate-rotate-slow` | Rotación continua (8s) |
| `animate-gradient-shift` | Gradiente que cambia (3s) |

---

## Comandos Útiles

```bash
# Desarrollo
pnpm dev              # Inicia servidor local

# Build
pnpm build            # Compila para producción
pnpm start            # Inicia servidor de producción

# Calidad
pnpm lint             # Revisa el código
pnpm tsc --noEmit     # Verifica tipos TypeScript

# Limpiar
pnpm clean            # Elimina node_modules y .next
```

---

## Crear Archivo ZIP de Prueba

Para probar la aplicación, necesitas un ZIP con PDFs:

### Opción 1: Terminal (Linux/Mac)
```bash
# Crear carpeta con PDFs
mkdir test-pdfs
cd test-pdfs

# Copiar PDFs aquí (o crear archivos vacíos para probar)
touch documento1.pdf documento2.pdf documento3.pdf

# Crear ZIP
zip -r ../test.zip *.pdf
cd ..
```

### Opción 2: Windows
```powershell
# Crear carpeta
mkdir test-pdfs
cd test-pdfs

# Crear archivos de prueba
New-Item documento1.pdf
New-Item documento2.pdf

# Comprimir con explorador de archivos
# Click derecho > Enviar a > Carpeta comprimida
```

### Opción 3: Online
- Usa herramientas como 7-zip o WinRAR
- O descarga PDFs de ejemplo y créalos en un ZIP

---

## Estructura del ZIP Esperado

### Input (Tu ZIP)
```
tu-archivo.zip
├── documento1.pdf
├── documento2.pdf
├── documento3.pdf
├── reporte-2024.pdf
└── presentacion.pdf
```

### Output (ZIP Generado)
```
pdfs-organizados.zip
├── documento1/
│   └── documento1.pdf
├── documento2/
│   └── documento2.pdf
├── documento3/
│   └── documento3.pdf
├── reporte-2024/
│   └── reporte-2024.pdf
└── presentacion/
    └── presentacion.pdf
```

---

## Personalización Rápida

### Cambiar Colores
Edita `/app/globals.css`:
```css
:root {
  --primary: oklch(0.55 0.25 280);        /* Púrpura */
  --secondary: oklch(0.65 0.20 310);      /* Azul */
  --accent: oklch(0.50 0.28 310);         /* Acento */
}
```

### Cambiar Textos
Edita los componentes:
- `/components/hero-section.tsx` - Títulos y descripciones
- `/components/file-upload.tsx` - Mensaje de upload
- `/components/result-display.tsx` - Mensaje de éxito

### Cambiar Animaciones
En `/app/globals.css`, modifica los `@keyframes`:
```css
@keyframes float-smooth {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }  /* Cambia distancia */
}
```

---

## Solución de Problemas

### "Cannot find module 'jszip'"
```bash
pnpm install
pnpm dev
```

### Servidor no inicia
```bash
# Mata procesos en puerto 3000
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
pnpm dev
```

### Estilos no se aplican
```bash
# Limpia caché de Next.js
rm -rf .next
pnpm dev
```

### TypeScript errors
```bash
pnpm tsc --noEmit  # Ver errores
# Abre el archivo y revisa los tipos
```

---

## Subirlo a GitHub

```bash
# 1. Inicializar (si no está)
git init

# 2. Agregar archivos
git add .

# 3. Crear commit
git commit -m "PDF Organizer - Full Stack Application"

# 4. Conectar repositorio
git remote add origin https://github.com/tu-usuario/tu-repo.git

# 5. Subir
git branch -M main
git push -u origin main
```

Más detalles en `GIT_SETUP.md` 📖

---

## Recursos

- 📚 **Documentación Completa**: Ver `README.md`
- 🚀 **Git Setup**: Ver `GIT_SETUP.md`
- 🎨 **Next.js Docs**: https://nextjs.org
- 🎯 **React Docs**: https://react.dev
- 🌈 **Tailwind Docs**: https://tailwindcss.com
- 📦 **JSZip Docs**: https://stuk.github.io/jszip/

---

## Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| Componentes Creados | 5 principales |
| Líneas de Código | ~600 |
| Animaciones CSS | 8+ keyframes |
| Imágenes Generadas | 3 |
| Compatibilidad | ES2020+ |
| Tamaño (sin node_modules) | < 5MB |

---

## Tips Avanzados

### Aumentar Límite de Archivo
En `/app/api/process-zip/route.ts`:
```typescript
const MAX_FILE_SIZE = 200 * 1024 * 1024; // Cambiar a 200MB
```

### Agregar más Animaciones
En `/app/globals.css`:
```css
@keyframes tu-animacion {
  0% { /* estado inicial */ }
  100% { /* estado final */ }
}

.animate-tu-animacion {
  animation: tu-animacion 1s ease-in-out infinite;
}
```

### Cambiar Idioma
Todos los textos están en los componentes:
- Reemplaza los strings en React
- Actualiza labels y placeholders
- Ajusta validación de mensajes

---

**¿Problemas?** Revisa `README.md` para documentación completa 📖

**¿Listo para producción?** Ejecuta `pnpm build && pnpm start` 🚀
