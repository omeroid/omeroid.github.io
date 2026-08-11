# omeroid.github.io

omeroid株式会社のコーポレートサイト（https://www.omeroid.com ）。

Astro 5 による静的サイト生成（SSG）。UIフレームワークは使わず、Astro コンポーネント + 素の CSS +
最小限の TypeScript で構成しています。

## セットアップ

Node.js は `.node-version` / `.mise.toml` のバージョンを使用します（mise 利用時は `mise install`）。

```bash
yarn install
yarn dev        # http://localhost:4321
```

## コマンド

| コマンド                            | 内容                                                      |
| ----------------------------------- | --------------------------------------------------------- |
| `yarn dev`                          | 開発サーバー                                              |
| `yarn build`                        | プロダクションビルド（`dist/`）                           |
| `yarn preview`                      | ビルド結果をローカル配信                                  |
| `yarn typecheck`                    | `astro check`（型・テンプレート検査）。`yarn lint` も同じ |
| `yarn format` / `yarn format:check` | Prettier                                                  |
| `yarn clean`                        | `dist` と `.astro` を削除                                 |
| `yarn deploy`                       | `dist` を master ブランチへ push（通常は CI が実行）      |

> `yarn check` は yarn 1 の組み込みコマンドと衝突するため、型チェックは `yarn typecheck` を使ってください。

## ページ構成

| URL            | ファイル                     | 内容                             |
| -------------- | ---------------------------- | -------------------------------- |
| `/`            | `src/pages/index.astro`      | トップ                           |
| `/consulting/` | `src/pages/consulting.astro` | 戦略・業務コンサルティング       |
| `/it/`         | `src/pages/it.astro`         | ITコンサルティング・システム開発 |
| `/product/`    | `src/pages/product.astro`    | 自社プロダクト                   |
| `/company/`    | `src/pages/company.astro`    | 会社概要・理念                   |
| `/news/`       | `src/pages/news.astro`       | お知らせ一覧                     |
| `/contact/`    | `src/pages/contact.astro`    | お問い合わせ                     |
| `/404`         | `src/pages/404.astro`        | Not Found                        |

## コンテンツの編集

文言・リンク・画像はすべて `src/data/*.ts` に集約しています（CMS なし）。型定義は `src/types.ts`。

```
src/data/
├── site.ts        # サイト共通（ナビ、フッター、外部リンク、GA測定ID、加入団体）
├── home.ts        # トップページ
├── it.ts          # IT・システム開発ページ
├── consulting.ts  # コンサルティングページ
├── product.ts     # 自社プロダクト
├── company.ts     # 会社概要
├── news.ts        # お知らせ（配列の先頭に追加）
├── contact.ts     # お問い合わせ
└── strength.ts / works.ts / stack.ts / process.ts / faq.ts   # 共通セクション
```

### 画像の追加・差し替え

1. `src/assets/images/` 配下に置く
2. data ファイルで `import` して `picture: { image: xxx, alt: '説明' }` の形で渡す

`image` を省略すると「差し替え待ち」のプレースホルダー枠が表示されます（開発事例の6枚などが現在この状態）。
画像は `astro:assets` により WebP + 複数解像度へ自動変換されます。

### お知らせを追加する

`src/data/news.ts` の `news` 配列の先頭に追加します。トップページには `homeNewsCount`（既定4）件だけ出ます。

## お問い合わせフォームについて

静的サイトのためサーバー処理がありません。`src/data/contact.ts` の `contactForm.endpoint` が `null` の間は、
送信時に入力内容を `mailto:` に展開してメールソフトを開く動作になります。

フォーム受付サービス（formrun / SSGform / Google Forms など）を使う場合は `endpoint` にURLを設定すれば
そのまま POST 送信に切り替わります。

## デザインシステム

- デザイントークン（色・フォント・余白・サイズ・ブレークポイント）は `src/styles/tokens.css` に集約
- 汎用パーツは `src/components/ui/`、セクションは `src/components/sections/`
- アクセント色は `src/lib/accent.ts` 経由で CSS 変数として割り当てる（コンポーネントに色を直書きしない）
- 背景の「ぼかし円」のプリセットは `src/lib/blobs.ts`
- スクロール演出は `data-reveal="<順番>"` 属性で指定（`src/scripts/reveal.ts`）
- 技術スタックのアイコンは `src/assets/icons/*.svg` に埋め込み済み（外部CDNなし）。
  追加は `scripts/generate-stack-icons.mjs` の `ICON_SLUGS` にスラッグを足して再実行する

### 動きについて

デザインの動きはサイトの見た目そのものなので、**OSやブラウザの「動きを減らす」設定に関わらず常に動きます**。

| 動き                                                     | 実装                                                     |
| -------------------------------------------------------- | -------------------------------------------------------- |
| スクロールで要素が現れる（フェード+30px移動+ぼかし解除） | `src/scripts/reveal.ts` / `data-reveal` 属性             |
| カードにグラデーションが差し込む                         | `.tint-layer`（`GradientCard` / `Stack`）                |
| 背景の色の円がゆっくり漂う                               | `src/lib/blobs.ts` + `Blobs.astro`                       |
| OUR WHY の円・波紋・ロゴの明滅                           | `src/components/sections/home/Why.astro`                 |
| ヒーロー下のキーワードが横に流れる                       | `src/components/sections/home/Ticker.astro`（64秒で1周） |
| SCROLL の帯が流れ落ちる                                  | `src/components/sections/home/Hero.astro`                |

`@media (prefers-reduced-motion: reduce)` で無効にしているのはページ内リンクのスムーススクロールのみです。
ここにアニメーション停止のルールを足すと動きが失われるので注意してください。

## デプロイ

`develop` ブランチへの push で GitHub Actions がビルドし、GitHub Pages へデプロイします。
カスタムドメインは `public/CNAME`（www.omeroid.com）で設定しています。

旧サイト（Gatsby版）のURLは `astro.config.mjs` の `redirects` で新URLへ転送しています。

## ライセンス

MIT
