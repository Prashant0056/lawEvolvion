'use client'

import { AlertCircle, CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import type { PayloadSiteSettings } from '../types/payload'

interface FormValues {
  name: string
  email: string
  phone?: string
  practiceArea?: string
  message: string
  _honeypot?: string
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
  const { register, handleSubmit, reset, setError, formState: { errors, isSubmitted } } = useForm<FormValues>({
    mode: 'onTouched',
  })

  const address =
    [siteSettings?.addressLine1, siteSettings?.addressLine2].filter(Boolean).join('\n') ||
    '400 Park Avenue, 28th Floor\nNew York, NY 10022'
  const phone = siteSettings?.phone || '(212) 555-1840'
  const email = siteSettings?.email || 'counsel@aureliuslegal.com'
  const hours =
    [siteSettings?.officeHours, siteSettings?.officeHoursNote].filter(Boolean).join('\n') ||
    'Mon–Fri · 8:30am – 6:00pm\nEvenings by appointment'
  const mapImage = siteSettings?.officeMapImage

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true)
    try {
      const payload = { ...data }
      if (!payload.practiceArea) delete payload.practiceArea
      const res = await fetch('/api/consultation-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
            <input type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" {...register('_honeypot')} />
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-name">Full Name <span className="req">*</span></label>
                <input
                  className={`la-input${errors.name ? ' is-invalid' : ''}`}
                  id="f-name"
                  type="text"
                  placeholder="Jane Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'err-name' : undefined}
                  {...register('name', {
                    required: 'Full name is required.',
                    minLength: { value: 2, message: 'Name must be at least 2 characters.' },
                    maxLength: { value: 100, message: 'Name must be 100 characters or fewer.' },
                  })}
                />
                {errors.name && (
                  <p className="field-error" id="err-name" role="alert">
                    <AlertCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="field">
                <label htmlFor="f-email">Email <span className="req">*</span></label>
                <input
                  className={`la-input${errors.email ? ' is-invalid' : ''}`}
                  id="f-email"
                  type="email"
                  placeholder="jane@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'err-email' : undefined}
                  {...register('email', {
                    required: 'Email address is required.',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address.',
                    },
                  })}
                />
                {errors.email && (
                  <p className="field-error" id="err-email" role="alert">
                    <AlertCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-phone">Phone</label>
                <input
                  className={`la-input${errors.phone ? ' is-invalid' : ''}`}
                  id="f-phone"
                  type="tel"
                  placeholder="(212) 555-0100"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'err-phone' : undefined}
                  {...register('phone', {
                    pattern: {
                      value: /^[\d\s\-+().]{7,20}$/,
                      message: 'Please enter a valid phone number.',
                    },
                  })}
                />
                {errors.phone && (
                  <p className="field-error" id="err-phone" role="alert">
                    <AlertCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
                    {errors.phone.message}
                  </p>
                )}
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
                className={`la-textarea${errors.message ? ' is-invalid' : ''}`}
                id="f-msg"
                placeholder="Briefly describe your matter…"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'err-msg' : undefined}
                {...register('message', {
                  required: 'Please describe your matter.',
                  minLength: { value: 10, message: 'Please provide at least 10 characters.' },
                  maxLength: { value: 5000, message: 'Message must be 5,000 characters or fewer.' },
                })}
              />
              {errors.message && (
                <p className="field-error" id="err-msg" role="alert">
                  <AlertCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
                  {errors.message.message}
                </p>
              )}
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
              <p className="field-error" style={{ marginTop: 10, fontSize: 14 }} role="alert">
                <AlertCircle style={{ width: 14, height: 14, flexShrink: 0 }} />
                {errors.root.message}
              </p>
            )}
            {isSubmitted && Object.keys(errors).filter(k => k !== 'root').length > 0 && !errors.root && (
              <p className="field-error" style={{ marginTop: 10, fontSize: 14 }} role="alert">
                <AlertCircle style={{ width: 14, height: 14, flexShrink: 0 }} />
                Please fix the errors above before submitting.
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
                  <img
                    src="https://images.unsplash.com/photo-1546422401-cdfefd070342?auto=format&fit=crop&w=900&q=80"
                    alt="400 Park Avenue, New York"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
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
