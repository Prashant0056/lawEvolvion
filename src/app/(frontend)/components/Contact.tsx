'use client'

import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { FIRM_ADDRESS, FIRM_EMAIL, FIRM_HOURS, FIRM_PHONE } from '../constants/content'

interface FormValues {
  name: string
  email: string
  phone?: string
  area?: string
  message: string
}

const AREAS = [
  'Corporate & M&A', 'Litigation & Disputes', 'Real Estate',
  'Employment & Labour', 'Private Client & Family', 'Intellectual Property',
  'Immigration', 'White-Collar Defense', 'Other',
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, reset } = useForm<FormValues>()

  const onSubmit = () => {
    setSubmitted(true)
    reset()
  }

  return (
    <section className="la-section subtle-bg" id="contact" data-screen-label="Contact">
      <div className="la-container">
        <div className="sec-split">
          <div className="reveal">
            <p className="eyebrow">Contact</p>
            <h2 className="display d-lg">Begin with a conversation.</h2>
          </div>
          <p className="lead reveal d1">
            Tell us about your matter and the best way to reach you. A member of our team will
            respond within one business day.
          </p>
        </div>

        <div className="contact-layout">
          <form className="reveal" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-name">Full Name <span className="req">*</span></label>
                <input className="la-input" id="f-name" type="text" placeholder="Jane Doe" {...register('name', { required: true })} />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email <span className="req">*</span></label>
                <input className="la-input" id="f-email" type="email" placeholder="jane@example.com" {...register('email', { required: true })} />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-phone">Phone</label>
                <input className="la-input" id="f-phone" type="tel" placeholder="(212) 555-0100" {...register('phone')} />
              </div>
              <div className="field">
                <label htmlFor="f-area">Practice Area</label>
                <select className="la-select" id="f-area" {...register('area')}>
                  {AREAS.map(a => <option key={a}>{a}</option>)}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-msg">How can we help? <span className="req">*</span></label>
              <textarea className="la-textarea" id="f-msg" placeholder="Briefly describe your matter…" {...register('message', { required: true })} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Request Consultation
            </button>
            <p className="form-note">
              Submitting this form does not create an attorney–client relationship. Please do not
              include confidential information.
            </p>
            <div className={`form-ok${submitted ? ' show' : ''}`} role="status">
              <CheckCircle2 style={{ width: 18, height: 18, color: 'var(--gold)' }} />
              Thank you — we&apos;ll be in touch within one business day.
            </div>
          </form>

          <aside className="contact-aside reveal d1">
            <div className="contact-card">
              <div className="contact-map">
                <img
                  src="https://images.unsplash.com/photo-1546422401-cdfefd070342?auto=format&fit=crop&w=900&q=80"
                  alt="400 Park Avenue, New York"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="contact-rows">
                {[
                  { icon: MapPin, key: 'Office', val: FIRM_ADDRESS },
                  { icon: Phone, key: 'Phone', val: FIRM_PHONE },
                  { icon: Mail, key: 'Email', val: FIRM_EMAIL },
                  { icon: Clock, key: 'Office Hours', val: FIRM_HOURS },
                ].map(({ icon: Icon, key, val }) => (
                  <div key={key} className="crow">
                    <span className="ci"><Icon /></span>
                    <div>
                      <div className="ck">{key}</div>
                      <div className="cv" style={{ whiteSpace: 'pre-line' }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
