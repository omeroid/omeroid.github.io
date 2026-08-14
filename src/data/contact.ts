/** CONTACT（お問い合わせ） */

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

/** 各ページ下部に置く問い合わせセクション */
export const contactCta = {
  eyebrow: 'CONTACT',
  title: ['要件が固まっていなくても、', 'お話しできます。'],
  lead: 'お気軽にお問い合わせください。「何を相談すればいいか分からない」という段階のご連絡が、いちばん多いです。',
}

/** フォームの「お問い合わせ種別」（下部CTA・お問い合わせページ共通） */
export const contactTypes = {
  placeholder: 'お問い合わせ種別を選択',
  options: [
    'コンサルティングの相談・見積依頼',
    'IT・システム関連の相談・見積依頼',
    '採用応募',
    'SES・ビジネスパートナー（BP）提案',
    '取材・メディア掲載・講演依頼',
    '営業・セールス',
    '情報セキュリティ・プライバシー関連',
    'その他',
  ],
}
