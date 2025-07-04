# omeroid.github.io

株式会社omeroid（オメロイド）の公式ウェブサイトのソースコードです。

## 技術スタック

- **フレームワーク**: Gatsby v5.14.5
- **言語**: JavaScript, React v18.3.1
- **スタイリング**: SCSS (Sass v1.89.2)
- **ホスティング**: GitHub Pages
- **ドメイン**: www.omeroid.com
- **リンター**: ESLint v9.30.1
- **フォーマッター**: Prettier v3.6.2

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

### コード品質管理
```bash
yarn lint       # ESLintでコードをチェック
yarn lint:fix   # ESLintでコードを自動修正
yarn format     # Prettierでコードを整形
yarn format:check # Prettierでフォーマットをチェック（CIで使用）
```

### テスト
```bash
yarn test      # テストを実行（現在は未実装）
yarn test:ci   # CI環境でテストを実行
```

### その他のコマンド
```bash
yarn clean     # Gatsbyキャッシュをクリア
yarn serve     # ビルド済みサイトをローカルで確認（localhost:9000）
```

## CI/CD

GitHub Actionsを使用して、CI（継続的インテグレーション）とCD（継続的デプロイ）を実装しています。

### ワークフロー構成

`.github/workflows/ci-deploy.yml`で統合ワークフローを定義：

1. **CIジョブ**
   - プルリクエストとdevelopブランチへのプッシュ時に実行
   - ESLint v9による静的解析
   - Prettierによるフォーマットチェック
   - テストの実行
   - Gatsbyビルドの成功確認
   - セキュリティ監査（`yarn audit`）

2. **ビルド・デプロイジョブ**
   - CIジョブが成功した場合のみ実行
   - developブランチへのプッシュ時のみ実行（PRでは実行されない）
   - GitHub Pagesへの自動デプロイ

### ローカルでCIチェックを実行

プッシュ前にローカルで同じチェックを実行できます：

```bash
# Lintチェック
yarn lint

# フォーマットチェック
yarn format:check

# ビルドチェック
yarn build
```

## デプロイ

このサイトはGitHub Pagesを使用してホスティングされています。

### 自動デプロイ（推奨）

developブランチへのプッシュまたはマージ時に、GitHub Actionsが自動的にビルドとデプロイを実行します。

1. **プルリクエストの作成**
   ```bash
   git checkout -b feature/your-feature
   git add .
   git commit -m "Your changes"
   git push origin feature/your-feature
   ```

2. **GitHubでプルリクエストを作成してマージ**
   - PRを作成し、レビュー後にdevelopブランチへマージ
   - GitHub Actionsが自動的にビルドとデプロイを実行
   - Actionsタブで進行状況を確認可能

3. **デプロイ状況の確認**
   - リポジトリの「Actions」タブで確認
   - 緑のチェックマークが表示されれば成功

### 手動デプロイ

緊急時や特別な理由がある場合のみ使用してください。

#### デプロイ前の確認事項

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

3. **手動デプロイ実行**
   ```bash
   yarn deploy     # GitHub Pagesへデプロイ
   ```

### デプロイの仕組み

#### 自動デプロイ（GitHub Actions）
1. developブランチへのプッシュをトリガーに起動
2. Ubuntu環境でNode.jsをセットアップ
3. 依存関係をインストール（`yarn install --frozen-lockfile`）
4. Gatsbyでビルド実行
5. CNAMEファイルを生成
6. GitHub Pagesへデプロイ

#### 手動デプロイ

1. `yarn deploy`コマンドを実行すると以下の処理が行われます：
   - Gatsbyで本番用ビルドを生成
   - `public/CNAME`ファイルにカスタムドメインを設定
   - `gh-pages`パッケージを使用してmasterブランチへデプロイ

2. masterブランチの内容がGitHub Pagesで自動的に公開されます

### デプロイ権限

- developブランチへのマージ権限があれば自動的にデプロイされます
- GitHub Actionsの実行権限は自動的に付与されます
- 手動デプロイは`workflow_dispatch`イベントで実行可能

### GitHub Pagesの設定

リポジトリ設定で以下を確認してください：

1. **Settings → Pages**
   - Source: GitHub Actions を選択

2. **Settings → Environments → github-pages**
   - Deployment branches: developブランチからのデプロイを許可
   - または「All branches」を選択

**重要**: デフォルトではmasterブランチからのみデプロイが許可されているため、developブランチからデプロイできるように設定変更が必要です。

### カスタムドメイン

サイトは`www.omeroid.com`でアクセス可能です。DNSの設定は別途管理されています。

## 最近の更新

### 2025年7月の更新

1. **依存関係の更新**
   - Gatsby: v5.13.0 → v5.14.5
   - React: v18.2.0 → v18.3.1
   - ESLint: v8.x → v9.30.1（メジャーアップデート）
   - その他の依存関係も最新版に更新

2. **ESLint設定の更新**
   - ESLint v9のフラットコンフィグ形式に移行
   - `eslint.config.js`で設定を管理
   - `.eslintrc.js`は廃止

3. **CI/CDの改善**
   - CIとデプロイワークフローを統合
   - CIが成功した場合のみデプロイを実行

4. **その他の修正**
   - ssr-windowパッケージを削除（SSR対応のwindowアクセスに変更）
   - shopページのリンクを外部リンクに修正

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

### ESLintエラーが発生した場合

1. **自動修正を試す**
   ```bash
   yarn lint:fix
   ```

2. **ESLint v9への移行に関する問題**
   - `.eslintignore`ファイルは使用できません
   - `eslint.config.js`の`ignores`プロパティを使用してください

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