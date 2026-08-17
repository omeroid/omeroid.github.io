/**
 * スクロールに合わせて要素をフェードインさせる。
 * data-reveal の値（0〜）が表示順の遅延インデックスになる。
 * 演出のスタイルは global.css の [data-reveal] 側に持たせている。
 */
const STAGGER = 110
const MAX_INDEX = 9

// このスクリプトが動いたことを知らせる（BaseLayout 側の保険を無効化する）
document.documentElement.dataset.revealReady = '1'

const reveal = (el: HTMLElement) => {
  const index = Math.min(Number(el.dataset.reveal) || 0, MAX_INDEX)
  el.style.setProperty('--reveal-delay', `${index * STAGGER}ms`)
  el.dataset.revealed = ''
}

const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')

if (!('IntersectionObserver' in window)) {
  targets.forEach(reveal)
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        reveal(entry.target as HTMLElement)
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.04 }
  )

  targets.forEach((el) => observer.observe(el))
}
