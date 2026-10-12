# 🎙️ Mi Podcast

Web estática de un podcast construida con **Spec Driven Development (SDD)** usando **Spec Kit** y el agente **OpenCode**.

Ejercicio práctico de la masterclass de SDD del bootcamp **Desarrollo Web Fullstack e IA** de **Factoría F5**.

---

## 📌 ¿Qué es este proyecto?

Una web de podcast moderna y responsive con:

- **Landing page** con un episodio destacado
- **Página de episodios** con 20 episodios
- **Página About** con la descripción del podcast
- **Página FAQ** con preguntas frecuentes

Todos los datos son **simulados (mock)**: no hay base de datos ni se conecta a ningún feed real.

---

## 🧭 ¿Qué es Spec Driven Development?

En lugar de pedirle código directamente a la IA (*vibe coding*), primero se define **por escrito** qué se quiere construir, por qué y cómo. El código llega al final.

Así el agente siempre tiene el contexto del proyecto en archivos `.md` y no se le "olvidan" las decisiones a mitad del desarrollo.

### Flujo seguido

| Paso | Comando | Qué define |
|------|---------|------------|
| 1 | `/speckit.constitution` | Los principios "no negociables" del proyecto |
| 2 | `/speckit.specify` | El **qué** y el **por qué** (sin tecnología) |
| 3 | `/speckit.plan` | El **cómo**: stack técnico y arquitectura |
| 4 | `/speckit.tasks` | La lista de tareas ordenadas (T001, T002…) |
| 5 | `/speckit.implement` | La implementación del código |

### Prompts utilizados

**Constitución**
```
/speckit.constitution fill the constitution with the bare minimum requirements for a static web app based on the template
```

**Especificación**
```
/speckit.specify I am building a modern podcast website. I want it to look elegant, something that would stand out. Should have a landing page with one featured episode. There should be an Episodes page and About page and a FAQ page. Should have 20 episodes and the data is mocked. You don't need to pull anything from any real feed.
```

**Plan técnico**
```
/speckit.plan I am going to use Next.js with static site configuration, no databases - data is embedded in the content for the mock episodes. Site is responsive and ready for mobile.
```

**Tareas**
```
/speckit.tasks break this down into tasks.
```

**Implementación**
```
/speckit.implement Implement the tasks of this project and update the task list as you go. Pause when you get the first MVP to revise the localhost before you marked all the tasks.
```

---

## 🛠️ Tecnologías

- **Next.js 15** (App Router) con exportación estática
- **React**
- **TypeScript**
- **CSS Modules**
- **Playwright** para tests

### Herramientas de SDD

- **Spec Kit** (GitHub) — plantillas y comandos de SDD
- **OpenCode** — agente de IA
- **uv** — gestor de Python necesario para instalar Spec Kit

---

## 📁 Estructura del proyecto

```
mi-podcast/
├── .specify/          # Constitución y configuración de Spec Kit
├── specs/             # Especificaciones generadas (spec, plan, tasks…)
│   └── 001-podcast-website/
├── src/               # Código de la aplicación (páginas y componentes)
├── public/            # Imágenes y recursos estáticos
├── tests/             # Tests
└── package.json
```

---

## 🚀 Cómo ejecutarlo

**Requisitos:** Node.js 18.18 o superior.

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/mi-podcast.git
cd mi-podcast

# 2. Instalar dependencias
npm install

# 3. Arrancar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

Para generar la versión estática:

```bash
npm run build
```

Los archivos finales se generan en la carpeta `out/`.

> Los demás comandos disponibles (lint, tests…) están en la sección `scripts` del `package.json`.

---

## 💡 Aprendizajes

- La diferencia entre **vibe coding** y **Spec Driven Development**.
- Que un agente es **LLM + harness (arnés)**: el modelo más las herramientas y el contexto que le damos.
- Que los archivos de `.opencode/commands` son **plantillas reutilizables** para cualquier proyecto; lo que cambia en cada uno son los prompts y los documentos generados en `specs/`.
- La importancia de **revisar siempre** lo que genera la IA antes de implementarlo.

---

## 👤 Autor

**Óscar Pérez** — Bootcamp Desarrollo Web Fullstack e IA · Factoría F5

Gracias a **Ana Karen Aragón** por la masterclass de Spec Driven Development. 

#Te echaremos de menos... 🙌
