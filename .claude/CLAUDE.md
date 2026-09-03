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
│   └── sections/     # ページのセクション。共通のものは直下、固有は consulting/ company/ product/ home/
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
| `site.ts` | サイト名・説明・GA測定ID・ナビ（`children` でドロップダウン）・フッター・外部リンク・加入団体 |
| `home.ts` | トップページ（ヒーロー、PICK UP、OUR WHY、サービス、実績数値、哲学、写真、プロダクト、ブログ、採用） |
| `service.ts` | サービス一覧ページ（ヒーロー、入口カード、単発メニュー） |
| `it.ts` | IT・システム開発ページ（ヒーロー、ご相談例、支援メニュー、AI駆動の開発フロー） |
| `consulting.ts` | コンサルティングページ（ヒーロー、ご相談例、支援メニュー、強み、支援実績、進め方、事例とレポート、FAQ） |
| `strength.ts` `works.ts` `stack.ts` `faq.ts` | IT・システム開発ページのセクション |
| `product.ts` | 自社プロダクト |
| `company.ts` | 会社概要（理念、omeload、経営メンバー、会社データ。MEMBERSHIPS 行は `site.ts` の `memberships` を参照） |
| `insights.ts` | コンサルティング記事（先頭に追加する。コンサルページは `consultingInsightCount` 件だけ表示） |
| `news.ts` | お知らせ（先頭に追加する。トップは `homeNewsCount` 件だけ表示） |
| `contact.ts` | お問い合わせ（フォーム送信先、CTA文言、お問い合わせ種別、トピック選択肢） |

### WORKS（開発事例）

`works.ts`（IT部門）と `consulting.ts` の `consultingWorks`（コンサル部門）は、どちらも freee の
請求データ（取引先分析レポート）が出典。取引先名は守秘義務のため伏せ、業種・支援内容だけを載せている。
絞り込みチップと件数は `filterLabels.groups` に並べた軸ごとに、その `field`（`WorkRow` のフィールド名）
の値から自動生成される。値を1つも持たない軸はその場で落とされるので、**コンサル側に無い軸を足しても
コンサルページには出ない**。数字を直す場合はトップページの実績数値（`home.ts` の `stats`）と
食い違わないようにする。

**IT の数値タイル（24社 / 8業種 / 2年1ヶ月）は一覧の中身と噛み合っている**ので、片方だけ動かさない。
24社 = 一覧の18社 + footnote の短期6社、8業種 = INDUSTRY のチップ数、2年1ヶ月 = `months` の合計 ÷ 24。

`Works.astro` は `layout` で見せ方が2種類あり、絞り込みの挙動も `filterMode` / `perPage` で変わる。
**両ページの違いはここに集約している**ので、片方を直すときもう片方に波及していないか確認する。

| | `layout="rows"`（IT） | `layout="cards"`（コンサル） |
|---|---|---|
| 一覧 | 1件1行。支援期間の数値と期間バーを並べる | カードのグリッド。期間は出さない |
| データ | `months` / `start` / `end` が必要 | 3つとも持たせない（`WorkRow` では optional） |
| 期間表記 | `7年6ヶ月` と期間バーの長さを `months` から計算するのでデータ側に持たせない | — |
| 数値タイル | 3枚（PROJECTS / INDUSTRIES / AVG. DURATION） | 2枚（PROJECTS / INDUSTRIES）。列数は `stats` の件数から決まる |
| 凡例 | `listHeading.legend`（`DURATION`）＋ 年の範囲 | `legend` を省くと年の範囲だけになる |
| 絞り込みの軸 | 6軸（業種・フェーズ・商流・契約形態・技術・テーマ） | 2軸（業種・テーマ） |
| 絞り込み方 | `filterMode="multi"`。軸ごとに1つ選んでAND条件。枠は開閉式で、閉じているときは選択中の条件を要約で見せる | 既定の `filterMode="single"`。どこか1つだけ選べて、他の軸の選択は落ちる。枠は開いたまま |
| 解除ボタン | 「条件をリセット」。常に線のまま | 「すべて表示」。未選択のときだけ塗る（`is-on`） |
| ページ送り | `perPage={worksPerPage}`（10件） | 渡さないので全45件を一度に出す |
| 行のチップ | `tags` を塗り、`techs` を線で出す | `tags` のみ |
| 本文の下 | `phase` と `dealFlow ／ contract` をメタ行で添える | なし |

IT だけが持つ4フィールド（`phase` / `dealFlow` / `contract` / `techs`）は請求データには無い項目で、
`phase` / `dealFlow` / `contract` は `tags` とプロジェクト概要から振り分けたもの、**`techs` は
`stack.ts` の自社スタックから案件の性質に合わせて割り当てた推定値**。実際の採用技術が確定したら
`works.ts` の `techs` を差し替える（チップと件数は自動で追従する）。
`phase` は `tags` / `techs` と同じ配列で、複数の工程にまたがる案件は工程順に複数持たせられる
（メタ行では `要件定義 ／ 設計・開発` のように並べ、チップの件数は各工程に1件ずつ数える）。

`Works.astro` / `Issues.astro` / `MenuList.astro` / `Strength.astro` / `Faq.astro` は
IT・コンサルの両ページで使う共通セクション。データは import せず、ページ側から props で渡す
（同じ見た目で中身だけが違うため）。

### セクションの背景色（IT・コンサルティング）

両ページは**ヒーローから最後まで `--c-bg` と `--c-bg-alt-cool` を1セクションずつ交互に**切り替える。
`--c-bg-alt-cool`（`#eff0ec`、寒色寄り）はこの交互面専用で、トップの SERVICES / RECRUIT・
会社概要の OMELOAD・ヘッダーのホバーに使う温色の `--c-bg-alt`（`#f2efe7`）とは別物。
`Section` の `variant="alt-cool"`（`.section--alt-cool`）が対応する。
どの面に乗るかは各セクションの `surface`（`'bg' | 'alt'`、`types.ts` の `Surface`）で決め、
**ページ側（`it.astro` / `consulting.astro`）から明示的に渡す**。セクションを追加・削除・並べ替えたら
そこから下の `surface` も1つずつずらす必要がある。

| | IT（`/it/`） | コンサル（`/consulting/`） |
|---|---|---|
| 1 | ヒーロー `bg` | ヒーロー `bg` |
| 2 | ISSUES `alt` | ISSUES `alt` |
| 3 | MENU `bg` | MENU `bg` |
| 4 | STRENGTH `alt` | STRENGTH `alt` |
| 5 | WORKS `bg` | WORKS `bg` |
| 6 | AI-FLOW `alt` | PROCESS `alt` |
| 7 | STACK `bg` | CONTENTS `bg` |
| 8 | FAQ `alt` | FAQ `alt` |
| 9 | CONTACT `bg` | CONTACT `bg` |

IT限定の AI-FLOW（`sections/it/AiFlow.astro`、AI駆動の開発フローを5ステップ＋品質担保の注記で見せる）は
WORKS と STACK の間に挿入されている。コンサルの PROCESS と同じ並び位置にあたるため、
セクション数・面の対応ともに両ページで揃っている（`Faq` / `ContactCta` の面も含めて一致する）。
`ContactCta` はお問い合わせページ（`/contact/`）でも使うが、そこは `surface` を渡さないので既定の `bg` のまま。

**カード（`GradientCard` / `Stack`）は面の色に関わらず `--c-card`（`#fdfcfa`）を敷く。** グラデーションは
その上に重ねる。色差し演出（`tint-layer`）のカバーも同じ `--c-card` なので、`surface` は面の色だけを決める
（カバー色に流す必要はない）。一方 `Works` の数値タイル・絞り込み枠・行/カードは、デザイン上つねに
**面と同じ地色＋1pxの罫線**なので `--works-surface` を介して面の色に合わせている。`Issues` のセル
（`CellGrid`）も面ではなく `--c-bg` 固定。

### PICK UP（トップの告知バナー）

`home.ts` の `pickup.items`（`Banner[]`）。ヒーロー直下のティッカーとOUR WHYの間に入る、期間限定の
告知や外部LPへの導線。`items` を空配列にするとセクションごと出力されない。**多くても3件まで**
（1件なら横幅いっぱい、2件で半々。4件以上は `flex: 1 1 360px` の折り返しで並びが崩れる）。
`accent` はバッジの地色で、暗いカード地の上に乗るので明るい色（`amber` / `orange` / `teal`）を選ぶ。

### サービス一覧ページ（`/service/`）

コンサルティング・IT・システム開発への入口と、単発メニュー（AI導入支援・基幹システム刷新）を並べる索引ページ。
ヘッダーの「サービス」ドロップダウン（`site.ts` の `nav`）とフッターの SERVICE 列から辿る。
入口カード（`serviceCards`）はサイト共通の `GradientCard`（`AccentCard` 型）で、
トップの哲学カードなどと同じアクセント色のグラデーション＋2色ドット。横並びの足並みを揃えるため
`fill` を付けて「詳しく見る」を下端に寄せ、セクション見出し（h2）が無いページなので
`titleTag="h2"` で見出しレベルを繰り上げている。
単発メニュー（現在は AI導入支援・基幹システム刷新の2件）は自社サイトに詳細ページを持たず
外部の専用LPへ送るので、`servicePrograms` は破線の枠＋外部リンクという別の見せ方にして
常設メニューと区別している。`externalLinks.aiSupport`（`lp.omeroid.com`）と
`externalLinks.coreSystem`（`consulting.omeroid.com`）は、どちらもヘッダーのドロップダウン・
PICK UP バナー・この破線枠の3箇所から参照される。

### コンサルティング記事（INSIGHTS）

`insights.ts` の `insights`（`InsightItem[]`）。出し先は2箇所で、表示は `ui/InsightList.astro` で共通。

| | コンサルページの CONTENTS | 一覧ページ `/insights/` |
|---|---|---|
| 件数 | 先頭 `consultingInsightCount` 件 | 全件 |
| 絞り込み | なし | 分類チップ（`insightCategories` は `category` から自動生成） |
| 構成 | 見出し＋「コンサルティング記事一覧を見る」ボタンの下にリストのみ（レポート一覧は削除済み） | ヒーロー＋下部に黒地のCTA帯 |

`href` を省いた項目はリンクにならず、末尾の矢印も出ない（`NewsList` と同じ扱い）。
**現在の記事はデザインから起こした差し替え待ちの仮データで、`href` を持たせていない。**
公開先が決まったら `date` / `title` / `href` を実物に置き換える。

ヘッダーの「コンテンツ」ドロップダウンとフッターの CONTENTS 列（どちらも `site.ts`）から辿る。
この2箇所は Company Blog / Tech Blog と同じ並びなので、**会社情報側にブログを戻さない**こと。

### 画像

`src/assets/images/` に置いて data ファイルから `import` する。トップの写真は `images/home/`、
経営メンバーは `images/member/` にある（デザインの画像スロットから書き出した webp）。
`Picture` 型の `image` を省略すると「差し替え待ち」のプレースホルダー枠が表示される
（現在は自社プロダクトの 5noobs のみ）。

### お問い合わせフォーム

フォームは `ContactForm` の1種類だけ。「お問い合わせ種別」（`contactTypes`）のセレクトから始まる。
各ページ下部の `ContactCta` がこれを内包しており、**お問い合わせページ（`/contact/`）も中身は
`ContactCta` そのもの**。ページ側は `as="h1"` を渡して見出しレベルだけ上げている。
なお**`ContactCta` を置いているのはサービス詳細ページ（`consulting.astro` / `it.astro`）とお問い合わせページだけ**。
索引ページ（トップ・サービス一覧・プロダクト一覧）、お知らせ、会社概要には置かない
（`index.astro` / `service.astro` / `product.astro` / `news.astro` / `company.astro`）。

静的サイトなのでサーバーがない。送信先は自前の **Google Apps Script ウェブアプリ**
（`contact.ts` の `contactForm.endpoint`）で、受信内容はスプレッドシートに記録され、担当者への
通知メールと送信者への自動返信メールが飛ぶ。スパム対策は **Cloudflare Turnstile**
（`contactForm.turnstileSiteKey`。対になる Secret Key は Apps Script のスクリプトプロパティ側）と
ハニーポット（`company_website`）と経過時間（3秒未満は弾かれる）の3段構え。
`endpoint` を `null` に戻すと、入力内容を `mailto:` に展開してメールソフトを開く動作になる。

**サーバー側と対になっていて、片方だけ直すと受信できなくなるもの**:

| 対になっているもの | HTML側 | Apps Script側 |
|---|---|---|
| 項目名 | `name` 属性（`type` / `company` / `name` / `email` / `message`） | `HEADERS`・`appendRecord_`・バリデーション・メール本文 |
| お問い合わせ種別の選択肢 | `contactTypes.options` | `TYPE_OPTIONS`（中黒は全角 `・` U+30FB、括弧は全角 `（）`） |
| ハニーポット | `name="company_website"` | `data.company_website` |
| Turnstile | Site Key | スクリプトプロパティ `TURNSTILE_SECRET`（本番とテスト用を混ぜると必ず失敗する） |

Apps Script のコードを直したときは「デプロイを管理」→**「新バージョン」**で再デプロイする。
「新しいデプロイ」を押すとURLが変わり、HTML側の `endpoint` は旧コードを指したままになる
（修正が反映されない典型的な原因）。

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
`prefers-reduced-motion` の分岐は無い）。内訳は6種類。

1. **スクロール出現演出** — `data-reveal="<順番>"` を付けた要素が画面に入るとフェード+上方向移動(30px)+ぼかし解除(6px)で現れる
   （`src/scripts/reveal.ts` + `global.css` の `[data-reveal]`）。値は同一セクション内の表示順（遅延インデックス、110ms刻み・上限9）。
2. **カードの色差し** — `GradientCard` / `Stack` は `data-tint` + `.tint-layer` で、カードの地色（`--c-card`）の
   カバーが 1500ms で消えてグラデーションが差し込むように見せている。カバー色は既定でカードの地色と同じなので、
   面の色に合わせて上書きする必要はない（別の色にしたいときだけ `--tint-cover` を指定する）。
3. **背景の漂う円（ブロブ）** — `Blobs.astro` + `src/lib/blobs.ts` のプリセット。`omeFloatA/B/C` で 18〜37秒かけて動く。
   OUR WHY セクション（`home/Why.astro`）の3色の円・波紋（`omeRipple` 4.6s ×2）・ロゴの明滅（`omeLogoPulse` 5.2s）もこれに含まれる。
4. **キーワードのティッカー** — `home/Ticker.astro`。`omeTicker` 64s linear infinite。同じ並びを2セット置いて
   `-50%` まで動かすことで途切れずループする（**片方だけ増減させると継ぎ目がずれる**）。
5. **SCROLL誘導ライン** — `home/Hero.astro`。1pxの縦線の中を `omeCue` 2.4s で細い帯が流れ落ちる。
6. **WORKS のカウントアップと期間バー** — `sections/Works.astro`。セクションが画面に入ったら数値を1.2秒でカウントアップし、
   期間バーを60msずつずらして伸ばす（1回だけ）。期間バーは `layout="rows"`（IT）だけにあり、コンサルはカウントアップのみ。
   絞り込みとページ送りも同じスクリプト内にある（対象は `[data-work-row]` なので行・カードのどちらでも動く）。
   絞り込みの状態は軸（`data-g`）→ 値（`data-v`）の Map で持ち、行側の `data-f-<軸>` と突き合わせる。

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
- 旧Gatsby版のURL（`/service/it/` `/service/consulting/` `/service/product/`, `/blogs/`,
  `/member/matsuno/`, `/privacyPolicy/`）は
  `astro.config.mjs` の `redirects` で転送している
  （`/service/` 自体はサービス一覧の実ページなので転送対象から外してある。ここに追記すると実ページが上書きされる）
