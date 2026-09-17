/**
 * OGP画像（1200×630）を生成する。
 *
 *   node scripts/generate-ogp.mjs
 *
 * 生成物: public/ogp.png … BaseLayout が og:image の既定値として参照する
 *
 * ロゴのパスは src/components/ui/Logo.astro から読み出すので、ワードマークを差し替えたら
 * 再実行するだけで追従する。文字はSVGのテキストとしてラスタライズするため、実行環境に
 * 日本語ゴシック（IPAGothic / Noto Sans JP など）が入っている必要がある。
 * 生成したPNGはリポジトリにコミットするので、ビルド時には実行されない。
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/** tokens.css と揃える。ここを変えるときは src/styles/tokens.css も見る */
const COLORS = {
  bg: '#fbfaf7',
  ink: '#16191c',
  text: '#4a5459',
  amber: '#e3cb8e',
  teal: '#6cc0b0',
  green: '#79968d',
}

const TAGLINE = '個性を重ねて、新しい価値を世の中に提供する。'
const DOMAIN = 'www.omeroid.com'
const JP_FONT = "'IPAGothic', 'Noto Sans JP', sans-serif"

/** Logo.astro のワードマーク（viewBox 0 0 1123 187）を取り出す */
const logo = readFileSync(resolve(root, 'src/components/ui/Logo.astro'), 'utf8')
const paths = [...logo.matchAll(/\sd="([^"]+)"/g)].map((m) => m[1])
if (paths.length < 2) throw new Error('Logo.astro からパスを取得できなかった')

/** ワードマークを左上 (x, y) に幅 w で配置する */
const MARK_W = 520
const MARK_SCALE = MARK_W / 1123
const MARK_X = 96
const MARK_Y = 232

/**
 * 背景に漂う円。サイト本体の Blobs と同じく中心から外へ消える放射グラデーションで描く
 * （フィルタのぼかしはラスタライザによって境界に筋が出るため使わない）
 */
const blob = (id, cx, cy, r, color, opacity) => ({
  def: `<radialGradient id="${id}">
      <stop offset="0%" stop-color="${color}" stop-opacity="${opacity}" />
      <stop offset="45%" stop-color="${color}" stop-opacity="${opacity * 0.5}" />
      <stop offset="100%" stop-color="${color}" stop-opacity="0" />
    </radialGradient>`,
  shape: `<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id})" />`,
})

/** 右側だけに寄せて、中心は画面外に置く（縁がぼんやり差し込む見え方にする） */
const blobs = [
  blob('b1', 1140, 80, 440, COLORS.amber, 0.55),
  blob('b2', 1210, 470, 400, COLORS.teal, 0.42),
  blob('b3', 960, 660, 320, COLORS.green, 0.26),
]

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    ${blobs.map((b) => b.def).join('\n    ')}
  </defs>
  <rect width="1200" height="630" fill="${COLORS.bg}" />
  ${blobs.map((b) => b.shape).join('\n  ')}

  <g transform="translate(${MARK_X} ${MARK_Y}) scale(${MARK_SCALE})" fill="${COLORS.ink}">
    ${paths.map((d) => `<path d="${d}" />`).join('\n    ')}
  </g>

  <text x="${MARK_X}" y="404" font-family="${JP_FONT}" font-size="34" fill="${COLORS.text}" letter-spacing="1.5">${TAGLINE}</text>

  <rect x="${MARK_X}" y="470" width="64" height="1" fill="${COLORS.ink}" opacity="0.3" />
  <text x="${MARK_X}" y="522" font-family="${JP_FONT}" font-size="22" fill="${COLORS.ink}" opacity="0.62" letter-spacing="2.5">${DOMAIN}</text>
</svg>
`

const out = resolve(root, 'public/ogp.png')
const png = await sharp(Buffer.from(svg), { density: 72 }).png().toBuffer()
writeFileSync(out, png)
console.log(`wrote ${out} (${(png.length / 1024).toFixed(1)} KB)`)
