import { Award, Medal, ShieldCheck, Star, Trophy } from 'lucide-react'

import type { PayloadAward } from '../types/payload'
import { AWARDS } from '../constants/content'

const ICON_MAP = {
  Award,
  Medal,
  Trophy,
  Star,
  ShieldCheck,
  award: Award,
  medal: Medal,
  trophy: Trophy,
  star: Star,
  'shield-check': ShieldCheck,
} as const
type IconKey = keyof typeof ICON_MAP

interface AwardsProps {
  awards?: PayloadAward[] | null
}

export function Awards({ awards }: AwardsProps) {
  const items =
    awards && awards.length > 0
      ? awards.map((a) => ({
          key: String(a.id),
          icon: a.icon || 'award',
          org: a.organization,
          yr: a.distinction,
        }))
      : AWARDS.map((a) => ({ key: a.org, icon: a.icon, org: a.org, yr: a.yr }))

  return (
    <section className="la-section" data-screen-label="Awards">
      <div className="la-container">
        <div className="sec-head center reveal" style={{ marginBottom: 52 }}>
          <p className="eyebrow">Recognition</p>
          <h2 className="display d-md">Acknowledged by the institutions that set the standard.</h2>
        </div>
        <div className="awards-row reveal d1">
          {items.map(({ key, icon, org, yr }) => {
            const Icon = ICON_MAP[icon as IconKey] || Award
            return (
              <div key={key} className="award">
                <div className="star"><Icon /></div>
                <div className="org">{org}</div>
                <div className="yr">{yr}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
