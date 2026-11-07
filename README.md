# YT-DLX Kit

Un conjunto de herramientas que reúne los paquetes de YT-DLX para descargar, procesar y manejar contenido multimedia. Permite instalar los tres paquetes con una sola dependencia y acceder a sus funcionalidades desde un punto de entrada unificado.

## Instalación

```bash
npm install @yt-dlx/kit
```

O utilizando Bun:

```bash
bun add @yt-dlx/kit
```

## Paquetes incluidos

- **[@yt-dlx/yt](https://www.npmjs.com/package/@yt-dlx/yt)** — Funcionalidades relacionadas con YouTube.
- **[@yt-dlx/media](https://www.npmjs.com/package/@yt-dlx/media)** — Herramientas para el procesamiento multimedia.
- **[@yt-dlx/streams](https://www.npmjs.com/package/@yt-dlx/streams)** — Herramientas para el manejo de streams.

## Uso

Importá las funcionalidades directamente desde Kit:

```ts
import { YtEngine, MediaEngine, StreamsEngine } from '@yt-dlx/kit'
```

Cada paquete también puede instalarse y utilizarse de forma independiente.

## Licencia

MIT © 2026 Federico Artencio
