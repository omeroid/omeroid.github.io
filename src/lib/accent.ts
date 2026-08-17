import type { AccentKey } from '~/types'

/** ドット2色目の既定ペア */
const DEFAULT_PAIR: Record<AccentKey, AccentKey> = {
  orange: 'amber',
  amber: 'green',
  teal: 'green',
  blue: 'purple',
  green: 'teal',
  purple: 'blue',
}

/**
 * アクセントカラーをCSSカスタムプロパティとして展開する。
 * 色の実体は tokens.css の --c-* にしかない（各コンポーネントに色を持たせない）。
 */
export function accentStyle(accent: AccentKey, pair?: AccentKey): string {
  const second = pair ?? DEFAULT_PAIR[accent]
  return [
    `--accent: var(--c-${accent})`,
    `--accent-rgb: var(--c-${accent}-rgb)`,
    `--accent-2: var(--c-${second})`,
    `--accent-2-rgb: var(--c-${second}-rgb)`,
  ].join(';')
}

/** グラデーションバー用（from → to） */
export function gradientBarStyle(from: AccentKey, to: AccentKey): string {
  return `background: linear-gradient(90deg, var(--c-${from}), var(--c-${to}))`
}
