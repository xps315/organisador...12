# Guía para Subir a GitHub

## Pasos para inicializar y subir tu proyecto a GitHub

### 1. **Inicializar Git (si no está inicializado)**

```bash
cd /ruta/del/proyecto
git init
```

### 2. **Agregar todos los archivos**

```bash
git add .
```

### 3. **Crear tu primer commit**

```bash
git commit -m "Initial commit: PDF Organizer with advanced animations and Canvas effects"
```

### 4. **Conectar a tu repositorio remoto**

```bash
# Si ya tienes un repositorio creado en GitHub:
git remote add origin https://github.com/tu-usuario/tu-repositorio.git

# Si no tienes repositorio aún:
# - Crea uno en GitHub (https://github.com/new)
# - Copia la URL del repositorio
# - Ejecuta el comando anterior con tu URL
```

### 5. **Subir el código**

```bash
# Para la rama main (o master, según tu configuración):
git branch -M main
git push -u origin main
```

## Estructura del Proyecto para Git

```
pdf-organizer/
├── app/                          # Next.js app router
│   ├── api/process-zip/route.ts  # API para procesar archivos
│   ├── globals.css               # Estilos globales + 132 líneas de animaciones
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página principal (212 líneas, código limpio)
│
├── components/                   # Componentes React reutilizables
│   ├── particle-background.tsx   # Canvas con efecto de partículas (125 líneas)
│   ├── hero-section.tsx          # Sección hero con imagen (100 líneas)
│   ├── file-upload.tsx           # Drag-and-drop (71 líneas mejoradas)
│   ├── processing-status.tsx     # Indicador de progreso (130 líneas)
│   ├── result-display.tsx        # Pantalla de resultado (130 líneas)
│   └── ui/                       # shadcn/ui components pre-instalados
│
├── public/
│   └── images/                   # Imágenes generadas
│       ├── hero-banner.jpg       # Banner hero con gradiente
│       ├── download-icon.jpg     # Icono de descarga 3D
│       └── geometric-pattern.jpg # Patrón geométrico de fondo
│
├── package.json                  # Dependencias (jszip, Next.js 16, React 19)
├── tsconfig.json                 # Configuración TypeScript
├── tailwind.config.ts            # Tailwind CSS v4
├── next.config.mjs               # Next.js config
├── .gitignore                    # Git ignore properly configured
├── README.md                     # Documentación completa (161 líneas)
└── GIT_SETUP.md                  # Este archivo

```

## Características de Código Limpio ✅

- ✅ **Sin console.logs**: Todos removidos para producción
- ✅ **TypeScript**: Type-safe en todos los archivos
- ✅ **Componentes Reutilizables**: Cada componente tiene responsabilidad única
- ✅ **Estilos Limpios**: Tailwind CSS + CSS avanzado
- ✅ **Animaciones Profesionales**: 8+ animaciones CSS custom
- ✅ **API Limpia**: Route handler bien estructurado
- ✅ **Documentación**: README completo + comentarios en el código

## Opciones para Descargar/Distribuir

### Opción 1: GitHub
1. Crea un repositorio en GitHub
2. Sigue los pasos anteriores
3. Comparte el link

### Opción 2: ZIP en v0.app
1. En v0.app, haz clic en "..." (tres puntos)
2. Selecciona "Download ZIP"
3. Abre en tu IDE favorito
4. Inicializa Git localmente

### Opción 3: Clone desde GitHub
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
pnpm install
pnpm dev
```

## Commits Recomendados

Si prefieres hacer commits estructurados:

```bash
# 1. Componentes base
git add components/ && git commit -m "feat: Add interactive components with animations"

# 2. API y lógica
git add app/api && git commit -m "feat: Add ZIP processing API"

# 3. Estilos y animaciones
git add app/globals.css && git commit -m "style: Add advanced CSS animations and theme"

# 4. Página principal
git add app/page.tsx && git commit -m "feat: Add main page with state management"

# 5. Imágenes y assets
git add public/ && git commit -m "assets: Add generated images"

# 6. Documentación
git add README.md && git commit -m "docs: Add comprehensive README"

# 7. Subir todo
git push origin main
```

## Verificación Previa a Subir

Antes de hacer push, verifica:

```bash
# 1. No hay console.logs (solo para debug)
grep -r "console\." app/ components/ --include="*.tsx" --include="*.ts"

# 2. TypeScript compila sin errores
pnpm tsc --noEmit

# 3. No hay archivos innecesarios
ls -la | grep -E "^d.*\.(git|node_modules|\.next)"

# 4. .gitignore está configurado
cat .gitignore
```

## Referencia Rápida de Comandos Git

```bash
# Ver estado actual
git status

# Ver cambios
git diff

# Ver historial de commits
git log --oneline

# Deshacer último commit (local)
git reset --soft HEAD~1

# Crear rama nueva
git checkout -b feature/nombre-feature

# Cambiar a rama main
git checkout main

# Fusionar rama
git merge feature/nombre-feature

# Eliminar rama
git branch -d nombre-rama
```

## GitHub Actions (Opcional)

Para automatizar builds/tests, crea `.github/workflows/build.yml`:

```yaml
name: Build

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm tsc --noEmit
      - run: pnpm build
```

## Contacto y Soporte

Si tienes problemas:
1. Revisa el README.md
2. Verifica que `pnpm install` completó exitosamente
3. Asegúrate de tener Node.js 18+ instalado
4. Borra `node_modules/` y `.next/` y vuelve a instalar

---

**Tu proyecto está listo para Git. ¡Sube el código y comparte!** 🚀
