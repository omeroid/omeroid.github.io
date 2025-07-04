# omeroid.github.io

株式会社omeroid（オメロイド）の公式ウェブサイトのソースコードです。

## 技術スタック

- **フレームワーク**: Gatsby v5.13.0
- **言語**: JavaScript, React v18.2.0
- **スタイリング**: SCSS
- **ホスティング**: GitHub Pages
- **ドメイン**: www.omeroid.com

## 必要な環境

- Node.js v20.19.1
- Yarn（パッケージマネージャー）

### Node.jsのバージョン管理

プロジェクトでは`.node-version`ファイルでNode.jsのバージョンを管理しています。
[nvm](https://github.com/nvm-sh/nvm)や[nodenv](https://github.com/nodenv/nodenv)を使用している場合は、自動的に適切なバージョンが選択されます。

```bash
# nvmを使用している場合
nvm install
nvm use

# nodenvを使用している場合
nodenv install
```

## 開発環境のセットアップ

1. リポジトリをクローン
```bash
git clone https://github.com/omeroid/omeroid.github.io.git
cd omeroid.github.io
```

2. 依存関係をインストール
```bash
yarn install
```

3. 開発サーバーを起動
```bash
yarn develop
```

開発サーバーは http://localhost:8000 で起動します。

## プロジェクト構造

```
├── src/
│   ├── assets/          # 静的アセット
│   │   ├── css/         # グローバルスタイルシート
│   │   ├── fonts/       # FontAwesomeフォント
│   │   ├── images/      # 画像ファイル
│   │   └── scss/        # SASSファイル（メインスタイル）
│   ├── components/      # 再利用可能なReactコンポーネント
│   ├── data/            # JSONデータファイル
│   │   ├── blog.json    # ブログ記事データ
│   │   ├── members.json # メンバー情報
│   │   └── services.json # サービス情報
│   └── pages/           # ページコンポーネント
├── gatsby-*.js          # Gatsby設定ファイル
├── package.json         # プロジェクト設定と依存関係
├── .node-version        # Node.jsバージョン指定
└── README.md            # このファイル
```

## 利用可能なコマンド

### 開発
```bash
yarn develop    # 開発サーバーを起動（localhost:8000）
yarn start      # yarn developのエイリアス
```

### ビルド
```bash
yarn build     # 本番用ビルドを生成
```

### デプロイ
```bash
yarn deploy    # GitHub Pagesへデプロイ
```

### コードフォーマット
```bash
yarn format    # Prettierでコードを整形
```

### その他のコマンド
```bash
yarn clean     # Gatsbyキャッシュをクリア
yarn serve     # ビルド済みサイトをローカルで確認（localhost:9000）
```

## デプロイ

このサイトはGitHub Pagesを使用してホスティングされています。

### デプロイ前の確認事項

1. **ビルドの確認**
   ```bash
   yarn clean      # キャッシュをクリア
   yarn build      # ビルドを実行
   yarn serve      # ローカルで動作確認
   ```

2. **ブランチの確認**
   ```bash
   git branch      # 現在のブランチを確認
   git status      # 変更がコミットされているか確認
   ```

3. **デプロイ実行**
   ```bash
   yarn deploy     # GitHub Pagesへデプロイ
   ```

### デプロイの仕組み

1. `yarn deploy`コマンドを実行すると以下の処理が行われます：
   - Gatsbyで本番用ビルドを生成
   - `public/CNAME`ファイルにカスタムドメインを設定
   - `gh-pages`パッケージを使用してmasterブランチへデプロイ

2. masterブランチの内容がGitHub Pagesで自動的に公開されます

### デプロイ権限

デプロイを行うには以下の権限が必要です：
- リポジトリへの書き込み権限
- masterブランチへのプッシュ権限

### カスタムドメイン

サイトは`www.omeroid.com`でアクセス可能です。DNSの設定は別途管理されています。

## Gatsby v5への移行について

### 主な変更点

1. **React v18の採用**
   - React 16.12.0 → 18.2.0
   - 新しいReactの機能が使用可能

2. **Head APIの変更**
   - `react-helmet`の代わりにGatsbyのHeadエクスポートを使用
   - 各ページで`export function Head()`を定義

3. **パフォーマンスの向上**
   - ビルド速度の改善
   - ランタイムパフォーマンスの向上

### 注意事項

- Sassの非推奨警告が表示されますが、動作には影響しません
- 未使用変数の警告が表示される場合があります

## 開発のヒント

### 新しいページの追加
`src/pages/`ディレクトリに新しいJSファイルを作成すると、自動的にルーティングが設定されます。

### スタイルの編集
メインのスタイルは`src/assets/scss/`ディレクトリで管理されています。

### データの更新
メンバー情報、サービス情報、ブログ記事は`src/data/`ディレクトリのJSONファイルで管理されています。

## トラブルシューティング

### ビルドエラーが発生した場合

1. **キャッシュのクリア**
   ```bash
   yarn clean
   rm -rf node_modules yarn.lock
   yarn install
   ```

2. **Node.jsバージョンの確認**
   ```bash
   node --version  # v20.19.1であることを確認
   ```

3. **ポートの競合**
   - 開発サーバー: 8000番ポート
   - ビルド確認用: 9000番ポート
   ```bash
   # ポートを使用しているプロセスを確認
   lsof -i :8000
   lsof -i :9000
   ```

### デプロイが失敗した場合

1. **Gitの状態を確認**
   ```bash
   git status
   git log --oneline -5
   ```

2. **手動でデプロイ**
   ```bash
   yarn build --prefix-paths
   echo 'www.omeroid.com' > public/CNAME
   npx gh-pages --branch master -d public
   ```

## 参考リンク

- [Gatsby v5公式ドキュメント](https://www.gatsbyjs.com/docs/)
- [Gatsby v5移行ガイド](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/)
- [gatsby-starter-forty](https://github.com/codebushi/gatsby-starter-forty) - ベーステンプレート

## ライセンス

このプロジェクトは株式会社omeroidの所有物です。