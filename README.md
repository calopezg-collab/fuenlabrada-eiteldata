# EITEL Fuenlabrada

Web estática del proyecto EITEL Fuenlabrada: espacio de datos energéticos, hogares saludables, monitorización, casos de uso y recursos ciudadanos.

No requiere React, Vite ni instalación de dependencias. Para revisarla en local:

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000/`.

## GitHub Pages

La web está preparada para publicarse desde la raíz del repositorio. Mantiene:

- `index.html` como entrada principal.
- `styles.css` y `app.js` sin dependencias externas.
- rutas internas con hash (`#/proyecto`, `#/recursos`, etc.), compatibles con GitHub Pages.
- `CNAME` para `fuenlabrada.eiteldata.eu`.
- `.nojekyll` para que GitHub Pages sirva todos los assets sin procesamiento Jekyll.
