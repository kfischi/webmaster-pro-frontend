'use client';

import Link from 'next/link';

export default function BusinessDemo() {
  return (
    <div className="min-h-screen bg-gray-50 rtl">
      {/* Navigation - IMPROVED */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-reverse space-x-4">
              <Link 
                href="/"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
              >
                <span className="mr-2 group-hover:translate-x-1 transition-transform">←</span>
                חזרה לגלריה
              </Link>
              <span className="text-gray-300">|</span>
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">ט</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">טכנולוגיה מתקדמת</div>
                  <div className="text-xs text-gray-500">Enterprise Solutions</div>
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <span className="mr-2">🚀</span>
              התחילו פרויקט
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - SAME AS BEFORE */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              טכנולוגיה מתקדמת בע"ם
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              פתרונות טכנולוגיים מתקדמים ברמה של Silicon Valley
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-all transform hover:scale-105">
                🚀 קבלו הצעת מחיר
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white hover:text-blue-600 transition-all">
                📱 הורידו קטלוג
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - SAME AS BEFORE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">פרויקטים מוצלחים</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">זמינות מערכות</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">תמיכה טכנית</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">מהנדסים מנוסים</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - SAME AS BEFORE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">השירותים שלנו</h2>
            <p className="text-xl text-gray-600">פתרונות טכנולוגיים מתקדמים לכל סוג עסק</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">פיתוח אתרים מתקדמים</h3>
              <p className="text-gray-600 mb-4">אתרים רספונסיביים עם טכנולוגיות החדישות ביותר</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪15,000 - ₪50,000</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  React & Next.js
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  עיצוב רספונסיבי
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  אופטימיזציה לSEO
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">לקוחות: Microsoft, Intel, Check Point</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">אפליקציות מובייל</h3>
              <p className="text-gray-600 mb-4">אפליקציות iOS ו-Android עם חוויית משתמש מעולה</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪25,000 - ₪80,000</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  React Native
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  עיצוב UI/UX
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  פרסום ב-Store
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">לקוחות: Waze, Fiverr, Mobileye</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">פתרונות AI</h3>
              <p className="text-gray-600 mb-4">בינה מלאכותית מתקדמת לאוטומציה של תהליכים</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">₪40,000 - ₪150,000</div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  ChatGPT Integration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  Computer Vision
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 ml-2">✓</span>
                  NLP Processing
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">לקוחות: צה"ל, המוסד, יחידה 8200</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer - SAME AS BEFORE */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">מעוניינים לקבל אתר כזה לעסק שלכם?</h3>
          <p className="text-xl mb-8 opacity-90">
            WebMaster Pro יכולה לבנות לכם אתר מקצועי ומותאם אישית תוך 7 ימי עבודה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
            >
              התחלו עכשיו - ₪2,999
            </Link>
            <Link 
              href="tel:+972501234567"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all"
            >
              📞 התקשרו מיד
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
