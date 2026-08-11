# omeroid.github.io

omeroid株式会社のコーポレートサイト。**Astro 5 による静的サイト（SSG）**。UIフレームワークは使わず、
Astro コンポーネント + 素の CSS + 最小限の TypeScript で構成している。

## コマンド

- `yarn dev` — 開発サーバー起動 (localhost:4321)
- `yarn build` — プロダクションビルド（出力先 `dist/`）
- `yarn preview` — ビルド済みサイトをローカルで確認
- `yarn lint` / `yarn typecheck` — `astro check`（型・テンプレートの検査）
- `yarn format` / `yarn format:check` — Prettier
- `yarn clean` — dist / .astro を削除
- `yarn deploy` — `dist` を master ブランチへ push（GitHub Pages）

※ `yarn check` は yarn 1 の組み込みコマンドと衝突するため使わない（`yarn typecheck` を使う）。

## ディレクトリ構成

```
src/
├── pages/            # ルーティング（1ファイル = 1URL）
├── layouts/
│   └── BaseLayout.astro   # head・GA・ヘッダー・フッター・演出スクリプト
├── components/
│   ├── layout/       # Header / Footer
│   ├── ui/           # 汎用パーツ（Section, SectionHead, Btn, GradientCard, Picture …）
│   └── sections/     # ページのセクション。共通のものは直下、固有は it/ consulting/ company/ product/ home/
├── data/             # ★コンテンツはすべてここ（TypeScript）
├── lib/              # 表示ロジック（アクセント色・背景ブロブのプリセット）
├── scripts/          # クライアントJS（スクロール演出）
├── styles/
│   ├── tokens.css    # デザイントークン（色・フォント・余白・サイズ）
│   └── global.css    # リセット・共通クラス・キーフレーム
└── assets/images/    # 画像素材（astro:assets で最適化される）
```

## コンテンツの変更方法

CMS は使っていない。文言・リンク・画像はすべて `src/data/*.ts` にある。型は `src/types.ts`。

| ファイル | 内容 |
|---------|------|
| `site.ts` | サイト名・説明・GA測定ID・ナビ・フッター・外部リンク・加入団体 |
| `home.ts` | トップページ（ヒーロー、OUR WHY、サービス、実績数値、哲学、写真、プロダクト、ブログ、採用） |
| `it.ts` | IT・システム開発ページ（ヒーロー、ご相談例、支援メニュー） |
| `consulting.ts` | コンサルティングページ（ヒーロー、3テーマ、支援実績、進め方、事例とレポート） |
| `strength.ts` `works.ts` `stack.ts` `process.ts` `faq.ts` | 複数ページで使う共通セクション |
| `product.ts` | 自社プロダクト |
| `company.ts` | 会社概要（理念、omeload、経営メンバー、会社データ） |
| `news.ts` | お知らせ（先頭に追加する。トップは `homeNewsCount` 件だけ表示） |
| `contact.ts` | お問い合わせ（フォーム送信先、CTA文言、トピック選択肢） |

### 画像

`src/assets/images/` に置いて data ファイルから `import` する。`Picture` 型の `image` を省略すると
「差し替え待ち」のプレースホルダー枠が表示される（開発事例など、写真が未用意の箇所で使用中）。

### お問い合わせフォーム

静的サイトなのでサーバーがない。`contact.ts` の `contactForm.endpoint` が `null` の間は、
送信時に入力内容を `mailto:` に展開してメールソフトを開く。フォーム受付サービス
（formrun / SSGform / Google Forms 等）を使う場合は `endpoint` にURLを入れるだけで POST 送信に切り替わる。

## スタイルの方針

- 色・フォント・余白・角丸・ブレークポイントは `src/styles/tokens.css` の CSS 変数に集約する。
  **各コンポーネントに生の色コードを書かない**（アクセント色は `src/lib/accent.ts` 経由で変数を割り当てる）。
- コンポーネント固有のスタイルは `.astro` 内の `<style>`（自動でスコープされる）。
- **落とし穴**: 子コンポーネントに `class` を渡してそのクラスを親の `<style>` で指定しても効かない。
  スコープ属性は親のテンプレート内の要素にしか付かないため、`.foo` は `.foo[data-astro-cid-親]` に
  コンパイルされて子の要素に当たらない（マージンが消えてレイアウトが崩れる）。`:global()` で抜ける:

  ```astro
  <!-- NG: Btn の要素には当たらない -->
  <Btn class="xxx__cta">…</Btn>
  <style>.xxx__cta { margin-top: 44px; }</style>

  <!-- OK: 親テンプレート内の要素を起点にして :global で抜ける -->
  <style>.xxx :global(.xxx__cta) { margin-top: 44px; }</style>
  ```

  このパターンは `yarn check:styles`（`scripts/check-scoped-styles.mjs`）で検出できる。`yarn lint` からも実行される。
  余白が消える／レイアウトが崩れるときはまずこれを疑う。
- 文字サイズ・余白は `clamp()` で 375px〜1400px に追従させている。
- ブレークポイントの目安: 1080px（ヘッダーをハンバーガーに）／980px・900px（2カラムを1カラムに）／736px・640px（グリッドを1列に）。

## 動きの実装

動きはサイトの見た目そのものなので、**OS/ブラウザの設定に関わらず常に動かす**（デザイン側にも
`prefers-reduced-motion` の分岐は無い）。内訳は5種類。

1. **スクロール出現演出** — `data-reveal="<順番>"` を付けた要素が画面に入るとフェード+上方向移動(30px)+ぼかし解除(6px)で現れる
   （`src/scripts/reveal.ts` + `global.css` の `[data-reveal]`）。値は同一セクション内の表示順（遅延インデックス、110ms刻み・上限9）。
2. **カードの色差し** — `GradientCard` / `Stack` は `data-tint` + `.tint-layer` で、地の色のカバーが 1500ms で消えて
   グラデーションが差し込むように見せている。カバーの色は必ず**そのカードが乗っている面の色**を指定する（`surface` prop）。
3. **背景の漂う円（ブロブ）** — `Blobs.astro` + `src/lib/blobs.ts` のプリセット。`omeFloatA/B/C` で 18〜37秒かけて動く。
   OUR WHY セクション（`home/Why.astro`）の3色の円・波紋（`omeRipple` 4.6s ×2）・ロゴの明滅（`omeLogoPulse` 5.2s）もこれに含まれる。
4. **キーワードのティッカー** — `home/Ticker.astro`。`omeTicker` 64s linear infinite。同じ並びを2セット置いて
   `-50%` まで動かすことで途切れずループする（**片方だけ増減させると継ぎ目がずれる**）。
5. **SCROLL誘導ライン** — `home/Hero.astro`。1pxの縦線の中を `omeCue` 2.4s で細い帯が流れ落ちる。

> `@media (prefers-reduced-motion: reduce)` で止めているのはページ内リンクのスムーススクロールだけ。
> **ここに `animation: none` 等を足すと「動きが失われた」状態に戻る**ので注意（過去に同じ原因で2回指摘を受けている）。
> 設定を尊重する実装に戻したい場合は `global.css` の当該 `@media` 内にコメントで手順を書いてある。

演出スクリプトの読み込みに失敗した場合は、`BaseLayout` の保険（3秒後に `.js` を外す）により本文が必ず表示される。

## 外部サービス連携

| サービス | 用途 |
|---------|------|
| Zenn (zenn.dev/p/omeroid) | Tech Blog |
| note (note.com/omeroid) | Company Blog |
| Notion | プライバシーポリシー、情報セキュリティ方針、コンサル事例・レポート |
| Wantedly | 採用 |
| Booth (omeroid.booth.pm) | ショップ |
| Google Analytics (G-ECYH2GSXFH) | アクセス解析（`site.ts` の `gaId`。空にすると出力されない） |

※ 技術スタックのアイコンは外部CDNを使わず `src/assets/icons/*.svg` に埋め込んでいる。
追加・更新は `scripts/generate-stack-icons.mjs`（simple-icons から生成）の `ICON_SLUGS` に
スラッグを足して `node scripts/generate-stack-icons.mjs` を実行する。

## デプロイ

- `develop` へ push すると GitHub Actions が `dist` をビルドして GitHub Pages へデプロイする
- カスタムドメイン: www.omeroid.com（`public/CNAME`）
- 旧Gatsby版のURL（`/service/*`, `/blogs/`, `/member/matsuno/`, `/privacyPolicy/`）は
  `astro.config.mjs` の `redirects` で転送している
