import { ArrowRight, ArrowUpRight } from 'lucide-react'

import type { PayloadAttorney } from '../types/payload'
import { ATTORNEYS } from '../constants/content'
import { ImageSlot } from './ImageSlot'

interface AttorneysProps {
  attorneys?: PayloadAttorney[] | null
}

export function Attorneys({ attorneys }: AttorneysProps) {
  const items =
    attorneys && attorneys.length > 0
      ? attorneys.map((a) => ({
          id: String(a.id),
          name: a.name,
          role: a.role,
          spec: a.specialty,
          years: String(a.yearsExperience),
          photoUrl: a.photo?.url || null,
          photoAlt: a.photo?.alt || a.name,
        }))
      : ATTORNEYS.map((a) => ({
          id: a.id,
          name: a.name,
          role: a.role,
          spec: a.spec,
          years: a.years,
          photoUrl: null,
          photoAlt: a.name,
        }))

  return (
    <section className="la-section" id="attorneys" data-screen-label="Attorneys">
      <div className="la-container">
        <div className="sec-split">
          <div className="reveal">
            <p className="eyebrow">The People</p>
            <h2 className="display d-lg">Counsel you will know by name.</h2>
          </div>
          <p className="lead reveal d1">
            Our partners bring decades of focused experience and a shared commitment to
            representing each client as if their matter were our own.
          </p>
        </div>

        <div className="attorneys-grid">
          {items.map(({ id, name, role, spec, years, photoUrl, photoAlt }, i) => (
            <article key={id} className={`attorney reveal${i > 0 ? ` d${i}` : ''}`}>
              <div className="photo">
                {photoUrl ? (
                  <img src={photoUrl} alt={photoAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <ImageSlot placeholder="Portrait" />
                )}
                <span className="badge">{years} yrs experience</span>
              </div>
              <div className="info">
                <div>
                  <h4>{name}</h4>
                  <div className="role">{role}</div>
                  <div className="spec">{spec}</div>
                </div>
                <a className="prof" href="#contact" aria-label="View profile">
                  <ArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 48 }} className="reveal">
          <a href="#contact" className="linkarrow">
            Meet all 15 attorneys <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
