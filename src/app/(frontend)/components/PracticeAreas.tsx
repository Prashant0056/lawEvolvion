import { ArrowRight, ArrowUpRight } from 'lucide-react'

import type { PayloadPracticeArea } from '../types/payload'
import { PRACTICE_AREAS } from '../constants/content'

interface PracticeAreasProps {
  practiceAreas?: PayloadPracticeArea[] | null
}

export function PracticeAreas({ practiceAreas }: PracticeAreasProps) {
  const items =
    practiceAreas && practiceAreas.length > 0
      ? practiceAreas.map((pa, i) => ({
          idx: String(pa.order ?? i + 1).padStart(2, '0'),
          title: pa.title,
          desc: pa.shortDescription,
          key: String(pa.id),
        }))
      : PRACTICE_AREAS.map((pa) => ({ idx: pa.idx, title: pa.title, desc: pa.desc, key: pa.idx }))

  return (
    <section className="la-section" id="practice" data-screen-label="Practice Areas">
      <div className="la-container">
        <div className="practice-layout">
          <div className="practice-intro reveal">
            <p className="eyebrow">Practice Areas</p>
            <h2 className="display d-lg">Depth across the disciplines that matter most.</h2>
            <p className="lead">
              Our practice groups are led by partners with decades of focused experience — so the
              counsel you receive is senior, specialised, and coordinated across every dimension
              of your matter.
            </p>
            <a href="#contact" className="btn btn-outline">
              Discuss Your Matter <ArrowRight />
            </a>
          </div>

          <div className="practice-list reveal d1">
            {items.map(({ idx, title, desc, key }) => (
              <a key={key} className="parea" href="#contact">
                <span className="idx">{idx}</span>
                <span>
                  <span className="pa-title">{title}</span>
                  <span className="pa-desc">{desc}</span>
                </span>
                <span className="pa-arrow" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
