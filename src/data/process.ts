/** PROCESS（支援の進め方）— IT事業ページで使用 */
import type { Guideline, ProcessStep, SectionHeading } from '~/types'

export const processHeading: SectionHeading = {
  eyebrow: 'PROCESS',
  title: '支援の進め方',
  lead: 'お問い合わせから、最短2週間で着手できます。',
}

export const processSteps: ProcessStep[] = [
  {
    step: 'STEP 01',
    title: 'お問い合わせ',
    body: 'フォームから概要をお送りください。2営業日以内にご返信します。',
    from: 'orange',
    to: 'amber',
  },
  {
    step: 'STEP 02',
    title: 'ヒアリング',
    body: '30分のオンライン面談。課題と前提を整理します（無料）。',
    from: 'amber',
    to: 'green',
  },
  {
    step: 'STEP 03',
    title: 'ご提案',
    body: '支援範囲・体制・進め方・概算をご提示します。',
    from: 'green',
    to: 'teal',
  },
  {
    step: 'STEP 04',
    title: 'ご契約・着手',
    body: '準委任／請負のいずれにも対応。最短2週間で開始します。',
    from: 'teal',
    to: 'blue',
  },
  {
    step: 'STEP 05',
    title: '開発・運用',
    body: '週次で状況を共有。リリース後の運用保守まで継続します。',
    from: 'blue',
    to: 'purple',
  },
]

/** プロセスの下に並ぶお約束 */
export const processPromises: Guideline[] = [
  {
    title: '無理な計画は立てません',
    body: '残業を前提とした計画は立てず、個々のエンジニアの能力に合わせたタスクと時間を設定します。',
  },
  {
    title: '動くだけで終わらせません',
    body: '可読性とメンテナンス性を重視したレビュー体制で、長期的に育てていけるコードにします。',
  },
  {
    title: '良きパートナーになります',
    body: '受発注の関係ではなく、事業を一緒に前に進める相手として信頼関係を築きます。',
  },
]
