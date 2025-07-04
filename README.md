# omeroid.github.io

株式会社omeroid（オメロイド）の公式ウェブサイトのソースコードです。

## 技術スタック

- **フレームワーク**: Gatsby v2.19.5
- **言語**: JavaScript, React
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

## デプロイ

このサイトはGitHub Pagesを使用してホスティングされています。

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

## 開発のヒント

### 新しいページの追加
`src/pages/`ディレクトリに新しいJSファイルを作成すると、自動的にルーティングが設定されます。

### スタイルの編集
メインのスタイルは`src/assets/scss/`ディレクトリで管理されています。

### データの更新
メンバー情報、サービス情報、ブログ記事は`src/data/`ディレクトリのJSONファイルで管理されています。

## 参考リンク

- [Gatsby公式ドキュメント](https://www.gatsbyjs.com/docs/)
- [gatsby-starter-forty](https://github.com/codebushi/gatsby-starter-forty) - ベーステンプレート

## ライセンス

このプロジェクトは株式会社omeroidの所有物です。