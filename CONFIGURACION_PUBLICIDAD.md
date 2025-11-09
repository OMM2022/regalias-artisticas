# 💰 Configuración de Publicidad del Desarrollador

## ⚠️ IMPORTANTE: Plataformas Compatibles

**Esta aplicación solo soporta plataformas publicitarias que NO requieren verificación de dominio.**

### ✅ **Plataformas que FUNCIONAN:**

Las siguientes plataformas permiten que tu código funcione directamente sin necesidad de verificar el dominio `omm2022.github.io`:

1. **A-Ads** (Bitcoin) ✅
2. **Adsterra** ✅
3. **PropellerAds** ✅
4. **Coinzilla** (Crypto) ✅
5. **Bitmedia** (Crypto) ✅

### ❌ **Plataformas que NO FUNCIONAN:**

Estas requieren verificar el dominio en su panel y NO son compatibles:

- ❌ Google AdSense
- ❌ Media.net
- ❌ Ezoic

---

## 📍 Ubicación de la Configuración

Abre el archivo `index.html` y busca la sección de configuración al inicio del script (línea ~320):

```javascript
// ⚙️ CONFIGURACIÓN DEL DESARROLLADOR - TU MONETIZACIÓN
const DEVELOPER_AD_CODE = `
    <!-- Aquí va tu código publicitario -->
`;
const HIDE_DEVELOPER_AD = false;
```

---

## 🎯 Cómo Agregar tu Código Publicitario

### Opción 1: A-Ads (Bitcoin) ⭐ Recomendado

1. Regístrate en [a-ads.com](https://a-ads.com)
2. Crea un banner/ad unit
3. Copia el código HTML
4. Pégalo en `DEVELOPER_AD_CODE`:

```javascript
const DEVELOPER_AD_CODE = `
    <div data-aa='XXXXXX'></div>
    <script async src='//ad.a-ads.com/XXXXXX.js'></script>
`;
```

---

### Opción 2: Adsterra

1. Regístrate en [adsterra.com](https://adsterra.com)
2. Crea una zona publicitaria (Social Bar o Banner)
3. Copia el código
4. Pégalo en `DEVELOPER_AD_CODE`:

```javascript
const DEVELOPER_AD_CODE = `
    <script type="text/javascript">
        atOptions = {
            'key' : 'XXXXXXXXXXXXXXXXXXXXX',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
        };
    </script>
    <script type="text/javascript" src="//www.topcreativeformat.com/XXXXX/invoke.js"></script>
`;
```

---

### Opción 3: PropellerAds

1. Regístrate en [propellerads.com](https://propellerads.com)
2. Crea una zona publicitaria
3. Copia el código generado:

```javascript
const DEVELOPER_AD_CODE = `
    <script type="text/javascript">
        var uid = 'XXXXXX';
        var wid = 'XXXXXX';
    </script>
    <script type="text/javascript" src="//cdn.propellerads.com/XXXXX.js"></script>
`;
```

---

### Opción 3: Adsterra

1. Regístrate en [adsterra.com](https://adsterra.com)
2. Crea una zona publicitaria (Social Bar o Banner)
3. Copia el código
4. Pégalo en `DEVELOPER_AD_CODE`:

```javascript
const DEVELOPER_AD_CODE = `
    <script type="text/javascript">
        atOptions = {
            'key' : 'XXXXXXXXXXXXXXXXXXXXX',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
        };
    </script>
    <script type="text/javascript" src="//www.topcreativeformat.com/XXXXX/invoke.js"></script>
`;
```

---

### Opción 4: Coinzilla (Crypto)

1. Regístrate en [coinzilla.com](https://coinzilla.com/publishers/)
2. Agrega tu sitio
3. Crea un banner
4. Copia el código:

```javascript
const DEVELOPER_AD_CODE = `
    <script async src="https://coinzillatag.com/lib/display.js"></script>
    <div class="coinzilla" data-zone="C-XXXXXX"></div>
    <script>
        window.coinzilla_display = window.coinzilla_display || [];
        var c_display_preferences = {};
        c_display_preferences.zone = "C-XXXXXX";
        coinzilla_display.push(c_display_preferences);
    </script>
`;
```

---

## 🔧 Configuración Adicional

### Ocultar la Publicidad Durante Pruebas

Si quieres ocultar temporalmente la publicidad del desarrollador:

```javascript
const HIDE_DEVELOPER_AD = true; // Cambiar a true
```

### Mantener Visible (Por Defecto)

```javascript
const HIDE_DEVELOPER_AD = false; // Mantener en false
```

---

## 📊 Dónde Aparece la Publicidad

La publicidad del desarrollador aparece en:

1. ✅ **Vista previa de la tarjeta** - Cuando el usuario crea su tarjeta
2. ✅ **Código embebido** - Cuando copian el código HTML
3. ✅ **Tarjetas compartidas vía QR** - Cuando escanean el código QR

**Importante:** Esta publicidad NO es visible en el formulario de creación, solo en las tarjetas finales.

---

## 💡 Recomendaciones

### Para Máxima Monetización:
- Usa **A-Ads** si quieres pagos en Bitcoin sin complicaciones (mejor para empezar)
- Usa **Adsterra** si buscas buen balance entre CPM y facilidad
- Usa **PropellerAds** para múltiples formatos de anuncios

### Tamaño Recomendado de Anuncios:
- Banner horizontal pequeño (468x60)
- Responsive ads (se adaptan automáticamente)
- Native ads (se integran mejor visualmente)

### NO Recomendado:
- ❌ Popups excesivos (mal UX)
- ❌ Anuncios muy grandes (cubren el contenido)
- ❌ Video ads con autoplay (molestan)

---

## 🧪 Probar la Configuración

1. Guarda el archivo `index.html` después de pegar tu código
2. Recarga la página en el navegador (Ctrl + F5)
3. Crea una tarjeta de prueba
4. Verifica que tu anuncio aparezca al final de la tarjeta

---

## 📈 Monetización Esperada

Según estadísticas promedio:

| Plataforma | CPM Estimado | Pago Mínimo | Método de Pago |
|------------|-------------|-------------|----------------|
| A-Ads | Variable | $1 | Bitcoin |
| Adsterra | $0.50-3 | $5 | Crypto/PayPal |
| PropellerAds | $1-4 | $5 | PayPal/Wire |
| Coinzilla | $1-4 | $50 | Crypto |
| Bitmedia | $1-3 | $10 | Bitcoin |

---

## ❓ Preguntas Frecuentes

### ¿Por qué no puedo usar Google AdSense?
AdSense requiere que verifiques el dominio `omm2022.github.io` en tu cuenta, pero ese dominio no es tuyo. Solo funciona con plataformas que no requieren verificación de dominio.

### ¿Los anuncios funcionarán directamente?
Sí, con A-Ads, Adsterra, PropellerAds, Coinzilla y Bitmedia solo necesitas pegar el código y funcionará de inmediato.

### ¿Los usuarios pueden eliminar mi publicidad?
No, está integrada en el código de la tarjeta. Solo tú puedes cambiarla editando `index.html`.

### ¿Puedo usar múltiples plataformas publicitarias?
Sí, puedes combinar varios códigos en `DEVELOPER_AD_CODE`, pero asegúrate de que no viole las políticas de cada plataforma.

### ¿Afecta la velocidad de carga?
Mínimamente. Los scripts publicitarios se cargan de forma asíncrona.

### ¿Qué pasa si no pongo código publicitario?
Se mostrará un placeholder de ejemplo. Es mejor poner al menos un código real para monetizar.

## 🧪 Probar la Configuración

1. Guarda el archivo `index.html` después de pegar tu código
2. Recarga la página en el navegador (Ctrl + F5)
3. Crea una tarjeta de prueba
4. Verifica que tu anuncio aparezca al final de la tarjeta

---

## 📈 Monetización Esperada

Según estadísticas promedio:

| Plataforma | CPM Estimado | Pago Mínimo | Método de Pago |
|------------|-------------|-------------|----------------|
| A-Ads | Variable | $1 | Bitcoin |
| Adsterra | $0.50-3 | $5 | Crypto/PayPal |
| PropellerAds | $1-4 | $5 | PayPal/Wire |
| Coinzilla | $1-4 | $50 | Crypto |
| Bitmedia | $1-3 | $10 | Bitcoin |

---

## ❓ Preguntas Frecuentes

### ¿Los usuarios pueden eliminar mi publicidad?
No, está integrada en el código de la tarjeta. Solo tú puedes cambiarla editando `index.html`.

### ¿Puedo usar múltiples plataformas publicitarias?
Sí, puedes combinar varios códigos en `DEVELOPER_AD_CODE`, pero asegúrate de que no viole las políticas de cada plataforma.

### ¿Afecta la velocidad de carga?
Mínimamente. Los scripts publicitarios se cargan de forma asíncrona.

### ¿Qué pasa si no pongo código publicitario?
Se mostrará un placeholder de ejemplo. Es mejor poner al menos un código real para monetizar.

---

## 🚀 Ejemplo Completo

```javascript
// ⚙️ CONFIGURACIÓN DEL DESARROLLADOR
const DEVELOPER_AD_CODE = `
    <div data-aa='2416691'></div>
    <script async src='//ad.a-ads.com/2416691.js'></script>
`;
const HIDE_DEVELOPER_AD = false;
```

---

¡Listo! Ahora tu app generará ingresos cada vez que alguien cree y comparta una tarjeta. 💰
