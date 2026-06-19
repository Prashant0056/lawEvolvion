import { ArrowRight } from 'lucide-react'

import type { PayloadInsight } from '../types/payload'
import { INSIGHTS_LIST } from '../constants/content'
import { ImageSlot } from './ImageSlot'

interface InsightsProps {
  insights?: PayloadInsight[] | null
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export function Insights({ insights }: InsightsProps) {
  const featured = insights?.find((i) => i.featured) || null
  const list = insights
    ? insights.filter((i) => !i.featured).slice(0, 4)
    : null

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
              {featured?.coverImage?.url ? (
                <img
                  src={featured.coverImage.url}
                  alt={featured.coverImage.alt || ''}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <ImageSlot placeholder="Drop a cover image" />
              )}
            </div>
            <div className="art-meta">
              <span className="cat">
                {featured?.category?.title ?? 'Business Law'}
              </span>
              <span className="dot" aria-hidden="true" />
              <span>{featured ? formatDate(featured.publishedDate) : 'June 12, 2026'}</span>
              <span className="dot" aria-hidden="true" />
              <span>{featured?.readTime ? `${featured.readTime} min read` : '8 min read'}</span>
            </div>
            <h3>
              {featured?.title ??
                'What the new merger-review thresholds mean for mid-market acquisitions'}
            </h3>
            <p>
              {featured?.excerpt ??
                'Recent changes to regulatory review are reshaping deal timelines. We break down the practical implications for buyers, sellers, and their counsel.'}
            </p>
            <a href="#" className="linkarrow" style={{ marginTop: 18 }}>
              Read the analysis <ArrowRight />
            </a>
          </article>

          <div className="art-list reveal d1">
            {list && list.length > 0
              ? list.map((article) => (
                  <a key={String(article.id)} className="art-row" href="#">
                    <div className="art-meta">
                      <span className="cat">{article.category?.title ?? ''}</span>
                      <span className="dot" aria-hidden="true" />
                      <span>{article.readTime ? `${article.readTime} min` : ''}</span>
                    </div>
                    <h4>{article.title}</h4>
                  </a>
                ))
              : INSIGHTS_LIST.map(({ cat, time, title }) => (
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
