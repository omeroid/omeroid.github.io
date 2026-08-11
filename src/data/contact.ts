/** CONTACT（お問い合わせ） */
import type { ContactTopic } from '~/types'

export const contactForm = {
  /**
   * フォームのPOST先。
   * null の場合は JavaScript で入力内容をメール本文に展開し、
   * メールソフトの作成画面（mailto:）を開く。
   * Google Forms / formrun / SSGform などのエンドポイントURLを入れると
   * そのままPOST送信に切り替わる。
   */
  endpoint: null as string | null,
  /** endpoint が null のときの送信先アドレス */
  mailto: 'inquiry@omeroid.com',
  submitLabel: '送信する',
}

/** トップ等の下部に置く問い合わせセクション */
export const contactCta = {
  eyebrow: 'CONTACT',
  title: ['要件が固まっていなくても、', 'お話しできます。'],
  lead: '初回30分のヒアリングは無料です。「何を相談すればいいか分からない」という段階のご連絡が、いちばん多いです。',
}

/** お問い合わせページ */
export const contactPage = {
  eyebrow: 'CONTACT',
  title: ['まずは、', '困っていることから。'],
  lead: '要件が固まっていなくて構いません。「何を相談すればいいか分からない」という段階のご連絡が、いちばん多いです。2営業日以内にご返信します。',
  steps: [
    'お問い合わせ（このフォーム）',
    '30分のオンライン初回ヒアリング（無料）',
    '進め方・体制・概算のご提案',
  ],
}

/** ご相談内容の選択肢 */
export const contactTopics: ContactTopic[] = [
  { label: 'IT戦略策定' },
  { label: '社内DX推進' },
  { label: 'システム開発' },
  { label: '内製化支援' },
  { label: '運用・保守' },
  { label: 'まだ決まっていない' },
]
