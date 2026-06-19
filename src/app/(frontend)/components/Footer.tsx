import type { PayloadFooter } from '../types/payload'

const YEAR = new Date().getFullYear()
const FIRM_NAME = 'Aurelius Legal Partners'

const DEFAULT_COLUMNS = [
  {
    title: 'Firm',
    links: [
      { label: 'About', url: '#about' },
      { label: 'Attorneys', url: '#attorneys' },
      { label: 'Careers', url: '#' },
      { label: 'Insights', url: '#insights' },
    ],
  },
  {
    title: 'Practice',
    links: [
      { label: 'Corporate', url: '#practice' },
      { label: 'Litigation', url: '#practice' },
      { label: 'Real Estate', url: '#practice' },
      { label: 'Family', url: '#practice' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', url: '#insights' },
      { label: 'Case Results', url: '#results' },
      { label: 'FAQs', url: '#' },
      { label: 'Client Portal', url: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', url: '#' },
      { label: 'Terms of Service', url: '#' },
      { label: 'Disclaimer', url: '#' },
      { label: 'Contact', url: '#contact' },
    ],
  },
]

interface FooterProps {
  footer?: PayloadFooter | null
}

export function Footer({ footer }: FooterProps) {
  const columns =
    footer?.columns && footer.columns.length > 0 ? footer.columns : DEFAULT_COLUMNS

  const legalLine =
    footer?.legalLine ||
    'Attorney Advertising · Prior results do not guarantee a similar outcome.'

  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="la-container">
        <div className="foot-top">
          <div className="foot-brand">
            <a className="brand" href="#top" aria-label={`${FIRM_NAME} home`}>
              <span className="mark">A</span>
              <span className="word">
                <b>Aurelius</b>
                <span>Legal Partners</span>
              </span>
            </a>
            <p>Strategic counsel, trusted advocacy, and lasting results for businesses and individuals since 1998.</p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="foot-col">
              <h5>{col.title}</h5>
              {col.links?.map((link) => (
                <a key={link.label} href={link.url}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>© {YEAR} {FIRM_NAME} LLP. All rights reserved.</span>
          <div className="legal">
            <span>{legalLine}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
