'use client'

import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import type { PayloadSiteSettings } from '../types/payload'
import { FIRM_ADDRESS, FIRM_EMAIL, FIRM_HOURS, FIRM_PHONE } from '../constants/content'
import { ImageSlot } from './ImageSlot'

interface FormValues {
  name: string
  email: string
  phone?: string
  practiceArea?: string
  message: string
}

const AREAS = [
  { label: 'Corporate & M&A', value: 'corporate-ma' },
  { label: 'Litigation & Disputes', value: 'litigation-disputes' },
  { label: 'Real Estate', value: 'real-estate' },
  { label: 'Employment & Labour', value: 'employment-labour' },
  { label: 'Private Client & Family', value: 'private-client-family' },
  { label: 'Intellectual Property', value: 'intellectual-property' },
  { label: 'Immigration', value: 'immigration' },
  { label: 'White-Collar Defense', value: 'white-collar-defense' },
  { label: 'Other', value: 'other' },
]

interface ContactProps {
  siteSettings?: PayloadSiteSettings | null
}

export function Contact({ siteSettings }: ContactProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { register, handleSubmit, reset, setError, formState: { errors } } = useForm<FormValues>()

  const address =
    [siteSettings?.addressLine1, siteSettings?.addressLine2].filter(Boolean).join('\n') ||
    FIRM_ADDRESS
  const phone = siteSettings?.phone || FIRM_PHONE
  const email = siteSettings?.email || FIRM_EMAIL
  const hours =
    [siteSettings?.officeHours, siteSettings?.officeHoursNote].filter(Boolean).join('\n') ||
    FIRM_HOURS
  const mapImage = siteSettings?.officeMapImage

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/consultation-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
      reset()
    } catch {
      setError('root', { message: 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
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
                <input
                  className="la-input"
                  id="f-name"
                  type="text"
                  placeholder="Jane Doe"
                  {...register('name', { required: true })}
                />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email <span className="req">*</span></label>
                <input
                  className="la-input"
                  id="f-email"
                  type="email"
                  placeholder="jane@example.com"
                  {...register('email', { required: true })}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-phone">Phone</label>
                <input
                  className="la-input"
                  id="f-phone"
                  type="tel"
                  placeholder="(212) 555-0100"
                  {...register('phone')}
                />
              </div>
              <div className="field">
                <label htmlFor="f-area">Practice Area</label>
                <select className="la-select" id="f-area" {...register('practiceArea')}>
                  <option value="">Select area…</option>
                  {AREAS.map((a) => (
                    <option key={a.value} value={a.value}>{a.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-msg">How can we help? <span className="req">*</span></label>
              <textarea
                className="la-textarea"
                id="f-msg"
                placeholder="Briefly describe your matter…"
                {...register('message', { required: true })}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
              disabled={submitting}
            >
              {submitting ? 'Sending…' : 'Request Consultation'}
            </button>
            <p className="form-note">
              Submitting this form does not create an attorney–client relationship. Please do not
              include confidential information.
            </p>
            {errors.root && (
              <p style={{ color: 'var(--error, red)', fontSize: 14, marginTop: 8 }}>
                {errors.root.message}
              </p>
            )}
            <div className={`form-ok${submitted ? ' show' : ''}`} role="status">
              <CheckCircle2 style={{ width: 18, height: 18, color: 'var(--gold)' }} />
              Thank you — we&apos;ll be in touch within one business day.
            </div>
          </form>

          <aside className="contact-aside reveal d1">
            <div className="contact-card">
              <div className="contact-map">
                {mapImage?.url ? (
                  <img
                    src={mapImage.url}
                    alt={mapImage.alt || 'Office location'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <ImageSlot placeholder="Drop a map image" />
                )}
              </div>
              <div className="contact-rows">
                {[
                  { icon: MapPin, key: 'Office', val: address },
                  { icon: Phone, key: 'Phone', val: phone },
                  { icon: Mail, key: 'Email', val: email },
                  { icon: Clock, key: 'Office Hours', val: hours },
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
