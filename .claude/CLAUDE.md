# omeroid.github.io

omeroid株式会社のコーポレートサイト。Gatsby 5 + React 18 の静的サイト。

## コマンド

- `yarn develop` — 開発サーバー起動 (localhost:8000)
- `yarn build` — プロダクションビルド
- `yarn clean` — .cache, public, node_modules/.cache を削除
- `yarn serve` — ビルド済みサイトをローカルで確認
- `yarn deploy` — GitHub Pages (master ブランチ) へデプロイ。CNAME に www.omeroid.com を書き出す
- `yarn lint` / `yarn lint:fix` — ESLint
- `yarn format` / `yarn format:check` — Prettier

## ディレクトリ構成

```
src/
├── pages/          # ページコンポーネント (= ルーティング)
├── components/     # 共通コンポーネント
├── data/           # コンテンツデータ (JS配列で定義)
└── assets/
    ├── images/     # 画像素材
    ├── scss/       # スタイル
    │   ├── libs/   # サードパーティ (skel.scss等) ※直接編集しない
    │   ├── base/   # リセット・タイポグラフィ
    │   ├── components/  # コンポーネントスタイル
    │   └── layout/      # レイアウトスタイル
    └── css/        # 静的CSS (font-awesome等)
```

## コンテンツの変更方法

コンテンツはすべて `src/data/*.js` にハードコードされている。CMS やデータベースは使っていない。

| ファイル | 内容 |
|---------|------|
| `blog.js` | ブログリンク (Zenn tech blog, Note company blog) |
| `news.js` | ニュース一覧 (日付・画像・外部リンク付き) |
| `service.js` | サービス概要ページの3サービス |
| `product.js` | プロダクト紹介 (dac, Shopify, PokerReview) |
| `it_menu.js` | IT事業 - 支援内容 |
| `it_strength.js` | IT事業 - 強み |
| `it_stack.js` | IT事業 - 技術スタック例 |
| `it_achievement.js` | IT事業 - 実績 (ECharts円グラフ) |
| `consulting_menu.js` | コンサル事業 - 支援内容 |
| `consulting_strength.js` | コンサル事業 - 強み |
| `consulting_member.js` | コンサル事業 - メンバー紹介 |
| `consulting_achievement.js` | コンサル事業 - 実績 (ECharts円グラフ) |
| `consulting_example.js` | コンサル事業 - 事例 |

### データ構造の共通パターン

```js
const data = () => [
  {
    image: importedImage,   // import した画像
    imageAlt: '説明',
    to: 'https://...',      // リンク先 (外部URL or 内部パス)
    title: ['タイトル'],     // 配列 (JSXを含む場合あり)
    content: ['本文'],       // 配列 (JSXを含む場合あり)
  },
]
```

## ページとコンポーネントの対応

- 各ページは `Layout` でラップされ、`Banner` でヘッダーを表示する
- `ListItem` — ページネーション付きリスト表示 (`?page=N`)。内部で `Item` を描画
- `Content1` — アイコン+タイトル+テキストの縦並びカード (IT/コンサルの支援内容)
- `Content2` — アイコン左・テキスト右の横並び (強み)
- `Content3` — 画像+タイトルのみ (技術スタック)
- `Content4` — アクセントカラー付きテキストボックス (コンサル事例の詳細)
- `Chart` — ECharts ラッパー (実績の円グラフ)

## SCSS の注意点

### サードパーティファイル (編集禁止)

`src/assets/scss/libs/_skel.scss` は **skel.io v3.0.2-dev** のライブラリコード。直接編集してはいけない。
Sass の非推奨警告が出る場合は `gatsby-config.js` の `silenceDeprecations` に追加して対処する。

```js
// gatsby-config.js
{
  resolve: 'gatsby-plugin-sass',
  options: {
    sassOptions: {
      silenceDeprecations: ['legacy-js-api', 'import', ...],
    },
  },
},
```

### 変数定義

`src/assets/scss/libs/_vars.scss` でフォント・カラーパレット・サイズを管理。

- フォント: Noto Sans JP Variable (ゴシック体)
- カラー: accent1〜accent6、bg/fg/highlight 等
- ブレークポイント: xlarge(1680px), large(1280px), medium(980px), small(736px), xsmall(480px), xxsmall(360px)

### スタイル読み込み順

`main.scss` で libs → base → components → layout の順にインポート。この順序に依存関係がある。

## 外部サービス連携

| サービス | URL | 用途 |
|---------|-----|------|
| Zenn | zenn.dev/p/omeroid | TECH BLOG |
| Note | note.com/omeroid | COMPANY BLOG |
| Notion | omeroid.notion.site/... | プライバシーポリシー、セキュリティポリシー、コンサル事例・レポート |
| Wantedly | wantedly.com/companies/company_5409883 | 採用 |
| Booth | omeroid.booth.pm | ショップ |
| Google Analytics | G-ECYH2GSXFH | アクセス解析 |

## デプロイ

- `yarn deploy` で master ブランチの GitHub Pages へデプロイ
- 開発ブランチは `develop`
- カスタムドメイン: www.omeroid.com (CNAME ファイルを自動生成)

## セキュリティ (依存関係)

- `package.json` の `resolutions` で間接依存の脆弱性を修正している
- Dependabot PR が来たら resolutions にバージョンを追加・更新し `yarn install` する
- `gatsby-plugin-offline` は lodash.template の脆弱性のため無効化中

## Gatsby 設定

- `gatsby-config.js` — プラグイン設定 (Analytics, Manifest, Sass)
- `gatsby-node.js` — 空ファイル (カスタムページ生成なし)
- `gatsby-browser.js` / `gatsby-ssr.js` — 空ファイル
