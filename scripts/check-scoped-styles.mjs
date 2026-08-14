/**
 * Astro のスコープ付きCSSの落とし穴を検出する。
 *
 *   node scripts/check-scoped-styles.mjs
 *
 * 子コンポーネントに `class="xxx"` を渡し、そのクラスを同じファイルの `<style>` で
 * （`:global()` を通さずに）指定しているとスタイルが当たらない。
 * スコープ属性は親テンプレート内の要素にしか付かないため、
 * `.xxx` は `.xxx[data-astro-cid-親]` にコンパイルされ、子の要素には一致しないため。
 *
 * 例: <Btn class="foo__cta"> に対して `.foo__cta { margin-top: 44px }` と書くと余白が消える。
 *     `.foo :global(.foo__cta) { margin-top: 44px }` と書けば効く。
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const walk = (dir, out = []) => {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) walk(path, out)
    else if (path.endsWith('.astro')) out.push(path)
  }
  return out
}

/**
 * import している名前を集める。
 * 大文字始まりでも `const Tag = 'h1'` のようなタグ名の変数は普通の要素として
 * 出力されスコープ属性も付くので、import されたものだけを子コンポーネントとみなす。
 */
const importedNames = (src) => {
  const found = new Set()
  for (const line of src.matchAll(/^import\s+([^'"]+?)\s+from\s+['"]/gm)) {
    for (const name of line[1].replace(/[{}]/g, ' ').split(',')) {
      const local = name.trim().split(/\s+as\s+/).pop()
      if (local) found.add(local)
    }
  }
  return found
}

/** そのファイルが子コンポーネントに渡しているクラス名を集める */
const classesPassedToComponents = (src) => {
  const found = new Set()
  const components = importedNames(src)
  for (const tag of src.matchAll(/<([A-Z][A-Za-z0-9]*)\b([^>]*?)\/?>/gs)) {
    if (!components.has(tag[1])) continue
    for (const attr of tag[2].matchAll(
      /class(?::list)?=(?:"([^"]*)"|\{`([^`]*)`\})/g
    )) {
      const value = (attr[1] ?? attr[2] ?? '').replace(/\$\{[^}]*\}/g, ' ')
      for (const cls of value.split(/\s+/).filter(Boolean)) found.add(cls)
    }
  }
  return found
}

const problems = []

for (const file of walk('src')) {
  const src = readFileSync(file, 'utf8')
  const passed = classesPassedToComponents(src)
  if (passed.size === 0) continue

  const styles = [...src.matchAll(/<style>([\s\S]*?)<\/style>/g)]
    .map((m) => m[1])
    .join('\n')
  if (!styles) continue

  // :global(...) の中身は正しい書き方なので検査対象から外す
  const scopedOnly = styles.replace(/:global\(([^)]*)\)/g, ' ')

  for (const cls of passed) {
    const selector = new RegExp(`\\.${cls.replace(/-/g, '\\-')}(?![\\w-])`)
    if (selector.test(scopedOnly)) {
      problems.push(`${file}: .${cls}`)
    }
  }
}

if (problems.length) {
  console.error(
    '子コンポーネントに渡したクラスを scoped style で指定しています（スタイルが当たりません）:\n'
  )
  for (const p of problems) console.error(`  ${p}`)
  console.error(
    '\n親テンプレート内の要素を起点に :global() で抜いてください。例: .foo :global(.foo__cta) { ... }'
  )
  process.exit(1)
}

console.log('scoped style チェック: 問題なし')
