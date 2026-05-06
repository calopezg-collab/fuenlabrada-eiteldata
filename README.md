# EITEL Fuenlabrada

Web estatica del proyecto EITEL Fuenlabrada: espacio de datos energeticos, hogares saludables, monitorizacion, casos de uso y recursos ciudadanos.

No requiere React, Vite ni instalacion de dependencias. Para revisarla en local:

```bash
python3 -m http.server 8000
```

Despues abre `http://localhost:8000/`.

## GitHub Pages

La web esta preparada para publicarse desde la raiz del repositorio. Mantiene:

- `index.html` como entrada principal.
- `styles.css` y `app.js` sin dependencias externas.
- rutas internas con hash (`#/proyecto`, `#/recursos`, etc.), compatibles con GitHub Pages.
- `CNAME` para `fuenlabrada.eiteldata.eu`.
- `.nojekyll` para que GitHub Pages sirva todos los assets sin procesamiento Jekyll.
