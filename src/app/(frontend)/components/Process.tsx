import type { PayloadProcessSteps } from '../types/payload'
import { PROCESS_STEPS } from '../constants/content'

interface ProcessProps {
  processSteps?: PayloadProcessSteps | null
}

export function Process({ processSteps }: ProcessProps) {
  const headline =
    processSteps?.sectionHeadline || 'A clear path from first call to resolution.'

  const steps =
    processSteps?.steps && processSteps.steps.length > 0
      ? processSteps.steps.map((s) => ({
          key: String(s.number),
          num: String(s.number),
          title: s.title,
          desc: s.description,
        }))
      : PROCESS_STEPS.map((s) => ({
          key: s.num,
          num: s.num,
          title: s.title,
          desc: s.desc,
        }))

  return (
    <section className="la-section subtle-bg" data-screen-label="Process">
      <div className="la-container">
        <div className="sec-head center reveal" style={{ marginBottom: 72 }}>
          <p className="eyebrow">How We Work</p>
          <h2 className="display d-lg">{headline}</h2>
        </div>
        <div className="steps">
          {steps.map(({ key, num, title, desc }, i) => (
            <div key={key} className={`step reveal${i > 0 ? ` d${Math.min(i, 3)}` : ''}`}>
              <div className="num">{num}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
