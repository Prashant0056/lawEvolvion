import type { PayloadSiteSettings } from '../types/payload'

interface StatisticsProps {
  siteSettings?: PayloadSiteSettings | null
}

export function Statistics({ siteSettings }: StatisticsProps) {
  const stats = [
    {
      num: siteSettings?.statYears ?? '20',
      sup: '+',
      lab: siteSettings?.statYearsLabel ?? 'Years of combined excellence',
    },
    {
      num: siteSettings?.statCases ?? '500',
      sup: '+',
      lab: siteSettings?.statCasesLabel ?? 'Cases successfully resolved',
    },
    {
      num: siteSettings?.statAttorneys ?? '15',
      sup: '',
      lab: siteSettings?.statAttorneysLabel ?? 'Licensed attorneys & counsel',
    },
    {
      num: siteSettings?.statSatisfaction ?? '98',
      sup: '%',
      lab: siteSettings?.statSatisfactionLabel ?? 'Client satisfaction rating',
    },
  ]

  return (
    <section className="trust-strip" aria-label="Firm statistics" data-screen-label="Firm Statistics">
      <div className="la-container">
        {stats.map(({ num, sup, lab }, i) => (
          <div key={lab} className={`trust-cell reveal${i > 0 ? ` d${i}` : ''}`}>
            <div className="num">
              {num}
              {sup && <span>{sup}</span>}
            </div>
            <div className="lab">{lab}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
