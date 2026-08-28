/**
 * コンサルティングの支援事例（WORKS の一覧データ）
 *
 * ⚠️ このファイルは Notion「対外発信DB」から自動生成される想定の領域です。
 *     `scripts/generate-consulting-works.mjs`（GitHub Actions）で再生成され、
 *     develop 宛の Pull Request として反映されます。手で恒久編集しないでください。
 *     仕組みの詳細・初期セットアップは docs/consulting-works-sync.md を参照。
 *
 * 掲載ポリシー（重要）:
 *   公開ページのため、取引先名・案件名・担当者名などの固有名詞は一切載せません。
 *   業種・テーマ・支援内容のみを匿名で掲載します。
 *
 * 現状は Notion 連携が稼働するまでの「初期データ」を置いています。
 * 出典は freee の請求データ（2019-02-28〜2026-08-31 / コンサル部門）で、
 * 3ヶ月以上の案件を一覧に載せています（短期案件は footnote にまとめています）。
 */
import type { WorkRow } from '~/types'

export const consultingWorks: WorkRow[] = [
  {
    category: 'CONSULTING FIRM',
    client: '経営コンサルティング企業',
    industry: '専門サービス',
    tags: ['事業戦略', '業務設計'],
    body: 'エンドクライアント向けの事業計画策定とプロジェクト推進、商品企画チームの運営支援、会計システム刷新に向けた現行業務の整理まで。',
  },
  {
    category: 'HR / MEDIA',
    client: '大手人材サービス企業',
    industry: 'サービス',
    tags: ['営業・マーケティング', '組織設計'],
    body: '人材派遣領域を担う事業ユニットの戦略検討と付帯業務を、マネージャー・コンサルタントの複数名体制で支援。',
  },
  {
    category: 'DX CONSULTING',
    client: '戦略・DXコンサルティング企業',
    industry: '専門サービス',
    tags: ['DX推進', 'PMO'],
    body: 'DXプロジェクトのPMO支援を中心に、財務業務の分析と将来像設計、基幹システム更改の伴走支援まで。',
  },
  {
    category: 'PHARMA DISTRIBUTION',
    client: '医療用医薬品の大手卸売企業',
    industry: '卸売・小売',
    tags: ['事業戦略', '新規事業'],
    body: '再生医療・予防医療・美容医療・動物医療の各領域で、事業戦略の設計から新規事業の検討・推進までを継続支援。',
  },
  {
    category: 'NEW BUSINESS',
    client: '新規事業支援の経営コンサルティング企業',
    industry: '専門サービス',
    tags: ['新規事業', '事業戦略'],
    body: 'ヘルスケア領域の新規事業開発に参画。戦略策定からMVP検証の詳細設計、規制対応のディレクションまで。',
  },
  {
    category: 'PUBLIC / REGION',
    client: '地域振興に取り組む公共施設運営団体',
    industry: '公共',
    tags: ['人材育成', '地域振興'],
    body: '地域のIT人材育成を目的としたハッカソンの企画・運営支援。講師・進行支援や開発環境の提供も担当。',
  },
  {
    category: 'INDUSTRIAL TRADE',
    client: '建築設備・管工機材の卸売企業',
    industry: '卸売・小売',
    tags: ['DX推進', '業務設計'],
    body: 'DX・システムの将来像設計から構築支援までをフェーズを分けて推進し、業務・システム改革の全体構想づくりを支援。',
  },
  {
    category: 'REAL ESTATE',
    client: '不動産の売買・仲介企業',
    industry: '不動産',
    tags: ['新規事業', '営業・マーケティング'],
    body: '独自の専門人材認定制度の設計と認知拡大の助言、会員向けコミュニティアプリの運用管理まで。',
  },
  {
    category: 'FINANCIAL ADVISORY',
    client: '中小企業向け財務コンサルティング企業',
    industry: '専門サービス',
    tags: ['DX推進'],
    body: 'IT領域の顧問としてマネージャーが継続参画し、IT活用に関する助言を月次で提供。',
  },
  {
    category: 'MATCHING SAAS',
    client: 'ビジネスマッチングSaaS運営企業',
    industry: '情報通信',
    tags: ['調査・分析', '新規事業'],
    body: 'M&A・事業承継領域のレポート作成支援を中心に、複数のクライアント企業へのプロジェクト支援を提供。',
  },
  {
    category: 'HR SERVICE',
    client: '人材紹介・HR領域のサービス企業',
    industry: 'サービス',
    tags: ['営業・マーケティング', '業務設計'],
    body: '営業企画・推進の支援に加え、データ活用組織の効率化や依頼受付フローの設計まで、営業と組織運営の両面から改革を支援。',
  },
  {
    category: 'MANUFACTURING',
    client: 'プラスチック製品の製造業企業',
    industry: '製造',
    tags: ['業務設計', '基幹刷新構想'],
    body: '生産管理システム刷新の方針検討から、周辺システムの要件定義・設計、RFP作成・パッケージ選定まで。',
  },
  {
    category: 'GLOBAL CONSULTING',
    client: '大手総合コンサルティングファーム',
    industry: '専門サービス',
    tags: ['調査・分析'],
    body: '次世代通信領域における国際標準化の事例調査と、国際標準化機関での標準化活動の推進支援。',
  },
  {
    category: 'TRADING COMPANY',
    client: '鉄鋼・食糧などを扱う大手総合商社',
    industry: '卸売・小売',
    tags: ['業務設計', '基幹刷新構想'],
    body: '基幹システム刷新に向けた業務分析。現行業務の整理・分析で検討に必要な業務要件を可視化。',
  },
  {
    category: 'BUILDING SERVICE',
    client: '総合ビルメンテナンス・建物管理企業',
    industry: 'サービス',
    tags: ['基幹刷新構想'],
    body: '基幹システム見直しの診断と再計画から、要件整理を踏まえたRFP作成・ベンダー選定まで段階的に支援。',
  },
  {
    category: 'DATA STRATEGY',
    client: 'DX・デジタル領域のコンサルティング企業',
    industry: '専門サービス',
    tags: ['データ戦略', '新規事業'],
    body: '大手メディア企業のデータガバナンス構築PMO支援、データ利活用会議の運営支援、合弁会社の設立支援。',
  },
  {
    category: 'HR / MEDIA',
    client: '人材・情報メディア領域の大手サービス企業',
    industry: 'サービス',
    tags: ['営業・マーケティング'],
    body: '事業統合に伴う営業推進の支援に複数名体制で参画し、営業活動の推進と付帯業務の設計・実行を支援。',
  },
  {
    category: 'RESEARCH',
    client: '人材紹介・コンサルティング企業',
    industry: 'サービス',
    tags: ['調査・分析'],
    body: '官公庁向けの調査請負プロジェクトに参画し、次世代通信技術の国際標準化動向や市場動向の調査・分析を担当。',
  },
  {
    category: 'CORPORATE',
    client: 'AI・システム開発のIT企業',
    industry: '情報通信',
    tags: ['業務設計'],
    body: 'クライアント企業向けのコーポレート機能整備プロジェクトに参画し、管理部門の機能・業務基盤づくりを支援。',
  },
]
