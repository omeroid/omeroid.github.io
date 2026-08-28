# コンサル支援事例（consultingWorks）の Notion 連携

コンサルティングページの **WORKS（支援事例）** を、Notion の **「対外発信DB」** を
唯一の編集元にして、GitHub Actions で自動更新する仕組みです。

## 全体像

```
すべてのプロジェクトDB（機密・内部）
      │  人が「公開可否＋匿名化」を判断して転記
      ▼
【対外発信DB】＝公開レイヤー ──── GitHub Actions（Notion API・週次/手動）
（HP掲載 = ON の行だけ）              │ 読むのはここだけ（機密DBには触らない）
                                     ▼
                    src/data/consulting-works.generated.ts を再生成
                                     │
                          develop 宛に PR 自動作成 ──▶ 人が merge ──▶ Pages 公開
```

- **公開されるのは PR をマージした時点**です。Actions が直接 develop へ push することはありません。
- 生成器は **社名スクラバ** を内蔵し、クライアントマスタ由来の固有名詞が出力に混入していれば
  異常終了して PR を作りません。掲載対象が 0 件のときも、既存データ保護のため中断します。

## 掲載ポリシー

- 公開ページのため、**取引先名・案件名・担当者名などの固有名詞は載せません**。
- 掲載するのは **業種・テーマ・支援内容（背景・課題／アプローチ／成果）** のみです。

---

## 初期セットアップ（1回だけ・和田さん作業）

### 1. Notion インテグレーションを作る

1. https://www.notion.so/my-integrations で **Internal Integration** を新規作成。
2. 発行された **Internal Integration Secret**（`ntn_...`）を控える。
3. 次の DB をインテグレーションに **接続（Connect）** する（各DBの「…」→ Connections）。
   - **対外発信DB**（読み取り対象）
   - **テーマ** マスタ／**業界** マスタ（タグ・業種の名称解決に使う）
   - **クライアントマスタ**（社名スクラバの照合元）

### 2. GitHub のリポジトリ Secret を登録

`omeroid/omeroid.github.io` の **Settings → Secrets and variables → Actions** で追加：

| Secret 名                   | 値                                       |
| --------------------------- | ---------------------------------------- |
| `NOTION_CS_PJ_ACCESS_TOKEN` | 上で発行した Internal Integration Secret |

> ワークフローがこの Secret を、スクリプトの環境変数 `NOTION_TOKEN` に橋渡しします。

> DB の ID を変える場合は、リポジトリ変数 `OUTBOUND_DB_ID` / `CLIENT_DB_ID` で上書きできます
> （未設定なら `scripts/generate-consulting-works.mjs` の既定値を使用）。

### 3. 対外発信DB に掲載用プロパティを用意

対外発信DB に以下のプロパティを追加します（無いものだけでOK）。

| プロパティ   | 種類             | 用途                                                               |
| ------------ | ---------------- | ------------------------------------------------------------------ |
| `HP掲載`     | チェックボックス | ON の行だけを HP に掲載                                            |
| `呼称`       | テキスト         | 匿名の呼称（例「医療用医薬品の大手卸売企業」）。カード見出しになる |
| `背景・課題` | テキスト         | 構造化本文①                                                        |
| `アプローチ` | テキスト         | 構造化本文②                                                        |
| `成果`       | テキスト         | 構造化本文③                                                        |
| `業種`       | セレクト         | HPの絞り込み用の粗い業種（未設定なら業界relationから自動推定）     |
| `表示順`     | 数値             | 任意。小さいほど先頭に出る                                         |

既存の **テーマ（新設禁止）** リレーションが、そのまま HP のタグ（テーマ7分類）になります。

---

## 運用（事例を足す・直す）

1. 対外発信DB に行を作り（または既存行を使い）、`呼称`・`背景・課題`・`アプローチ`・`成果`・
   `テーマ`・`業種` を **匿名で** 記入する。
2. `HP掲載` を **ON** にする。
3. GitHub の **Actions →「Sync consulting works from Notion」→ Run workflow**（手動実行）。
   - 週次（毎週月曜 09:00 JST）でも自動実行されます。
4. 数分後に **develop 宛の PR** が作られる。差分を確認し、
   **固有名詞が無いことを目視で確認して** マージする。
5. マージすると既存の CI（`ci-deploy.yml`）が走り、GitHub Pages に公開される。

> スケジュール実行は GitHub の仕様で「既定ブランチ」でのみ発火します。
> 既定ブランチが develop でない場合は、手動実行（Run workflow）を使ってください。

## ローカルで試す

```bash
NOTION_TOKEN=ntn_xxx node scripts/generate-consulting-works.mjs
# または
NOTION_TOKEN=ntn_xxx yarn sync:works
```

`src/data/consulting-works.generated.ts` が更新されます。`yarn lint && yarn build` で検証できます。

## 表示のしくみ（開発者向け）

- データ: `src/data/consulting-works.generated.ts`（自動生成・手編集しない）
- 取り込み: `src/data/consulting.ts` が `consultingWorks` を re-export
- 描画: `src/components/sections/Works.astro`（`layout="cards"`）
  - `background` / `approach` / `outcome` があれば構造化表示、無ければ従来の `body` 表示
- 型: `WorkRow`（`src/types.ts`）
