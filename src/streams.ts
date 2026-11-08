import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { FFmpegAdapter, MediaEngine } from '@yt-dlx/media'
import { MP4BoxAdapter, StreamsEngine } from '@yt-dlx/streams'
import { YtDlpDownloader, YtEngine } from '@yt-dlx/yt'

import type { FragmentFromURLOptions } from './types'
import { bestQuality } from './utils'

export async function fragmentFromURL (url: string, options: FragmentFromURLOptions) {
  const tmpDir = await mkdtemp(join(tmpdir(), 'yt-dlx-'))

  try {
    const ytEngine = new YtEngine({ adapter: new YtDlpDownloader() })
    const mediaEngine = new MediaEngine({ adapter: new FFmpegAdapter() })
    const streamsEngine = new StreamsEngine({ adapter: new MP4BoxAdapter() })

    const downloadResult = await ytEngine.download(url, bestQuality(options.qualities), { outputTemplate: tmpDir })
    if (!downloadResult?.filePath) return

    const normalizeResult = await mediaEngine.normalize(downloadResult.filePath, tmpDir, options.qualities)
    if (!normalizeResult?.files) return

    await streamsEngine.fragment(normalizeResult.files, options.output)
  } finally {
    await rm(tmpDir, { recursive: true, force: true })
  }
}