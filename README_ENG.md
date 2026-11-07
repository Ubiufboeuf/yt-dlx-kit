# YT-DLX Kit

A unified toolkit that brings together the YT-DLX packages for downloading, processing, and handling multimedia content. Install all three packages with a single dependency and access their functionality through a common entry point.

## Installation

```bash
npm install @yt-dlx/kit
```

Or using Bun:

```bash
bun add @yt-dlx/kit
```

## Included packages

- **[@yt-dlx/yt](https://www.npmjs.com/package/@yt-dlx/yt)** — YouTube-related functionality.
- **[@yt-dlx/media](https://www.npmjs.com/package/@yt-dlx/media)** — Multimedia processing utilities.
- **[@yt-dlx/streams](https://www.npmjs.com/package/@yt-dlx/streams)** — Stream handling utilities.

## Usage

Import functionality directly from the toolkit:

```ts
import { YtEngine, MediaEngine, StreamsEngine } from '@yt-dlx/kit'
```

Each package can also be installed and used independently.

## License

MIT © 2026 Federico Artencio
