import { useState, useEffect } from 'react'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Deletion from './pages/Deletion'

type Page = 'privacy' | 'terms' | 'deletion'
type Lang = 'vi' | 'en'

const PAGES: { id: Page; vi: string; en: string }[] = [
  { id: 'privacy', vi: 'Chính sách Bảo mật', en: 'Privacy Policy' },
  { id: 'terms', vi: 'Điều khoản Dịch vụ', en: 'Terms of Service' },
  { id: 'deletion', vi: 'Xóa Dữ liệu', en: 'Data Deletion' },
]

function getInitialPage(): Page {
  const hash = window.location.hash.replace('#', '') as Page
  return PAGES.some(p => p.id === hash) ? hash : 'privacy'
}

export default function App() {
  const [page, setPage] = useState<Page>(getInitialPage)
  const [lang, setLang] = useState<Lang>('vi')

  useEffect(() => {
    window.location.hash = page
  }, [page])

  const nav = PAGES.find(p => p.id === page)!

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">S</div>
            <span className="font-semibold text-gray-900 hidden sm:inline">Shelter &amp; Seed</span>
          </div>

          {/* Page tabs */}
          <nav className="flex items-center gap-1 overflow-x-auto">
            {PAGES.map(p => (
              <button
                key={p.id}
                onClick={() => setPage(p.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                  page === p.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {lang === 'vi' ? p.vi : p.en}
              </button>
            ))}
          </nav>

          {/* Language switcher */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => setLang('vi')}
              className={`px-2 py-1 rounded text-xs font-medium transition ${lang === 'vi' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              VI
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded text-xs font-medium transition ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
          {page === 'privacy' && <Privacy lang={lang} />}
          {page === 'terms' && <Terms lang={lang} />}
          {page === 'deletion' && <Deletion lang={lang} />}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-6">
        © {new Date().getFullYear()} Shelter &amp; Seed Initiative ·{' '}
        <a href="mailto:privacy@shelterseed.org" className="underline hover:text-gray-600">
          privacy@shelterseed.org
        </a>
      </footer>

      {/* Tailwind prose plugin fallback styles */}
      <style>{`
        .prose { color: #374151; line-height: 1.75; }
        .prose h1 { font-size: 1.75rem; font-weight: 700; margin-bottom: 0.5rem; color: #111827; }
        .prose h2 { font-size: 1.15rem; font-weight: 600; margin-top: 1.75rem; margin-bottom: 0.5rem; color: #1f2937; }
        .prose p { margin-bottom: 0.875rem; }
        .prose ul, .prose ol { padding-left: 1.5rem; margin-bottom: 0.875rem; }
        .prose li { margin-bottom: 0.25rem; }
        .prose ul li { list-style-type: disc; }
        .prose ol li { list-style-type: decimal; }
        .prose a { color: #2563eb; text-decoration: underline; }
        .prose a:hover { color: #1d4ed8; }
        .prose code { background: #f3f4f6; padding: 0.1em 0.4em; border-radius: 4px; font-size: 0.875em; }
        .prose strong { font-weight: 600; color: #111827; }
        .prose em { font-style: italic; }
      `}</style>
    </div>
  )
}
