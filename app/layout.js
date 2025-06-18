import './globals.css'

export const metadata = {
  title: 'WebMaster Pro - בניית אתרים מקצועית',
  description: 'פלטפורמת בניית אתרים מתקדמת עם בינה מלאכותית',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
