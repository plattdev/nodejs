# Proyecto: CalcU - Calculadora Web con Números Aleatorios

**Propósito**: Aplicación web que genera dos números aleatorios (0-100) y permite realizar operaciones matemáticas básicas (suma, resta, multiplicación, división) sobre ellos.

## Estructura del Proyecto

```
nodejs/
├── index.html          # Interfaz principal de la calculadora
├── css/
│   └── index.css      # Estilos de la calculadora (grid layout, efectos visuales)
├── js/
│   ├── index.js       # Lógica principal (versión mejorada, con comentarios)
│   ├── indexTF.js     # Versión alternativa de la lógica
│   └── function.mjs   # Módulo con funciones matemáticas exportadas
└── README.md
```

## Características Principales

1. **Generación de Números**: Muestra dos números aleatorios (0-100) en elementos circulares
2. **Operaciones**: 4 botones para sumar, restar, multiplicar y dividir
3. **Botón "Generar nuevos"**: Permite refrescar los números aleatorios
4. **Manejo de Errores**: Validación de división por cero
5. **Diseño Responsive**: Layout con CSS Grid de 7 filas x 1 columna

## Detalles Técnicos

- Usa **ES6 modules** para organización del código
- Funciones matemáticas exportadas desde `js/function.mjs:1`
- Event listeners para interactividad
- Dos versiones del script principal con implementaciones ligeramente distintas
- Estilos con normalize.css, sombras y bordes personalizados
