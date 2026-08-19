import type { AccentKey } from '~/types'

/** 背景で浮遊するぼかし円ひとつ分の設定 */
export interface Blob {
  /** % 指定の位置・サイズ */
  left: number
  top: number
  width: number
  height: number
  color: AccentKey
  /** アニメーションの種類 */
  motion: 'A' | 'B' | 'C'
  /** 秒 */
  duration: number
  reverse?: boolean
}

export interface BlobPreset {
  /** コンテナの inset（CSS値） */
  inset: string
  /** ぼかし量 (px) */
  blur: number
  opacity: number
  blobs: Blob[]
}

/** セクションごとの背景プリセット */
export const blobPresets = {
  hero: {
    inset: '-12%',
    blur: 64,
    opacity: 0.92,
    blobs: [
      {
        left: 6,
        top: 10,
        width: 46,
        height: 62,
        color: 'orange',
        motion: 'A',
        duration: 24,
      },
      {
        left: 28,
        top: 22,
        width: 52,
        height: 64,
        color: 'teal',
        motion: 'B',
        duration: 29,
      },
      {
        left: 52,
        top: 4,
        width: 48,
        height: 70,
        color: 'blue',
        motion: 'C',
        duration: 33,
      },
      {
        left: 18,
        top: 44,
        width: 44,
        height: 52,
        color: 'green',
        motion: 'B',
        duration: 37,
        reverse: true,
      },
      {
        left: 62,
        top: 40,
        width: 40,
        height: 56,
        color: 'amber',
        motion: 'A',
        duration: 31,
        reverse: true,
      },
    ],
  },
  it: {
    inset: '-20% -10% 0',
    blur: 70,
    opacity: 0.8,
    blobs: [
      {
        left: 44,
        top: 0,
        width: 44,
        height: 80,
        color: 'teal',
        motion: 'B',
        duration: 28,
      },
      {
        left: 62,
        top: 10,
        width: 40,
        height: 76,
        color: 'blue',
        motion: 'C',
        duration: 34,
      },
      {
        left: 30,
        top: 30,
        width: 38,
        height: 70,
        color: 'amber',
        motion: 'A',
        duration: 30,
      },
    ],
  },
  consulting: {
    inset: '-16% -10% 0',
    blur: 70,
    opacity: 0.78,
    blobs: [
      {
        left: 50,
        top: 4,
        width: 44,
        height: 76,
        color: 'purple',
        motion: 'B',
        duration: 30,
      },
      {
        left: 66,
        top: 20,
        width: 38,
        height: 66,
        color: 'orange',
        motion: 'A',
        duration: 34,
      },
    ],
  },
  service: {
    inset: '-18% -10% 0',
    blur: 72,
    opacity: 0.8,
    blobs: [
      {
        left: 8,
        top: 6,
        width: 42,
        height: 74,
        color: 'blue',
        motion: 'A',
        duration: 26,
      },
      {
        left: 50,
        top: 2,
        width: 44,
        height: 78,
        color: 'teal',
        motion: 'B',
        duration: 31,
      },
    ],
  },
  product: {
    inset: '-18% -10% 0',
    blur: 72,
    opacity: 0.8,
    blobs: [
      {
        left: 10,
        top: 6,
        width: 42,
        height: 74,
        color: 'teal',
        motion: 'A',
        duration: 26,
      },
      {
        left: 52,
        top: 2,
        width: 44,
        height: 78,
        color: 'orange',
        motion: 'B',
        duration: 31,
      },
    ],
  },
  company: {
    inset: '-18% -10% 0',
    blur: 72,
    opacity: 0.85,
    blobs: [
      {
        left: 8,
        top: 4,
        width: 42,
        height: 78,
        color: 'orange',
        motion: 'A',
        duration: 26,
      },
      {
        left: 36,
        top: 14,
        width: 44,
        height: 74,
        color: 'teal',
        motion: 'B',
        duration: 31,
      },
      {
        left: 58,
        top: 2,
        width: 44,
        height: 80,
        color: 'blue',
        motion: 'C',
        duration: 35,
      },
    ],
  },
  contact: {
    inset: '-16% -10% 0',
    blur: 72,
    opacity: 0.78,
    blobs: [
      {
        left: 4,
        top: 6,
        width: 40,
        height: 74,
        color: 'green',
        motion: 'A',
        duration: 28,
      },
      {
        left: 22,
        top: 22,
        width: 38,
        height: 66,
        color: 'teal',
        motion: 'C',
        duration: 33,
      },
    ],
  },
  contactCta: {
    inset: '-20% -8%',
    blur: 72,
    opacity: 0.8,
    blobs: [
      {
        left: 2,
        top: 8,
        width: 40,
        height: 80,
        color: 'orange',
        motion: 'A',
        duration: 26,
      },
      {
        left: 26,
        top: 16,
        width: 42,
        height: 76,
        color: 'teal',
        motion: 'B',
        duration: 31,
      },
      {
        left: 52,
        top: 4,
        width: 44,
        height: 82,
        color: 'blue',
        motion: 'C',
        duration: 35,
      },
    ],
  },
} satisfies Record<string, BlobPreset>

export type BlobPresetName = keyof typeof blobPresets
