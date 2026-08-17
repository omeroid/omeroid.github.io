/** CONTACT（お問い合わせ） */

export const contactForm = {
  /**
   * フォームのPOST先（Google Apps Script のウェブアプリ）。
   * 受信内容はスプレッドシートに記録され、担当者への通知メールと
   * 送信者への自動返信メールが送られる。
   *
   * コードを直したときは Apps Script で「デプロイを管理」→「新バージョン」で
   * 再デプロイすること（「新しいデプロイ」を押すとURLが変わって反映されない）。
   *
   * null にすると JavaScript で入力内容をメール本文に展開し、
   * メールソフトの作成画面（mailto:）を開く動作に戻る。
   */
  endpoint:
    'https://script.google.com/macros/s/AKfycbz78dLI8vIzJlYGlkn4HA_Qu-rhdgNFghb-jDDh18K62D-nXMvK4piVF2S_jSSyf5mFAQ/exec' as
    string | null,
  /**
   * Cloudflare Turnstile の Site Key（スパム対策）。
   * 公開して問題ない値。対になる Secret Key は Apps Script の
   * スクリプトプロパティ TURNSTILE_SECRET 側にあり、こちらとは必ず対で扱う。
   */
  turnstileSiteKey: '0x4AAAAAAEPfEKW7c1-uORF5',
  /** endpoint が null のときの送信先アドレス */
  mailto: 'inquiry@omeroid.com',
  submitLabel: '送信する',
}

/** 送信時の状態表示。サーバーが個別のメッセージを返した場合はそちらを優先する */
export const contactFormMessages = {
  sending: '送信中…',
  invalid: '入力内容に誤りがあります。赤色の項目をご確認ください。',
  captchaPending:
    '認証の読み込みが終わっていません。数秒おいてからもう一度お試しください。',
  serverError: '送信処理に失敗しました。時間をおいてお試しください。',
  networkError:
    '送信に失敗しました。通信環境をご確認のうえ、時間をおいてお試しください。',
  doneTitle: 'お問い合わせを送信しました',
  /** 完了時の本文。通常はサーバーが返した文言に差し替わるので、これは予備 */
  doneBody: '内容を確認のうえ、担当者より改めてご連絡いたします。',
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
