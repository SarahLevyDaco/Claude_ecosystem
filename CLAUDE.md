# Instrucciones del proyecto DACO

## Meta Ads

Para los proyectos de esta cuenta, usar **únicamente** la cuenta publicitaria **"DACO Integral"** (ad_account_id: `3525089900971469`, business: DACO Integral, moneda: MXN).

No usar ni operar sobre otras cuentas publicitarias visibles en Meta Ads (p. ej. Fit & Health, Freelan México, u otras), aunque estén disponibles/enabled en la conexión, salvo que el usuario lo pida explícitamente para un proyecto distinto.

### Instagram — DACO Integral
- **Instagram Business Account ID:** `17841416343734264`
- Página de Facebook vinculada: `page_id: 1181769235012428` ("DACO Integral"), business_id `794717996909769`
- Confirmado vinculado en Meta Business Suite (verificado por el usuario, agosto 2026).
- Usar este ID directamente como `instagram_user_id` al crear creativos con `ads_create_creative` para que los anuncios entreguen en Instagram.
- **Limitación conocida:** los endpoints `ads_get_ig_accounts` y `ads_get_ig_media` (listar cuentas/posts de IG) están bloqueados por un rollout gradual de Meta para esta cuenta publicitaria — no es un problema de configuración, reintentar periódicamente para ver si ya se habilitaron. Mientras tanto, no se puede hacer boost de un post orgánico de IG ya existente vía `ads_boost_ig_post`, pero sí se pueden crear anuncios nuevos con destino Instagram usando el ID de arriba.

## Brand Kit — "Construcción Moderna con Raíces Yucatecas" (Actualizado Septiembre 2026)

### ⚠️ MIGRACIÓN EN CURSO: Nueva Identidad Visual
**Cambio estratégico:** Repositionamiento de "venta de casas" (real estate) a "construcción profesional". Paleta y tono completamente renovados.

### Paleta de Colores 2026
- **Terracota Construcción** (#B85C3C) — Nombres proyectos, headlines, CTAs, elementos estructurales. Comunica materiales locales (ladrillo, barro cocido yucateco), no frialdad real estate.
- **Greige Profesional** (#A89A8E) — Secondary headlines, fondos, descripciones técnicas. Neutralidad editorial + elegancia constructiva.
- **Blanco Puro Yucatán** (#F5F5F5) — Fondo primario, espacios negativos. Luz tropical, modernidad sin frialdad.
- **Olive Green Bioclimático** (#6B8E3F) — Acentos, detalles landscaping, sustainability messaging. Marca expertise ambiental.
- **Azul Profundo Estructural** (#1C3A47) — Texto acentos, dividers, specs técnicos. Solidez estructural.

### Tipografía
- **Serif (Georgia o similar)** — Headlines, nombres proyectos, títulos. Autoridad clásica.
- **Sans-serif limpio** — Body text, specs técnicas, captions, on-image descriptions. Precisión + legibilidad.

### Estrategia de Contenido Orgánico (Redes)
**Posicionamiento:** "DACO construye soluciones para clima tropical, no vende casas"

**Proporción Visual Tripartita:**
- 40% — Proceso Vivo (timelapse construcción real, trabajadores, fases)
- 35% — Detalles Constructivos (macro shots materiales, iluminación estudio)
- 25% — Antes/Después (transformación colonial → moderno bioclimático)

**Copy en Imágenes (CRÍTICO — el 70% no lee captions):**
- Funcional, NO decorativo. Explica QUÉ se ve, POR QUÉ importa.
- Estructura: [Proyecto en Serif 72px] → [Fase + Especificación 16px] → [Diferencial técnico 14px]
- Evitar: Adjetivos emocionales ("precioso", "sueño", "lujo"). Usar: Términos técnicos accesibles ("ventilación cruzada", "luz natural optimizada").
- Palabras clave: Construcción, Proceso, Estructura, Bioclimático, Materiales, Técnica, Verificado, Mérida, Solución, Transparencia.

**Ejemplos aprobados (Kurz 16):**
- *"LO QUE VES AQUÍ NO SE COMPRA EN UN SHOWROOM. SE CONSTRUYE."* — Diferencia construcción vs. compra hecha
- *"CADA MATERIAL, ELEGIDO. NINGUNO, IMPUESTO POR CATÁLOGO."* — Especificación + criterio
- *"CONSTRUIR VS COMPRAR HECHA"* — Comparativa directa
- Estructura visual: Foto/detalle + Copy funcional + Mini-tabla especificaciones (si cabe)

**Tono de Voz:** "Constructor Educador"
- Primera persona plural (DACO construye, resolvemos)
- Serio + accesible. Explica complejidad técnica sin elitismo.
- Narrativa: Problema Mérida → Solución Constructiva → Verificación Resultados
- Cliente como socio en decisión constructiva, no consumidor pasivo.

**Content Calendar (4-5 posts/semana):**
- **Lunes:** Reel Proceso (30-45s timelapse, proyecto + especificación on-image)
- **Miércoles:** Carousel Detalles (3-5 slides con tabla técnica, 25%+ saves target)
- **Viernes:** Reel Before/After (split-screen colonial → moderno, 3.7% engagement target)
- **Domingo:** Tour Completo o Behind-the-Scenes (humanización, confianza)
- **Daily Stories (Mon-Fri):** Real-time updates obras, 3-4 stories, 40-60% view-through target

### Brand Kit de Canva
- **Anterior:** "DACO INTEGRAL" (`id: kAHSF5fNhrY`) — DESCARTADO. Paleta y tipografía obsoletos.
- **Nuevo:** "DACO Construcción 2026" (EN CREACIÓN) — Con paleta terracota/greige/oliva, Playfair/Inter, templates Reel + Carousel estándar.
- Guía de marca completa: Documento estratégico en `daco-brand-strategy-2026.html` (todas las referencias, ejemplos de copy, métricas de éxito).

### Nota Importante para Creative-Director
Al generar creativos nuevos, usar SIEMPRE:
- **Colores:** Terracota/Greige/Blanco/Oliva/Azul (NUNCA dorado, gris neutro, ni pasteles)
- **Tipografía:** Serif (proyectos/headlines), Sans-serif limpio (specs técnicas)
- **On-image text:** Funcional, específico, educativo. NUNCA emocional. Ejemplos: "Ventilación cruzada", "Luz natural optimizada", "Material elegido", "Estructura verificada"
- **Narrativa:** Proceso + especificación + diferencial técnico. Comparativa construcción vs. compra hecha.
- **Tono:** "Constructor Educador" — transparencia técnica, no presión emocional
- **Referentes visuales:** Detalles constructivos (macro shots materiales), proceso vivo (timelapse, fases), especificaciones (tablas mini, labels)
- **Evitar completamente:** adjetivos aspiracionales ("precioso", "sueño", "lujo"), estética de catálogo inmobiliario, promesas sin verificación

## Contenido orgánico (Facebook/Instagram)
No hay conector para publicación orgánica (posts sin pauta). **Decisión (agosto 2026): Opción A — flujo manual asistido.** Claude genera el contenido (copy + creativos vía Canva usando el Brand Kit "DACO Construcción 2026", videos vía Remotion) y Sarah lo publica manualmente en Meta Business Suite/Instagram. No se ha conectado ninguna herramienta de terceros (Buffer/Later/Metricool) ni una app propia con Meta Graph API — si en el futuro se quiere automatizar la publicación, retomar las opciones B o C descartadas por ahora.

**Instrucción crítica:** El Brand Kit "DACO INTEGRAL" (id: `kAHSF5fNhrY`, paleta dorado + neutros) está DESCARTADO. Usar ÚNICAMENTE "DACO Construcción 2026" (paleta terracota/greige/oliva/azul). Cualquier creativo nuevo debe reflejar el posicionamiento "Constructor Educador".

## Sitio web (Lovable)
- Proyecto Lovable "DACO Genesis", repo GitHub: `SarahLevyDaco/daco-dreamscapes`, clonado localmente en `daco-dreamscapes/`.
- Sync bidireccional activo: cambios en Lovable → push automático al repo; push al repo (rama `main`) → se reflejan de vuelta en Lovable.
- Sitio en vivo: https://daco-dreamscapes.lovable.app
- **`gh` CLI está autenticado como `SarahLevyDaco`** (se cambió desde `arubioba` en agosto 2026 para tener acceso directo al repo). Todas las operaciones git/gh en esta máquina usan esa identidad.
- Stack: Vite + React + TypeScript + Supabase (backend) + Cloudflare (`wrangler.jsonc`).
- ⚠️ El repo trae un `.env` local — nunca leerlo/imprimirlo, probablemente contiene credenciales de Supabase.

## Conexiones pendientes (agosto 2026)
- **Google Ads** — pendiente; requiere developer token vía API Center de Google Ads (cuenta ya está bajo MCC — confirmado por el usuario), aprobación de Google toma 1-3 días.
- **Google Business Profile** — pendiente; DACO **no tiene perfil creado aún** — primero hay que crear y verificar el negocio en business.google.com (verificación postal ~1-2 semanas) antes de pensar en integrar la API.
- **Google Trends** — descartado como conector porque no existe API pública oficial. Sustituto permanente: `trend-scout` usa `WebSearch`/`WebFetch`.
- **WhatsApp Business API** — evaluado y pospuesto (agosto 2026); retomar si se prioriza el cierre de leads por WhatsApp.

## Google Analytics (GA4) + Search Console — ✅ CONECTADO (agosto 2026)
Conectado vía Service Account (no hay conector nativo en claude.ai; solo Gmail/Drive aparecen disponibles).

- Clave JSON en: `_Secrets\daco-integraciones-78061f44fe7b.json` — **nunca leer/imprimir la clave privada completa**, solo `client_email`/`project_id` si se necesita referencia.
- `project_id`: `daco-integraciones`
- `client_email`: `daco-analytic-reader@daco-integraciones.iam.gserviceaccount.com`
- **GA4 Property ID:** `538753737`
- **Search Console:** propiedad `sc-domain:dacointegral.com`, permiso `siteFullUser` confirmado
- Scripts de prueba/consulta en `integrations\google\` (`test-ga4.js`, `test-gsc.js`) — usan `googleapis` (npm, ya instalado ahí) para autenticar con la service account y consultar directamente las APIs. `performance-analyst` y `seo-content-auditor` deben usar este patrón (o extenderlo) para leer datos reales de tráfico/SEO.
- `_Secrets/` vive en la raíz de `DACO/` (no es un repo de Git) — nunca mover este archivo dentro de `daco-dreamscapes/` ni `remotion-daco-video/` (ambos son repos con remoto en GitHub).

## Arquitectura de subagentes (agosto 2026)
Sistema diseñado como "agencia" con subagentes especializados en `.claude/agents/`, invocables vía el tool Agent (`subagent_type`):
- **`trend-scout`** — investigación de tendencias (diseño, mercado inmobiliario Mérida, expats, marketing) vía WebSearch. Sustituye a Google Trends.
- **`creative-director`** — genera creativos on-brand en Canva (brand kit "DACO Construcción 2026") para campañas y contenido. Posicionamiento: "Constructor Educador", copy funcional, especificaciones técnicas visibles.
- **`performance-analyst`** — reportes de desempeño cruzando Meta Ads + HubSpot (+ GA4/GSC cuando se conecten).
- **`seo-content-auditor`** — audita el repo `daco-dreamscapes` y contenido del sitio contra el brandkit y (cuando esté disponible) datos de Search Console.

Pendiente: definir cadencia automática de estos agentes vía la skill `/schedule` (ej. `trend-scout` semanal, `performance-analyst` semanal/mensual).
