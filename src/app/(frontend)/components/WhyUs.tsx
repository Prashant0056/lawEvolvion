import { Award, Globe, Lock, MessagesSquare, Scale, Target } from 'lucide-react'

import type { PayloadWhyChooseUs } from '../types/payload'
import { WHY_US_ITEMS } from '../constants/content'
import { ImageSlot } from './ImageSlot'

const ICON_MAP = { Scale, Target, MessagesSquare, Award, Lock, Globe, scale: Scale, target: Target, 'messages-square': MessagesSquare, award: Award, lock: Lock, globe: Globe } as const
type IconKey = keyof typeof ICON_MAP

interface WhyUsProps {
  whyChooseUs?: PayloadWhyChooseUs | null
}

export function WhyUs({ whyChooseUs }: WhyUsProps) {
  const eyebrow = whyChooseUs?.sectionEyebrow || 'Why Aurelius'
  const headline =
    whyChooseUs?.sectionHeadline ||
    'A standard of representation that institutions and individuals return to.'
  const quote =
    whyChooseUs?.partnerQuote ||
    'We do not measure success by the hours we bill, but by the outcomes we secure and the trust we keep.'
  const cite =
    whyChooseUs?.partnerQuoteCite || '— Eleanor Ashford-Vance, Managing Partner'

  const items =
    whyChooseUs?.items && whyChooseUs.items.length > 0
      ? whyChooseUs.items.map((item) => ({
          icon: item.icon || '',
          title: item.title || '',
          desc: item.description || '',
          key: item.id || item.title || '',
        }))
      : WHY_US_ITEMS.map((item) => ({
          icon: item.icon,
          title: item.title,
          desc: item.desc,
          key: item.title,
        }))

  return (
    <section className="la-section subtle-bg" id="about" data-screen-label="Why Choose Us">
      <div className="la-container">
        <div className="why-layout">
          <div className="why-media reveal">
            <div className="why-media-img">
              {whyChooseUs?.partnerQuoteImage?.url ? (
                <img
                  src={whyChooseUs.partnerQuoteImage.url}
                  alt={whyChooseUs.partnerQuoteImage.alt || ''}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <ImageSlot placeholder="Drop an office / team image" />
              )}
            </div>
            <blockquote className="why-quote">
              <p>&ldquo;{quote}&rdquo;</p>
              <cite>{cite}</cite>
            </blockquote>
          </div>

          <div>
            <p className="eyebrow reveal">{eyebrow}</p>
            <h2 className="display d-lg reveal" style={{ marginBottom: 14 }}>
              {headline}
            </h2>
            <div className="why-list reveal d1">
              {items.map(({ icon, title, desc, key }) => {
                const Icon = ICON_MAP[icon as IconKey] || Scale
                return (
                  <div key={key} className="why-item">
                    <span className="ico"><Icon /></span>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
