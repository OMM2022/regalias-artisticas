# 💰 Configuración de Publicidad del Desarrollador

## ⚠️ IMPORTANTE: Autorización de Dominio

**Antes de pegar tu código publicitario**, debes autorizar el dominio en tu proveedor de anuncios:

### 🌐 Dominio a Autorizar:
```
omm2022.github.io
```

### 📋 Plataformas que REQUIEREN Autorización:

#### ✅ **Google AdSense** (OBLIGATORIO)
1. Ve a tu cuenta de AdSense
2. Navega a: **Sitios** → **Administrar sitios**
3. Haz clic en **"Agregar sitio"**
4. Ingresa: `omm2022.github.io`
5. Espera la aprobación (puede tardar 24-48 horas)
6. ⚠️ **Sin esto, los anuncios NO se mostrarán**

#### ✅ **A-Ads** (OBLIGATORIO)
1. Inicia sesión en [a-ads.com](https://a-ads.com)
2. Ve a **"Ad Units"** → **"New Ad Unit"**
3. En "Website URL" ingresa: `https://omm2022.github.io/regalias-artisticas/`
4. Configura el tamaño y tipo de anuncio
5. Copia el código generado para ese sitio específico

#### ✅ **Media.net** (OBLIGATORIO)
1. Ve a tu panel de Media.net
2. Navega a **"Setup"** → **"Add Site"**
3. Ingresa: `omm2022.github.io`
4. Espera aprobación del sitio
5. Solo después podrás generar códigos de anuncios

#### ⚠️ **Adsterra** (Recomendado)
- Algunos formatos requieren pre-aprobación
- Agrega el sitio en: **"Sites"** → **"Add Site"**
- Ingresa: `omm2022.github.io`

#### ⚠️ **Ezoic** (OBLIGATORIO)
1. Agrega el sitio en tu dashboard de Ezoic
2. Completa la integración DNS o CloudFlare
3. Espera aprobación completa

#### ⚠️ **Coinzilla/Bitmedia** (Variable)
- Depende del tipo de campaña
- Recomendado: Agregar sitio en configuración

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

### Opción 1: Google AdSense

1. Ve a tu cuenta de Google AdSense
2. Crea una nueva unidad de anuncio (Display Ad)
3. Copia el código generado
4. Pégalo en `DEVELOPER_AD_CODE`:

```javascript
const DEVELOPER_AD_CODE = `
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX"
         crossorigin="anonymous"></script>
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXX"
         data-ad-slot="XXXXXXX"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
`;
```

---

### Opción 2: A-Ads (Bitcoin)

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
- Usa **Google AdSense** si tienes cuenta aprobada (mejor CPM)
- Usa **A-Ads** si quieres pagos en Bitcoin sin KYC
- Usa **Adsterra** si AdSense te rechaza (más flexible)

### Tamaño Recomendado de Anuncios:
- Banner horizontal pequeño (468x60)
- Responsive ads (se adaptan automáticamente)
- Native ads (se integran mejor visualmente)

### NO Recomendado:
- ❌ Popups (mal UX)
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
| Google AdSense | $1-5 | $100 | Transferencia |
| A-Ads | Variable | $1 | Bitcoin |
| Adsterra | $0.50-3 | $5 | Crypto/PayPal |
| Coinzilla | $1-4 | $50 | Crypto |

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
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890"
         crossorigin="anonymous"></script>
    <ins class="adsbygoogle"
         style="display:block; max-height: 100px;"
         data-ad-client="ca-pub-1234567890"
         data-ad-slot="9876543210"
         data-ad-format="horizontal"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
`;
const HIDE_DEVELOPER_AD = false;
```

---

¡Listo! Ahora tu app generará ingresos cada vez que alguien cree y comparta una tarjeta. 💰
