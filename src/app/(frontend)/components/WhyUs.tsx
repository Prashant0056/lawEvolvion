import { Award, Globe, Lock, MessagesSquare, Scale, Target } from 'lucide-react'

import { WHY_US_ITEMS } from '../constants/content'

const ICON_MAP = { Scale, Target, MessagesSquare, Award, Lock, Globe } as const
type IconKey = keyof typeof ICON_MAP

export function WhyUs() {
  return (
    <section className="la-section subtle-bg" id="about" data-screen-label="Why Choose Us">
      <div className="la-container">
        <div className="why-layout">
          <div className="why-media reveal">
            <div className="why-media-img">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                alt="Law Associates team"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block', borderRadius: 14 }}
              />
            </div>
            <blockquote className="why-quote">
              <p>
                &ldquo;We do not measure success by the hours we bill, but by the outcomes we
                secure and the trust we keep.&rdquo;
              </p>
              <cite>— Eleanor Ashford-Vance, Managing Partner</cite>
            </blockquote>
          </div>

          <div>
            <p className="eyebrow reveal">Why Law Associates</p>
            <h2 className="display d-lg reveal" style={{ marginBottom: 14 }}>
              A standard of representation that institutions and individuals return to.
            </h2>
            <div className="why-list reveal d1">
              {WHY_US_ITEMS.map(({ icon, title, desc }) => {
                const Icon = ICON_MAP[icon as IconKey]
                return (
                  <div key={title} className="why-item">
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
