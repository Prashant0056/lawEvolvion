import { ArrowRight, Phone } from 'lucide-react'

import type { PayloadSiteSettings } from '../types/payload'
import { FIRM_PHONE } from '../constants/content'

interface CtaBandProps {
  siteSettings?: PayloadSiteSettings | null
}

export function CtaBand({ siteSettings }: CtaBandProps) {
  const headline = siteSettings?.ctaHeadline || 'Your matter deserves a considered response.'
  const body =
    siteSettings?.ctaBody ||
    'Request a confidential consultation. We will review your situation, outline your options, and recommend a clear path forward — with no obligation.'
  const phone = siteSettings?.phone || FIRM_PHONE

  return (
    <section className="la-section band ctaband" data-screen-label="CTA">
      <div className="la-container">
        <p
          className="eyebrow no-rule reveal"
          style={{ '--eyebrow': 'var(--gold-bright)', justifyContent: 'center' } as React.CSSProperties}
        >
          Speak With Our Team
        </p>
        <h2 className="display d-lg reveal d1">{headline}</h2>
        <p className="lead reveal d1">{body}</p>
        <div className="hero-cta reveal d2">
          <a href="#contact" className="btn btn-gold">
            Request Consultation <ArrowRight />
          </a>
          <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn btn-outline">
            <Phone /> {phone}
          </a>
        </div>
      </div>
    </section>
  )
}
