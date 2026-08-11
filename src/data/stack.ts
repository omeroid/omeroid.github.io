/**
 * TECH STACK（技術スタック）
 * icon は https://cdn.simpleicons.org/<slug> のスラッグ。
 * 明るいブランドカラーで視認性が落ちるものは darkIcon: true で黒描画にする。
 */
import type { SectionHeading, StackGroup } from '~/types'

export const stackHeading: SectionHeading = {
  eyebrow: 'TECH STACK',
  title: '技術スタック',
  lead: 'ほとんどの案件がフルスクラッチのため、インフラからバックエンド、フロントエンドまで全てを担当します。近年は Go と React の案件が中心です。',
}

export const stackGroups: StackGroup[] = [
  {
    accent: 'orange',
    label: 'BACKEND',
    items: [
      { name: 'Go', icon: 'go' },
      { name: 'Rust', icon: 'rust', darkIcon: true },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'PostgreSQL', icon: 'postgresql' },
    ],
  },
  {
    accent: 'teal',
    label: 'FRONTEND',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Next.js', icon: 'nextdotjs', darkIcon: true },
    ],
  },
  {
    accent: 'blue',
    label: 'INFRA',
    items: [
      { name: 'AWS', fallback: 'text' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Docker', icon: 'docker' },
      { name: 'On-premise', fallback: 'server' },
    ],
  },
  {
    accent: 'purple',
    label: 'MOBILE / OTHER',
    items: [
      { name: 'iOS', icon: 'apple', darkIcon: true },
      { name: 'Android', icon: 'android' },
      { name: 'IoT', icon: 'raspberrypi' },
      { name: 'Blockchain', icon: 'ethereum', darkIcon: true },
    ],
  },
]

export const stackFootnote =
  'OSSを使った開発を基本とし、特定ベンダーへのロックインにならない技術のみを採用しています。'
