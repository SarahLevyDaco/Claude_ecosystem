# DACO Integral — Ecosistema de Agentes Colaborativos
**Versión 1.0 | Implementación Local | Flujo Secuencial**

---

## 1. VISIÓN GENERAL

El ecosistema consta de **3 agentes especializados** que colaboran de forma secuencial para automatizar el ciclo completo de campañas de marketing digital en Meta y Google:

```
AGENTE 1 (ESTRATEGIA) → AGENTE 2 (CREATIVO) → AGENTE 3 (OPERACIÓN)
        ↓                      ↓                      ↓
  Analiza datos          Diseña contenido         Publica & Reporta
   & planifica          con lineamientos          resultados
```

Cada agente recibe insumos del anterior y genera outputs listos para el siguiente.

---

## 2. AGENTE 1 - ESTRATEGIA 🎯

### Responsabilidad Principal
Analizar **resultados de campañas previas, KPIs, tendencias de mercado y perfil de ICP (Ideal Customer Profile)** para generar un **brief estratégico estructurado** que guíe al Agente Creativo.

### Inputs
- Datos de campañas anteriores (desde Meta Ads CLI o manual)
- Indicadores de éxito: CTR, CPC, conversion rates, ROAS
- Tendencias de mercado Mérida/Yucatán (lifestyle, vivienda, expats)
- Segmentación de audiencia: Expats (45-65) vs. Mexicanos premium
- Objetivos comerciales actuales (leads, awareness, conversiones)
- Presupuesto disponible

### Outputs
1. **Brief Creativo Estructurado** (archivo JSON o Markdown)
   - Pilar de contenido (Proceso, Portafolio, Expertise, Vida en Mérida)
   - Segmento de audiencia primario
   - Ángulo de mensaje (emocional, técnico, lifestyle)
   - Formatos recomendados (reel, carrusel, post)
   - Tonalidad de copy (ES/EN)
   - CTA sugerido

2. **Segmentos de Audiencia Meta/Google**
   - Edad, ubicación, intereses
   - Ingreso estimado / poder adquisitivo
   - Dispositivos primarios
   - Comportamientos de intención

3. **Plan Presupuestario**
   - Distribución por canal (Meta vs. Google)
   - Presupuesto diario/semanal
   - Cronograma de publicación

### Herramientas Utilizadas
- **meta-ads CLI** (skill): `meta ads campaign list`, `meta ads insights`
- **WebFetch**: Datos de tendencias externas (opcional)
- **TaskCreate**: Crear tarea para Agente 2
- **SendMessage**: Comunicar brief al Agente 2
- **Read/Grep**: Analizar archivos locales de plantillas y lineamientos

### Flujo de Trabajo
```
1. Obtener datos: meta ads insights [ACCOUNT_ID] --breakdown=audience
2. Analizar: Comparar CTR, CPC, ROAS vs. benchmarks Mérida
3. Identificar: Pilar + segmento más prometedor
4. Documentar: Crear BRIEF_[DATE].json con estructura
5. Comunicar: SendMessage al Agente 2 con archivo adjunto
```

### Archivo de Salida Recomendado
```
DACO/estrategia/BRIEF_2026-08-10.json
{
  "fecha": "2026-08-10",
  "pilar": "Portafolio Visual",
  "segmento_primario": "Expats_45-65_USA_Canada",
  "angulo_mensaje": "Emotional + Lifestyle",
  "formatos": ["reel", "carrusel", "post"],
  "audiencia": {
    "age_min": 45,
    "age_max": 70,
    "locations": ["USA", "Canada"],
    "intereses": ["real estate", "retirement", "luxury"],
    "ingreso_estimado": "$250k+"
  },
  "copy_tonalidad": "Warm, Sophisticated, Aspirational",
  "cta_sugerido": "Schedule Alignment Call",
  "presupuesto_semanal": "$2000 USD",
  "duracion_campana": "4 semanas"
}
```

---

## 3. AGENTE 2 - CREATIVO 🎨

### Responsabilidad Principal
Convertir el **brief estratégico en activos visuales y de contenido de alta calidad**, respetando **100% los lineamientos de marca DACO** y adaptando a múltiples formatos (reels, carruseles, posts, ads).

### Inputs (del Agente 1)
- Brief creativo (JSON/Markdown)
- Segmento de audiencia y ángulo de mensaje
- Lineamientos de marca DACO (colores, tipografía, voz)
- Plantillas de contenido (30 tipos disponibles en DACO_Plantillas.txt)
- Activos visuales disponibles (fotos de proyectos, renders)
- Formatos requeridos (1:1, 9:16, 16:9)

### Outputs
1. **Imágenes optimizadas para cada formato**
   - 1:1 (1080x1080) — Feed Instagram
   - 9:16 (1080x1920) — Stories/Reels
   - 16:9 (1200x628) — Google Display Ads

2. **Videos/Reels** (12-35 segundos)
   - Proyecto terminado editorial
   - Obra en proceso / Confianza
   - Materialidad y detalles finos
   - Estilo de vida Mérida
   - Recorrido lento de residencia

3. **Copy bilingüe (ES/EN)**
   - Headlines
   - Captions
   - CTAs
   - Microcopy para badges

4. **Componentes compilados** (Assets folder)
   - Folder structure: `DACO/creativos/[BRIEFID]/`
   - Imágenes originales + optimizadas
   - Videos .mp4 compilados
   - Documento de copy (MD)
   - Checklist de brand compliance

### Herramientas Utilizadas
- **Remotion Skills**: `remotion-create`, `remotion-markup`, `remotion-render`
- **Local Brand Guidelines**: DACO_Brand_Guidelines_AI_Agent.txt
- **Plantillas**: DACO_Plantillas.txt (referencia de structure & copy)
- **Edit/Write**: Crear archivos de copy y metadata
- **TaskUpdate**: Notificar avance del Agente 3

### Proceso Creativo
```
1. Leer brief → Identificar pilar + formato principal
2. Seleccionar plantilla compatible (Ej: "01. REEL: Proyecto Terminado")
3. Validar lineamientos: colores, tipografía, voz, CTA
4. Crear/adaptar visuales: Remotion para videos, herramientas locales para imágenes
5. Escribir copy: Bilingüe, tonalidad, sin exageraciones
6. Revisar checklist: ¿Suena premium? ¿Genera confianza? ¿Evita claims sin evidencia?
7. Compilar assets → Folder entregable
8. Notificar Agente 3 → TaskUpdate + SendMessage
```

### Estructura de Carpeta Entregable
```
DACO/creativos/BRIEF_2026-08-10/
├── README.md (metadata: formato, pilar, audiencia, CTA)
├── COPY_ES.txt (headlines, captions, CTAs)
├── COPY_EN.txt
├── checklist_brand_compliance.md
├── originals/
│   ├── proyecto_fachada.jpg
│   ├── proyecto_patio.jpg
│   └── proyecto_interior.mp4
├── optimizados/
│   ├── 1080x1080_feed.jpg
│   ├── 1080x1920_reel.mp4
│   └── 1200x628_google_display.jpg
└── deployment_ready/
    ├── asset_1_1080x1080.json (metadatos para Agente 3)
    ├── asset_2_9x16.json
    └── batch_meta_google.json (formatos para posteos)
```

### Checklist de Validación
- [ ] Colores dentro de paleta DACO (Navy #1C2B36, Cream #F4EFEA, Earth #D6A87C, Green #2A4736)
- [ ] Tipografía: Playfair Display (headings) + Montserrat (body)
- [ ] Texto overlay < 20% del área de imagen
- [ ] Copy sin claims no validados, sin "somos los mejores", sin urgencia agresiva
- [ ] CTA clara y aligned con pilar de contenido
- [ ] Representación visual premium, no stock photo generic
- [ ] Bilingüe: Adaptación cultural, no traducción literal
- [ ] Logo DACO visible (cuando corresponda)
- [ ] Resolución mínima: 1080px ancho (formatos verticales), 1200px (horizontales)

---

## 4. AGENTE 3 - OPERACIÓN 📊

### Responsabilidad Principal
**Publicar, ajustar, monitorear y reportar** los activos creativos en Meta Ads y Google Ads, optimizando en tiempo real basándose en performance.

### Inputs (del Agente 2)
- Assets folder compilado (imágenes, videos, copy)
- Metadata JSON (formato, segmento, CTA)
- Presupuesto y cronograma (del Agente 1)
- Targeting audiencias pre-configurado
- Headlines, descriptions, copy validado

### Outputs
1. **Campañas en vivo**
   - Meta Ads: Campaign + Adset + Ads (PAUSED hasta aprobación)
   - Google Search/Display (si aplica)

2. **Reportes de performance** (diarios/semanales)
   - CTR, CPC, Conversiones, ROAS
   - Variación vs. benchmarks Mérida
   - Recomendaciones de ajustes

3. **Optimizaciones en tiempo real**
   - Pausa ads con bajo rendimiento
   - Aumenta presupuesto a top performers
   - Ajusta targeting si es necesario

4. **Documentación de resultados**
   - Archivo `REPORTS/WEEK_[N]_[DATE].md`
   - Exporta datos JSON para análisis posterior

### Herramientas Utilizadas
- **meta-ads CLI** (skill): 
  - `meta ads campaign create/update/pause`
  - `meta ads adset create`
  - `meta ads ad create`
  - `meta ads insights --breakdown=...`
- **TaskUpdate**: Actualizar estado del proceso
- **Write**: Crear reportes en Markdown
- **Bash**: Ejecutar comandos meta-ads con scripting

### Workflow Publicación
```
1. Validar Assets: Verificar formatos, resolución, textos
2. Crear Campaign: meta ads campaign create --name="DACO_[BRIEF_ID]" --objective=REACH
3. Crear Adsets: Segmento 1, Segmento 2 (según targeting)
4. Cargar Ads: Cada formato (1:1, 9:16, 16:9) → Adset correspondiente
5. Set to PAUSED: Revisar antes de activar
6. Activate: Cambiar status a ACTIVE
7. Monitor: Daily insights → Detectar anomalías
8. Optimize: Pause low-CTR, aumenta high-performers
9. Report: Semanal con recomendaciones
```

### Comandos Meta Ads Típicos
```bash
# Listar campañas existentes
meta ads campaign list --account-id=ACT_XXXXX

# Crear campaña nueva
meta ads campaign create \
  --name="DACO_Estrategia_Agosto_2026" \
  --objective=REACH \
  --special-ad-categories=HOUSING \
  --account-id=ACT_XXXXX

# Obtener insights diarios
meta ads insights \
  --campaign-id=CAMP_XXXXX \
  --fields=impressions,clicks,spend,ctr,cpc \
  --time-range=LAST_7_DAYS \
  --breakdown=device_platform

# Crear adset con targeting
meta ads adset create \
  --campaign-id=CAMP_XXXXX \
  --name="Expats_45-70_USA_Canada" \
  --daily-budget=50000 \
  --targeting='{"geo_locations":{"regions":[{"key":"US"},{"key":"CA"}]},...}' \
  --billing-event=IMPRESSIONS

# Crear ad con asset
meta ads ad create \
  --adset-id=ADS_XXXXX \
  --name="DACO_Lifestyle_1080x1920" \
  --adset-spec='{...creatives...}' \
  --status=PAUSED
```

### Estructura de Reportes
```
DACO/operacion/REPORTS/WEEK_33_2026-08-10.md

## Semana 33 (2026-08-04 a 2026-08-10)

### Resumen Ejecutivo
- Impresiones totales: 125,340
- Clicks: 2,847
- CTR: 2.27%
- CPC: $0.82 USD
- Conversiones: 14 leads
- ROAS: 3.2x

### Performance por Pilar
| Pilar | Impressions | CTR | CPC | Conversiones |
|-------|-------------|-----|-----|--------------|
| Portafolio Visual | 45,120 | 3.1% | $0.76 | 8 |
| Proceso Transparente | 38,900 | 1.8% | $0.95 | 4 |
| Vida en Mérida | 41,320 | 2.3% | $0.85 | 2 |

### Top Performers
1. Reel "Proyecto Terminado" (9:16) — CTR 4.2%
2. Carrusel "8 Pasos" (EN) — 1.9% CTR, 0.68 CPC

### Recomendaciones
- Aumentar presupuesto a Portafolio (ROI más alto)
- Pausar Proceso Transparente (bajo CTR)
- A/B test: Copy alternativo para Vida en Mérida

### Próximas Acciones
- [ ] Aumentar daily budget Portafolio a $60
- [ ] Crear variante copy Proceso Transparente
- [ ] Validar landing page conversión
```

### Panel de Control Operacional
```
DACO/operacion/CONTROL_PANEL.md

## Estado Actual de Campañas (Update: 2026-08-10, 18:00 MX)

| Campaña | Status | Budget Diario | Gasto YTD | CTR | CPC | Leads | Acción |
|---------|--------|---------------|-----------|-----|-----|-------|--------|
| DACO_Estrategia_Agosto | ACTIVE | $100 | $1,245 | 2.4% | $0.82 | 14 | Monitor |
| DACO_Portafolio_Julio | PAUSED | $50 | $865 | 1.9% | $1.05 | 5 | Archive |
| DACO_Expats_Awareness | ACTIVE | $75 | $523 | 3.1% | $0.71 | 8 | Increase |

## Tendencias
- CPCs bajando (good signal)
- CTRs estables
- Conversiones en línea con targets
```

---

## 5. FLUJO DE COMUNICACIÓN ENTRE AGENTES

### Paso 1: Agente 1 → Agente 2
**Trigger**: Al terminar análisis estratégico
```
SendMessage(
  to: "Agente 2 - Creativo",
  subject: "Brief Creativo Lista",
  attachments: ["estrategia/BRIEF_2026-08-10.json"],
  message: """
  Brief estratégico completado.
  
  - Pilar: Portafolio Visual
  - Segmento: Expats 45-70
  - Formatos: Reel (9:16) + Carrusel (4 slides)
  - Presupuesto: $2,000 USD/semana
  - Deadline creación: 72 horas
  
  Assets disponibles en /DACO/creativos/referencias/
  Plantillas relacionadas: 01 y 06 (DACO_Plantillas.txt)
  """
)
```

### Paso 2: Agente 2 → Agente 3
**Trigger**: Al compilar assets listos
```
TaskUpdate(
  task_id: "agente2_brief_xxx",
  status: "completed",
  completion_notes: """
  Assets entregables listos.
  
  Carpeta: /DACO/creativos/BRIEF_2026-08-10/
  
  Archivos generados:
  - 2 videos 9:16 (Reel Proyecto Terminado + Behind the Scenes)
  - 1 carrusel 4-slide (Proceso Transparente)
  - 6 variantes de copy (ES/EN)
  - Checklist brand compliance: ✅ PASSED
  
  Ready for deployment.
  """
)

SendMessage(
  to: "Agente 3 - Operación",
  subject: "Assets Creativos Listos para Publicación",
  attachments: ["creativos/BRIEF_2026-08-10/deployment_ready/batch_meta_google.json"],
  message: "..."
)
```

### Paso 3: Agente 3 → Agente 1 (Feedback Loop)
**Trigger**: Al generar reportes semanales
```
SendMessage(
  to: "Agente 1 - Estrategia",
  subject: "Resultados Semana 33 + Recomendaciones",
  attachments: ["operacion/REPORTS/WEEK_33_2026-08-10.md"],
  message: """
  Reporte semanal con insights de performance.
  
  Top performer: Portafolio (CTR 3.1%, CPC $0.76)
  Low performer: Proceso Transparente (CTR 1.8%)
  
  Recomendaciones para próxima estrategia:
  - Duplicar peso en Portafolio visual
  - Revisar ángulo de mensaje en Proceso
  - Test: Testimonios de clientes
  """
)
```

---

## 6. ESTRUCTURA DE DIRECTORIOS LOCALES

```
DACO/
├── _BrandKit/
│   ├── DACO_Brand_Guidelines_AI_Agent.txt (lineamientos)
│   └── color_palette.json (valores exactos hex)
├── _Plantillas/
│   └── DACO_Plantillas.txt (30 templates de contenido)
├── estrategia/
│   ├── BRIEF_2026-08-10.json (input → output Agente 1)
│   ├── BRIEF_2026-08-15.json
│   ├── historical_insights.json (datos comparativos)
│   └── audience_segments.json
├── creativos/
│   ├── BRIEF_2026-08-10/
│   │   ├── README.md
│   │   ├── COPY_ES.txt
│   │   ├── COPY_EN.txt
│   │   ├── checklist_brand_compliance.md
│   │   ├── originals/ (activos crudos)
│   │   ├── optimizados/ (procesados para publicación)
│   │   └── deployment_ready/ (JSONs para Agente 3)
│   └── referencias/ (library de proyectos DACO)
├── operacion/
│   ├── CONTROL_PANEL.md (estado actual campañas)
│   ├── REPORTS/
│   │   ├── WEEK_32_2026-08-03.md
│   │   ├── WEEK_33_2026-08-10.md
│   │   └── WEEK_34_2026-08-17.md
│   ├── campaigns_live.json (meta-ads snapshot)
│   └── scheduled_posts.json (próximos 30 días)
├── Metaads/ (skills Meta Ads CLI)
│   └── meta-ads-skills/
├── remotion-daco-video/ (proyecto Remotion para videos)
└── AGENTS_ECOSYSTEM.md (este archivo)
```

---

## 7. CÓMO INICIAR AGENTES SECUENCIALMENTE

### Opción A: Manual (Claude Code)
```
# Terminal 1: Agente 1
/invite @claude "Eres el Agente de Estrategia DACO..."
> Analiza campañas recientes y genera brief

# Terminal 2: Agente 2
/invite @claude "Eres el Agente Creativo DACO..."
> Toma el brief y crea assets

# Terminal 3: Agente 3
/invite @claude "Eres el Agente de Operación DACO..."
> Publica assets y reporta resultados
```

### Opción B: Automatizado (Futura - SDK/API)
```python
from daco_agents import StrategyAgent, CreativeAgent, OperationAgent

strategy = StrategyAgent(brand_guidelines="./DACO_Brand_Guidelines_AI_Agent.txt")
brief = strategy.generate_brief(
    campaign_type="portfolio",
    segment="expats_45_70",
    budget_usd=2000
)

creative = CreativeAgent(brand_guidelines=strategy.guidelines)
assets = creative.create_assets(brief=brief)

operation = OperationAgent(meta_cli_path="~/.meta-ads")
operation.publish(assets=assets, status="PAUSED")
operation.activate()
operation.monitor(interval="1h")
```

---

## 8. CHECKLIST DE VALIDACIÓN POR AGENTE

### Agente 1 - Estrategia ✅
- [ ] Analizó mínimo 2 semanas de datos históricos
- [ ] Identificó pilar de contenido con mejor ROI
- [ ] Validó que segmento de audiencia sea alcanzable en Meta/Google
- [ ] Presupuesto es realista y documentado
- [ ] Brief incluye CTA específico (no genérico)
- [ ] Documento JSON bien formateado

### Agente 2 - Creativo ✅
- [ ] Assets respetan 100% lineamientos de marca
- [ ] Copy es bilingüe y culturalmente adaptado
- [ ] No hay claims sin evidencia
- [ ] Imágenes/videos tienen resolución mínima requerida
- [ ] CTA es congruente con brief del Agente 1
- [ ] Carpeta deployment_ready lista para Agente 3
- [ ] Checklist brand compliance completado

### Agente 3 - Operación ✅
- [ ] Campañas creadas en status PAUSED (validación antes de activate)
- [ ] Targeting audiencias bien configurado
- [ ] Budget diario/semanal no excede presupuesto asignado
- [ ] Reporte diario generado
- [ ] Identificó top/low performers
- [ ] Recomendaciones documentadas para próxima iteración
- [ ] Control panel actualizado

---

## 9. NOTAS IMPORTANTES

### Seguridad & Autenticación
- **Meta Ads CLI**: Token guardado en `~/.env-meta-ads` (chmod 600)
- **Google Ads**: Credenciales en variable de entorno si se integra
- Nunca comitear credenciales a git

### Iteración Continua
- Cada semana: Agente 3 reporta → Agente 1 refina estrategia
- Cada 2 semanas: Revisar brand compliance (evitar drift)
- Cada mes: Análisis profundo de ROAS y pivote si es necesario

### Escalabilidad
- Si necesitas multi-channel (TikTok, LinkedIn, etc.): Ampliar Agente 1 con integración adicional
- Si necesitas multi-idioma adicional: Agente 2 replica plantillas
- Si necesitas automatizar publicación: Bash scripts en Agente 3

### Referencia Rápida de Comandos
```bash
# Ver status
meta auth status

# Listar campañas
meta ads campaign list --account-id=ACT_123456

# Ver insights últimos 7 días
meta ads insights --campaign-id=CAMP_123 --time-range=LAST_7_DAYS

# Crear carpeta de assets
mkdir -p DACO/creativos/BRIEF_$(date +%Y-%m-%d)

# Exportar reportes
meta ads insights --campaign-id=CAMP_123 --output=json > DACO/operacion/REPORTS/export_$(date +%s).json
```

---

**Última actualización**: 2026-08-10  
**Mantenedor**: Ecosistema de Agentes DACO  
**Estado**: Listo para implementación ✅
