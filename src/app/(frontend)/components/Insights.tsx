import { ArrowRight } from 'lucide-react'

import { INSIGHTS_LIST } from '../constants/content'

export function Insights() {
  return (
    <section className="la-section" id="insights" data-screen-label="Insights">
      <div className="la-container">
        <div className="sec-split">
          <div className="reveal">
            <p className="eyebrow">Insights</p>
            <h2 className="display d-lg">Perspective on the law that shapes your decisions.</h2>
          </div>
          <p className="lead reveal d1">
            Analysis and guidance from our practice groups on the developments most relevant to
            our clients.
          </p>
        </div>

        <div className="insights-layout">
          <article className="feat-article reveal">
            <div className="feat-article-img">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
                alt="Business meeting — merger review article"
                style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block', borderRadius: 12 }}
              />
            </div>
            <div className="art-meta">
              <span className="cat">Business Law</span>
              <span className="dot" aria-hidden="true" />
              <span>June 12, 2026</span>
              <span className="dot" aria-hidden="true" />
              <span>8 min read</span>
            </div>
            <h3>What the new merger-review thresholds mean for mid-market acquisitions</h3>
            <p>
              Recent changes to regulatory review are reshaping deal timelines. We break down the
              practical implications for buyers, sellers, and their counsel.
            </p>
            <a href="#" className="linkarrow" style={{ marginTop: 18 }}>
              Read the analysis <ArrowRight />
            </a>
          </article>

          <div className="art-list reveal d1">
            {INSIGHTS_LIST.map(({ cat, time, title }) => (
              <a key={title} className="art-row" href="#">
                <div className="art-meta">
                  <span className="cat">{cat}</span>
                  <span className="dot" aria-hidden="true" />
                  <span>{time}</span>
                </div>
                <h4>{title}</h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
